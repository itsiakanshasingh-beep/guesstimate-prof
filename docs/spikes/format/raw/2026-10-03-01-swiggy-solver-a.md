# Swiggy delivery partners in Mumbai: solver A

# Swiggy Delivery Partners in Mumbai: Three Independent Approaches

All three approaches are worked from general knowledge, with no sources consulted. They land between about 50,000 and 55,000 monthly active partners.

---

## APPROACH 1: Orders divided by partner productivity

**1. Summary.** Estimate the orders Swiggy handles in Mumbai each day. Divide by the orders one partner completes in a working day. Then convert daily active partners into monthly active partners.

**2. Method:** demand-over-supply. **Starting base:** Mumbai population.

**3. Clarifying assumptions**
- Mumbai means the urban agglomeration, about 2 crore people (not the full MMR).
- Food delivery and Instamart are both included, because they share one partner pool.
- The unit is monthly active partners, meaning anyone who delivered at least once in the month.

**4. Steps**
1. Population × share who use food apps = app users.
2. App users × Swiggy share = Swiggy users.
3. Swiggy users × orders per month ÷ 30 = daily food orders.
4. Add Instamart daily orders.
5. Total daily orders ÷ orders per partner per day = daily active partners.
6. Daily active partners ÷ share of the month a typical partner works = monthly active partners.

**5. Drivers**

| Driver | Low | High | Unit | Type |
|---|---|---|---|---|
| Population | 1.8 cr | 2.2 cr | people | (a) Census and urban agglomeration estimates; latest full census 2011, projections since |
| Food-app users | 20% | 30% | % of population | (b) assumption |
| Swiggy share of Mumbai food delivery | 40% | 50% | % | (a) Broker and industry reports give the national split with Zomato; no city figure |
| Orders per user | 3 | 5 | per month | (b) assumption |
| Instamart orders | 1 | 2.5 | lakh per day | (b) assumption, anchored on national quick-commerce volumes in Swiggy quarterly letters |
| Orders per partner | 10 | 18 | per active day | (b) assumption |
| Days worked | 50% | 75% | % of month | (b) assumption |

**6. Calculation**
- 2 cr × 25% × 45% × 4 ÷ 30 = 3 lakh food orders per day.
- Plus 1.5 lakh Instamart = 4.5 lakh orders per day.
- 4.5 lakh ÷ 14 orders per partner ≈ 32,000 daily active partners.
- 32,000 ÷ 0.6 ≈ **53,000 monthly active partners.**
- Range: low ≈ 18,000 (2.5 lakh orders, 18 per day, 0.75); high ≈ 140,000 (7 lakh orders, 10 per day, 0.5).

**7. Catches**
- Batching (two or more orders per trip) raises orders per partner.
- Order volume swings with weekends and monsoon season.
- Daily active partners are not the same as monthly active partners (stock versus flow).

**8. Sanity check.** At peak hour, about 15% of daily orders (roughly 67,000) need about 30,000 partners online if each partner does 2 to 2.5 trips an hour. That roughly matches the daily active figure.

**9. Common mistakes**
- Stopping at daily active partners and reporting that as the answer.
- Leaving out Instamart.
- Using an 8-hour full-time shift for everyone, which ignores part-timers.

---

## APPROACH 2: Share of Swiggy's national partner base

**1. Summary.** Take Swiggy's national count of active partners and apply Mumbai's share of orders.

**2. Method:** none of the three labels fits. This is a ratio allocation of a published company-wide total. **Starting base:** Swiggy's national partner count.

**3. Clarifying assumptions**
- The national figure is "average monthly transacting partners".
- Mumbai's share of partners equals its share of orders, corrected for productivity.

**4. Steps**
1. National monthly transacting partners.
2. Multiply by Mumbai's share of national orders.
3. Adjust for Mumbai's partner productivity compared with the national average.

**5. Drivers**

| Driver | Low | High | Unit | Type |
|---|---|---|---|---|
| National partners | 4 | 6 | lakh | (a) The 2024 IPO prospectus and later shareholder letters report transacting delivery partners |
| Mumbai share of orders | 7% | 13% | % | (b) assumption; the top 8 metros are known to dominate, but city splits are not published |
| Productivity factor | 0.9 | 1.1 | × | (b) assumption |

**6. Calculation**
- 5 lakh × 10% × 1.0 = **50,000.**
- Range: low ≈ 25,000; high ≈ 86,000.

**7. Catches**
- Some disclosures report registered partners, others transacting partners; check which one you are using.
- Mumbai has high order density and short trips, which raises productivity. Traffic offsets some of that.

**8. Sanity check.** National partners × orders per partner per day should come close to Swiggy's reported daily national order volume.

**9. Common mistakes**
- Using Mumbai's share of India's population (about 1.5%) instead of its share of orders.
- Treating a figure like "5 lakh registered" as active partners.

---

## APPROACH 3: Build up from delivery hubs

**1. Summary.** Count the physical hubs: Instamart dark stores, and the zones the food business dispatches from. Multiply each by the partners attached to it.

**2. Method:** supply-side (capacity). **Starting base:** one dark store and one food delivery zone.

**3. Clarifying assumptions**
- Instamart riders are mostly tied to a single store.
- Food partners log in to one home zone.
- "Peak online" means the maximum number of partners logged in at once.

**4. Steps**
1. Dark stores × riders per store per day = daily active Instamart riders.
2. Food zones × peak online partners per zone = peak concurrent food partners.
3. Peak concurrent ÷ share of daily active partners online at peak = daily active food partners.
4. Add the two pools, then convert daily active partners into monthly active partners (as in Approach 1).

**5. Drivers**

| Driver | Low | High | Unit | Type |
|---|---|---|---|---|
| Mumbai dark stores | 80 | 150 | stores | (a) News coverage and company store counts, 2024 to 2025 |
| Riders per store | 25 | 60 | per day | (b) assumption |
| Food zones | 70 | 120 | zones | (b) assumption |
| Peak online per zone | 120 | 250 | partners | (b) assumption |
| Share of daily active online at peak | 55% | 75% | % | (b) assumption |
| Days worked | 50% | 75% | % of month | (b) assumption |

**6. Calculation**
- Instamart: 120 stores × 40 riders = 4,800 per day.
- Food: 100 zones × 200 = 20,000 peak concurrent; ÷ 0.65 ≈ 31,000 per day.
- Total ≈ 36,000 daily active; ÷ 0.65 ≈ **55,000 monthly active partners.**
- Range: low ≈ 15,000; high ≈ 120,000.

**7. Catches**
- The number of food zones is not public and is the weakest driver.
- Partners can move between food and Instamart, which risks double counting.

**8. Sanity check.** Total partners ÷ restaurant count should give a plausible ratio. With about 35,000 Swiggy restaurants in Mumbai, 55,000 partners is about 1.5 per restaurant.

**9. Common mistakes**
- Counting store staff (pickers and packers) as riders.
- Treating peak online as the total partner count.

---

## THINGS I NEEDED TO RECORD THAT DON'T FIT THE HEADINGS ABOVE

- **"Delivery partners" is ambiguous.** It can mean registered (onboarded, often 2 to 3 times the active count because churn is high), monthly active, daily active, or peak online. A question file should store all four definitions, with rough ratios: registered ≈ 2.5 × monthly active; monthly active ≈ 1.6 × daily active; daily active ≈ 1.5 × peak online.
- **"Drivers" in the wording is a misnomer.** Partners ride two-wheelers, bicycles or EVs. Cyclists still count.
- **Geography.** The answer changes depending on whether Mumbai means the city proper, the urban agglomeration, or the MMR (adds Thane, Navi Mumbai, Kalyan). The MMR adds roughly 25 to 40%.
- **Segment split.** Food versus Instamart versus Genie or other services. Instamart riders are a growing share (about 15 to 25%). Earlier frameworks that ignore quick commerce will undercount.
- **Multi-homing.** Many partners also ride for Zomato, Zepto or Blinkit. Partners "working for Swiggy" overlap with other platforms, so city-wide gig supply is not the sum of each platform's count.
- **Time basis.** Partner counts rise in festive months and in the monsoon (demand surge, incentive drives).
- **Which approach is most defensible.** Approach 1 is the standard interview answer and shows the full logic. Approach 2 has the best anchor, a publicly disclosed national figure, so it makes a strong cross-check, but its city share is an assumption. Approach 3 shows operational insight but relies on a weak, unpublished zone count. The best answer runs Approach 1 and triangulates with Approach 2.
- **Convergence.** All three land at about 50,000 to 55,000 monthly active partners, so a defensible stated answer is about 50,000 monthly active, about 30,000 to 35,000 on a given day, and over 100,000 registered.
- **Biggest swing drivers.** Orders per partner per day, and the definition of an active partner. Interviewers usually probe these two.
