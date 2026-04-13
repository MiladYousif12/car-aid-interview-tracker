# RESUME.md — Car Aid Recruiting Pro

## Current Baseline: v5.1.1-Cloud (Supabase)
**Last Updated**: April 13, 2026

---

## How to Resume This Session

Tell the AI:
> "I am resuming the Car Aid Recruiting project at **v5.1.1-Cloud**. Read `.agent/current_state.md` and `.agent/session_log.md` to sync context. Data is now in Supabase."

Then open the project directory:
```
/Users/mike/.gemini/antigravity/scratch/car-aid-interview-tracker/
```

---

## Live Links

| Resource | URL |
|---|---|
| **Live App** | https://miladyousif12.github.io/car-aid-interview-tracker/ |
| **GitHub Repo** | https://github.com/MiladYousif12/car-aid-interview-tracker |
| **Supabase Dashboard** | https://supabase.com/dashboard/project/rziobgjwhhhpwjraunoj |
| **Latest Commit** | `67d9b9e` — v5.1.1 Cloud Sync Stability |

---

## Critical Context (Cloud Era)

| Topic | Summary |
|---|---|
| **Architecture** | **Supabase Cloud Backend**. No longer relies on `localStorage` for primary storage. |
| **Real-time** | Uses `sb.channel` to sync changes across devices instantly. |
| **Excel Export** | Must use range-based validation for Apple Numbers compatibility. |
| **Hired Tab** | Live auto-filtered view where `status === 'Hired'`. |
| **Sync Feedback** | Toasts show "⏳ Syncing..." during background cloud operations. |

---

## Open Loops to Pick Up Next

1. **Verify GitHub Pages** — Confirm the live URL reflects v5.1.1-Cloud.
2. **iPhone Testing** — Verify that adding a candidate on iPhone appears on Mac in real-time.

---

## Key Files

| File | Purpose |
|---|---|
| `index.html` | Entire app — UI, Supabase logic, styles, all-in-one |
| `.agent/current_state.md` | Version, architecture, feature map |
| `.agent/session_log.md` | Full history of moves to Cloud Sync |
| `RECOVER_AGENT.md` | Disaster recovery guide |

