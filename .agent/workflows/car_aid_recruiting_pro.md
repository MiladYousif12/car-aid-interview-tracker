---
description: Car Aid Recruiting Pro — resume workflow with full context
---

## Car Aid Recruiting Pro Workflow

This workflow manages the Car Aid Interview Tracker Pro project. All state, decisions, and outputs are stored in `.agent/` inside the project directory.

### Project Paths

- **Project folder**: `/Users/mike/.gemini/antigravity/scratch/car-aid-interview-tracker/`
- **Live app**: https://miladyousif12.github.io/car-aid-interview-tracker/
- **GitHub repo**: https://github.com/MiladYousif12/car-aid-interview-tracker

### State Files (Read These First on Resume)

| File | Purpose |
|---|---|
| `.agent/current_state.md` | Single-file snapshot: summary, features, open loops, backlog |
| `.agent/agent_config.json` | Architecture, version, Excel logic, parser rules |
| `.agent/session_log.md` | Full history of all decisions and changes |
| `.agent/next_actions.md` | Prioritized backlog with pending decisions |

### Resume Steps

// turbo
1. Read the four state files above to fully sync context
// turbo
2. Confirm current version matches `agent_config.json` version field
3. Ask the user which open loop or backlog item to work on next
4. When work is complete, update all four state files with new decisions, changes, and next actions
// turbo
5. Commit and push all changes: `git add -A && git commit -m "[version]: [description]" && git push origin main`

### State Update Protocol (Run After Every Session)

After completing any work, always update these files before ending:

1. **`current_state.md`** — overwrite with latest snapshot
2. **`session_log.md`** — append new section with changes made
3. **`next_actions.md`** — update open loops and backlog
4. **`agent_config.json`** — bump version and update `last_maintenance` and `maintenance_notes`

Then commit: `git add -A && git commit -m "chore: persist [version] state" && git push origin main`

### Key Decisions Already Made (Do Not Re-Debate)

- Architecture is **100% local-first** (`localStorage`). No server, no sync relay, no Google Sheets.
- Excel validation uses **one range-based rule** (`sheet.dataValidations.add`), NOT per-cell loop.
- Hired tab is a **live filter** of the main DB — no separate data store.
- Storage key is locked to `caraid_candidates_v3_1` for backward compatibility.
