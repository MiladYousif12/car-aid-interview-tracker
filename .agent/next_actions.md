# Next Actions: Car Aid Recruiting Pro v3.4.0

## 🔴 Open Loop — Verify with Sal
**Priority**: Confirm that Sal's Numbers app now shows the dropdown on **every row** after the v3.3.6 range-based validation fix.
- Have Sal download a fresh Excel from the app
- Open in Apple Numbers on iPhone or iPad
- Tap yellow STATUS cell → tap again → confirm dropdown appears on ALL rows
- Report back: does it work on first row only, or all rows?

---

## 🟡 Pending Decisions

| Item | Status |
|---|---|
| **Hired tab — export?** | Should hired candidates be exportable separately (PDF/CSV of just hired list)? |
| **Interview date on Hired card** | Currently shows `c.date` (interview date). Should we track a separate "Date Hired" field? |
| **Status "Offer Made" pipeline** | Should "Offer Made" also appear on the Hired tab, or only confirmed "Hired"? |

---

## 🟢 Ready to Build (Approved Backlog)

### 1. Hired Tab Export
- Add "Download Hired List (CSV)" button on the Hired page
- Simple filter of DB and CSV export, same pattern as main CSV export

### 2. SMS Link Integration
- Add `sms:+1XXXXXXXXXX?body=Hi%20[Name]%2C%20...` link on candidate cards
- Pre-written template for "Interview Confirmed" and "Hired" messages
- One-tap text from iPhone

### 3. Batch "Send to Sal" Feature
- Checkbox on each Database card
- "Send Selected to Sal" button generates a formatted list for clipboard/SMS

### 4. Shop Filter Dropdown
- Add a "Filter by Shop" dropdown above the Database list
- Works alongside the existing Search bar

### 5. "Date Hired" Field
- Separate from "Interview Date"
- Auto-populates with today's date when status is changed to "Hired"
- Appears on Hired card below the candidate name

---

## 📌 Resumption Instructions

Tell the AI:
> "I am resuming the Car Aid Recruiting project at v3.4.0. Read `.agent/agent_config.json` and `.agent/session_log.md` to sync context. Latest commit is `2e23661`. Live app: https://miladyousif12.github.io/car-aid-interview-tracker/"

**Do NOT re-explain:**
- The 100% local-first architecture
- The localStorage key (`caraid_candidates_v3_1`)
- The Excel validation fix rationale
- The Hired tab implementation

All of that is documented in `session_log.md` and `agent_config.json`.
