# Starbucks, Connaught Place, revenue and costs: solver B

# Starbucks, Connaught Place: revenue and cost estimate

**Time basis:** I use annual revenue as the headline and show daily and monthly figures alongside. All revenue figures exclude GST.

**Scope:** "A Starbucks" means one store. CP has several Starbucks outlets, so the estimate is for one flagship-type store in the Inner or Middle Circle.

---

## PART 1: REVENUE

### Approach A: Counter throughput by daypart

1. **Summary:** Estimate how many tickets the store processes in each part of the day and multiply by the average ticket.
2. **Method:** Supply-side (capacity). The starting base is one store's service counter.
3. **Assumptions:**
   - Open about 15 hours a day (8am to 11pm), 365 days a year.
   - Dine-in, takeaway and aggregator delivery are all counted.
   - Revenue is net of GST.
4. **Steps:**
   1. Split the day into dayparts.
   2. Estimate tickets per hour in each daypart.
   3. Add them up to get tickets per day.
   4. Multiply by the average ticket.
   5. Annualise.
5. **Drivers:**
   - **Peak hours:** 4 hrs/day (assumption). Throughput 40 to 70 tickets/hr (assumption, bounded by a barista bar doing roughly 60 to 90 drinks/hr).
   - **Shoulder hours:** 6 hrs/day at 20 to 30 tickets/hr (assumption).
   - **Off-peak hours:** 5 hrs/day at 8 to 15 tickets/hr (assumption).
   - **Average ticket:** Rs 420 to 600 (assumption anchored on menu prices). Starbucks India publishes its menu prices online and on aggregator apps; a tall handcrafted drink is roughly Rs 300 to 400. A ticket averages about 1.4 items.
6. **Calculation:**
   - **Central:** 200 + 150 + 60 = 410 tickets/day. 410 × Rs 500 = Rs 2.05 lakh/day, about Rs 62 lakh/month, about **Rs 7.5 cr/yr**.
   - **Low:** 250 × Rs 420 = Rs 1.05 lakh/day, about Rs 3.8 cr/yr.
   - **High:** 600 × Rs 600 = Rs 3.6 lakh/day, about Rs 13 cr/yr.
7. **Catches:**
   - Peak throughput is capped by the espresso bar, not the till.
   - One ticket often covers 2 to 3 people.
   - Weekends in CP run higher than weekdays.
8. **Sanity check:**
   - Seat turnover: about 70 seats × 4 to 5 turns a day ≈ 300 dine-in covers. At about 1.5 covers per ticket that is ~200 dine-in tickets.
   - Add 30 to 40% takeaway and delivery, which lands near 300 to 400 tickets. This is consistent.
9. **Common mistakes:**
   - Applying peak throughput to all 15 hours.
   - Counting people instead of tickets.
   - Using drink price as the ticket size.

### Approach B: CP footfall funnel

1. **Summary:** Narrow CP's daily visitors down to this store's customers.
2. **Method:** Demand-side (funnel). The starting base is CP daily footfall.
3. **Assumptions:**
   - Footfall means shoppers, office workers and tourists combined.
   - The answer is for one store among several Starbucks outlets in CP.
4. **Steps:**
   1. Start with daily footfall.
   2. Apply the share who visit a premium café that day.
   3. Apply Starbucks' share of premium café visits.
   4. Apply this store's share of Starbucks visits in CP.
   5. Convert people to tickets by dividing by group size.
   6. Multiply by the average ticket.
   7. Add delivery orders.
5. **Drivers:**
   - **Daily footfall:** 3 to 5 lakh (publicly documented). NDMC, trader associations and news coverage regularly quote figures in this range, especially around festival seasons.
   - **Share visiting a premium café:** 2 to 4% (assumption). Competitors include Costa, Blue Tokai, Third Wave and others.
   - **Starbucks share of those visits:** 25 to 35% (assumption).
   - **This store's share of CP Starbucks visits:** 15 to 25% (assumption). It depends on how many outlets CP has, roughly 4 to 6.
   - **People per ticket:** 1.5 to 2 (assumption).
   - **Delivery uplift:** 10 to 20% (assumption).
6. **Calculation:**
   - **Central:** 4,00,000 × 3% × 30% × 20% = 720 people. Divided by 1.7 that is ~425 tickets. Adding 15% delivery gives ~490 tickets. × Rs 500 = Rs 2.45 lakh/day, about **Rs 9 cr/yr**.
   - **Low:** 3 lakh × 2% × 25% × 15% = 225 people, about 150 tickets with delivery, about Rs 2.5 cr/yr.
   - **High:** 5 lakh × 4% × 35% × 25% = 1,750 people, about 1,000 tickets. This is above what the counter can serve, so cap it at about 650 tickets, which gives about Rs 14 cr/yr.
7. **Catches:**
   - The result is extremely sensitive to the café-propensity percentage.
   - The funnel ignores repeat visitors among office workers.
   - The high end exceeds physical capacity, so capacity is the binding constraint.
8. **Sanity check:** Cross-check against Approach A. If the funnel output is above what the counter can serve, capacity wins.
9. **Common mistakes:**
   - Forgetting there are multiple Starbucks outlets in CP.
   - Applying a national coffee-drinking rate to a high-income shopping crowd.

### Approach C: Top-down from Tata Starbucks financials

1. **Summary:** Take average revenue per store across Tata Starbucks and scale it up for a flagship location.
2. **Method:** None of the three labels fits. This is a top-down allocation from company revenue, not a funnel or a capacity build.
3. **Assumptions:** Average store revenue × a premium multiple for a flagship location.
4. **Steps:**
   1. Take annual Tata Starbucks revenue.
   2. Divide by store count.
   3. Apply a location multiple.
5. **Drivers:**
   - **Annual revenue:** about Rs 1,200 to 1,300 cr (publicly documented). It appears in the Tata Consumer Products annual report and investor presentations for FY24 and FY25.
   - **Store count:** about 420 to 480 stores (publicly documented, same sources).
   - **Location multiple:** 1.8 to 3x (assumption).
6. **Calculation:**
   - Average store revenue is about Rs 2.7 to 2.9 cr/yr.
   - **Central:** × 2.5 = **Rs 7 cr/yr**.
   - **Low:** × 1.8 = Rs 5 cr/yr.
   - **High:** × 3 = Rs 8.7 cr/yr.
7. **Catches:**
   - The company average is pulled down by new, small and tier-2 stores, so a flagship deserves a multiple.
   - Company revenue may include merchandise and packaged coffee sales.
8. **Sanity check:** The result works out to about 380 tickets/day at Rs 500, which matches Approach A.
9. **Common mistakes:**
   - Using the average with no adjustment.
   - Using the multiple with no justification.
   - Mixing up the fiscal year (April to March).

### Approach D: Reverse from rent

1. **Summary:** Infer revenue from the rent a CP landlord charges and a typical rent-to-sales ratio for cafés.
2. **Method:** None of the three labels fits. This is ratio inference from a cost line.
3. **Assumptions:**
   - The store is 1,500 to 2,500 sqft, ground floor or mezzanine.
   - Cafés target rent at 12 to 20% of sales.
4. **Steps:**
   1. Multiply area by rent per sqft to get monthly rent.
   2. Divide by the rent-to-sales ratio.
   3. Annualise.
5. **Drivers:**
   - **Effective rent:** Rs 500 to 1,000/sqft/month (publicly documented for headline rents). Property consultants such as Cushman & Wakefield and Knight Frank publish annual "main streets" reports listing CP as one of India's costliest high streets. Starbucks, as an anchor tenant, probably pays below headline rent.
   - **Area:** 1,500 to 2,500 sqft (assumption).
   - **Rent-to-sales ratio:** 12 to 20% (assumption, based on industry rule of thumb).
6. **Calculation:**
   - **Central:** 1,800 × Rs 700 = Rs 12.6 lakh/month. Divided by 18% that is Rs 70 lakh/month, about **Rs 8.4 cr/yr**.
   - **Low:** 1,500 × 500 = Rs 7.5 lakh. Divided by 20% that is Rs 37.5 lakh/month, about Rs 4.5 cr.
   - **High:** 2,500 × 1,000 = Rs 25 lakh. Divided by 20% that is Rs 1.25 cr/month, about Rs 15 cr.
7. **Catches:**
   - Brands often sign revenue-share leases with a minimum guarantee.
   - A flagship can deliberately run above the target ratio as a marketing spend.
8. **Sanity check:** Use this only to bracket the answer, never as the primary approach.
9. **Common mistakes:**
   - Using the headline rent for the best ground-floor unit.
   - Ignoring common area maintenance (CAM) charges.

**Convergence:** Approaches A, C and D cluster at Rs 7 to 8.5 cr/yr. B lands slightly higher. **Converged answer: about Rs 7.5 cr/yr (about Rs 62 lakh/month, Rs 2 lakh/day). Defensible range: Rs 5 to 10 cr.**

---

## PART 2: COSTS (store level, on Rs 7.5 cr revenue)

| Line item | % of revenue | Rs per year | Fixed / variable | Type |
|---|---|---|---|---|
| Cost of goods (coffee, milk, syrups, bought-in food, packaging) | 28 to 35% | 2.1 to 2.6 cr | Variable | Assumption. Food has much lower margin than beverages. |
| Staff: about 20 to 25 baristas plus a manager, Rs 25,000 to 35,000/month loaded | 12 to 16% | 0.9 to 1.2 cr | Semi-fixed | Assumption |
| Rent plus CAM | 13 to 20% | 1.0 to 1.5 cr | Fixed (or revenue share) | Consultant reports for headline rent |
| Utilities (air conditioning, espresso machines, ovens) | 4 to 6% | 0.3 to 0.45 cr | Semi-fixed | Assumption |
| Aggregator commission (15% of sales via delivery at 20 to 30% commission) | 3 to 4% | 0.2 to 0.3 cr | Variable | Assumption |
| Payment charges (UPI near zero, cards about 1.5 to 2%) | 0.5 to 1% | 0.04 to 0.07 cr | Variable | Assumption |
| Repairs, consumables, cleaning, security | 2 to 3% | 0.15 to 0.22 cr | Fixed | Assumption |
| Marketing, local and allocated | 2 to 3% | 0.15 to 0.22 cr | Fixed | Assumption |
| **Store EBITDA (four-wall profit)** | **15 to 22%** | **1.1 to 1.6 cr** | | |
| Royalty or brand fee to Starbucks Corp | 4 to 7% | 0.3 to 0.5 cr | Variable | Assumption. Tata Starbucks is a 50:50 joint venture; the fee terms are not public. |
| Depreciation on fit-out (Rs 2.5 to 4 cr capex over 7 to 8 yrs) | 5 to 7% | 0.35 to 0.5 cr | Fixed | Assumption |
| Corporate overhead allocation | 4 to 6% | 0.3 to 0.45 cr | Fixed | Assumption |
| **Net store margin** | **0 to 8%** | **0 to 0.6 cr** | | |

**Profit picture:**
- The store probably makes a healthy four-wall profit of 15 to 22%.
- After the royalty, depreciation and overhead, net margin is thin.
- This matches Tata Starbucks reporting company-level results close to breakeven in Tata Consumer filings. Check the exact sign and size before quoting them.
- **Breakeven:** fixed costs are about Rs 3 to 3.5 cr/yr and the contribution margin is about 60%, so breakeven revenue is about Rs 5 to 6 cr/yr, roughly 300 tickets/day.

**Is there more than one sound approach on the cost side?** Yes, two:

1. **Top-down:** apply benchmark percentages to the Part 1 revenue (the table above).
2. **Bottom-up:** build the fixed lines from physical drivers. Headcount × wage, sqft × rent, kW × hours × tariff, capex ÷ useful life. Only the variable lines (cost of goods, commissions, payment charges) are taken as a share of revenue.

Bottom-up is more defensible because it does not inherit errors from Part 1.

**Catches on the cost side:**
- GST on restaurant service is 5% without input tax credit. It is neither revenue nor a cost line; exclude it from both.
- Staff cost in India runs a smaller share of revenue than in the US. Using US benchmarks of 25 to 30% overstates it.
- Food and merchandise have a much higher cost of goods than beverages, so the product mix matters.
- A flagship's rent may be justified by brand visibility, not by the store's own profit.

---

## THINGS I NEEDED TO RECORD THAT DON'T FIT THE HEADINGS ABOVE

- **How Part 2 depends on Part 1:**
  - The variable costs (cost of goods, commissions, payment charges, royalty) scale directly with Part 1 revenue.
  - The fixed costs (rent, staff, depreciation, utilities) should be estimated independently.
  - A strong candidate uses the fixed costs to test Part 1. If bottom-up fixed costs exceed about 50% of the estimated revenue, the revenue figure is probably too low.
- **What a good Part 2 answer looks like:**
  - Names 7 or more line items.
  - Separates fixed from variable costs.
  - Identifies cost of goods and rent as the two largest lines.
  - Distinguishes four-wall EBITDA from net margin.
  - Computes a breakeven ticket count.
  - Gives ideas for cost levers: renegotiating the rent structure, shifting the mix toward beverages, staff scheduling by daypart, and the trade-off between delivery volume and commission.
  - A weak answer lists costs with no percentages, or makes the percentages total more than 100%.
- **Ambiguity in the wording:**
  - Which Starbucks? There are several in CP.
  - Revenue gross or net of GST?
  - Delivery orders in or out?
  - Does "cost side of operations" mean the store P&L or include joint-venture royalty and corporate costs? The answer should state its scope.
  - "Look at" may invite levers and insight, not just numbers.
- **Which approach is more defensible:**
  - Approach A (capacity) is the primary method. It is physically grounded and easy to observe on a site visit.
  - Approach C (top-down) is the best cross-check because its base is publicly documented.
  - Approach B depends on one fragile percentage.
  - Approach D brackets the answer only.
- **Reasonable answer bands:**
  - Revenue: Rs 5 to 10 cr/yr is good, Rs 3.5 to 13 cr is acceptable, and below Rs 2 cr or above Rs 20 cr is wrong.
  - Tickets: 300 to 550/day.
  - Average ticket: Rs 400 to 600.
  - Four-wall EBITDA: 12 to 25%.
  - Net margin: about −3% to +10%.
- **Interview signals:** state the time basis up front, convert people to tickets, cap demand at capacity, exclude GST, and cross-check with a second approach.
- **Data a question file should store:** the per-driver flags for "publicly documented" versus "assumption" (listed above), plus the fiscal-year convention, since Indian companies report April to March.
