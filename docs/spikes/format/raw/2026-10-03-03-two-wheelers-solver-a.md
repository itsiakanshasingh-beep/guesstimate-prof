# Two-wheelers sold in India per year: solver A

**Question:** How many two-wheelers are sold in India in a year?

---

## Approach 1: Fleet stock-and-flow from households

1. **Summary:** Estimate how many two-wheelers are on the road. New sales are the bikes that replace scrapped ones plus the bikes that grow the fleet.
2. **Method and base:** Demand-side (funnel). Starts from Indian households.
3. **Assumptions:** New domestic sales only, so used-vehicle resale and exports are out. Covers scooters, motorcycles, mopeds and electric two-wheelers. Annual flow.
4. **Steps:**
   1. Households × share owning a two-wheeler × two-wheelers per owning household gives the active fleet.
   2. Fleet ÷ average life gives replacement demand.
   3. Fleet × net growth rate gives new additions.
   4. Replacement plus additions gives annual sales.
5. **Drivers:**
   - Households: 280M to 320M. Documented (Census, NFHS rounds, last full Census 2011, NFHS-5 2019-21).
   - Ownership penetration: 45% to 60%. Documented (NFHS-5 asset ownership, roughly half of households).
   - Two-wheelers per owning household: 1.1 to 1.4. Assumption.
   - Average scrappage life: 10 to 15 years. Assumption.
   - Net fleet growth: 1.5% to 4% a year. Assumption.
6. **Calculation:**
   - Central: 300M × 50% × 1.3 = 195M fleet. 195M ÷ 12 = 16.3M replacements. 195M × 2.5% = 4.9M additions. Total about **21M**.
   - Low: 139M ÷ 15 + 2.1M = about 11M.
   - High: 269M ÷ 10 + 10.8M = about 38M.
7. **Catches:**
   - Registered vehicle counts (Vahan, MoRTH) overstate the active fleet because scrapped bikes are rarely deregistered.
   - Ownership and replacement life are a stock-vs-flow pair. A small error in life swings the answer a lot.
8. **Sanity check:** Implied sales ÷ fleet should be about 8 to 11%. Implied sales per 1,000 people should be about 13 to 15.
9. **Common mistakes:**
   - Using the registered stock of about 250M or more as the active fleet.
   - Forgetting fleet growth.
   - Counting used-vehicle transactions as sales.
   - Applying penetration to population instead of households.

## Approach 2: Industry production capacity

1. **Summary:** Installed manufacturing capacity × utilisation, minus exports.
2. **Method and base:** Supply-side (capacity). Starts from the OEM plant base.
3. **Assumptions:**
   - Sales means domestic wholesale dispatches from factory to dealer.
   - Electric two-wheelers are included.
   - Financial year, April to March.
4. **Steps:**
   1. Estimate total installed capacity across OEMs. The big names are Hero, Honda, TVS, Bajaj, Suzuki, Royal Enfield, Yamaha and the EV makers.
   2. Apply utilisation.
   3. Subtract the export share.
5. **Drivers:**
   - Installed capacity: 25M to 35M units a year. Partly documented (OEM annual reports and investor decks state plant capacities, each year). Summing them is an assumption.
   - Utilisation: 60% to 80%. Assumption.
   - Export share of production: 15% to 20%. Documented (SIAM monthly and annual export data).
6. **Calculation:**
   - Central: 30M × 70% = 21M produced. Minus 17% exports gives about **17.5M**.
   - Low: 25M × 60% × 0.80 = 12M.
   - High: 35M × 80% × 0.85 = 24M.
7. **Catches:**
   - Wholesale is not retail. Dealer inventory builds before the festive season and can drain after it.
   - Exports are large. Bajaj and TVS export heavily to Africa, Latin America and South Asia.
   - Capacity is sized for peak demand, not the average year.
8. **Sanity check:** Market-share cross-check. Hero is about 30% of domestic sales, so a total near 18M implies Hero sells about 5.5M a year.
9. **Common mistakes:**
   - Treating capacity as output.
   - Not removing exports.
   - Double counting a parent group's brands or contract manufacturing.

## Approach 3: Dealer network throughput

1. **Summary:** Number of main dealerships × average monthly retail units (including their sub-dealer network) × 12.
2. **Method and base:** Supply-side (capacity). Starts from one dealership.
3. **Assumptions:**
   - Retail sales to end customers.
   - Each main dealership's volume includes its secondary outlets, so outlets are not counted twice.
4. **Steps:**
   1. Estimate main two-wheeler dealerships across brands.
   2. Estimate average monthly sales per dealership, blending metro and rural.
   3. Annualise.
5. **Drivers:**
   - Main dealerships: 12,000 to 18,000. Partly documented (OEM reports give network touchpoints; FADA gives membership). Main vs secondary is an assumption.
   - Units per dealership per month: 60 to 120. Assumption.
6. **Calculation:**
   - Central: 15,000 × 90 × 12 = about **16M**.
   - Low: 12,000 × 60 × 12 = 8.6M.
   - High: 18,000 × 120 × 12 = 26M.
7. **Catches:**
   - The festive months (October and November, around Navratri, Dhanteras and Diwali) can run at twice an average month. A candidate who anchors on a busy showroom visit overstates the year.
   - Touchpoint counts of 40,000 to 60,000 include service points and sub-dealers.
8. **Sanity check:** At 90 a month, a dealership sells about 3 bikes per working day. That matches a staffed showroom with 4 to 6 salespeople.
9. **Common mistakes:**
   - Multiplying all touchpoints by main-dealer volume.
   - Using a peak month.
   - Ignoring the rural sub-dealer volume that flows through main dealers.

## Approach 4: Registration office throughput

1. **Summary:** Every new two-wheeler must be registered. Number of RTOs × daily two-wheeler registrations × working days.
2. **Method and base:** Supply-side (capacity). Starts from one Regional Transport Office.
3. **Assumptions:**
   - Counts new registrations only, not transfers.
   - Registration lags the sale by days, which is negligible over a year.
4. **Steps:**
   1. Estimate RTOs plus sub-offices.
   2. Estimate new two-wheeler registrations per office per working day.
   3. Multiply by working days.
5. **Drivers:**
   - RTOs and sub-offices: 1,200 to 1,600. Documented (MoRTH Vahan dashboard lists offices).
   - New two-wheeler registrations per office per day: 30 to 60. Assumption.
   - Working days: 280 to 300. Assumption.
6. **Calculation:**
   - Central: 1,400 × 45 × 290 = about **18M**.
   - Low: 1,200 × 30 × 280 = 10M.
   - High: 1,600 × 60 × 300 = 29M.
7. **Catches:**
   - Office volumes are highly skewed toward metro and district RTOs.
   - Dealer-point registration means many vehicles never physically visit an RTO, but they still count against one.
   - Telangana registrations were not on Vahan in some years, so the dashboard undercounts.
8. **Sanity check:** Should land near retail, close to Approach 3.
9. **Common mistakes:**
   - Including ownership transfers and re-registrations.
   - Assuming the average office has metro-level volume.

---

## THINGS I NEEDED TO RECORD THAT DON'T FIT THE HEADINGS ABOVE

**Wording ambiguity.** "Sold" can mean four different numbers. The question file should store which one the model answer uses.
- Domestic wholesale (SIAM dispatches)
- Retail registrations (FADA, Vahan)
- Production
- Domestic plus exports, which adds about 3.5M to 4.5M

Most interviewers mean domestic sales.

**Reference range** (from my general knowledge, not looked up):
- SIAM domestic two-wheeler sales were about 18M in FY24 and about 19.5M in FY25.
- The peak was about 21M in FY19.
- The low was about 13.5M in FY22, after COVID.
- Exports are about 3.5M to 4.5M.
- Anything from 15M to 22M is defensible. An answer under 10M or over 30M signals an error.

**Year sensitivity.** The answer depends on the year: the FY19 peak, the FY21 to FY22 COVID dip, the BS-VI price increase in 2020, and EV subsidy changes. The file should store the reference year.

**Definitions:**
- "Two-wheeler" includes motorcycles (about 63% of domestic sales), scooters (about 32%) and mopeds (about 3 to 4%).
- Electric two-wheelers are about 5 to 6% and growing. Low-speed electric scooters that need no registration fall outside Vahan, so Approach 4 misses them.

**Segment splits** a strong candidate might use:
- Rural vs urban, roughly 55:45 by volume, with rural tied to the monsoon and crop income.
- Motorcycle vs scooter.
- Commuter (100 to 125cc) vs premium (150cc and above).

**Seasonality.** Festive months and the wedding season concentrate sales. Any approach built on a monthly or daily rate needs an annual average, not a peak.

**Most defensible approach:**
- Approach 1 is best for a market-sizing interview. It shows structural thinking: stock vs flow, replacement vs growth. Its range is wide because replacement life dominates the result, so the candidate should flag that sensitivity.
- Approach 2 is most accurate if the candidate knows OEM shares, but it relies on recall more than reasoning.
- Approaches 3 and 4 work best as triangulation checks.

**Merging variant.** A first-time-buyer funnel can replace the growth term in Approach 1: about 24M people reach 18 each year, times the share who buy a new two-wheeler within a few years. It still needs the fleet for replacement demand, so it is a variant, not a separate approach.

**Stock vs flow trap.** This is the single most common error. A candidate estimates the number of two-wheelers in India (the fleet, about 200M) and gives that as annual sales.
