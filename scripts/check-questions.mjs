// Checks every question file against docs/reference/question-format.md.
//
//   node scripts/check-questions.mjs              check every file in questions/
//   node scripts/check-questions.mjs FILE...      check the files named
//   node scripts/check-questions.mjs --self-test  prove the check passes good files and rejects broken ones
//
// Exits with code 1 if any file fails.

import { readFileSync, readdirSync } from 'node:fs';
import { basename, join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const QUESTIONS_DIR = join(ROOT, 'questions');
const FIXTURES_DIR = join(ROOT, 'tests', 'fixtures');

const STATUSES = ['draft', 'ready', 'needs-rewrite', 'parked', 'rejected', 'retired'];
const ROLES = ['main', 'cross-check', 'ceiling', 'floor'];
const LEVELS = ['easy', 'medium', 'hard'];
const BASES = ['documented', 'assumption'];
const ID_PATTERN = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const MONTH_PATTERN = /^\d{4}-\d{2}$/;
const DAY_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

// The difficulty rule from docs/reference/archetypes.md.
// "Long build" means 4 or more filters.
export function difficultyLevel(filters, branches, catchCount) {
  if (catchCount >= 2 || (filters >= 4 && catchCount >= 1)) return 'hard';
  if (filters >= 4 || branches > 1 || catchCount === 1) return 'medium';
  return 'easy';
}

export function checkQuestion(q, fileName) {
  const errors = [];
  const fail = (msg) => errors.push(msg);

  const isObject = (v) => v !== null && typeof v === 'object' && !Array.isArray(v);
  const isText = (v) => typeof v === 'string' && v.trim() !== '';
  const isNumber = (v) => typeof v === 'number' && Number.isFinite(v);
  const hasValue = (obj, key) => obj[key] !== undefined && obj[key] !== null;

  function need(obj, key, where, test, kind) {
    if (!hasValue(obj, key)) {
      fail(`missing required field: ${where}${key}`);
      return false;
    }
    if (test && !test(obj[key])) {
      fail(`${where}${key} must be ${kind}`);
      return false;
    }
    return true;
  }

  if (!isObject(q)) {
    fail('the file must hold one JSON object');
    return errors;
  }

  // Question level
  if (need(q, 'format_version', '', isNumber, 'a number') && q.format_version !== 1) {
    fail('format_version must be 1');
  }
  if (need(q, 'id', '', isText, 'text')) {
    if (!ID_PATTERN.test(q.id)) fail('id must be lower case words joined by hyphens');
    if (fileName && basename(fileName, '.json') !== q.id) fail(`id "${q.id}" must match the file name`);
  }
  need(q, 'question', '', isText, 'text');

  if (need(q, 'status', '', isText, 'text')) {
    if (!STATUSES.includes(q.status)) fail(`status must be one of: ${STATUSES.join(', ')}`);
    if (!['draft', 'ready'].includes(q.status) && !isText(q.status_reason)) {
      fail(`status "${q.status}" needs a status_reason`);
    }
  }

  if (need(q, 'answer', '', isObject, 'an object')) {
    need(q.answer, 'counts', 'answer.', isText, 'text');
    need(q.answer, 'unit', 'answer.', isText, 'text');
    if (hasValue(q.answer, 'alternatives')) {
      if (!Array.isArray(q.answer.alternatives)) fail('answer.alternatives must be a list');
      else q.answer.alternatives.forEach((alt, i) => {
        const where = `answer.alternatives[${i}].`;
        need(alt, 'definition', where, isText, 'text');
        need(alt, 'conversion', where, isText, 'text');
        need(alt, 'accepted', where, (v) => typeof v === 'boolean', 'true or false');
      });
    }
  }

  if (need(q, 'scope', '', isObject, 'an object')) {
    need(q.scope, 'assumptions', 'scope.', (v) => Array.isArray(v) && v.length > 0 && v.every(isText), 'a list of text with at least one item');
  }

  if (need(q, 'reference_date', '', isText, 'text') && !MONTH_PATTERN.test(q.reference_date)) {
    fail('reference_date must be written YYYY-MM');
  }

  const isRange = (v) => isObject(v) && isNumber(v.low) && isNumber(v.high) && v.low <= v.high;
  if (need(q, 'bands', '', isObject, 'an object')) {
    const goodOk = need(q.bands, 'good', 'bands.', isRange, 'an object with low and high, low not above high');
    const accOk = need(q.bands, 'acceptable', 'bands.', isRange, 'an object with low and high, low not above high');
    if (goodOk && accOk && (q.bands.good.low < q.bands.acceptable.low || q.bands.good.high > q.bands.acceptable.high)) {
      fail('bands.acceptable must contain bands.good');
    }
  }

  if (hasValue(q, 'real_figure')) {
    const rf = q.real_figure;
    if (!isObject(rf)) fail('real_figure must be an object or null');
    else {
      need(rf, 'value', 'real_figure.', isNumber, 'a number');
      need(rf, 'source', 'real_figure.', isText, 'text');
      if (need(rf, 'date', 'real_figure.', isText, 'text') && !MONTH_PATTERN.test(rf.date)) {
        fail('real_figure.date must be written YYYY-MM');
      }
      if (isNumber(rf.value) && isObject(q.bands) && isRange(q.bands.acceptable)
          && (rf.value < q.bands.acceptable.low || rf.value > q.bands.acceptable.high)) {
        fail('real_figure.value falls outside bands.acceptable, so the bands need another look');
      }
    }
  }

  if (need(q, 'provenance', '', isObject, 'an object')) {
    const p = q.provenance;
    need(p, 'origin', 'provenance.', isText, 'text');
    need(p, 'written_by', 'provenance.', isText, 'text');
    if (q.status === 'ready') {
      need(p, 'reviewed_by', 'provenance.', isText, 'text');
      if (need(p, 'reviewed_on', 'provenance.', isText, 'text') && !DAY_PATTERN.test(p.reviewed_on)) {
        fail('provenance.reviewed_on must be written YYYY-MM-DD');
      }
    }
  }

  // Figures
  const figureKeys = new Set();
  if (need(q, 'figures', '', isObject, 'an object (it may be empty)')) {
    for (const [key, f] of Object.entries(q.figures)) {
      figureKeys.add(key);
      const where = `figures.${key}.`;
      if (!isObject(f)) { fail(`${where.slice(0, -1)} must be an object`); continue; }
      need(f, 'assumption_only', where, (v) => typeof v === 'boolean', 'true or false');
      need(f, 'value', where, isNumber, 'a number');
      need(f, 'unit', where, isText, 'text');
      if (f.assumption_only === false) {
        need(f, 'source', where, isText, 'text');
        if (need(f, 'date', where, isText, 'text') && !MONTH_PATTERN.test(f.date)) fail(`${where}date must be written YYYY-MM`);
        need(f, 'update_cadence', where, isText, 'text');
        need(f, 'auto_checkable', where, (v) => typeof v === 'boolean', 'true or false');
        need(f, 'fallback', where, isNumber, 'a number');
      }
    }
  }

  // Paths
  const pathIds = new Set();
  if (need(q, 'paths', '', (v) => Array.isArray(v) && v.length > 0, 'a list with at least one path')) {
    q.paths.forEach((path, i) => {
      const where = `paths[${i}].`;
      if (!isObject(path)) { fail(`paths[${i}] must be an object`); return; }
      if (need(path, 'id', where, isText, 'text')) {
        if (pathIds.has(path.id)) fail(`path id "${path.id}" is used twice`);
        pathIds.add(path.id);
      }
      need(path, 'name', where, isText, 'text');
      if (need(path, 'role', where, isText, 'text') && !ROLES.includes(path.role)) {
        fail(`${where}role must be one of: ${ROLES.join(', ')}`);
      }
      // Archetypes are not a fixed list in code: any label is accepted, and "none" needs a reason.
      if (need(path, 'archetype', where, isText, 'text') && path.archetype === 'none') {
        need(path, 'no_archetype_reason', where, isText, 'text');
      }
      need(path, 'base', where, isText, 'text');
      need(path, 'steps', where, (v) => Array.isArray(v) && v.length > 0 && v.every(isText), 'a list of text with at least one step');
      need(path, 'model_solution', where, isText, 'text');
      need(path, 'central_estimate', where, isNumber, 'a number');
      need(path, 'catches', where, (v) => Array.isArray(v) && v.every(isText), 'a list of text (it may be empty)');
      need(path, 'common_mistakes', where, (v) => Array.isArray(v) && v.every(isText), 'a list of text (it may be empty)');
      need(path, 'sanity_check', where, isText, 'text');

      if (need(path, 'drivers', where, (v) => Array.isArray(v) && v.length > 0, 'a list with at least one driver')) {
        path.drivers.forEach((d, j) => {
          const dw = `${where}drivers[${j}].`;
          if (!isObject(d)) { fail(`${dw.slice(0, -1)} must be an object`); return; }
          need(d, 'name', dw, isText, 'text');
          const lowOk = need(d, 'low', dw, isNumber, 'a number');
          const highOk = need(d, 'high', dw, isNumber, 'a number');
          if (lowOk && highOk && d.low > d.high) fail(`${dw}low must not be above high`);
          need(d, 'unit', dw, isText, 'text');
          if (need(d, 'basis', dw, isText, 'text')) {
            if (!BASES.includes(d.basis)) fail(`${dw}basis must be documented or assumption`);
            if (d.basis === 'documented' && need(d, 'figure', dw, isText, 'text') && !figureKeys.has(d.figure)) {
              fail(`${dw}figure "${d.figure}" is not in figures`);
            }
          }
        });
      }
    });
    if (!q.paths.some((p) => isObject(p) && p.role === 'main')) fail('at least one path must have role "main"');
  }

  // Difficulty
  if (need(q, 'difficulty', '', isObject, 'an object')) {
    const d = q.difficulty;
    const levelOk = need(d, 'level', 'difficulty.', (v) => LEVELS.includes(v), `one of: ${LEVELS.join(', ')}`);
    const fOk = need(d, 'filters', 'difficulty.', (v) => Number.isInteger(v) && v >= 0, 'a whole number');
    const bOk = need(d, 'branches', 'difficulty.', (v) => Number.isInteger(v) && v >= 1, 'a whole number of at least 1');
    const cOk = need(d, 'catches', 'difficulty.', (v) => Array.isArray(v) && v.every(isText), 'a list of text');
    if (need(d, 'counted_from_path', 'difficulty.', isText, 'text') && !pathIds.has(d.counted_from_path)) {
      fail(`difficulty.counted_from_path "${d.counted_from_path}" is not a path id`);
    }
    if (levelOk && fOk && bOk && cOk) {
      const expected = difficultyLevel(d.filters, d.branches, d.catches.length);
      if (expected !== d.level) fail(`difficulty.level is "${d.level}" but the rule gives "${expected}" from these counts`);
    }
  }

  return errors;
}

function checkFile(path) {
  let data;
  try {
    data = JSON.parse(readFileSync(path, 'utf8'));
  } catch (e) {
    return [`not valid JSON: ${e.message}`];
  }
  return checkQuestion(data, path);
}

function jsonFilesIn(dir) {
  try {
    return readdirSync(dir).filter((f) => f.endsWith('.json')).sort().map((f) => join(dir, f));
  } catch {
    return [];
  }
}

function report(files) {
  let failed = 0;
  for (const file of files) {
    const errors = checkFile(file);
    if (errors.length === 0) {
      console.log(`PASS  ${basename(file)}`);
    } else {
      failed++;
      console.log(`FAIL  ${basename(file)}`);
      errors.forEach((e) => console.log(`        - ${e}`));
    }
  }
  console.log(`\n${files.length - failed} of ${files.length} passed.`);
  return failed;
}

// Each broken fixture names the error it must produce in its "_expect_error" field.
function selfTest() {
  let problems = 0;
  for (const file of jsonFilesIn(QUESTIONS_DIR)) {
    const errors = checkFile(file);
    if (errors.length) { problems++; console.log(`FAIL  ${basename(file)} should pass but did not: ${errors[0]}`); }
    else console.log(`PASS  ${basename(file)} is accepted`);
  }
  for (const file of jsonFilesIn(FIXTURES_DIR)) {
    const data = JSON.parse(readFileSync(file, 'utf8'));
    const expected = data._expect_error;
    const errors = checkQuestion(data, null);
    if (errors.some((e) => e.includes(expected))) console.log(`PASS  ${basename(file)} is rejected: ${expected}`);
    else { problems++; console.log(`FAIL  ${basename(file)} should be rejected with "${expected}" but got: ${errors.join('; ') || 'no errors'}`); }
  }
  console.log(problems ? `\nSelf-test failed: ${problems} problem(s).` : '\nSelf-test passed.');
  return problems;
}

const args = process.argv.slice(2);
if (args[0] === '--self-test') {
  process.exit(selfTest() ? 1 : 0);
} else {
  const files = args.length ? args : jsonFilesIn(QUESTIONS_DIR);
  if (files.length === 0) { console.log('No question files found.'); process.exit(0); }
  process.exit(report(files) ? 1 : 0);
}
