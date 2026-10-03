// One hard-coded sample question (#26). The question bank in data/ replaces this later.
const sampleQuestion = {
  id: 'swiggy-drivers-mumbai',
  text: 'Estimate the number of Swiggy drivers in Mumbai',
  difficulty: 'hard',
};

function showQuestion(question) {
  const label = question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1);
  document.getElementById('question-difficulty-label').textContent = label;
  document.getElementById('question-text').textContent = question.text;
}

showQuestion(sampleQuestion);
