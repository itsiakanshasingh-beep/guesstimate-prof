# EV charging capex on a highway stretch: solver B

**Highway stretch chosen:** NH48 (the old NH8), Delhi (Mahipalpur) to Jaipur, about 270 km.

**Why this stretch:** It is one of India's busiest intercity corridors and the endpoints are well known. It was also among the first corridors named for e-highway and EV charging pilots, and intercity electric buses already run on it. A 270 km run sits inside the real range of most Indian EVs (about 200 to 300 km), so the question of whether a car needs to charge on the way actually matters here.

**Scope:** Both sides of the road (directional sites), counted as new installation capex in 2026. Opex, BESS and solar are excluded unless stated.

---

## CAPEX PER STATION (typical 4-charger highway site, INR)

| Line item | Low | High | Notes |
|---|---|---|---|
| 2 x 60 kW DC (CCS2) | 24 L | 36 L | about 12 to 18 L each |
| 1 x 120 to 150 kW DC | 25 L | 40 L | |
| 1 x AC 22 kW / LEV point for 2W and 3W | 1 L | 3 L | |
| Grid: HT connection, 500 kVA transformer, RMU, cabling, DISCOM charges | 15 L | 40 L | the biggest swing item; it depends on how far the HT line is |
| Civil: canopy, parking bays, trenching, earthing, signage | 10 L | 20 L | |
| Land | 0 | 50 L | a lease or revenue share with a dhaba or fuel outlet is normal; buying 0.1 to 0.25 acre near the highway costs more |
| Other: CMS software, EMS, permits, design, contingency of about 10% | 5 L | 15 L | |
| **Total excluding land** | **~0.8 Cr** | **~1.5 Cr** | central about ₹1 Cr |
| **Total including bought land** | | **~2 Cr** | |

A heavy-vehicle hub for trucks and buses (MW scale, 240 to 360 kW dispensers, 1 to 2 MVA connection) costs about ₹3 to 6 Cr per site.

---

## APPROACH 1: Coverage norm (spacing-driven)

1. **Summary:** Station count comes from the regulatory or design spacing rule, not from demand. That count is then multiplied by the per-station capex.
2. **Method:** None of the three labels fit. This is a coverage or network-design approach: the count follows a minimum spacing policy, not traffic. Starting base: stretch length.
3. **Assumptions:** Stations on both carriageways. Cars and LCVs are served at every site. Trucks and buses are served at dedicated hubs. Chargers are DC fast plus one AC point.
4. **Steps:** Length / spacing per side gives sites per side. Multiply by 2 sides. Add the heavy-vehicle hubs required every ~100 km. Multiply each count by its unit capex and add the two.
5. **Drivers:**
   - Stretch length: 260 to 280 km (a) published by NHAI and MoRTH highway data and visible on any map.
   - Spacing: 25 to 50 km per side (a) Ministry of Power charging infrastructure guidelines (2018, revised in later years) set about 25 km on both sides of highways for light vehicles and about 100 km for long-range or heavy vehicles. The low end is an assumption for a lean rollout.
   - Capex per station: ₹0.6 to 1.5 Cr (b) assumption, built from the breakdown above.
   - Heavy hubs: 0 to 3 sites at ₹3 to 6 Cr each (b) assumption, with the spacing taken from (a).
6. **Calculation:**
   - Central: 270/25 ≈ 11 per side, so 22 stations x ₹1 Cr = ₹22 Cr. Add 3 heavy hubs x ₹4 Cr = ₹12 Cr. **Total ≈ ₹34 Cr.**
   - Low: 50 km spacing, so 6 per side = 12 stations x ₹0.6 Cr = ₹7 Cr, with no heavy hubs. **About ₹7 Cr.**
   - High: 22 x ₹1.5 Cr = ₹33 Cr, plus 3 x ₹6 Cr. **About ₹51 Cr.**
7. **Catches:** Counting fence-posts (11 or 12 per side). Forgetting that a divided highway needs sites on both sides (U-turns are scarce on NH48). Endpoints: urban Delhi and Jaipur already have chargers, so the first and last sites may be unnecessary.
8. **Sanity check:** ₹34 Cr / 270 km ≈ ₹12 to 13 L per km. That is small next to highway construction cost (₹15 to 30 Cr per km), which feels proportionate for an add-on service.
9. **Common mistakes:** Assuming one side only. Using the national density of fuel outlets instead of a charging norm. Applying an urban AC charger price to highway DC fast charging.

---

## APPROACH 2: Demand over supply (traffic funnel to charger count)

1. **Summary:** Estimate daily EV charging sessions on the stretch, divide by what one charger handles at a viable utilisation, then convert to capex.
2. **Method:** Demand-over-supply. Starting base: daily traffic on the corridor.
3. **Assumptions:** Through traffic only, since Gurugram commuter flows would inflate the count. Cars, e-buses and a few e-LCVs are included. Two-wheelers are excluded because they rarely do 270 km intercity runs. Design is for a peak (weekend) day.
4. **Steps:** Daily vehicles, then the car share, then the EV share, then the share needing a charge en route, which gives car sessions. Add bus sessions. Apply a peak factor. Divide by sessions per charger per day to get DC chargers. Multiply chargers by the fully loaded capex per charger.
5. **Drivers:**
   - Through traffic: 40k to 80k vehicles/day, both directions (a) NHAI toll plaza counts and traffic census figures, published through toll data and project reports (Shahjahanpur and Manoharpur plazas).
   - Car share of traffic: 40 to 60% (b) assumption.
   - EV share of highway cars: 0.5 to 2% (b) assumption. The EV share of new car sales (about 2 to 4% by 2025 and 2026) is (a) from VAHAN dashboard data, but the share of cars on the road is lower and highway EV use lower still.
   - Share charging en route: 30 to 60% (b) assumption that depends on range.
   - E-buses: 30 to 100 trips/day, 50% charging opportunistically en route (b) assumption.
   - Session length: 30 to 45 min (b) assumption.
   - Charger utilisation: 15 to 25% (b) assumption. Industry commentary says highway DC sites break even at roughly 15 to 20%.
   - Peak factor: 1.3 to 2.0 (b) assumption.
   - Loaded capex per DC charger: ₹20 to 35 L (b) assumption: the station total divided by about 3 DC units.
6. **Calculation (central):**
   - 60k x 50% = 30k cars. 30k x 1% = 300 EVs. 300 x 50% = 150 sessions.
   - Buses: 60 x 50% = 30 sessions. Total 180 sessions.
   - Peak factor 1.5 gives 270 sessions per day.
   - Per charger: 24 h x 20% = 4.8 h, divided by 0.6 h per session ≈ 8 sessions per day.
   - Chargers: 270/8 ≈ 34 DC chargers, about 11 to 12 sites.
   - 34 x ₹28 L ≈ **₹9.5 Cr.**
   - Low: 40k x 40% x 0.5% x 30% ≈ 24 car sessions, plus 15 bus sessions, x 1.3 ≈ 50. At 10 sessions per charger that is 5 chargers, which is below coverage needs. Apply a minimum of 6 sites (₹0.6 Cr each, about 18 chargers), so about ₹4 to 5 Cr.
   - High: 80k x 60% x 2% x 60% ≈ 580 sessions, plus 50 bus sessions, x 2 ≈ 1,260. Divide by 6 per charger ≈ 210 chargers x ₹35 L ≈ ₹70 Cr.
7. **Catches:** Today's demand gives fewer chargers than the coverage norm, so a pure demand answer leaves 40 to 50 km gaps that no one would accept. Range anxiety means stations must exist before demand does. Peak demand on holidays is high and drives queueing. Charging demand for buses and trucks dominates in kWh even though their trip counts are small.
8. **Sanity check:** At 34 chargers x 8 sessions x 30 kWh ≈ 8 MWh per day, the corridor draws roughly the electricity of a few thousand homes. That is plausible for 11 sites with 500 kVA each.
9. **Common mistakes:** Using total AADT including commuter traffic. Applying the EV share of new sales to the vehicles on the road. Assuming 100% utilisation. Ignoring the direction split. Treating every EV as needing a charge on a trip shorter than its range.

---

## APPROACH 3: Brownfield fuel-outlet conversion (asset-based)

1. **Summary:** Count the existing fuel outlets on the stretch, assume the company partners with a share of them, and price those as cheaper brownfield sites.
2. **Method:** Supply-side. Starting base: existing roadside assets (fuel outlets and dhabas) and their capacity to host chargers.
3. **Assumptions:** The company partners with OMCs (IOCL, BPCL, HPCL) or private outlets. No land is bought. The outlet may already have an LT or HT connection that needs only an upgrade. Two DC chargers per site plus one AC point.
4. **Steps:** Outlets per km multiplied by length gives the total. Multiply by the partner share to get sites. Multiply sites by brownfield capex.
5. **Drivers:**
   - Outlet density: one every 2 to 5 km per side (a) OMC outlet locators and PPAC retail outlet statistics (updated every year). The exact corridor count would need a map check.
   - Partner share: 10 to 25% (b) assumption. OMCs have publicly announced targets to add EV chargers at a large share of outlets (a), but which outlets lie on this stretch is unknown.
   - Brownfield capex per site: ₹0.5 to 0.8 Cr (b) assumption. Grid costs drop to ₹8 to 20 L and civil costs to ₹5 to 10 L.
6. **Calculation:**
   - Central: 270 km x 2 sides / 3.5 km ≈ 150 outlets. 150 x 15% ≈ 22 sites x ₹0.65 Cr ≈ **₹14 Cr.**
   - Low: 270 x 2 / 5 ≈ 108 outlets x 10% ≈ 11 sites x ₹0.5 Cr ≈ ₹5.5 Cr.
   - High: 270 km x 2 sides / 2 km = 270 outlets x 25% ≈ 68 sites x ₹0.8 Cr ≈ ₹54 Cr. That density is well above the coverage need, which makes this a fuel-outlet partnership play rather than a corridor plan.
7. **Catches:** Outlet density drops sharply in rural sections. Grid capacity at a fuel outlet is often LT and too small for a 120 kW charger. Revenue-share leases turn capex into opex. Safety distance norms between dispensers and chargers apply (PESO).
8. **Sanity check:** 22 sites happens to match Approach 1, but the per-site cost is about 35% lower. That gap is the value of brownfield sites.
9. **Common mistakes:** Assuming every outlet hosts chargers. Pricing brownfield sites as greenfield. Forgetting that partners often pay part of the capex.

**Cross-check I did not count as a separate approach:** A top-down pro-rata of a national programme (e.g. the FAME II highway charger sanctions or the PM E-DRIVE charger allocation) divided by highway km. It folds back into Approach 1's spacing norm, and its budgets mix slow and fast chargers, so it is a check, not a method.

---

## THINGS I NEEDED TO RECORD THAT DON'T FIT THE HEADINGS ABOVE

- **Grading across chosen stretches:** Normalise to capex per km of corridor (both sides). Reasonable bands are:
  - lean rollout: ₹2 to 5 L per km
  - coverage-norm car network: ₹7 to 15 L per km
  - including heavy-vehicle hubs: ₹12 to 20 L per km

  An answer far above ₹30 L per km (excluding catenary) or below ₹1 L per km should be probed. Also check whether the chosen length really is a "limited stretch" (100 to 500 km is sensible; a 1,400 km Golden Quadrilateral leg is not limited).
- **Stretch choice as a scored element:** Reward a justification tied to demand (traffic, intercity EV bus routes, a range-relevant length), not just familiarity. Delhi to Jaipur, Mumbai to Pune (about 150 km, Expressway), Bengaluru to Mysuru (about 120 km) and Delhi to Agra (Yamuna Expressway, about 165 km) are all defensible.
- **Wording ambiguities a candidate should raise:**
  - "Charging stations" could mean sites or charger units.
  - "Capex" may or may not include land and grid upgrades paid for by the DISCOM.
  - Which vehicles are in scope: cars only, or trucks and buses too.
  - The year (2026 demand versus a 2030 design).
  - One side or both.
  - "EV company": an OEM building for its own customers (as Tata does with partners) designs smaller sites than a neutral charge point operator.
- **Trap: e-highway confusion:** Overhead catenary for trucks costs roughly ₹10 to 20 Cr per km. That is a different scope, and a candidate who mixes it in will be off by two orders of magnitude.
- **Which approach is most defensible:** Approach 1 (coverage) sets the floor because stations must come before demand. Approach 2 tests whether that floor is oversized and shows when to add capacity. The strongest answer is the larger of the coverage count and the demand count. Approach 3 is a cost-reduction lever, not an independent sizing method.
- **Domain knowledge expected:**
  - CCS2 and the standard charger power classes.
  - The per-unit cost order: DC charger costs are 10 times or more those of AC.
  - Grid connection as the swing cost.
  - The 25 km and 100 km MoP spacing rule (bonus, not required).
  - Utilisation economics (15 to 25%).
  - Real-world EV range in Indian conditions.
- **Overall reasonable answer band for Delhi to Jaipur:** ₹10 to 50 Cr, central about ₹20 to 35 Cr. Order of magnitude is what matters: ₹1 Cr or ₹500 Cr fails.
- **Bonus signals:** Phasing (build to the coverage norm now, then add chargers as utilisation passes about 20%). Splitting capex between the company and partners or subsidy. Mentioning BESS to avoid expensive HT upgrades. Treating the direction split and holiday peaks separately.

**Memory note:** Nothing new about the user needs saving.
