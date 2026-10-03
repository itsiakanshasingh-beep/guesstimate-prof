# EV charging capex on a highway stretch: solver A

**Stretch chosen:** NH-48, Delhi (Rajokri border, Gurugram) to Jaipur, about 270 km.
**Why this stretch:** it is one of India's busiest intercity corridors, EV trips are realistic over this distance, it has a mix of dense and rural sections, and some charging already exists there, which lets you sanity-check the answer. Every figure below is in Indian rupees. 1 crore (cr) = 100 lakh.

---

**CAPEX PER STATION, BY LINE ITEM**

The reference station has 4 DC fast chargers (two at 60 kW, two at 120 kW) and 2 AC chargers at 22 kW.

| Line item | Low | High | Notes |
|---|---|---|---|
| Chargers | ₹60 L | ₹1.2 cr | DC 60 kW ₹12 to 20 L each; DC 120 kW ₹25 to 40 L each; AC 22 kW ₹1 to 2 L each |
| Grid connection and transformer | ₹15 L | ₹60 L | 500 kVA to 1 MVA transformer ₹10 to 25 L; HT line extension in rural areas adds ₹5 to 35 L depending on distance to the substation |
| Civil works | ₹15 L | ₹35 L | Canopy, parking bays, foundations, cabling, signage |
| Land | ₹0 | ₹1 cr | Near zero under revenue share with a fuel station or dhaba host; up to ₹1 cr if 0.25 to 0.5 acre is bought near Gurugram |
| Other | ₹5 L | ₹15 L | Charging software, energy management, CCTV, permits, washroom |
| **Total, excluding bought land** | **₹1.0 cr** | **₹2.3 cr** | Central ₹1.5 cr |
| Heavy-vehicle station | ₹3 cr | ₹6 cr | 240 to 360 kW for trucks and buses |

---

**APPROACH A: COVERAGE RULE (spacing)**

1. **Summary:** The number of sites comes from a mandated or practical spacing between stations, not from demand.
2. **Method label:** none. This is a coverage or regulatory rule, neither demand nor capacity. Starting base: highway length.
3. **Assumptions:** stations on both carriageways; mainly cars plus a few heavy-vehicle sites; capex is a one-time build; DC fast charging.
4. **Steps:**
   1. Length ÷ spacing gives sites per side.
   2. Multiply by 2 for both carriageways.
   3. Add heavy-vehicle sites at wider spacing.
   4. Multiply by capex per station.
5. **Drivers:**
   - Spacing: 25 to 50 km. Publicly documented: Ministry of Power charging infrastructure guidelines (2018, revised in later years) recommend one station every 25 km on both sides of highways and one heavy-vehicle station every 100 km.
   - Heavy-vehicle sites: 0 to 3. Same Ministry of Power guidelines.
   - Capex per station: ₹1.0 to 2.5 cr. Assumption, informed by charger price lists.
   - Cross-check on vehicle range: real highway range is about 200 to 250 km, and drivers charge between 20% and 80%, so a 50 km gap is the outer limit that still feels safe. Assumption.
6. **Calculation:**
   - Central: 270 ÷ 25 ≈ 11 sites per side, so 22 stations. 22 × ₹1.5 cr = ₹33 cr. Add 3 heavy-vehicle sites × ₹4 cr = ₹12 cr. **Total about ₹45 cr.**
   - Low: one shared site every 50 km, about 6 sites × ₹1.0 cr = ₹6 cr.
   - High: 22 × ₹2.5 cr + 3 × ₹6 cr = ₹73 cr.
7. **Catches:** guidelines are recommendations, not a business case. Sites on a divided highway serve one direction only.
8. **Sanity check:** ₹45 cr ÷ 270 km ≈ ₹17 L/km, in line with a full coverage build.
9. **Common mistakes:** counting one side only; treating the guideline as minimum demand; forgetting heavy-vehicle sites.

---

**APPROACH B: TRAFFIC FUNNEL TO CHARGER COUNT**

1. **Summary:** Estimate daily charging sessions from traffic, size chargers for peak demand, then cost them.
2. **Method label:** demand-over-supply. Starting base: average annual daily traffic (AADT) on the stretch.
3. **Assumptions:** design horizon of 5 years from 2026; cars plus intercity e-buses; two-wheelers excluded because few ride intercity and highway access is limited; DC 60 to 120 kW chargers.
4. **Steps:**
   1. AADT × car share × EV share of cars on the road gives EV cars per day.
   2. Multiply by the share that charges on this stretch to get sessions per day.
   3. Add e-bus sessions.
   4. Apply growth to the design year.
   5. Convert to peak-hour sessions: daily × weekend factor × peak-hour share.
   6. Divide by sessions per charger per hour.
   7. Multiply chargers by fully loaded capex per charger.
5. **Drivers:**
   - AADT: 35,000 to 80,000 vehicles/day. Publicly documented: NHAI or MoRTH traffic counts and toll-plaza transaction data.
   - Car share of traffic: 40% to 55%. Documented: traffic surveys.
   - EV share of cars on the road: 1% to 4%. Documented as the national stock share (VAHAN registration data); the highway figure is an assumption.
   - Share that charges on this stretch: 20% to 60%. Assumption.
   - Growth to the design year: 2x to 4x. Assumption.
   - Peak-hour share of daily sessions: 8% to 12%. Documented: traffic engineering norms (IRC).
   - Sessions per charger per peak hour: 1.3 to 2. Assumption, based on 30 to 40 minute sessions.
   - Fully loaded capex per charger: ₹20 to 60 L. Assumption.
6. **Calculation:**
   - Central: 50,000 × 0.45 × 0.02 × 0.4 = 180 sessions/day. Add 20 for buses: 200. Times 3 for growth: 600. Peak hour: 600 × 1.5 × 0.10 = 90 sessions/hour. 90 ÷ 1.6 ≈ 56 chargers. 56 × ₹35 L ≈ **₹20 cr.**
   - Low: current demand only, about 19 chargers × ₹20 L ≈ ₹4 cr.
   - High: about 110 chargers × ₹60 L ≈ ₹66 cr.
7. **Catches:** current demand is so small that the count comes out below what coverage needs. In the early years coverage is the binding constraint and demand only takes over later. Ask whether the client means "today" or "5-year design".
8. **Sanity check:** 56 chargers spread over 22 sites is about 2.5 per site, which is plausible.
9. **Common mistakes:**
   - Using EV sales share (around 2.5% to 4%) where stock share (around 1%) is the right figure.
   - Sizing for the daily average instead of the peak.
   - Assuming every EV charges.

---

**APPROACH C: HOST-SITE INVENTORY**

1. **Summary:** Count the existing fuel stations and food plazas along the stretch, estimate the share that will host chargers, and cost a lighter retrofit.
2. **Method label:** supply-side. Starting base: existing roadside assets.
3. **Assumptions:** the operator partners with oil companies or dhabas; land comes on revenue share; the existing LT or HT supply is partly reused; about 2 DC chargers per site.
4. **Steps:**
   1. Count host sites per side per km.
   2. Apply the hosting share.
   3. Multiply by retrofit capex per site.
5. **Drivers:**
   - Fuel stations: one every 3 to 8 km per side. Documented as outlet counts in oil company annual reports, but this stretch is an assumption.
   - Share hosting chargers: 15% to 35%. Assumption; oil companies have publicly announced EV-charger rollout targets.
   - Retrofit capex per site: ₹40 L to 1.0 cr. Assumption.
6. **Calculation:**
   - Central: about 100 hosts × 25% = 25 sites × ₹60 L = **₹15 cr.**
   - Low: 15 × ₹40 L = ₹6 cr.
   - High: 40 × ₹1.0 cr = ₹40 cr.
7. **Catches:**
   - Hosts cluster near towns, which leaves gaps in between.
   - The existing electricity connection often cannot carry 120 kW or more.
   - Oil companies may build the chargers themselves, leaving no room for a third party.
8. **Sanity check:** 25 sites ≈ one every 22 km of road (counting both sides), close to Approach A.
9. **Common mistakes:**
   - Assuming free grid capacity.
   - Assuming every pump is suitable.
   - Leaving out the land revenue share, which is opex, so it should be noted rather than dropped.

---

**APPROACH D: INSTALLED-POWER DENSITY BENCHMARK**

1. **Summary:** Borrow a kW-per-km density from a mature corridor rule, scale it to Indian adoption, and multiply by all-in capex per kW.
2. **Method label:** none. This is an analogy or benchmark. Starting base: power density from regulation in another market.
3. **Assumptions:** DC power only; a car-focused corridor; capex per kW includes installation.
4. **Steps:**
   1. Pick a reference density.
   2. Scale it down for India.
   3. Length × density gives total kW.
   4. Multiply by ₹/kW.
5. **Drivers:**
   - Reference density: about 20 kW/km. Documented: the EU AFIR regulation (2023) requires charging pools every 60 km per direction on the core network, with 400 kW, rising to 600 kW, per pool. 600 kW ÷ 60 km × 2 directions ≈ 20 kW/km.
   - India scaling: 0.4 to 1.5x the EU figure. Assumption.
   - All-in capex: ₹25,000 to 50,000 per kW. Assumption, informed by charger prices.
6. **Calculation:**
   - Central: 270 × 15 kW/km ≈ 4 MW × ₹35,000/kW ≈ **₹14 cr.**
   - Low: 270 × 8 × ₹25,000 ≈ ₹5.4 cr.
   - High: 270 × 30 × ₹50,000 ≈ ₹40 cr.
7. **Catches:** EV adoption in the EU is far higher, so the scaling factor carries the answer. kW does not map neatly onto sites.
8. **Sanity check:** 4 MW ÷ 22 sites ≈ 180 kW per site, close to the reference station.
9. **Common mistakes:** copying EU density unscaled; costing hardware per kW and forgetting installation.

---

**CONVERGENCE**

Central estimates: A ₹45 cr, B ₹20 cr, C ₹15 cr, D ₹14 cr. Together these give **₹15 to 45 cr, or about ₹5 to 17 L per km.** Approach A sits at the top because it builds full coverage for low demand.

---

**THINGS I NEEDED TO RECORD THAT DON'T FIT THE HEADINGS ABOVE**

- **Normalise per km.** The candidate picks the stretch, so grade capex per km and per station, not the total. Ask the candidate to state the length.
- **Answer bands per km:**
  - Defensible: ₹3 to 25 L/km.
  - Strong: ₹5 to 18 L/km, with the stretch named.
  - Flag: below ₹1 L/km (chargers only, one side) or above ₹1 cr/km (land bought at every site, or a truck-heavy build with no reasoning).
- **Per-station band:** ₹0.8 to 2.5 cr for cars; ₹3 to 6 cr for heavy vehicles. Answers outside these need a stated reason.
- **Ambiguous wording to resolve:**
  - "Charging stations" can mean sites or charger points.
  - "Capex" may or may not include land; leased land is opex.
  - The time horizon can be today or a design year.
  - Vehicle scope: cars, buses, trucks.
  - One side of the road or both.
  - "Limited distance" is undefined. Credit candidates who pick 100 to 500 km and say why.
- **Stretch choice:** credit choices that justify traffic and trip length (Delhi to Jaipur, Mumbai to Pune, Bengaluru to Mysuru). Penalise choosing a stretch and never using its features. The Mumbai to Pune Expressway is not technically an NH, so candidates who pick it should note that.
- **Domain knowledge expected:**
  - DC versus AC charging.
  - Typical charger prices.
  - The grid connection as the hidden cost.
  - Revenue-share land models.
  - Coverage spacing norms.
  - The EV stock share being very low.
  - Lakh and crore arithmetic.
- **Most defensible structure:** a coverage-based site count (A) cross-checked against a demand-based charger count (B), with the candidate explaining which one binds and when. Approach C is a good practical refinement. Approach D is a useful sanity check but weak as the only method.
- **Hidden insight for a top score:** the candidate notices that demand today is far below what coverage needs. Capex is therefore set by the coverage policy now and by demand growth later, which suggests phasing: a minimal grid-ready build first, adding chargers over time.
- **Unit traps:**
  - kW versus kVA.
  - Mixing per-charger and per-site costs.
  - Lakh/crore slips: a 10x error is common.
- **Common rubric points:**
  - States assumptions before calculating.
  - Gives both components (count and unit cost).
  - Gives a range, not just a point estimate.
  - Sanity-checks against a second method.
