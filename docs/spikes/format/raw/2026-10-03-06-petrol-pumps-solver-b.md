# Petrol pumps in India: solver B

**ESTIMATE: NUMBER OF PETROL PUMPS IN INDIA**

---

**APPROACH 1: National fuel volume divided by throughput per station**

1. **Summary:** Take India's yearly retail petrol and diesel volume and divide it by how much fuel an average station sells in a year.
2. **Method:** demand-over-supply. The starting base is national consumption of petrol and diesel in tonnes per year.
3. **Assumptions:** A pump means one retail outlet (a station), not a single nozzle. The count is a stock at one point in time, using yearly volume. Standalone CNG stations, EV chargers and captive fleet depots are excluded.
4. **Steps:**
   - Petrol tonnes converted to litres, using a density of 0.74 kg/L
   - Diesel tonnes converted to litres, using 0.83 kg/L
   - Remove bulk diesel (railways, defence, industry, direct institutional sales) to get the retail share
   - Estimate average monthly throughput per station and convert it to a yearly figure
   - Divide total retail volume by yearly throughput per station
5. **Drivers:**
   - Petrol consumption: 35 to 42 MMT/yr. (a) Published monthly and yearly by PPAC (Petroleum Planning and Analysis Cell); FY24/FY25 figures were near 37 to 40.
   - Diesel consumption: 85 to 95 MMT/yr. (a) PPAC, same timeframe.
   - Retail share of diesel: 80% to 92%. (b) An assumption, informed by the general split between bulk and retail.
   - Average throughput: 120 to 200 kL per station per month. (b) An assumption. Oil company and ministry statements sometimes quote averages, but I treat this one as assumed.
6. **Calculation:**
   - Petrol: 40 MMT is about 54 bn L
   - Diesel: 90 MMT is about 108 bn L, and 88% retail gives about 95 bn L
   - Total retail is about 150 bn L/yr
   - Throughput: 150 kL/month is 1.8 ML/yr
   - **Central: 150 / 1.8 ≈ 83,000**
   - Low: 130 bn L / 2.4 ML ≈ 54,000
   - High: 165 bn L / 1.44 ML ≈ 115,000
7. **Catches:**
   - Converting tonnes to litres is easy to forget, and petrol and diesel have different densities.
   - Diesel is not all retail.
   - Average throughput is not the same as a busy city pump. Metro highway outlets sell 300 to 500 kL a month, while rural outlets sell 30 to 60.
   - Throughput has been falling, because outlets grew faster than demand after licensing was liberalised in 2018/19.
8. **Sanity check:** Volume per station per day comes to about 5,000 L. At an average fill of about 12 L, that is roughly 400 fills a day, which is believable for an average Indian outlet.
9. **Common mistakes:**
   - Using a busy urban pump's throughput as the national average, which undercounts by about 2x.
   - Counting only petrol and ignoring diesel, even though the same outlets sell both.
   - Working in tonnes as if they were litres.

---

**APPROACH 2: Fill-ups demanded divided by fill-ups one station can serve**

1. **Summary:** Build monthly refuelling transactions from the active vehicle fleet by segment, then divide by the transactions a typical station handles in a day.
2. **Method:** demand-over-supply. The starting base is the registered vehicle fleet.
3. **Assumptions:** A transaction is one fill. Only active vehicles count, not the full registered stock. Mostly-CNG vehicles are partly excluded. Same definition of outlet as Approach 1.
4. **Steps:**
   - Segment the fleet: two-wheelers, cars, three-wheelers, commercial vehicles, and others (tractors, gensets, cans)
   - Apply an active share to each segment
   - Multiply by fills per month to get total fills, then convert to fills per day
   - Estimate station capacity: nozzles × fills per hour × operating hours × average utilisation
   - Divide demand by capacity
5. **Drivers:**
   - Registered vehicles: 320M to 360M. (a) Published by MoRTH (Ministry of Road Transport and Highways) / Vahan, around 2024.
   - Two-wheeler share: 72% to 78%. (a) Same source.
   - Active share: 55% to 75%. (b) An assumption, because scrapped vehicles are rarely deregistered.
   - Fills per month: two-wheelers 3 to 5, cars 3 to 5, three-wheelers 10 to 20, commercial 8 to 15. (b) Assumptions.
   - Nozzles per station: 4 to 8. (b) An assumption.
   - Fills per nozzle per hour at full capacity: 15 to 25. (b) An assumption.
   - Effective hours: 14 to 18. (b) An assumption.
   - Utilisation: 20% to 35%. (b) An assumption.
6. **Calculation:**

   | Segment | Active vehicles | Fills/month | Fills/month total |
   |---|---|---|---|
   | Two-wheelers | 170M | 4 | 680M |
   | Cars | 30M | 4 | 120M |
   | Three-wheelers (non-CNG) | 5M | 15 | 75M |
   | Commercial | 8M | 10 | 80M |
   | Other | n/a | n/a | 30M |

   - Total is about 1bn fills a month, or about 33M a day
   - Station: 6 nozzles × 20 fills × 16 h × 0.25 = 480 fills a day
   - **Central: 33M / 480 ≈ 69,000**
   - Low: 25M / 700 ≈ 36,000
   - High: 40M / 350 ≈ 114,000
7. **Catches:**
   - Peak capacity is not average usage. Assuming 100% utilisation collapses the answer to under 20,000.
   - Registered stock overstates the active fleet.
   - Two-wheelers dominate the number of transactions but not the volume, so this approach is sensitive to their fill frequency.
   - Many three-wheelers and buses run on CNG.
8. **Sanity check:** Implied litres per fill are about 150 bn L / 12 bn fills ≈ 12.5 L. That fits a mix of 3 to 5 L two-wheeler fills and 100 L or more truck fills. It also cross-checks against Approach 1.
9. **Common mistakes:**
   - Treating every registered vehicle as active.
   - Using nozzle capacity at full load.
   - Forgetting commercial vehicles and non-road users such as tractors and gensets.
   - Counting nozzles instead of outlets.

---

**APPROACH 3: Coverage, sizing the network by access rather than demand**

1. **Summary:** Outlets exist to give access within a reasonable distance. Size the network by urban population density, rural spacing, and highway intervals.
2. **Method:** none. This is coverage-based: the count is driven by spacing and access norms, not by fuel volume or capacity.
3. **Assumptions:** Urban and rural are split by Census-style definitions. Rural coverage is measured by area served. Highway outlets are counted only where they are not already inside towns or village clusters.
4. **Steps:**
   - Split the population into metros, other urban, and rural
   - Apply people per outlet in urban areas
   - Apply area per outlet in rural areas
   - Add standalone highway outlets
5. **Drivers:**
   - Urban population: 480M to 520M. (a) Census 2011 projections and World Bank urbanisation estimates (about 36%).
   - Metro and large-city population: 120M to 180M. (b) An assumption.
   - People per outlet in metros: 30k to 50k. (b) An assumption. Metros are sparse because land is costly and stations run at high throughput.
   - People per outlet in other urban areas: 8k to 15k. (b) An assumption.
   - Serviced rural area: 2.0M to 2.8M km². (b) An assumption, derived from India's 3.29M km² (a, Survey of India) minus desert, forest and mountain.
   - Area per rural outlet: 35 to 70 km², which is a 3.5 to 5 km radius. (b) An assumption.
   - Standalone highway outlets: 3k to 8k. (b) An assumption. National highway length is about 145k km (a, MoRTH annual report).
6. **Calculation:**
   - Metros: 150M / 40k ≈ 4k
   - Other urban: 350M / 12k ≈ 29k
   - Rural: 2.5M / 50 ≈ 50k
   - Highways: 5k
   - **Central ≈ 88,000**
   - Low ≈ 55,000; high ≈ 120,000
7. **Catches:**
   - The number of people per outlet is not monotonic with city size. Delhi and Mumbai have far fewer outlets per head than tier-2 towns.
   - Highway outlets are easily double-counted with rural ones.
   - Rural outlets are often policy-driven, such as Kisan Seva Kendra and rural retail outlet schemes, so demand logic underestimates them.
8. **Sanity check:** Implied rural population per outlet is about 18k, roughly one outlet per 12 to 15 villages, which is plausible.
9. **Common mistakes:**
   - Applying one urban density ratio to the whole country.
   - Ignoring that rural area, not rural population, drives the count.
   - Adding highway kilometres in both directions without removing overlap with towns.

---

**THINGS I NEEDED TO RECORD THAT DON'T FIT THE HEADINGS ABOVE**

- **Definition ambiguity:** "petrol pump" in Indian usage means a retail outlet (RO), which sells both petrol and diesel. A candidate could read it as dispensers or nozzles, which gives about 5 to 7 times more (roughly 400k to 600k nozzles). The question file should fix the unit as retail outlets and accept a nozzle answer only if the candidate states that interpretation.
- **Scope ambiguity:** Should the count include standalone CNG stations (several thousand, run by city gas distributors), EV charging points, private captive consumer pumps (railways, defence, fleet depots, mines), and Kisan Seva Kendras (small rural oil company outlets)? The expected answer should include Kisan Seva Kendras and exclude captive pumps, CNG-only stations and EV chargers.
- **Reference figure:** I believe PPAC and oil company disclosures put retail outlets at roughly 85k to 90k around 2023/24, crossing about 100k around 2025. This should be verified before storing. I believe the split is roughly: Indian Oil about 40k; BPCL and HPCL about 22k each; Nayara about 6.5k; Jio-bp, Shell and others the rest. A candidate who recalls the company split is recalling, not estimating. Accept it as a sanity check only.
- **Trend matters:** The count has grown fast since 2018 (liberalised licensing, rural expansion) while throughput per outlet has fallen. A throughput figure from an older year combined with recent volume gives too low a count.
- **Which approach is most defensible:** Approach 1. Two of its four drivers (petrol and diesel volume) are publicly anchored, and it has the fewest steps. Approach 2 has the most assumptions and swings widely with the utilisation input. Approach 3 is the best business insight, because it explains why many outlets run far below capacity (access mandates and dealer economics). It is a strong second approach or triangulation, not a primary.
- **Acceptable answer band:** 60k to 120k with sound logic. Under 30k usually means peak capacity or registered-vehicle errors. Over 200k usually means nozzles were counted.
- **Segment split worth asking about:** About 60% of outlets are rural or semi-urban by count, but a far smaller share of volume. Stating this shows structural understanding.
- **Good follow-up questions for the interviewer:**
  - "How would EV adoption change this over 10 years?" (Two-wheeler transactions fall first, so rural coverage outlets are the most at risk.)
  - "Why don't metros have more pumps?" (Land cost and the high throughput each station can carry.)
