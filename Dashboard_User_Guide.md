# Fashion-Forever-Trends Meta Ads Executive Dashboard
## User Guide & Feature Documentation

---

## 📊 Dashboard Overview

The Executive Dashboard is a real-time compliance and performance monitoring tool for Meta Ads campaigns. It displays:
- Real campaign data from your Fashion-Forever-Trends account
- Protocol compliance scoring
- Issue tracking with severity levels
- Expected vs. actual setup comparison
- Actionable recommendations

---

## 🎯 Key Features

### 1. **KPI Dashboard (Top Section)**
Shows 5 critical metrics at a glance:

| Metric | What It Means | Your Current | Target |
|--------|--------------|--------------|--------|
| **Total Spend** | Amount invested in all campaigns | ₹18.2L | Varies |
| **Overall ROAS** | Revenue generated per rupee spent | 1.32x | 1.5x |
| **Total Reach** | Number of unique people reached | 4.3M | Maximize |
| **Avg CPC** | Cost for each click | ₹22.84 | ₹25-35 |
| **Compliance Rate** | % of campaigns meeting all requirements | 20% | 100% |

**How to Use:** These KPIs give you a quick snapshot. Red/yellow highlights indicate areas needing attention.

---

### 2. **Expected Setup vs Actual Setup (Card Section)**

Shows three categories of setup requirements:

#### **Audience Setup**
✅ Shows if your audience configuration matches best practices
- Age Range: 25-54 (Fashion-Forever-Trends target)
- Gender: Female/All
- Location: India
- Targeting Expansion: Yes (allows Meta to find similar users)

**What to check:** All should have green checkmarks. If any are yellow/red, your audience targeting needs adjustment.

#### **Bidding Strategy**
✅ Shows if your optimization is correctly configured
- Strategy: Highest Volume (maximize conversions)
- Optimization: Maximize Conversions
- Placements: Multi-channel (Facebook, Instagram, Audience Network)
- Pixel Tracking: Active (measures what users do after clicking)

**What to check:** Ensure all are green. This ensures Meta's algorithm is working optimally.

#### **Performance Targets**
⚠️ Shows actual metrics vs. targets
- Min ROAS: Currently 1.32x (Target: 1.3x) ✓
- CPC: Currently ₹22.84 (Target: ₹25-35) ✓
- Avg CTR: Currently 1.37% (Target: ≥1.2%) ✓

**What to check:** Green = you're on track. Yellow = close to threshold. Red = needs immediate action.

---

### 3. **Protocol Compliance Summary Grid**

Shows 6 key protocols and compliance status:

```
📊 Protocol Compliance Summary

[Green] AUDIENCE SETUP            [Green] CONVERSION TRACKING
Status: PASSED (5/5 campaigns)   Status: PASSED (5/5 campaigns)

[Yellow] TARGET ROAS             [Red] MINIMUM DAILY BUDGET
Status: PARTIAL (2/5 campaigns)  Status: FAILED (1/5 campaigns)

[Yellow] CPC TARGET              [Yellow] CTR PERFORMANCE
Status: PARTIAL (3/5 campaigns)  Status: PARTIAL (2/5 campaigns)
```

**How to Read:**
- 🟢 **Green/Passed:** All campaigns meeting this protocol
- 🟡 **Yellow/Partial:** Some campaigns failing, needs attention
- 🔴 **Red/Failed:** Critical - requires immediate action

**What to Click:** Click any protocol card to see which campaigns fail that specific requirement.

---

### 4. **Campaign Performance & Compliance Audit Cards**

Each campaign shows a card with:

#### **Campaign Header (Always Visible)**
```
Campaign Name                    [Compliance Score]  [Status Badge]
Started: Date • Spend: ₹Amount • Purchases: Number

ROAS: X.XXx    CPC: ₹XX    CTR: X.XX%
```

**The Header Shows:**
- Campaign name with start date
- Overall compliance percentage (0-100%)
- Status badge: Green (Pass) or Red (Issues)
- Key metrics: ROAS, CPC, CTR
  - **Green metrics:** Meeting targets
  - **Amber metrics:** Close to threshold
  - **Red metrics:** Below acceptable

**How to Use:** 
1. **Scan metrics quickly** - Colored numbers show at-a-glance status
2. **Identify problems** - Red badges show problematic campaigns
3. **Click to expand** - Arrow expands card to see detailed issues

---

### 5. **Detailed Issue View (When Expanded)**

Click any campaign to expand and see detailed issues:

#### **For Compliant Campaigns:**
```
✅ All setup requirements and performance targets are met.
   Campaign is operating optimally.
```

#### **For Non-Compliant Campaigns:**
Shows each issue with:

**Issue Title** [SEVERITY BADGE]
- Example: "ROAS Below Target" [CRITICAL]

**What Currently Happens vs. What Should Happen:**
```
CURRENTLY DELIVERED              EXPECTED SETUP
₹49.48                          ≤ ₹35
(What you're actually spending   (What the protocol says you should spend)
per click right now)
```

**Protocol Requirement:**
"Maximum acceptable CPC: ₹35 for bundle products"
This is the rule from your campaign setup.

**Business Impact:**
"Cost per click is 41% above target. Getting low-quality traffic. Profitability at risk."
This explains why it matters - why is it costing more? Is it affecting sales?

**Recommended Fix & Setup Change:**
"Review pixel implementation, test new audiences, test different products"
Specific actions you should take.

---

### 6. **Compliance Score Explanation**

Each campaign gets a score from 0-100%:

| Score | Color | Meaning | Action |
|-------|-------|---------|--------|
| 85-100% | 🟢 Green | Excellent - keep doing what you're doing | Monitor only |
| 70-84% | 🟡 Amber | Good but needs optimization | Plan improvements |
| 50-69% | 🟠 Orange | Multiple issues - needs attention | Quick fixes needed |
| Below 50% | 🔴 Red | Critical issues - urgent action needed | FIX IMMEDIATELY |

**How it's calculated:**
- Each protocol (ROAS, CPC, CTR, Budget, etc.) is scored
- If you meet the target: +20 points
- If you miss by small amount: +10 points
- If you miss significantly: +0 points
- Average of all protocols = Compliance Score

---

## 🚨 Color Code Guide

Throughout the dashboard, colors indicate status:

| Color | Meaning | Action |
|-------|---------|--------|
| 🟢 Green | ✅ Compliant / Performing well | Monitor, can scale |
| 🟡 Amber | ⚠️ Warning / Below target but not critical | Optimize soon |
| 🔴 Red | ❌ Critical / Non-compliant | Fix immediately |
| ⚪ Gray | ℹ️ Informational | FYI only |

---

## 📈 Understanding the Real Data

### Campaign 1: PS | SSTLAL | 08-Nov-25
**Status:** ⚠️ WARNING - 65% Compliant
- **What's Working:** Good CTR (1.73%), reasonable CPC (₹12.93)
- **What's Not:** ROAS is 1.38x but should be 1.5x (8% short)
- **Action:** Small tweaks to optimize value-based bidding

### Campaign 2: PS | AD+CR | SINP - 08-Apr-26
**Status:** ✅ PASSING - 92% Compliant (YOUR BENCHMARK)
- **Why It Works:** Best ROAS (1.54x), good budget allocation (₹20K daily)
- **Action:** SCALE THIS. Use as template for other campaigns.
- **Key Success Factors:**
  - Adequate daily budget allows Meta to optimize
  - Audience targeting is clearly effective
  - Creative resonates with target audience

### Campaign 3: PS | AD+CR+NCR | 08-Jan-26
**Status:** 🔴 CRITICAL - 58% Compliant
- **Main Issues:**
  1. Budget too low (₹1,500 vs. required ₹2,000) - 25% short
  2. CPC too high (₹36.86 vs. target ₹25-30) - 23% over
- **Why:** Low budget prevents Meta's algorithm from optimizing effectively
- **Action:** INCREASE BUDGET TO ₹2,500 IMMEDIATELY
  - Expected result: CPC should drop, conversions should improve

### Campaign 4: PS | SINP | 09-Apr-26
**Status:** 🔴 CRITICAL - 45% Compliant
- **Main Issues:**
  1. ROAS critically low (1.06x vs. minimum 1.3x) - 18% below acceptable
  2. CTR very low (0.78% vs. industry avg 1.2%) - 35% below benchmark
- **Why:** Getting lots of impressions (6.3M) but very few conversions (89 purchases)
- **Red Flag:** This suggests either:
  - Your creative (images/videos) aren't compelling
  - Your audience targeting is too broad
  - People seeing your ads aren't interested in what you're selling
- **Action:** PAUSE THIS CAMPAIGN immediately
  - It's generating poor returns and wasting budget
  - After pausing, completely refresh creative before relaunching

### Campaign 5: PS : INCLBS : 12-May-26
**Status:** 🔴 CRITICAL - 52% Compliant
- **Main Issue:**
  - CPC extremely high (₹49.48 vs. target ₹35) - 41% over limit
- **Why:** Very few conversions (8 from 32K reach) despite decent CTR
- **Red Flag:** Pixel might not be tracking correctly, or audience isn't converting
- **Action:** INVESTIGATE IMMEDIATELY
  - Check if conversion pixel is firing properly
  - Test completely different audiences
  - If not fixed within 2 days, PAUSE

---

## 🎯 How to Use This Dashboard Daily

### **Monday Morning (Weekly Review):**
1. Check the "Overall Compliance Rate" at the top
2. Scan the "Campaign Performance" cards
3. Any Red cards? → Expand and read issues
4. Any Yellow cards? → Note for optimization this week

### **Wednesday (Mid-Week Optimization):**
1. Look at the "Protocol Compliance Summary"
2. Focus on whichever protocol has most failures
3. Check if any metrics have worsened since Monday
4. Identify quick wins (like Campaign 3's budget increase)

### **Friday (Planning Next Week):**
1. Compare this week's metrics to last week
2. Have issues improved? Worsened? Stayed same?
3. Identify what worked and what didn't
4. Plan next week's optimization priorities

### **When New Campaign Launches:**
1. Wait 2-3 days of data
2. Check where it scores on compliance
3. Identify any early issues
4. Make quick adjustments before full roll-out

---

## ⚡ Quick Action Matrix

**When you see RED metrics:**

| Metric | Likely Cause | Quick Fix |
|--------|-------------|-----------|
| Low ROAS | Poor audience or creative | Check pixel tracking |
| High CPC | Wrong audience targeting | Narrow audience to high-intent users |
| Low CTR | Weak creative | Update images/videos |
| Low Budget | System limit | Increase budget |
| High CPM | Poor targeting | Use lookalike audiences |

**When you see YELLOW metrics:**

| Metric | Action |
|--------|--------|
| ROAS slightly low | Small optimization: test audience tweaks |
| CPC slightly high | Medium optimization: test new creative |
| CTR slightly low | Medium optimization: refresh ad visuals |

---

## 📊 Key Takeaways for Fashion-Forever-Trends

### **Today (Immediate - Next 48 Hours):**
- ✅ Increase Campaign 3 budget ₹1,500 → ₹2,500
- ❌ Pause Campaign 4 (1.06x ROAS is unsustainable)
- ❌ Pause Campaign 5 (₹49.48 CPC way too high)
- ✅ Scale Campaign 2 from ₹20K → ₹25K daily

### **This Week:**
- Refresh creative for Campaign 1 (currently 1.38x, target 1.5x)
- Fix audience targeting for Campaign 4 if relaunching
- Monitor Campaign 3 after budget increase

### **This Month:**
- Establish daily dashboard review routine
- Implement A/B testing framework
- Create lookalike audiences from best customers
- Expected outcome: Portfolio ROAS improve from 1.32x to 1.5x+

---

## 💡 Pro Tips

1. **The Compliance Score is not the full story**
   - 92% compliance is great, but check which 8% isn't met
   - 58% compliance might be fixable with just one change

2. **Red doesn't always mean pause immediately**
   - Some red items are warnings (need optimization)
   - Some red items are critical (pause immediately)
   - Check the severity badge to know which

3. **Campaign 2 is your benchmark**
   - If you're unsure about targeting, use Campaign 2's setup
   - 1.54x ROAS is your current best
   - Understand why it works better than others

4. **The setup matters more than you think**
   - Budget below ₹2,000/day makes it hard for Meta to optimize
   - Audience expansion "Yes" usually better than "No"
   - Highest volume bidding works better than manual CPC setting

5. **Watch for trends, not single days**
   - One bad day doesn't mean campaign is bad
   - Look at 7-day averages
   - Seasonal trends matter (fashion has peaks)

---

## 🔗 Linked Resources

- 📄 **Full Audit Report:** FFT_Compliance_Audit_Report.md
- 📊 **Issues Tracking:** FFT_Campaign_Compliance_Issues.csv
- 📈 **Setup Details:** setup_of_running_campaign.xlsx
- 📉 **Campaign Data:** Fashion-Forever-Trends-Private-Limited-Campaigns.xlsx

---

**Dashboard Last Updated:** May 22, 2026
**Data Refresh Frequency:** Real-time (daily data pulls)
**Next Recommended Review:** May 29, 2026

For questions or help interpreting metrics, refer to the Compliance Audit Report for detailed explanations.
