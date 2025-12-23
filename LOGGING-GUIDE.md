# Logging Guide

This guide explains how to properly create daily logs and weekly reviews for your bug bounty journey. Following these guidelines ensures data consistency, makes your progress visible, and helps with analytics and reflection.

## Quick Reference

- **Daily Logs**: Record your hunting efforts each day
- **Weekly Reviews**: Reflect on progress, wins, and plan ahead every week
- **Location**: Save in `src/content/logs/` (YYYY-MM-DD_W{week}_{day}.md) and `src/content/reviews/` (p{phase}-week-{week}-review.md)
- **Quarters**: Q1 (Weeks 12-9), Q2 (Weeks 8-5), Q3 (Weeks 4-1), Q4 (Weeks 12-0)

---

## Daily Log: Do's & Don'ts

### ✅ DO's

1. **Create one file per day** with naming format: `YYYY-MM-DD_W{week}_{DAY}.md`
   - Example: `2025-12-01_W12_Mon.md`
   - This auto-sorts chronologically

2. **Include required frontmatter fields** (all mandatory):
   - `title`: Clear title describing your focus (e.g., "OWASP Testing & Platform Recon")
   - `date`: ISO format YYYY-MM-DD (must match filename)
   - `quarter`: Integer 1-4 (which quarter you're in)
   - `week`: Integer 1-12 (which week of that quarter)
   - `tags`: Array of relevant tags (e.g., ["recon", "api-security", "wordpress"])

3. **Log hunting time in minutes** (no decimals):
   - `daily_hacking`: Minutes spent on actual hunting activities
   - `daily_total`: Total productive minutes (hunting + learning + tooling)
   - Example: 180 for 3 hours, not 3.0 or "3 hours"

4. **Write meaningful descriptions**:
   - Summarize what you accomplished
   - List tools tested or vulnerabilities researched
   - Note platforms or apps reviewed
   - Include learnings or blockers faced
   - 2-3 sentences minimum, paragraph or bullet-point format both work

5. **Keep consistent phase tagging** (optional but recommended):
   - Use `phase: 1` for Foundation/Learning work
   - Use `phase: 2` for Active Hunting work
   - Use `phase: 3` for Deep Specialization work
   - Helps with weekly reviews and quarterly tracking

6. **Update time logs before midnight**:
   - Record your day while fresh
   - If you miss a day, backfill it
   - Better to have approximate accurate data than perfect data days late

### ❌ DON'Ts

1. **Don't use decimal minutes** ❌
   - ❌ `daily_hacking: 3.5` (3.5 hours)
   - ✅ `daily_hacking: 210` (210 minutes = 3.5 hours)

2. **Don't omit required fields**:
   - Missing `quarter`, `week`, or `daily_hacking` breaks stats
   - The page will render but stats won't calculate correctly

3. **Don't leave descriptions empty**:
   - ❌ `description: "Hunted today"`
   - ✅ `description: "Tested WordPress plugins for XSS on three targets. Found one reflected XSS in popularity plugin. Also researched OWASP A03:2021 for next week's focus."`

4. **Don't use invalid quarter/week combinations**:
   - ❌ `quarter: 2, week: 15` (week 15 doesn't exist in a quarter)
   - ❌ `quarter: 5` (only 1-4)
   - ✅ `quarter: 2, week: 8` (Q2 covers weeks 8-5)

5. **Don't create multiple logs for the same day**:
   - One filename per calendar day
   - If you hunted multiple sessions, combine into one daily entry

6. **Don't forget to add tags**:
   - Tags help you filter by topic and spot patterns
   - At least 1-2 tags per log
   - Examples: `["api-security", "wordpress", "recon", "cvss", "xss"]`

---

## Weekly Review: Do's & Don'ts

### ✅ DO's

1. **Create weekly reviews Friday or weekend** with naming format: `p{phase}-week-{week}-review.md`
   - Example: `p1-week-12-review.md`
   - `phase` = 1, 2, or 3 (which phase of the quarter)
   - `week` = actual week number (1-12)

2. **Include all required frontmatter fields**:
   - `title`: Meaningful title (e.g., "Week 12 Review: Foundation Building & First Report")
   - `date`: ISO format YYYY-MM-DD (the date you wrote the review, not Monday)
   - `quarter`: Integer 1-4
   - `week`: Integer 1-12
   - `weekProgress`: Integer 0-100 (percentage of weekly goals achieved)
   - `weekly_hacking`: Total hunting minutes for the week (sum of daily logs)
   - `weekly_total`: Total productive minutes for the week (sum of daily logs)

3. **Record achievements in `wins` array**:
   - List as bullet points with specific outcomes
   - Example: `["Found 2 XSS vulnerabilities in target.com", "Completed OWASP A01-A10 study", "Earned $150 bounty"]`
   - Each win should be concrete and measurable

4. **Document challenges in `challenges` array**:
   - Be honest about blockers and difficulties
   - Example: `["Rate limiting on API slowed progress", "Difficult to find valid targets in category", "Tool setup took longer than expected"]`
   - Use these to adjust next week's plan

5. **Plan next week in `nextWeekFocus` array**:
   - 2-3 specific goals for the upcoming week
   - Example: `["Deep dive into JWT vulnerabilities", "Test 5 mobile apps for insecure storage", "Complete bug bounty platform certifications"]`
   - Link these to your quarterly phase goals

6. **Write honest reflections in description**:
   - Summary of the week's progress
   - How it aligns with quarterly goals
   - What worked well, what didn't
   - Mindset observations (energy, focus, motivation)
   - 3-5 sentences minimum

### ❌ DON'Ts

1. **Don't make up time numbers**:
   - ❌ Round to exact hour multiples
   - ✅ Use actual minutes from your daily logs
   - If unsure, use estimated time from actual work done

2. **Don't leave array fields empty**:
   - ❌ `wins: []` (empty after a week of work)
   - ✅ `wins: ["Improved recon skills", "Found security misconfiguration", "Networked with community"]`
   - Even small wins count; capture them

3. **Don't set unrealistic week progress percentages**:
   - ❌ 150% progress (impossible)
   - ❌ 0% if you did some work
   - ✅ Estimate honestly: 65% achieved 3 of 5 goals

4. **Don't skip quarterly/week fields**:
   - These link your review to the quarterly roadmap
   - Missing them breaks the dashboard stats

5. **Don't use vague language**:
   - ❌ `wins: ["Got stuff done", "Made progress"]`
   - ✅ `wins: ["Discovered SQLi in admin panel of target.com", "Improved burp suite intruder skills"]`

6. **Don't write reviews days after the week ends**:
   - Best done Friday evening or Sunday morning while fresh
   - If delayed, fill in as soon as possible with today's date

---

## Field Reference Guide

### Logs (Daily Files)

| Field | Type | Required | Description | Examples |
|-------|------|----------|-------------|----------|
| `title` | string | Yes | Daily focus summary | "OWASP API Testing & Target Research" |
| `date` | YYYY-MM-DD | Yes | Date (must match filename) | "2025-12-01" |
| `quarter` | 1-4 | Yes | Which quarter | 1 (Foundation), 2 (Execution), 3 (Specialization), 4 (Mastery) |
| `week` | 1-12 | Yes | Week within quarter | 12, 8, 5, or 1 |
| `phase` | 1-3 | No | Learning/Active/Deep phase | 1 (Learning), 2 (Active), 3 (Deep) |
| `tags` | array | Yes | Topic tags | ["api-security", "wordpress", "xss"] |
| `daily_hacking` | minutes | Yes | Active hunting time in minutes | 180 (for 3 hours) |
| `daily_total` | minutes | Yes | Total productive minutes | 240 (includes learning) |
| `description` | string | Yes | Summary of activities | See examples below |

### Reviews (Weekly Files)

| Field | Type | Required | Description | Examples |
|-------|------|----------|-------------|----------|
| `title` | string | Yes | Review title | "Week 12 Review: Foundation & First Report" |
| `date` | YYYY-MM-DD | Yes | Date review written | "2025-12-07" (Friday or weekend) |
| `quarter` | 1-4 | Yes | Which quarter | 1, 2, 3, or 4 |
| `week` | 1-12 | Yes | Week within quarter | 12, 11, 10... 1 |
| `phase` | 1-3 | No | Learning/Active/Deep phase | 1, 2, or 3 |
| `weekProgress` | 0-100 | Yes | % of weekly goals met | 75 (achieved 3 of 4 goals) |
| `wins` | array | Yes | Achievements this week | ["Found XSS in main app", "$250 bounty earned"] |
| `challenges` | array | Yes | Obstacles faced | ["Rate limiting slowed progress", "Scope limited on targets"] |
| `nextWeekFocus` | array | Yes | 2-3 goals for next week | ["Deep dive into JWT", "Test 5 new targets"] |
| `weekly_hacking` | minutes | Yes | Total hunting minutes | 840 (3 hours × 7 days) |
| `weekly_total` | minutes | Yes | Total productive minutes | 1260 (including learning) |
| `description` | string | Yes | Weekly reflection | See examples below |

---

## Complete Example: Daily Log

```markdown
---
title: "OWASP Top 10 API Testing & Platform Reconnaissance"
date: 2025-12-01
quarter: 1
week: 12
phase: 1
tags: ["api-security", "owasp", "recon", "postman"]
daily_hacking: 180
daily_total: 240
description: "Spent morning learning OWASP API Security Top 10 through PortSwigger labs. Tested authentication bypass techniques on practice vulnerable APIs. Afternoon focused on scoping three potential targets on HackerOne—checked for API endpoints, tested rate limiting, and identified data exposure possibilities. Found interesting GraphQL endpoint on second target worth deeper investigation next week."
---

## Session Summary

- Completed OWASP A01 (Broken Object Level Authorization) lab
- Tested 3 target API endpoints for common vulnerabilities
- Identified potential GraphQL enumeration opportunity

## Next Steps

- Dive deeper into identified GraphQL endpoint
- Research OWASP A02 (Authentication) for better auth bypass techniques
- Continue daily consistent hunting practice
```

---

## Complete Example: Weekly Review

```markdown
---
title: "Week 12 Review: Foundation Building & Platform Mastery Begins"
date: 2025-12-07
quarter: 1
week: 12
phase: 1
weekProgress: 85
wins:
  - "Completed 8 PortSwigger labs (3 OWASP API, 5 authentication modules)"
  - "Submitted first valid bug report: Info disclosure on HackerOne target (not accepted yet, but technically valid)"
  - "Scoped 5 potential targets, 3 with significant scope"
  - "Set up local recon infrastructure (Burp, Postman, nuclei)"
  - "Earned $25 from valid report (low severity)"
challenges:
  - "Scope limitations on two large targets made testing difficult"
  - "Imposter syndrome: Second-guessing if submissions are actually valid"
  - "Tool learning curve took longer than expected (Burp configuration)"
nextWeekFocus:
  - "Deep dive into one high-potential API target"
  - "Complete OWASP Broken Authentication module + 3 practice labs"
  - "Submit 2 more reports (aiming for higher severity than this week)"
weekly_hacking: 900
weekly_total: 1260
description: "Strong foundation week. Despite some self-doubt, managed to find and submit actual vulnerabilities, which boosted confidence. Daily consistent 3-hour hunting sessions worked well—this pace is sustainable. The combination of structured learning (PortSwigger labs) + hands-on testing (target reconnaissance) proved effective. Feeling ready to move into execution phase, but want to solidify authentication and API security knowledge first. The first valid report, even at low severity, was a critical milestone psychologically—validates that the methodology works."
---

## Statistics This Week

- **Hunting Time**: 15 hours total
- **Reports Submitted**: 1 valid
- **Learning Sessions**: 8
- **Targets Scoped**: 5
- **Earnings**: $25

## Reflection

This week felt like turning a corner. Moving from pure learning into actual application proved both encouraging and humbling. The structure of having a clear phase system is helping stay focused.

## Adjustments for Next Week

- Keep the 3-hour daily minimum (proven sustainable)
- Pick ONE target to focus on deeply (instead of spreading across 5)
- Allocate 30 min/day for structured learning before hunting
```

---

## Common Mistakes to Avoid

### 1. **Inconsistent Time Recording**
- ❌ Forgetting to log times for 3 days, then estimating
- ✅ Log at end of each day or next morning while fresh

### 2. **Mixing Up Fields**
- ❌ Putting hours in `daily_hacking` field (should be minutes)
- ✅ Always use minutes: 180 for 3 hours

### 3. **Vague Descriptions**
- ❌ "Worked on bugs today"
- ✅ "Tested SQLi on admin panel, found parameterized query on login page. Researched OWASP A03 in afternoon."

### 4. **Missing Weekly Reviews**
- ❌ Skipping the week you didn't "find anything"
- ✅ Write reviews every week anyway—even learning and methodology refinement count

### 5. **Broken Quarter/Week Logic**
- ❌ Q1 Week 15, Q5 Week 8
- ✅ Q1 goes Weeks 12-9, Q2 goes Weeks 8-5, etc.

### 6. **Empty Tags**
- ❌ `tags: []`
- ✅ `tags: ["wordpress", "plugin-vulnerabilities", "xss"]`

### 7. **Unrealistic Progress Percentages**
- ❌ `weekProgress: 150` (exceeds 100%)
- ✅ `weekProgress: 85` (achieved most but not all goals)

---

## Tips for Success

1. **Set a daily reminder** to log your time (use phone alarm)
2. **Write during/immediately after hunting** while details are fresh
3. **Use consistent tag names** so filtering works well (create a personal tag list)
4. **Reference the quarterly goals** when setting weekly focus areas
5. **Be brutally honest** in reviews—challenges matter as much as wins
6. **Link everything back to your quarter phase** for coherent progress tracking
7. **Monthly review**: Once a month, read all 4 weekly reviews to spot patterns

---

## Questions?

If fields or formats are unclear, check the live pages:
- **Quarterly Reference**: `/quarters/q1/` through `/quarters/q4/`
- **Roadmap & KPIs**: `/roadmap/`
- **Your logs**: `/logs/` (shows all daily entries)
- **Your reviews**: `/reviews/` (shows all weekly reflections)

Consistent logging + honest reflection = visible progress and better decision-making.
