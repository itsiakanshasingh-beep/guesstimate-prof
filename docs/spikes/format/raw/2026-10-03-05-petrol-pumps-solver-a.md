# Petrol pumps in India: solver A

# Estimating the number of petrol pumps in India: three approaches

**Working answer: about 75,000 to 85,000 retail outlets.** The answers hold up because all three approaches land between 75,000 and 85,000 from different starting points. My recalled actual (PPAC, 2024 to 2025) is roughly 90,000 to 100,000 outlets, which sits above the central estimates.

## Approach 1: National fuel volume divided by throughput per pump

**1. Summary.** Take India's annual petrol and diesel use, keep the share sold at retail pumps, and divide by what an average pump sells in a year.

**2. Method:** demand-over-supply. **Base:** national annual consumption of petrol and diesel, in tonnes.

**3. Assumptions**
- A "petrol pump" means a retail outlet (a forecourt), not a nozzle.
- The pump sells both petrol (MS) and diesel (HSD).
- Time basis is annual.
- Bulk diesel sold directly to railways, industry and defence is excluded.

**4. Steps**
1. Petrol consumption ≈ 40 MMT, diesel ≈ 90 MMT per year.
2. Convert to litres using density (petrol 0.74 kg/L, diesel 0.83 kg/L). That gives about 54 bn L of petrol and 108 bn L of diesel.
3. Keep the retail share: about 99% of petrol and about 90% of diesel. Retail volume ≈ 150 bn L per year.
4. Average throughput per outlet ≈ 150 KL per month, or 1.8 ML per year.
5. Outlets = 150 bn ÷ 1.8 M.

**5. Drivers**

| Driver | Low | High | Unit | Type |
|---|---|---|---|---|
| Retail fuel volume | 125 | 165 | bn L/yr | (a) Documented. PPAC publishes consumption monthly and annually, MoPNG yearbook. Recent fiscal years. |
| Diesel retail share | 85 | 92 | % | Partly (a): OMC annual reports split retail and direct sales. Otherwise an assumption. |
| Average throughput | 120 | 200 | KL/month | (a) Partly. Dealer association and OMC disclosures give averages, but these are loosely reported. Treat as a semi-assumption. |

**6. Calculation**
- Central: 150 bn ÷ 1.8 M ≈ **83,000**
- Low: 125 bn ÷ 2.4 M ≈ 52,000
- High: 165 bn ÷ 1.44 M ≈ 115,000

**7. Catches**
- Tonnes need converting to litres, and the two densities differ.
- Total consumption includes bulk diesel that never reaches a pump.
- The average pump sells far less than a city flagship. Highway pumps can do over 500 KL a month while rural pumps do under 60 KL.
- Average and median throughput differ, because the distribution is skewed.

**8. Sanity check.** About 83,000 outlets for 1.4 bn people is about 1 per 17,000 people. That is plausible against the UK at roughly 1 per 8,000, given India's far lower car ownership.

**9. Common mistakes**
- Using a busy urban pump's throughput as the national average.
- Forgetting diesel, which is twice the volume of petrol.
- Mixing up monthly and annual figures.
- Applying one density to both fuels.

## Approach 2: Vehicle fleet refuelling transactions

**1. Summary.** Count daily refuelling events across the active vehicle fleet and divide by the transactions one pump handles in a day.

**2. Method:** demand-over-supply. **Base:** registered vehicles by segment. The method counts transactions instead of litres.

**3. Assumptions**
- Count active vehicles, not cumulative registrations, since de-registration is rare in India.
- Time basis is daily.
- CNG-only and electric vehicles are excluded.

**4. Steps**
1. Active fleet:
   - Two-wheelers ≈ 180M
   - Cars ≈ 35M
   - Three-wheelers ≈ 6M
   - Trucks and buses ≈ 8M
2. Refuelling interval:
   - Two-wheelers every 5 days, about 36M fills a day
   - Cars every 7 days, about 5M
   - Three-wheelers every 1.5 days, about 4M
   - Commercial vehicles every 1.5 days, about 5M
3. Total ≈ 50M fills per day.
4. Pump capacity:
   - About 5,000 L sold a day.
   - Average fill ≈ 8 L, a blend of a 3 to 4 L two-wheeler fill and a 100 L or larger truck fill.
   - That gives about 650 transactions per pump per day.
5. Outlets = 50M ÷ 650.

**5. Drivers**

| Driver | Low | High | Unit | Type |
|---|---|---|---|---|
| Registered vehicles | 300 | 350 | M | (a) Documented. MoRTH and the Vahan dashboard, yearly. |
| Active share | 60 | 80 | % | (b) Assumption |
| Two-wheeler refuel interval | 4 | 7 | days | (b) Assumption |
| Total fills | 35 | 65 | M/day | Derived |
| Transactions per pump | 500 | 900 | /day | (b) Assumption |

**6. Calculation**
- Central: 50M ÷ 650 ≈ **77,000**
- Low: 35 ÷ 900 ≈ 39,000
- High: 65 ÷ 500 ≈ 130,000

**7. Catches**
- Registered vehicles are not active vehicles.
- Two-wheelers dominate the transaction count but not the volume.
- Peak and average differ. Pumps are sized for peak hours, so daily average utilisation may be about 40% of what the nozzles could handle.

**8. Sanity check**
- Check 1: 650 transactions × 8 L ≈ 5,200 L a day, about 156 KL a month. This should match Approach 1's throughput. It is a useful internal consistency check.
- Check 2: 650 transactions a day ≈ 40 an hour over 16 hours. Across 6 to 8 nozzles that is believable.

**9. Common mistakes**
- Using registrations as the active fleet.
- Assuming every vehicle refuels daily.
- Ignoring trucks, which drive volume.
- Computing nozzle capacity at full utilisation.

## Approach 3: Geographic coverage (urban density plus rural catchment)

**1. Summary.** Pumps exist to cover space as well as demand. Estimate urban pumps per head and rural pumps per area served.

**2. Method:** none of the three labels fits. This is a network coverage and density benchmark, not throughput or demand. **Base:** the urban/rural population split and India's land area.

**3. Assumptions**
- Rural siting is driven by maximum travel distance. Policy pushes rural outlets such as Kisan Seva Kendras.
- Highway pumps fall within the rural area count.

**4. Steps**
1. Urban population ≈ 500M, at 1 pump per 15,000 people ≈ 33,000.
2. Inhabited and served non-urban area ≈ 2.5M km². This excludes desert, high mountain and forest from India's 3.29M km².
3. Effective catchment per rural or highway pump ≈ 60 km², roughly an 8 to 10 km reach with overlap. That gives about 42,000.
4. Total ≈ 75,000.

**5. Drivers**

| Driver | Low | High | Unit | Type |
|---|---|---|---|---|
| Urban population | 450 | 550 | M | (a) Documented. Census 2011 gives 31% urban. Projections around 36% come from UN World Urbanization Prospects. |
| People per urban pump | 10,000 | 20,000 | people | (b) Assumption |
| Served rural area | 2.0 | 2.8 | M km² | (b) Assumption, anchored on total land area, which is (a). |
| Area per rural pump | 40 | 80 | km² | (b) Assumption |

**6. Calculation**
- Central: 33,000 + 42,000 ≈ **75,000**
- Low: 22,500 + 25,000 ≈ 47,000
- High: 55,000 + 70,000 ≈ 125,000

**7. Catches**
- Highway outlets get counted twice, once as highway and once as rural.
- The rural area figure is very sensitive to what counts as "served" land.

**8. Sanity check.** National highways plus state highways run about 3.2 lakh km. At one pump every 8 to 10 km, that is about 35,000, which is consistent with the rural share above.

**9. Common mistakes**
- Using total land area including uninhabited land.
- Applying an urban density figure to the whole country.
- Counting highway and rural pumps separately and then adding them.

## Things I needed to record that don't fit the headings above

- **What "petrol pump" means:**
  - Most defensible reading: a retail outlet or forecourt.
  - Alternatives: dispensing units, roughly 4 to 6 per outlet and over 400,000 nationally, or nozzles, roughly 8 to 12 per outlet. The answer changes by about 5 to 10x.
  - Scope questions:
    - Do outlets selling only CNG count? Excluded by default.
    - Do CNG dispensers at existing petrol outlets count? They do not add outlets.
    - Do in-house captive pumps for fleets, the army or railways count? Excluded.
- **Stock vs flow.** The question asks for a stock. If an interviewer asks about growth, India added outlets fast after 2018, by about 5% a year.
- **Recall shortcut by operator:**
  - IOCL ≈ 37,000 to 40,000
  - BPCL ≈ 21,000 to 23,000
  - HPCL ≈ 21,000 to 23,000
  - Nayara ≈ 6,500
  - Jio-bp ≈ 2,000
  - Shell ≈ 350
  - Total ≈ 90,000 or more.

  This is recall, not estimation, but it is a valid triangulation if the interviewer allows it.
- **Which approach is most defensible:**
  - Approach 1 is the most defensible. Its base is a single documented national figure, and only one soft driver, throughput, does the work.
  - Approach 2 has the most assumptions, but it gives the strongest consistency check on Approach 1 because it reaches throughput from a separate starting point.
  - Approach 3 is the only one that captures the policy reason behind low-volume rural pumps. It explains why the true count exceeds pure economics.
- **Bias.** All three central estimates (75,000 to 85,000) sit below the recalled actual (90,000 to 100,000). The likely cause is that average throughput is lower than intuition suggests, around 120 to 140 KL a month, because the network carries many small rural pumps. That is a useful teaching point.
- **Segment split worth storing:**
  - Rough share by location: urban 35 to 40%, highway 20 to 25%, rural 35 to 45%.
  - Rough share by volume: diesel about 2/3 of litres, petrol about 1/3.
  - Rough share of transactions: two-wheelers about 70%.
- **Common framing trap.** Candidates jump to "1 per X people" with no reasoning behind X. Approach 3 is acceptable only if the density figure is justified separately for urban and rural areas.
