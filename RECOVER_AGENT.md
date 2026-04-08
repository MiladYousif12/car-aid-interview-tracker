# 🛡️ Car Aid Agent: Disaster Recovery Guide

## Version: v3.4.0-Pro | Updated: April 8, 2026

If you ever lose this machine, get a new one, or reinstall your AI, follow these steps to restore 100% memory.

---

### Step 1 — Source of Truth (GitHub)
All code and context files are on GitHub:
👉 **https://github.com/MiladYousif12/car-aid-interview-tracker**

The live app runs at:
👉 **https://miladyousif12.github.io/car-aid-interview-tracker/**

---

### Step 2 — Restore on New Machine

1. Clone the repo:
   ```bash
   git clone https://github.com/MiladYousif12/car-aid-interview-tracker.git
   ```
2. Open the folder in Antigravity (or any AI assistant)
3. Use this **Magic Prompt**:
   > "I am resuming the Car Aid Recruiting project at v3.4.0. Read `.agent/agent_config.json` and `.agent/session_log.md` to sync context. Live app: https://miladyousif12.github.io/car-aid-interview-tracker/"

---

### Step 3 — Why This Works

The **`.agent/`** folder is a structured brain backup:

| File | Contains |
|---|---|
| `agent_config.json` | Version, architecture, features, Excel export logic, parser rules |
| `session_log.md` | Complete history of every change, decision, and rationale |
| `next_actions.md` | Backlog, open loops, pending decisions |

Together these 3 files give any AI agent full project context in one read.

---

### Step 4 — Restore Candidate Data

> [!IMPORTANT]
> Candidate data lives in **browser localStorage** — it is NOT in GitHub.
> If the browser is cleared, data is lost unless backed up.

To back up candidate data:
1. Open the app in the browser
2. Go to **📋 DATABASE** tab
3. Tap **📊 CSV EXPORT** to download a backup

To restore from CSV:
1. Tap **📥 IMPORT CSV** and select your backup file

---

### 💡 Pro Tip
Save these two links in iCloud Notes or Google Drive:
- GitHub: https://github.com/MiladYousif12/car-aid-interview-tracker
- Live App: https://miladyousif12.github.io/car-aid-interview-tracker/
