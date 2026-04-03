# Changelog

All notable changes to boostME are documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/).

---

## 0.5.7 — 2026-04-03

### Added — Coach App

- **Dark theme** — all pages restyled to the boostME mat/chalk/accent design system
- **Coach self-registration** — email + password + name, email verification
- **Onboarding & accreditation** — 4-step status flow (Registered → Profile Complete → Accreditation Pending → Active), requirements checklist, process explanation
- **Profile extensions** — phone, specialisms (11 options), certifications (CrossFit L1–L4, NASM, ISSA, ACE, CFSC, NSCA, Other), profile image upload
- **Image service** — dedicated service for image upload with WebP conversion, magic bytes validation, EXIF stripping, max 800x800 resize
- **WOD Builder** — full session editor with phases, blocks (Straight / AMRAP / EMOM / For Time), exercise picker with search, publish to subscribers
- **WOD History** — list of published WODs with expandable leaderboard per WOD

### Added — Athlete App

- **Daily WOD pages** — WOD list with coach images, subscription state, and sorting; WOD detail with leaderboard and goal-specific ranking
- **WOD subscription paywall** — 3 states (Active+Subscribed, Active+Unsubscribed, Expired); pricing display (9.99 EUR/mo, 100 EUR/yr); V1: free subscription
- **WOD result capture** — decision tree based on goal type: AMRAP (rounds+reps), For Time (mm:ss), Max Weight (kg), Max Reps, Max Calories, EMOM (weight)
- **Display name** — firstName, lastName, city, country fields; initials mode ("J.T. @ Berlin, DE") or full name; live preview in profile
- **Timezone** — user profile field (default: Europe/Berlin), browser auto-detect
- **Set counter** — tap-based set tracking for rep-only exercises
- **Auto-announce next exercise** — voice announces the next exercise after completion (e.g. "Now for Back Squat, 5 sets of 3")
- **Composed phrase clips** — 134 clips (67 per voice): "10 reps", "3 sets of 5", "30 seconds" as natural single phrases
- **Exercise name clips** — 494 clips (247 per voice) for all exercises in the catalog
- **Password validation** — live criteria check on registration (both apps): 8+ chars, uppercase, number, symbol

### Changed

- **Exercise tracking** — position-based via `positionKey` instead of exerciseId; duplicate exercises now tracked independently
- **Audio gain** — voice-specific levels with DynamicsCompressor to prevent clipping
- **Audio timing** — tuned gaps between voice clips for natural-sounding announcements
- **Timer skip** — X button now properly stops audio announcements
- **Leaderboard sorting** — goal-specific indicators ("Ranked by: Most Rounds", "Fastest Time", etc.)

### Removed

- **Voice Control (SpeechRecognition)** — disabled due to browser crashes and Bluetooth audio conflicts. Will be redesigned in a future release.
- **Beep sounds** — replaced entirely by Polly voice clips

### Fixed

- Timer continues after exercise skip (ghost audio announcements)
- Duplicate exercises share done-state and weight inputs
- Coach plan service writes exercises without blocks (legacy format)
- Coach plan service writes exercises without name field
- CloudFront CORS blocking audio clip fetch from custom domains
- Image service binary compatibility for Linux Lambda
- User service duplicate import crashing Lambda

---

## 0.4.0 — 2026-03-30

### Added

- **Collapsible sidebar** — icon-only mode on mobile, toggle button, preference persisted, auto-collapse at 768px
- **History dashboard** — session count stats with category tabs (Month/Year/All), CSS bar chart, personal high scores with auto-scrolling list, monthly calendar with session day highlighting
- **Per-exercise result recording** — weight inputs per exercise on feedback page for all Skill/Strength blocks; feeds into personal high scores
- **Equipment selection** — 16 equipment options as checkboxes in profile; stored as `availableEquipment[]` for plan filtering
- **PlanPage redesign** — training options hub with three tiers: Individual Plan (free), Daily WOD & Leaderboard, Personal AI Coach
- **Token expiry auto-redirect** — automatic redirect to login when session expires; "Session expired" banner; idle tab re-check on focus
- **Profile tabs** — split into Profile (personal data + coach) and Equipment & Settings (gear + timer config)

### Changed

- Block results extended with per-exercise weight recording
- Feedback page always shows weight entry for Skill/Strength blocks

### Fixed

- Chat overflow on Session page — contained within viewport
- Chat overflow on Feedback page — capped at 50vh

---

## 0.3.0 — 2026-03-30

### Added

- **Block-based workout structure** — phases now contain blocks, allowing mixed formats within a single phase (e.g. straight sets followed by a 12-min AMRAP)
- **Group timers** — AMRAP (countdown + round counter), EMOM (minute indicator + per-minute announcement), For Time (count-up + early finish)
- **Timer ramp-up countdown** — configurable delay before timers start (default 5s)
- **Pre-recorded audio announcements** — 114 Amazon Polly clips (male + female voices) via Web Audio API; overlays on music without interrupting playback
- **Counter voice selection** — male/female voice chooser in profile settings
- **Feedback page redesign** — dark theme, session summary, emoji-based feeling selector, block-specific result entry
- **Coach post-session interaction** — AI-generated personalized reaction to completed session + short post-session chat
- **Block renderer component** — self-contained block display with timer bar and compact exercise cards

### Changed

- Phases now generate blocks instead of flat exercise lists
- Session page renders phases as stacks of block components
- Feedback stores block-level results instead of a single value
- Coach chat includes post-session wrap-up behavior

### Deprecated

- Legacy flat exercise format (replaced by block-based structure)

### Fixed

- Double-slash in coach image URLs
- Feedback page text contrast
- Empty result cards for exercises without weight recommendations

---

## 0.2.0 — 2026-03-29

### Added

- AI coach plan generation via Anthropic API (streaming)
- Phase-aware timer defaults (skill/strength 90s, warmup/cooldown 40s, workout none)
- No-timer mode for workout exercises (done circle + skip button)
- Coach chat with tool use (replace session, create plan, scale exercise)
- Session resume prompt for in-progress sessions

### Fixed

- Coach plan service secret name mismatch on prod
- Anthropic SDK streaming timeout on large plans
- Lambda timeout increased from 120s to 240s
- Plan data format mismatch
- Missing slash between assets URL and image key

---

## 0.1.0 — 2026-03-26

### Added

- Initial boostME web application (athlete and coach apps)
- User authentication with registration, login, and onboarding
- Coach discovery and linking
- Training plan generation
- Session execution with phase navigation (warmup → skill/strength → workout → cooldown)
- Exercise cards with timer, progress ring, video links
- Session history and detail pages
- Dark theme design system (mat-black / chalk / accent)
- Custom domain support
- Landing page (www.boost-me.ai)
