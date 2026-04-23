# Orbit — Product Vision & Architecture Document

> *"Cultivate your focus. Plan deeper days."*

---

## Table of Contents

1. [What is Orbit?](#what-is-orbit)
2. [The Problem We Solve](#the-problem-we-solve)
3. [Target Audience](#target-audience)
4. [Current Tech Stack](#current-tech-stack)
5. [Current Architecture](#current-architecture)
6. [Existing Features](#existing-features)
7. [Database Schema](#database-schema)
8. [Pricing Model](#pricing-model)
9. [The Full Vision — Where Orbit is Going](#the-full-vision--where-orbit-is-going)
10. [Integration Roadmap](#integration-roadmap)
11. [AI & Futuristic Features](#ai--futuristic-features)
12. [Live Collaboration System](#live-collaboration-system)
13. [Orbit OS Concept](#orbit-os-concept)

---

## What is Orbit?

Orbit is an **all-in-one intelligent life operating system** — a modern productivity platform that unifies every tool a person needs to plan, focus, track, reflect, and grow. It is not just another task manager or timer. Orbit is the single place where your goals, calendar, communications, habits, meals, meetings, finances, and daily rhythm come together, guided by AI that actually understands your life.

Built for the generation that is overwhelmed by context switching — bouncing between Notion, Google Calendar, Gmail, Slack, ChatGPT, Todoist, and a dozen other tabs — Orbit aims to be the last productivity tool you ever need to open.

---

## The Problem We Solve

Modern knowledge workers and students live fragmented lives across 10–20 disconnected apps:

| The Pain | The Current "Solution" | The Problem |
|----------|----------------------|-------------|
| Task management | Notion, Todoist, Linear | No focus context |
| Calendar | Google Cal, Outlook | No task integration |
| Focus sessions | Forest, Be Focused | Isolated from your actual work |
| AI assistance | ChatGPT, Claude | No context about your life |
| Journaling | Day One, Notion | Disconnected from productivity |
| Meals & health | MyFitnessPal, Yazio | Completely separate world |
| Meetings | Zoom, Meet | No pre/post session intelligence |
| Email | Gmail, Outlook | Separate from your day planning |
| Goals | Notion pages, whiteboards | Never connected to daily action |

**Orbit collapses this entire stack into one coherent, intelligent surface.**

---

## Target Audience

### Primary: The Overwhelmed High-Performer
- Age 18–35
- Students, freelancers, founders, remote workers, indie hackers
- Uses 10+ productivity apps daily
- Values deep work and intentional living
- Frustrated by fragmented tools and context switching
- Willing to pay for something that genuinely works

### Secondary: The Mindful Professional
- Age 25–45
- Professionals in creative, tech, or knowledge work
- Interested in work-life balance, not just productivity
- Values journaling, reflection, and habit building alongside output
- Needs calendar sync, meeting intelligence, and email integration

### Tertiary: Teams & Small Orgs
- Small remote teams (2–20 people)
- Startups that want shared planning and live session collaboration
- Teams tired of Notion + Linear + Slack + Google Cal chaos

---

## Current Tech Stack

### Frontend
| Technology | Version | Role |
|-----------|---------|------|
| Next.js | 14.2.35 | Framework (App Router) |
| React | 18 | UI Library |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 3.4.1 | Styling |
| Framer Motion | 12.26.0 | Animations |
| Three.js | 0.183.2 | 3D effects |
| @react-three/fiber | 8.18.0 | React + Three.js |
| next-themes | 0.4.6 | Dark/Light mode |
| lucide-react | 0.562.0 | Icon system |

### Backend & Database
| Technology | Role |
|-----------|------|
| Supabase (PostgreSQL) | Primary database |
| Supabase Auth | Authentication |
| Supabase RLS | Row-level security |
| Supabase Realtime | Live data sync |
| Next.js API Routes | Server-side logic |

### AI
| Technology | Role |
|-----------|------|
| Google Gemini 3 Flash Preview | Plan generation & chat |
| @google/generative-ai 0.24.1 | Gemini SDK |

### Infrastructure
| Technology | Role |
|-----------|------|
| Vercel (planned) | Deployment |
| Supabase Cloud | Database hosting |
| PostCSS | CSS processing |
| ESLint | Code quality |

---

## Current Architecture

```
orbit/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/             # Auth pages
│   │   ├── dashboard/          # Main dashboard
│   │   ├── timer/              # Focus Chamber
│   │   ├── tasks/              # Task management
│   │   ├── planner/            # AI Weekly Planner
│   │   ├── goals/              # Goals system
│   │   ├── journal/            # Daily journal
│   │   ├── analytics/          # Focus analytics
│   │   ├── library/            # Content library
│   │   ├── program/            # Program tracking
│   │   ├── settings/           # User settings
│   │   ├── landing/            # Public landing page
│   │   └── api/planner/        # AI planning API
│   ├── components/             # React components
│   ├── context/                # Global state (React Context)
│   ├── lib/                    # Utilities & SDK clients
│   └── app/globals.css         # Global styles
├── supabase/migrations/        # Database migrations
├── public/                     # Static assets & logos
├── tests/                      # Test files
└── docs/                       # Documentation
```

### Data Flow
```
User Action
    ↓
React Component (UI)
    ↓
Context Provider (State)
    ↓
Supabase Client / API Route
    ↓
PostgreSQL (with RLS)
    ↓
Realtime Update → UI
```

---

## Existing Features

### Focus Chamber (Pomodoro Timer)
- Customizable focus/break durations
- Ambient sounds: Rain, White Noise, Brown Noise, Silent
- Zen Mode: fullscreen distraction-free focus
- Bell audio cues at session end
- Session logging to Supabase
- Active task tracking across context

### AI Weekly Planner
- Goal-to-schedule generation via Gemini
- PDF document upload for context (e.g. syllabi, project briefs)
- Interactive plan refinement via natural language chat
- Task type classification: `focus`, `rest`, `review`, `admin`, `creative`
- Drag-and-drop task reordering
- Weekly grid view with day-by-day breakdown

### Task Management
- Task CRUD with position-based ordering
- Task types: `focus`, `creative`, `rest`, `admin`, `review`, `distraction`
- Completion tracking
- Synced across devices via Supabase

### Goals System
- Create and track long-term goals
- Status: active / completed
- Reward system with milestones
- Connected to focus session analytics

### Daily Journal
- Daily entry with mood tracking
- Moods: `calm`, `focused`, `energized`, `reflective`, `stretched`
- Archive sidebar for past entries
- Legacy data migration support

### Focus Analytics
- Total focus time (today / weekly / all-time)
- Current & longest streak
- 16-week activity heatmap (GitHub-style)
- Peak focus hour analysis
- Task completion rate
- Daily focus goal progress

### Dashboard
- Personalized welcome header
- Daily intentions setting
- Next-up task preview
- Today's stats overview
- Task mix visualization

### Content Library
- Reference and resource storage
- Connected to planning workflow

### Settings
- Focus/break duration customization
- Auto-start Pomodoro/break toggles
- Long break interval configuration
- Ambient sound selection
- Custom Gemini API key
- Daily focus goal (minutes)
- View mode: unified / focused

### Landing Page
- Full marketing site with hero, features, pricing, FAQ
- ASCII orbit animation
- Pricing tiers (Free / Plus / Pro+)
- Newsletter signup
- Privacy & social proof sections

---

## Database Schema

```sql
-- User profiles
profiles (
  id uuid PRIMARY KEY,       -- references auth.users
  username text UNIQUE,
  full_name text,
  avatar_url text,
  plan text DEFAULT 'free',  -- 'free' | 'plus' | 'pro'
  updated_at timestamptz
)

-- Tasks / Todos
todos (
  id uuid PRIMARY KEY,
  user_id uuid REFERENCES profiles,
  text text,
  completed boolean,
  type text,                 -- focus | creative | rest | admin | review | distraction
  position integer,
  created_at timestamptz
)

-- Long-term goals
goals (
  id uuid PRIMARY KEY,
  user_id uuid REFERENCES profiles,
  title text,
  description text,
  status text,               -- active | completed
  created_at timestamptz,
  completed_at timestamptz
)

-- Daily journal entries
journal_entries (
  id uuid PRIMARY KEY,
  user_id uuid REFERENCES profiles,
  entry_date text,
  mood text,                 -- calm | focused | energized | reflective | stretched
  content text,
  created_at timestamptz,
  updated_at timestamptz
)

-- Focus sessions
pomodoro_sessions (
  id uuid PRIMARY KEY,
  user_id uuid REFERENCES profiles,
  task_id uuid REFERENCES todos,
  duration integer,          -- minutes
  start_time timestamptz,
  completed_at timestamptz
)
```

---

## Pricing Model

| Plan | Price | Key Features |
|------|-------|-------------|
| **Free** | $0/mo | Core timer, basic planning, 7-day history |
| **Plus** | $3/mo | 3x AI usage, advanced models, unlimited history, analytics, sync, priority support |
| **Pro+** | $75 once | Lifetime access, all future updates, exclusive beta tools, founder badge |

---

## The Full Vision — Where Orbit is Going

Orbit's north star is becoming the **operating system for your life** — the one interface where every domain of your existence (work, health, relationships, finances, learning) is visible, plannable, and actionable. Below is the complete roadmap of what Orbit will become.

---

## Integration Roadmap

### Tier 1 — Calendar & Scheduling
The foundation of any life OS is calendar intelligence.

**Google Calendar**
- Two-way sync: Orbit tasks ↔ Google Calendar events
- Auto-schedule focus blocks based on free time
- Meeting detection: auto-pause focus sessions before meetings
- "Protect my mornings" mode: block focus time before AI can schedule over it

**Apple Calendar**
- Full CalDAV sync
- iOS Shortcuts integration for quick task add
- Widget support (time until next event, active focus session)

**Outlook / Microsoft 365**
- Enterprise calendar sync
- Teams meeting integration
- SharePoint document linking in tasks

**Cal.com Integration**
- Connect booking links to tasks (e.g. "after client call → follow-up task auto-created")
- Availability-aware scheduling: Orbit sees your Cal.com slots
- Auto-create prep tasks 30 min before booked meetings

**Calendly**
- Same as Cal.com — booking events create Orbit tasks
- Meeting type context fed to AI planner

---

### Tier 2 — Communication
**Gmail**
- Smart inbox: AI reads your emails and surfaces action items as tasks
- "Email → Task" one-click conversion
- Scheduled send from Orbit's daily plan
- Reply drafts generated by AI from task context
- Thread summarization inside Orbit
- "Focus Mode": Orbit hides email during deep work, surfaces urgent ones only at break time

**Outlook Mail**
- Same capabilities as Gmail
- Enterprise account support

**Slack**
- Message → Task conversion from Slack messages
- "/orbit" slash command to add tasks from Slack
- Daily standup auto-generated from yesterday's completed tasks
- Focus status sync (when in Zen Mode → auto-set Slack status to 🎯 Focusing)
- Notifications held during focus sessions, summarized at break

**Microsoft Teams**
- Same as Slack integration
- Meeting notes auto-captured and linked to Orbit tasks

**WhatsApp / iMessage (via AI agent)**
- AI monitors message threads (opt-in) for action items
- "Book a dinner with John next week" → auto-creates calendar event + restaurant research task

---

### Tier 3 — Knowledge & Documents
**Notion**
- Two-way sync: Notion pages ↔ Orbit tasks
- Pull Notion database items as tasks
- Push completed Orbit tasks back to Notion
- AI reads Notion workspace to give you context-aware suggestions
- "Morning brief" generated from your Notion knowledge base

**Obsidian**
- Vault sync: journal entries pushed to Obsidian
- Backlink support for tasks referencing notes
- Graph view integration: see how your tasks connect to your knowledge

**Google Drive / Docs / Sheets**
- Attach Drive documents to tasks
- AI reads Google Docs for plan generation (like current PDF feature, but live)
- Spreadsheet data pulled into analytics (e.g. project tracking sheets)
- Auto-save journal entries as Google Docs

**Dropbox / OneDrive**
- File attachment to tasks and goals
- Document context for AI planning

**Linear / Jira / GitHub Issues**
- Pull engineering tickets as Orbit tasks
- Status sync: when issue closes → Orbit task completes
- Milestone planning: map sprints to Orbit weekly plans
- PR reviews surfaced as focus tasks

**Readwise / Kindle**
- Reading highlights as journal prompts
- "Books I'm reading" as goals with progress tracking
- Daily highlight as morning inspiration card

---

### Tier 4 — Health & Body
**Apple Health / Google Fit**
- Sleep data: AI adjusts your focus plan based on last night's sleep quality
- Heart rate during focus sessions (via Apple Watch)
- Activity rings integration: suggest movement breaks based on inactivity
- Mood correlation: match journal moods with health metrics over time

**Whoop / Oura Ring**
- HRV and recovery score → AI adapts workload intensity
- "You're in recovery today" mode: lighter tasks, more breaks
- Strain score tracked alongside focus time

**Strava / Garmin**
- Workout sessions appear in daily timeline
- Post-workout focus blocks: AI knows you're alert after exercise
- Training plans visualized alongside work plans

**MyFitnessPal / Cronometer (Meal Planning)**
- Daily meal log inside Orbit (what you ate, when)
- AI-suggested meal schedule based on your focus blocks
- "Don't schedule deep work right after lunch" intelligence
- Weekly meal prep planning: Orbit suggests recipes, generates shopping lists
- Nutritional context for energy management: "High carb day → expect afternoon dip"

**Water & Supplement Tracking**
- Hydration reminders during focus sessions
- Supplement schedule integrated into daily routine blocks

---

### Tier 5 — Finance & Life Admin
**Google Maps / Apple Maps**
- Travel time awareness: if you have a 9am meeting downtown, Orbit blocks commute time
- Location-based task triggering: "When near grocery store → shopping list notification"
- Commute intelligence: suggest podcast/reading tasks for commute duration

**Stripe / Financial Dashboards**
- Revenue milestones as goals with progress bars
- Invoice due dates as tasks
- MRR/ARR tracking widget in dashboard

**Banking (via Plaid)**
- Subscription tracking: see what you're paying for, surfaced in life admin dashboard
- Monthly budget goals with progress
- Expense categorization as life admin tasks

**Airbnb / Booking.com / Google Flights**
- Travel planning: trips become multi-day goal blocks
- Auto-create packing list tasks before trips
- Accommodation/flight details attached to calendar events

---

### Tier 6 — Communication & Social
**Twitter / X**
- "Post queue": schedule tweets from Orbit's writing session
- Engagement tasks: replies, DMs surfaced at designated social media time blocks
- Content calendar integrated with Orbit's creative planning

**LinkedIn**
- Networking tasks: follow-up reminders after connecting
- Content drafting in Orbit's creative blocks
- Job applications as tracked goals with status

**Instagram / YouTube (Creator Mode)**
- Content calendar with video/post planning
- Upload deadlines as tasks with focus blocks for editing
- Analytics pulled into Orbit's dashboard

---

### Tier 7 — Smart Home & IoT
**Philips Hue / LIFX**
- Light color changes based on session type: warm amber for focus, cool white for review, red for DND
- Automatic scene activation when Zen Mode starts
- Break alerts via light pulse

**Spotify / Apple Music**
- Context-aware playlists: Orbit selects music based on task type
- Focus music auto-plays when session starts, pauses at break
- "No lyrics during deep work" intelligence
- Listening data feeds back into mood/productivity correlation

**Alexa / Google Home / Siri**
- Voice: "Hey Orbit, start a focus session on the proposal"
- Voice task creation: "Add 'call dentist' to tomorrow's tasks"
- Status reading: "What's my focus score today?"

**Smart Displays (Echo Show, Nest Hub)**
- Orbit dashboard as ambient display
- Focus session countdown visible from across room
- Next task shown when break starts

---

## AI & Futuristic Features

### 1. Orbit AI — Your Personal Life Intelligence Layer

**Personal AI Model (Fine-tuned on Your Life)**
Over time, Orbit builds a private model of you:
- Your peak focus hours
- Which task types you procrastinate on
- How your mood affects output quality
- Which environments produce your best work
- Patterns between sleep, exercise, and deep work capacity

This is not generic AI advice. This is *your* AI, trained on *your* patterns.

**Morning Intelligence Brief**
Every morning, Orbit's AI generates a personalized briefing:
- Yesterday's performance summary
- Today's energy prediction (based on sleep, HRV if available)
- Auto-prioritized task list based on deadlines and your capacity
- 3 most important things to accomplish today
- One insight about your patterns ("You do your best creative work on Tuesdays after exercise")
- Weather, commute, and calendar conflicts resolved into a clean daily plan

**Dynamic Rescheduling**
When you get pulled into an unexpected meeting, fall behind on a task, or your energy crashes:
- AI detects the deviation
- Automatically reschedules the day
- Pushes non-essential tasks to later in the week
- Sends a soft notification: "Your plan shifted — here's what I moved for you"

**Predictive Task Creation**
- AI notices you always research competitors before writing proposals → pre-creates research tasks
- Detects recurring patterns and asks "Should I add this automatically?"
- Learns your workflows and pre-loads task templates

---

### 2. Life Context Engine

Orbit builds a **semantic understanding of your life** by connecting all integrations:

```
Your emails + calendar + tasks + journal + goals
              ↓
      Life Context Graph
              ↓
  AI that knows what matters to you
```

**Context-aware suggestions:**
- "You have a presentation to the board in 3 days — here's a preparation plan"
- "You haven't worked on your fitness goal in 8 days. Want to schedule a session?"
- "Your energy drops every Wednesday afternoon. I've blocked that for admin tasks."
- "Your client Sarah usually replies on Thursday mornings. I've reminded you to check email then."

---

### 3. Focus Intelligence

**Flow State Detection**
Using session duration, task completion rate, and (optionally) biometric data:
- Detect when you're in flow and don't interrupt
- Identify conditions that lead to flow (time, task type, sound, prior activities)
- Generate "flow state recipe" for you: your personal conditions for deep work

**Distraction Pattern Analysis**
- Track what breaks focus (notification types, time of day, task duration)
- Suggest behavioral changes: "You check your phone 4x during focus sessions — try grayscale mode"
- Weekly "distraction report" with actionable changes

**Attention Economy Score**
A personal metric that combines:
- Time in deep focus vs. shallow tasks
- Meeting load vs. maker time
- Email response time patterns
- Social media exposure during work hours

---

### 4. AI Meeting Intelligence

**Pre-meeting Preparation**
30 minutes before any calendar event, Orbit:
- Summarizes the last meeting's notes and action items
- Pulls relevant tasks and documents
- Suggests 3 key talking points
- Checks if any promised deliverables are still pending

**Live Meeting Assistant**
During a meeting (with permission):
- Real-time transcription
- Action item detection: "I'll send that by Friday" → instant task created
- Decision logging
- Participant context: pulls CRM notes on who's in the call

**Post-meeting Intelligence**
After meeting ends:
- Auto-generates meeting summary
- Creates follow-up tasks from detected action items
- Sends summary to participants via email (one-click)
- Updates related goals with meeting outcomes

---

### 5. Meal & Energy Intelligence

**Personal Nutrition AI**
Beyond just meal logging:
- Learns which meals correlate with your best focus sessions
- Suggests meal timing based on your work schedule
- "Heavy lunch at 1pm consistently leads to 2-3pm low energy — consider lighter options"
- Recipe suggestions based on prep time and nutritional targets

**Meal Planning Engine**
- Weekly meal plan generation based on: nutritional goals, schedule complexity, cooking preference, budget
- Auto-generates shopping list by day and category
- Integrates with Google Maps to find nearby stores
- "Meal prep Sunday" task auto-created with recipes and estimated time

**Energy Timeline**
A visual map of your predicted energy levels throughout the day:
- Based on: sleep quality, meal timing, exercise, caffeine, circadian rhythm
- AI schedules tasks at optimal energy windows
- "Your energy peaks at 9am and 4pm — I've placed your hardest tasks there"

---

### 6. Live Session System

**Personal Focus Sessions**
- Shareable focus session links: send to a friend or post publicly
- Public focus mode: others can see your session countdown (no content visible)
- "Join my focus session" — accountability through visibility

**Synchronized Group Focus (Body Doubling)**
- Create a room, invite others
- Everyone sees a shared timer
- Silent or ambient sound shared session
- End-of-session check-in: what did you accomplish?

**Team Sprint Rooms**
- Team creates a shared sprint (e.g. 4x 45-min sessions with 15-min breaks)
- Each member tracks their own tasks
- Shared session feed: "Alex completed 'write intro section'"
- End-of-sprint retrospective auto-generated by AI

**Session Replay**
- Review your session: timeline of task switches, breaks taken, total focus
- Share session summaries with accountability partners
- Weekly "Focus Reel": animated summary of your best sessions

---

### 7. Goals & Life Design System

**Life Areas Framework**
Structure goals across 8 life dimensions:
- Career & Work
- Health & Body
- Relationships & Social
- Learning & Skills
- Finances & Wealth
- Creative & Passion Projects
- Mental & Spiritual
- Adventure & Experience

**Goal Dependency Mapping**
- Visual goal graph: see how goals connect to each other
- "Launch product" depends on "learn marketing" depends on "take course"
- AI surfaces blockers: "You haven't made progress on 'learn marketing' — this is blocking your product launch"

**Reverse Goal Planning**
- Input a goal and deadline
- AI generates backwards-planned milestones to today
- Auto-creates tasks for each milestone
- Weekly check-ins to keep you on track

**Goal Review Rituals**
- Weekly review: AI prepares your agenda (what to review, rate, adjust)
- Monthly reflection: wins, lessons, patterns
- Quarterly goal refresh: which goals to keep, pause, or abandon
- Annual life audit: full review with AI-generated insights

---

### 8. Intelligent Notifications & Attention Management

**Notification Intelligence**
Orbit controls your notification environment:
- During focus: all non-critical notifications held
- At break: surfaced sorted by urgency
- AI learns what you consider "urgent" over time
- Emergency override: certain contacts can always reach you

**Attention Budget**
- Daily "attention points" budget
- Each notification type costs points (email = 1, Slack DM = 2, meeting invite = 3)
- Dashboard shows attention spent vs. deep work ratio
- AI optimizes your schedule to protect attention budget

**Do Not Disturb Orchestration**
- One toggle: Orbit sets DND on phone, Slack, email, Teams, etc.
- Smart exceptions: your emergency contacts still get through
- Scheduled quiet hours that learn from your patterns

---

### 9. Ambient Intelligence

**Adaptive UI**
- Dashboard morphs based on time of day: morning brief in AM, session view during work hours, reflection mode in evening
- Color temperature shifts with circadian rhythm (warm in evening, cool/bright in morning)
- Ambient sound auto-selects based on task type and time

**Environmental Awareness**
- "You're working from a coffee shop" (via location) → suggest noise-cancelling ambient sounds
- "It's raining" (via weather API) → rain sounds auto-enabled
- "You have a meeting in 10 minutes" → start wrap-up timer automatically

**Emotion-Aware Interface**
- Mood check-ins at session start and end
- UI adapts subtly: on reflective days, more whitespace and softer colors
- On high-energy days: more compact, action-oriented layout
- Over time: "You journal more on reflective days — want to start there today?"

---

### 10. Orbit for Teams

**Shared Workspaces**
- Team dashboard: see collective focus time, task completion, blockers
- Shared goal trees: team goals broken into individual tasks
- Async standup: each member logs daily intentions; AI summarizes for the team

**Manager Intelligence**
- Team energy heatmap: who's overloaded, who has capacity
- Meeting load analysis: flag teams with too many interruptions
- Sprint planning AI: generate team sprints based on individual capacities

**Org-wide Focus Culture**
- "Company Focus Hours": shared time when all meetings are blocked
- Collective focus score tracked over time
- Recognition: celebrate team streaks and milestones

---

### 11. Futuristic & Speculative Features

**Orbit Mirror (AR)**
- Augmented reality overlay of your daily plan, focus timer, and next task
- Compatible with Apple Vision Pro, Meta Quest
- Morning routine: see your day while getting ready
- Desk mode: floating Pomodoro timer visible alongside your work

**Voice-First Mode**
- Full Orbit experience via voice (hands-free deep work support)
- "Start my focus session" / "What's next?" / "Add a task"
- AI narrates your morning brief while you commute or exercise

**Orbit Companion (Wearable)**
- Haptic feedback at session transitions (no audio interruption)
- Heart rate + HRV monitoring for biometric-aware scheduling
- Tap to start/pause/end focus sessions
- Subtle vibration patterns: 2 taps = 5 min left, 3 taps = break time

**Subconscious Planning (Dream Mode)**
- Evening reflection + goal review before sleep
- AI generates next-day plan while you sleep based on your review
- Wake up to a pre-built, personalized plan ready to execute

**Predictive Life Simulation**
- "If I stay on this trajectory, here's where I'll be in 6 months"
- Visualize goal completion likelihood based on current pace
- Scenario modeling: "What if I added 1 extra focus session per day?"
- "What does my life look like if I achieve all current goals?"

**Personal Orbit Index (POI)**
A single score (0–1000) that represents your overall life alignment:
- How aligned your daily actions are with your stated goals
- Trend over time
- Broken down by life area
- "Your POI dropped this week — creative work has been neglected"

---

## Orbit OS Concept

The ultimate vision: **Orbit as an operating system layer** that sits between you and the rest of your digital life.

```
┌────────────────────────────────────────────────────────┐
│                     ORBIT LAYER                        │
│   Intelligence │ Planning │ Focus │ Reflection │ Life  │
└────────────────────────────────────────────────────────┘
         │           │          │         │         │
      Gmail      Calendar    Slack     Notion    Health
     Linear      Outlook     Zoom     Obsidian   Maps
     GitHub      Cal.com    Teams     Drive    Spotify
     Stripe      Calendly    Meet      Docs    Strava
```

**You don't go to Gmail. Gmail comes to Orbit.**
**You don't go to Notion. Notion feeds into Orbit.**
**You don't go to Google Calendar. Orbit is your calendar.**

Every integration becomes a data stream that Orbit's AI processes, filters, and surfaces to you at the right moment, in the right context, at the right level of urgency — so you can stay in one place, stay in flow, and live with intention.

---

## Design Philosophy

Orbit's interface follows a strict set of principles:

1. **Calm by default** — No red badges, no noise, no anxiety-inducing metrics
2. **Progressive disclosure** — Show only what's needed now; depth on demand
3. **AI in the background** — Intelligence surfaces when useful, invisible otherwise
4. **Whitespace is intentional** — Empty space is a feature, not wasted space
5. **Dark/Light harmony** — Both themes are first-class, not afterthoughts
6. **Motion with purpose** — Every animation has a reason; none are decorative noise
7. **Context over features** — The right feature at the right moment beats 100 features always visible

---

*Last updated: April 2026*
*Document owner: Mustafa Said Bektaş*
*Project: Orbit — Personal Life Operating System*
