# Swiggy delivery partners in Mumbai: solver B

## Swiggy delivery partners in Mumbai: three distinct approaches

### Approach 1: Order volume divided by orders per partner
**1. Summary:** Estimate Swiggy's daily orders in Mumbai (food plus Instamart), divide by how many orders one partner delivers in a day, then convert daily active partners into monthly active partners.

**2. Method:** demand-over-supply. Base: Mumbai households.

**3. Assumptions:**
- Scope is Greater Mumbai plus the adjoining served suburbs (Thane, Navi Mumbai), about 2 crore people.
- The unit is monthly active partners: people who completed at least one order in the month.
- Time basis is an average day, not a festival or rain day.

**4. Steps:**
1. Population divided by household size gives households.
2. Multiply by the share of households that order food online and by Swiggy's share of those orders.
3. Multiply by orders per month and divide by 30 to get Swiggy food orders per day.
4. Repeat steps 2 and 3 for Instamart.
5. Divide total orders by orders per partner per day to get daily active partners.
6. Divide by the daily-to-monthly active ratio to get monthly active partners.

**5. Drivers:**

| Driver | Low | High | Unit | Type |
|---|---|---|---|---|
| Served population | 1.6 cr | 2.2 cr | people | (a) Census and MMR planning estimates; Census 2011 is the last full count, so this is stale |
| Household size | 4 | 4.5 | people | (a) Census/NFHS |
| Households ordering food online | 30% | 50% | share | (b) |
| Swiggy share of food orders in Mumbai | 35% | 55% | share | (b) Industry analysts and brokerage reports publish a national split of roughly 45:55 with Zomato; city splits are not public |
| Food orders per ordering household | 4 | 8 | per month | (b) |
| Instamart orders | 20k | 1.5 lakh | per day | (b) |
| Orders per partner per day | 10 | 15 | orders | (b) Gig-worker surveys (NITI Aayog 2022, academic and union studies) report ranges |
| Daily active ÷ monthly active | 0.5 | 0.7 | ratio | (b) |

**6. Calculation:**
- Households: 2 cr ÷ 4.5 = 44 lakh.
- Food orders: 44L × 0.40 × 0.45 × 6 ÷ 30 = about 1.6 lakh a day.
- Add Instamart at about 65k a day, for a total of about 2.2 lakh orders a day.
- Daily active partners: 2.2L ÷ 12 = about 18k.
- Monthly active partners: 18k ÷ 0.6 = **about 30k**.
- If every driver hits its low or high extreme together, the result runs from about 7k to 100k. A realistic band is **15k to 50k**.

**7. Catches:**
- Orders are a flow and partners are a stock, so state which partner count you mean.
- Batching (two orders in one trip) raises orders per partner.
- Partners who ride for both Swiggy and Zomato are counted on each platform.

**8. Sanity check:**
- Implied earnings: 12 orders × ₹30 to 40 per order = ₹360 to 480 a day before incentives, which is plausible for gig pay.
- Implied coverage: 18k riders across about 600 sq km is about 30 per sq km, which matches visible density.

**9. Common mistakes:**
- Using MMR population and all households without narrowing to people who order online.
- Assuming every partner works 30 days a month.
- Forgetting Instamart.
- Assuming 100% market share.

### Approach 2: Mumbai's share of the national fleet
**1. Summary:** Take Swiggy's national count of active delivery partners and multiply by Mumbai's share of Swiggy's orders.

**2. Method:** none of the three labels fits. It is an allocation of a known total: it apportions a published national figure rather than building one up. Base: national partner count.

**3. Assumptions:**
- The national figure means average monthly transacting partners.
- Mumbai's share of partners equals its share of orders.

**4. Steps:**
1. Recall the national partner count.
2. Estimate Mumbai's share of Swiggy's orders.
3. Multiply.
4. Adjust for productivity if Mumbai riders do more orders each than the national average (denser city, more batching).

**5. Drivers:**

| Driver | Low | High | Unit | Type |
|---|---|---|---|---|
| National monthly transacting partners | 3.5 lakh | 5.5 lakh | partners | (a) Swiggy's 2024 IPO prospectus and later quarterly shareholder letters report this; I may be misremembering the exact figure |
| Mumbai share of Swiggy orders | 5% | 10% | share | (b) Swiggy is stronger in Bengaluru and Hyderabad, Zomato in Delhi NCR and arguably Mumbai |
| Productivity adjustment | 0.9 | 1.0 | factor | (b) |

**6. Calculation:** 4.5L × 7% × 1.0 = **about 31k**. Range: 3.5L × 5% × 0.9 = about 16k, up to 5.5L × 10% = 55k.

**7. Catches:**
- The national figure may be monthly transacting or registered; registered can be 2x or more.
- Mumbai's share of order value is higher than its share of orders because the average order is larger.
- Partners and orders may not scale one to one.

**8. Sanity check:** Mumbai's share should sit near its share of India's online food spend, roughly 8 to 12% among the top 8 cities. It should also cross-check with Approach 1.

**9. Common mistakes:**
- Using Mumbai's share of India's population (about 1.5%), which understates it badly.
- Treating a headline partner number as daily active.
- Stating a number recalled from memory as a fact.

### Approach 3: Peak-hour concurrency
**1. Summary:** The fleet is sized for the dinner peak, not the daily average. Estimate peak-hour orders, divide by orders one partner completes in an hour to get riders needed on the road at once, then gross up for the share of monthly partners who log in at peak.

**2. Method:** demand-over-supply on a peak basis instead of a daily one. Base: peak-hour orders. It is distinct from Approach 1 because the binding constraint is how many riders must be on the road at the same moment, not how many orders the fleet completes in a day.

**3. Assumptions:**
- Peak is 8 to 10 pm on a weekend.
- Partners count only if logged in and accepting orders.

**4. Steps:**
1. Daily orders (reuse Approach 1 or estimate fresh) times the share falling in the peak window, divided by its hours, gives peak orders per hour.
2. Divide by orders per partner per peak hour to get concurrent riders.
3. Divide by the share of monthly active partners online at peak.

**5. Drivers:**

| Driver | Low | High | Unit | Type |
|---|---|---|---|---|
| Share of daily food orders in the 2-hour dinner window | 25% | 35% | share | (b) Platforms sometimes cite this in blogs and media interviews |
| Orders per partner per peak hour | 1.5 | 2.5 | orders | (b) |
| Share of monthly active partners online at peak | 40% | 60% | share | (b) |

**6. Calculation:**
- Peak orders: food 1.6L × 30% ÷ 2 hours = 24k an hour, plus Instamart at about 5k an hour, for about 29k an hour.
- Concurrent riders: 29k ÷ 2 = 14.5k.
- Monthly active partners: 14.5k ÷ 0.5 = **about 29k**.
- Range: about 12k (low peak share, high productivity, high login rate) to about 55k.

**7. Catches:**
- Lunch and dinner peaks are separate; size for the larger one.
- Instamart's evening peak can line up with dinner.
- Rain spikes demand and cuts the number of riders online at the same time.

**8. Sanity check:** The concurrent riders should sit near the daily active count from Approach 1. They should be below it, but not far below, since most daily riders work the dinner shift.

**9. Common mistakes:**
- Dividing peak-hour orders by daily productivity.
- Stopping at concurrent riders and calling that the fleet.
- Ignoring delivery time: a 30 to 40 minute round trip caps a rider at about 2 orders an hour.

### Triangulated answer
All three approaches land at about 30k monthly active partners. Daily active is about 18k. Registered partners could be 50k to 70k because of churn and dormant accounts.

### THINGS I NEEDED TO RECORD THAT DON'T FIT THE HEADINGS ABOVE
- **"Delivery partners" is ambiguous**, and the answer can swing 3x on the definition:
  - registered (stock, includes dormant accounts)
  - monthly transacting (the metric Swiggy reports)
  - daily active
  - concurrent at peak

  The question file should name one canonical definition. Monthly active is the most defensible.
- **"Mumbai" is ambiguous:** BMC limits (about 1.25 to 1.4 cr people) versus the served metro area including Thane and Navi Mumbai (about 2 cr). Record which one the answer assumes.
- **Segment split:** food delivery and Instamart share the same partner app in many zones, but Instamart riders often work out of a single dark store on shorter, denser routes. A strong answer handles the two segments separately and notes the overlap.
- **Multi-homing:** many riders work for both Swiggy and Zomato. Platform counts therefore add up to more than the number of unique riders in the city. A good candidate should flag this.
- **Churn:** gig-fleet churn is high, about 5 to 10% a month (my assumption). That is why registered partners far exceed active ones; the gap is churn, not idleness.
- **Most defensible approach:** Approach 1, as the primary build. It is transparent and every driver can be challenged. Approach 2 is the fastest but depends on recalling one figure, so it serves as a cross-check, not a primary method. Approach 3 is the most insightful because it shows the fleet is sized for the peak, which interviewers reward.
- **Rejected approach:** a street-observation density approach (riders seen per sq km, scaled to the city). It cannot be verified in an interview and mixes in Zomato, Zepto and Blinkit riders.
- **Seasonality:** demand rises in the monsoon and during IPL and festivals. The file should state whether the answer is an average month or the peak month.
- **Benchmark band for grading:** central 30k monthly active. Accept 15k to 60k if the definition is stated. A daily active answer of 10k to 25k is also correct if labelled as such.
