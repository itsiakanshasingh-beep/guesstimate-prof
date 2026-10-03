# Two-wheelers sold in India per year: solver B

# India two-wheeler sales per year: independent solve

**Scope I am assuming:** new two-wheelers (motorcycles, scooters, mopeds, including electric) sold in India in one financial year. Exports and used-vehicle sales are excluded.

I found three distinct approaches. Each one starts from a different base.

---

## Approach 1: Household fleet, replacement plus growth

**1. Summary:** Estimate how many two-wheelers are in use from the number of households, then split annual sales into replacing scrapped vehicles plus adding to the fleet.

**2. Method:** demand-side (funnel), with a stock-to-flow conversion at the end. The base is India's population, turned into households.

**3. Assumptions**
- The unit is new vehicles bought by Indian buyers.
- The time basis is one financial year.
- Fleet means vehicles actually in use, not everything ever registered.

**4. Steps**
1. Divide population by household size to get households.
2. Multiply by the share of households owning at least one two-wheeler.
3. Multiply by the average number per owning household. This gives the active fleet.
4. Divide the fleet by vehicle lifetime to get annual scrappage, which equals replacement demand.
5. Add net fleet growth (fleet × growth rate).
6. New sales = replacement + growth.

**5. Drivers**
- **Population:** 1.40 to 1.45 billion. (a) Published in UN and Indian government projections every year.
- **Household size:** 4.3 to 5.0 people. (a) Census and NFHS.
- **Households owning a two-wheeler:** 45% to 60%. (a) NFHS asset ownership tables, last round 2019 to 2021.
- **Two-wheelers per owning household:** 1.1 to 1.3. (b) Assumption.
- **Total vehicle lifetime, including resale:** 12 to 18 years. (b) Assumption.
- **Net fleet growth:** 2% to 4% a year. (b) Assumption, loosely tied to GDP growth.

**6. Calculation**
- Central: 300M households × 0.55 × 1.2 = about 200M vehicles in use.
- Replacement: 200M / 15 years = 13M.
- Growth: 3% × 200M = 6M.
- **Central total: about 19M a year.**
- Low: 280M × 0.45 × 1.1 = 139M; 139M / 18 = 7.7M, plus 2.8M growth = **about 10M**.
- High: 330M × 0.60 × 1.3 = 257M; 257M / 12 = 21.4M, plus 10.3M growth = **about 32M**.

**7. Traps**
- **Stock vs flow:** the fleet is not annual sales.
- **Lifetime definition:** use the total life before scrapping, not how long the first owner keeps it. A resale passes the vehicle on but does not create a new sale.
- **Registered vs active:** the registered fleet (Vahan, roughly 250M+) overstates what is in use, because deregistration in India is weak.
- **Range width:** small changes in lifetime and growth move the answer a lot.

**8. Sanity check:** one in every 15 to 16 Indians buying a new two-wheeler each year should feel plausible.

**9. Common mistakes**
- Using population × ownership instead of households.
- Counting each resale as a sale.
- Leaving out fleet growth, which understates the answer by roughly 30%.
- Treating ownership as the same in urban and rural India without saying so.

---

## Approach 2: Dealer network throughput

**1. Summary:** Count the outlets that sell new two-wheelers, estimate monthly sales per outlet, and scale up to a year.

**2. Method:** supply-side (capacity). The base is one dealership or sales outlet.

**3. Assumptions**
- Outlets include authorised main dealers and their sub-dealers and rural touchpoints.
- Sales are retail units sold to customers.
- I use a monthly average and then multiply by 12.

**4. Steps**
1. Estimate outlets per major manufacturer and multiply by the number of major manufacturers. Alternatively, estimate outlets per district and multiply by about 750 districts.
2. Estimate average units sold per outlet per month.
3. Total = outlets × monthly units × 12.

**5. Drivers**
- **Total sales outlets:** 20,000 to 40,000. (a) Partly documented: manufacturer annual reports state touchpoint counts (for example Hero and Honda each in the thousands). The total across the industry is an assumption.
- **Units per outlet per month:** 35 to 70. (b) Assumption. A main dealer sells far more than a rural touchpoint.

**6. Calculation**
- Central: 30,000 × 50 × 12 = **18M**.
- Low: 20,000 × 35 × 12 = **8.4M**.
- High: 40,000 × 70 × 12 = **33.6M**.

**7. Traps**
- **Seasonality:** the festive season (around Navratri and Diwali) and the wedding season can be two to three times a normal month. Anchoring on an October figure overstates the year.
- **Uneven outlets:** a large urban dealer and a small rural sub-dealer differ by about 10x, so a single flat average hides a skewed distribution.

**8. Sanity check:** 30,000 outlets across about 750 districts is about 40 per district. That is believable for a mass-market product.

**9. Common mistakes**
- Counting only main dealers and missing the sub-dealer network.
- Applying a peak month's sales to all 12 months.
- Applying one premium brand's throughput to the whole market.

---

## Approach 3: Market leader's volume divided by its market share

**1. Summary:** Take the largest manufacturer's domestic volume and divide by its market share. Alternatively, sum the top five manufacturers' volumes and add a remainder for the rest.

**2. Method:** none of the three labels fits. It is a top-down industry-structure method that grosses up from known company data, not a funnel and not a single-asset capacity calculation. The base is one manufacturer's annual domestic sales.

**3. Assumptions**
- Domestic dispatches only, so exports are taken out.
- Financial-year basis, matching company reporting.

**4. Steps**
1. Estimate the leader's domestic volume (Hero MotoCorp).
2. Estimate its domestic market share.
3. Industry total = volume / share.
4. Cross-check by summing Hero, Honda, TVS, Bajaj and Suzuki, then adding about 10% for Royal Enfield, Yamaha, electric makers and others.

**5. Drivers**
- **Hero domestic volume:** 5.0M to 6.0M units a year. (a) Published in the company's monthly sales releases and annual report.
- **Hero domestic share:** 27% to 35%. (a) Calculated from the manufacturers' association (SIAM) and from dealer association (FADA) retail data, published monthly and annually.
- **Capacity-based variant:** installed capacity × utilisation (about 60% to 75%). Utilisation is (b) an assumption.

**6. Calculation**
- Central: 5.5M / 0.30 = **about 18.3M**.
- Low: 5.0M / 0.35 = **about 14.3M**.
- High: 6.0M / 0.27 = **about 22.2M**.

**7. Traps**
- **Production vs domestic sales:** Indian makers export about 3 to 4M units a year (Bajaj and TVS heavily), so production overstates domestic sales.
- **Wholesale vs retail:** dispatches to dealers (SIAM) differ from customer registrations (Vahan or FADA) because dealer stock builds up or runs down.
- **Electric makers:** OEMs that are not SIAM members can be missing from association totals.

**8. Sanity check:** the top five manufacturers should account for about 85% to 90% of the market. If the implied total gives them much less, a figure is off.

**9. Common mistakes**
- Using total production or total sales including exports.
- Mixing a calendar-year share with a financial-year volume.
- Confusing Hero's share of motorcycles (higher, about 45% to 50%) with its share of all two-wheelers.

---

## THINGS I NEEDED TO RECORD THAT DON'T FIT THE HEADINGS ABOVE

**Ambiguity in the wording**
- "Sold" can mean production, wholesale dispatches, retail registrations, or domestic plus exports. The candidate should define it first.
- Whether used two-wheeler transactions count. The used market is roughly comparable in size to new sales, so including it can about double the answer.
- Whether electric two-wheelers are included. They should be, at roughly 5% to 7% of the market.
- Calendar year or financial year.

**Segment splits worth storing**
- Scooters vs motorcycles vs mopeds, about 30 / 66 / 4.
- Urban vs rural, about 45 / 55. Rural sales depend on the monsoon and harvest.
- Internal-combustion vs electric.

**Reference range:** domestic sales were about 16 to 20M units a year across FY23 to FY25, and production including exports was about 21 to 24M. This comes from general knowledge, not from a source I checked here. Verify it against SIAM or FADA data before storing it.

**Which approach is most defensible**
- Approach 1 shows the most structured thinking and is the one interviewers expect. It is also the most sensitive to assumptions, with a range of 10M to 32M.
- Approach 3 has the tightest range, but only if the candidate knows company figures. It reads as recall rather than reasoning.
- Approach 2 is the best triangulation check, but outlet throughput is hard to know.
- The strongest answer leads with Approach 1 and cross-checks with Approach 2 or 3.

**Variants I folded in rather than listing separately**
- **Commuter base:** working population × share commuting by two-wheeler, then divided by lifetime. It is the same stock-to-flow method with a different population base, so it counts as a variant of Approach 1.
- **Loan-led:** two-wheeler loans disbursed / share of purchases financed (about 60% to 70%). Distinct in principle, but the inputs are hard to estimate blind.

**Rubric points**
- Says "stock vs flow" explicitly.
- Separates domestic sales from exports.
- Flags festive-season peaks.
- Sanity-checks the result as sales per head of population.
