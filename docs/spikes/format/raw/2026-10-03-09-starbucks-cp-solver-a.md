# Starbucks, Connaught Place, revenue and costs: solver A

# Starbucks, Connaught Place: Revenue and Cost Guesstimate

**Time basis:** I estimate per day, then annualise at 360 trading days. The answer is in INR, net of 5% GST, for a single store (CP has several Starbucks outlets).

---

## PART 1: REVENUE

### Approach A: Till throughput (orders per hour by daypart)

1. **Summary:** Count orders through the counter in each part of the day, multiply by the average bill.
2. **Method:** supply-side (capacity). The base is one store's point-of-sale counter.
3. **Assumptions:** one standard flagship-type outlet, open about 8am to 11pm, which is 15 hours.
4. **Steps:** split the day into peak and off-peak hours, estimate orders per hour for each, add them up for a weekday and a weekend day, take a blended daily figure, multiply by the average bill, then remove GST.
5. **Drivers:**
   - Peak hours: 5 to 7 per day. Assumption.
   - Peak orders: 40 to 60 per hour. Assumption, capped by how many drinks 3 or 4 baristas can make.
   - Off-peak orders: 15 to 25 per hour. Assumption.
   - Average bill: Rs 450 to 600 per order. Partly documented: Starbucks India menu prices (a tall latte is about Rs 300 to 350) times about 1.5 items per order.
6. **Calculation:** (6 × 50) + (9 × 20) = 480 orders on a weekday. Weekends run about 25% higher, so the blend is about 520 orders a day. At Rs 520 a bill, that is Rs 2.7 lakh a day gross, or Rs 2.57 lakh net. Annual: **about Rs 9.3 cr** (low Rs 5.5 cr, high Rs 13 cr).
7. **Catches:** peak rate is limited by the bar, not the queue. One order often covers two people.
8. **Sanity check:** 520 orders over 15 hours is about 35 an hour, roughly one every 1.7 minutes. That is plausible for CP.
9. **Common mistakes:** applying the peak rate to all hours; leaving GST in the revenue figure.

### Approach B: Seat turnover plus takeaway and delivery

1. **Summary:** Revenue from seats used, scaled up for orders that never sit down.
2. **Method:** supply-side (capacity). The base is the seating, a different asset from the till.
3. **Assumptions:** 50 to 70 seats; spend counted per person.
4. **Steps:** seats × possible turns per day × occupancy gives dine-in guests. Multiply by spend per person, then divide by the dine-in share of revenue.
5. **Drivers:**
   - Seats: 50 to 70. Assumption.
   - Average stay: 40 to 60 minutes. Assumption.
   - Occupancy: 30% to 50% across the day. Assumption.
   - Spend per person: Rs 350 to 450. Assumption anchored to menu prices.
   - Takeaway plus delivery share: 25% to 40% of revenue. Assumption.
6. **Calculation:** 60 seats × (840 minutes ÷ 50) ≈ 1,000 seat-turns. At 40% occupancy that is 400 guests. At Rs 400 each, Rs 1.6 lakh. Dividing by 0.7 gives Rs 2.3 lakh gross, about Rs 2.2 lakh net. Annual: **about Rs 7.9 cr** (low Rs 4.5 cr, high Rs 12 cr).
7. **Catches:** people working on laptops for hours lower turns. Groups lower spend per head.
8. **Sanity check:** this lands close to Approach A, which suggests the two capacity views agree.
9. **Common mistakes:** assuming 100% occupancy; leaving out takeaway and delivery entirely.

### Approach C: Footfall funnel

1. **Summary:** Narrow CP's daily visitors down to Starbucks buyers at this outlet.
2. **Method:** demand-side (funnel). The base is daily footfall in CP.
3. **Assumptions:** the outlet captures an equal share of CP's Starbucks demand.
4. **Steps:** footfall → share who can afford premium coffee → share who visit any café that day → Starbucks share of café visits → divide by the number of Starbucks outlets in CP → multiply by spend.
5. **Drivers:**
   - Footfall: 3 to 5 lakh per day. Semi-documented: NDMC and press reports often put it around this level, stated loosely.
   - Premium-affordable segment: 25% to 40%. Assumption.
   - Visit a café that day: 5% to 10%. Assumption.
   - Starbucks share of café visits: 20% to 30%. Assumption.
   - Starbucks outlets in CP: 3 to 5. Checkable on the store locator.
   - Spend per person: Rs 350 to 450.
6. **Calculation:** 4 lakh × 0.3 × 0.07 × 0.25 ÷ 4 ≈ 525 customers. At Rs 400 each, Rs 2.1 lakh gross, Rs 2.0 lakh net. Annual: **about Rs 7.2 cr** (low Rs 2 cr, high Rs 20 cr).
7. **Catches:** the range is very wide because the error from each step multiplies. Office workers repeat visits, which footfall figures miss.
8. **Sanity check:** useful as a cross-check only.
9. **Common mistakes:** forgetting that CP has several Starbucks outlets; treating "visitors" as unique people.

### Approach D: Corporate top-down

1. **Summary:** Take the India joint venture's revenue per store and apply a flagship premium.
2. **Method:** none. This is a ratio from a benchmark, not a funnel or capacity build. The base is company revenue.
3. **Assumptions:** CP sells 1.5 to 3 times the average Indian store.
4. **Steps:** joint venture revenue ÷ store count = average per store. Multiply by the location premium.
5. **Drivers:**
   - Tata Starbucks revenue: roughly Rs 1,100 to 1,300 cr a year. Documented: Tata Consumer annual reports, around FY23 to FY25.
   - Stores: roughly 400 to 480. Documented: the same reports and press releases.
   - Flagship multiplier: 1.5 to 3. Assumption.
6. **Calculation:** about Rs 2.8 cr average × 2.2 = **about Rs 6.2 cr** (low Rs 4 cr, high Rs 9 cr).
7. **Catches:** the reported revenue may include merchandise and corporate income. Stores opened partway through the year pull the average down.
8. **Sanity check:** this is the most anchored approach, and it sets a ceiling on the more optimistic builds.
9. **Common mistakes:** using global Starbucks revenue per store; using the multiplier with no reason given.

### Approach E: Reverse from rent

1. **Summary:** Infer the revenue that makes CP rent affordable.
2. **Method:** none. This works backwards from a cost ratio. The base is store area.
3. **Assumptions:** the store must keep occupancy cost within a sustainable share of sales.
4. **Steps:** area × rent per square foot = monthly rent. Divide by the sustainable rent-to-revenue ratio.
5. **Drivers:**
   - Area: 2,000 to 3,000 sq ft. Assumption.
   - CP ground-floor rent: Rs 400 to 900 per sq ft per month. Semi-documented: Cushman & Wakefield, JLL and Knight Frank high-street reports, which are published yearly.
   - Rent-to-revenue: 12% to 20%. Industry rule of thumb.
6. **Calculation:** 2,500 sq ft × Rs 550 = Rs 13.75 lakh a month. Divided by 0.16, that is Rs 86 lakh a month, or **about Rs 10 cr** (low Rs 5 cr, high Rs 20 cr).
7. **Catches:** a flagship may be run as a brand billboard at a higher rent share. Upper floors rent for much less.
8. **Sanity check:** this view is biased upward, so read it as a ceiling on what the store needs to earn.
9. **Common mistakes:** taking a headline rent as what was actually negotiated.

**Triangulated answer:** **Rs 6 to 9 cr a year net of GST, central figure about Rs 7.5 cr.** That is roughly Rs 60 to 65 lakh a month, or about Rs 2 lakh a day.

---

## PART 2: COSTS

All rupee figures are annual, based on the Rs 7.5 cr central revenue.

| Line item | % of revenue | Rs per year | Fixed or variable |
|---|---|---|---|
| Cost of goods (coffee, milk, syrups, outsourced food, cups, packaging) | 28% to 35% | 2.1 to 2.6 cr | Variable |
| Rent, CAM, property tax | 12% to 20% | 0.9 to 1.5 cr | Fixed |
| Staff (20 to 25 people across shifts, plus manager; Rs 25k to 40k cost per head per month) | 10% to 14% | 0.75 to 1.05 cr | Semi-fixed |
| Royalty or licence fee to Starbucks Corporation | 4% to 7% | 0.3 to 0.5 cr | Variable |
| Utilities (air conditioning, espresso machines, water) | 3% to 5% | 0.22 to 0.38 cr | Semi-fixed |
| Delivery aggregator commission (10% to 20% of sales at 20% to 30% commission) | 2% to 5% | 0.15 to 0.38 cr | Variable |
| Payment fees (UPI near zero; cards 1% to 2%) | 0.5% to 1% | 0.04 to 0.08 cr | Variable |
| Repairs, consumables, wastage | 2% to 4% | 0.15 to 0.3 cr | Mixed |
| Local marketing and allocated corporate overhead | 4% to 8% | 0.3 to 0.6 cr | Fixed |
| Depreciation (fit-out Rs 2 to 3 cr over 7 to 8 years) | 4% to 6% | 0.3 to 0.45 cr | Fixed |

**Margin:**
- **Store-level EBITDA**, before overhead and depreciation: **15% to 25%**, about Rs 1.1 to 1.9 cr.
- **Store profit after overhead and depreciation:** **4% to 12%**, about Rs 0.3 to 0.9 cr.
- Fit-out payback: about 2 to 3 years.
- This matches the public picture of Tata Starbucks running close to break-even or thinly profitable at company level. A flagship should do better than average.

**Line items with more than one sound approach:**
- **Rent:** absolute (sq ft × rate) versus a share of revenue. These disagree if the store is a brand flagship.
- **Staff:** bottom-up (shifts × headcount × pay) versus a benchmark percentage.
- **Cost of goods:** per-cup recipe cost (about Rs 60 to 90 of ingredients and cup in a Rs 330 drink, which is about 20% to 25%; food runs about 45%) weighted by product mix, versus a blended benchmark.

The bottom-up route is more defensible for rent and staff. The recipe route is better for cost of goods.

**Catches on the cost side:**
- Rent is fixed, so margin swings sharply with revenue. Present a break-even (about Rs 4.5 to 5 cr a year).
- Food carries a higher cost than beverages, so product mix moves cost of goods.
- The royalty sits above store profit.
- Do not count depreciation inside EBITDA.

---

## THINGS I NEEDED TO RECORD THAT DON'T FIT THE HEADINGS ABOVE

**How the parts depend on each other:**
- Part 2 is anchored on Part 1's revenue. Variable costs scale with it; fixed costs (rent, staff, depreciation) do not.
- A good answer separates the two groups, so a revenue error does not quietly turn into a wrong margin.
- Rent appears in both parts: as a revenue method (Approach E) and as a cost line. Approach E assumes a rent share of revenue, so using it in Part 2 as well proves nothing. Flag this circularity.

**Ambiguous wording to clarify:**
- **"A Starbucks"** means one outlet. CP has 3 to 5, and the candidate should say so.
- **"Revenue"** could include or exclude GST; ask, or state the choice.
- **"Cost side"** could mean store-level costs or costs including the corporate allocation.
- **"Operations"** suggests store P&L only, not capital spend. Mention capex separately.

**Which approach is most defensible:**
- Primary: A or B, since they show operating understanding.
- Cross-check: D.
- C is weakest, because its error compounds across steps.
- E shows business acumen but tends to run high.

**Answer bands for grading:**

| Band | Annual revenue |
|---|---|
| Good | Rs 5 to 10 cr |
| Acceptable | Rs 3 to 15 cr, with clear logic |
| Wrong | Below Rs 2 cr or above Rs 25 cr |

**What a strong Part 2 answer contains:**
- 6 to 10 line items with fixed and variable labelled
- cost of goods at about 30%, rent at mid-teens percent, staff at low-teens percent
- the royalty included
- EBITDA versus net profit kept apart
- a break-even point and one improvement lever (higher-margin food mix, a smaller-format store, less delivery)

**Further points:**
- Weekend versus weekday is an expected adjustment.
- Seasonality matters: Delhi summers and the winter rise in hot drinks.
- An interviewer might ask how close the store is to bar capacity at peak, which is an opening for a throughput question.
