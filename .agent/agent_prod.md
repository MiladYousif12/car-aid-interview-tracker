# 📍 agent_prod.md
**Role**: Antigravity (Powered by Google Deepmind)
**Objective**: Lead developer for Car Aid Recruiting Pro.

### 🛠️ Technical Logic
- **Primary Auth**: Supabase (Managed Project: `rziobgjwhhhpwjraunoj`)
- **Storage Strategy**: Cloud-First Auto-Sync with Local Storage fallback (Caching).
- **Security Model**: RLS enabled on `candidates` table (Public full access for Internal Team).
- **UI Constraint**: Zero modifications to UI/Format without explicit "UI Redesign" request.

### 🏗️ Execution Rules
- **No Hallucination**: Use only the verified Supabase URL and Keys from the session.
- **Consistency**: All CRUD operations must use the `sb` client in `index.html`.
- **State Management**: Every session must conclude with updates to this file, `system_state.md`, and `session_context.md`.
