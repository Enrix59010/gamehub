# Plan: GameHub GH - The Ultimate Ghanaian Gaming Hub

GameHub GH is a centralized platform for Ghanaian gamers, primarily focusing on Free Fire, tournaments, recruitment, and community sharing. This implementation will focus on a high-fidelity frontend with mock data, as Supabase/database connectivity is not available in this session.

## Scope Summary
- **App Name:** GameHub GH (FireLink)
- **Target Audience:** Ghanaian gamers (Free Fire emphasis)
- **Key Features:**
    - Home Feed (Gaming News & Updates)
    - Tournament Listings & Registration (Mock)
    - Squad Finder (Team recruitment tool)
    - Guild Finder
    - Player Profiles (Free Fire stats)
    - Daily Redeem Code Alerts
    - Leaderboards (Player rankings)
    - Clip Sharing (Video/Image feed)
- **Tech Stack:** React, Tailwind CSS (v4), Lucide Icons, Shadcn UI components.

## Non-Goals
- Real-time chat (will be mocked)
- Actual video uploading/hosting (will use mock embeds/thumbnails)
- Real backend persistence or Supabase integration
- Real Free Fire API integration (stats will be mocked)

## Assumptions & Open Questions
- We assume a mobile-first design approach is best for this user base.
- **Question:** Should we focus on a specific color scheme? *Assumption: High-energy gaming colors (Deep purples, Electric oranges/reds).*

## Affected Areas
- **Frontend Components:** Complex UI components for cards, filters, and navigation.
- **Navigation:** Bottom tab bar for mobile feel + Side/Top navigation for desktop.
- **State Management:** React `useState` and `useEffect` for local session persistence (localStorage).

## Ordered Phases

### Phase 1: Foundation & Layout
- Set up routing and core layout.
- Implement a mobile-responsive navigation system (Bottom bar + Header).
- Configure theme with gaming-inspired colors.
- **Deliverables:** Working shell with navigation.

### Phase 2: Home Feed & News
- Create the Home Feed with "Daily Redeem Code" alerts.
- Gaming news cards and "Ghanaian Gaming Scene" updates.
- **Deliverables:** Functional landing feed.

### Phase 3: Squad Finder & Guilds (Core Feature)
- Build the "Squad Finder" tool with filters (Rank, Play Style, Language).
- Create the Guild Finder listing.
- **Deliverables:** Interactive recruitment tools.

### Phase 4: Tournaments & Leaderboards
- Design tournament listing cards and detail views.
- Implement player ranking tables (Leaderboards).
- **Deliverables:** Competitive scene UI.

### Phase 5: Clips & Profiles
- Clip sharing feed (Gallery style).
- User profile page with Free Fire stats (Mocked).
- Mock chat interface.
- **Deliverables:** Personal and community media features.

## Execution Handoff

**Plan status:** ready

**Dispatch order:**
1. frontend_engineer — Build the core application, features, and mock data logic.

**Per-agent instructions:**

### 1. frontend_engineer
- **Phases:** 1, 2, 3, 4, 5
- **Scope:** Complete build of GameHub GH using provided UI components. Focus on high-fidelity "Squad Finder" interaction and a mobile-first "App" feel. Use `localStorage` to simulate small bits of persistence (like "Joining" a tournament).
- **Files:**
    - `src/App.tsx` (Routing)
    - `src/components/layout/` (Navigation, Shell)
    - `src/components/features/` (SquadFinder, NewsFeed, TournamentCard)
    - `src/pages/` (Home, Tournaments, Squads, Profile, Leaderboard)
    - `src/data/mock.ts` (Static data for players, guilds, tournaments)
- **Depends on:** none
- **Acceptance criteria:**
    - Navigation works across all 5+ main screens.
    - Squad Finder filters correctly filter a mock list of players.
    - Responsive design looks like a native app on mobile.
    - The "Daily Redeem Code" alert is prominent.

**Do not dispatch:**
- supabase_engineer (Out of scope)
