# boostME Coach WOD Builder Guide

## Overview

The WOD Builder allows you to create daily community workouts for your subscribers. You have full control over the workout structure — from warm-up to cooldown, with support for all common CrossFit and functional fitness formats.

This guide explains every building block available to you and how to combine them into compelling workouts.

---

## Core Concepts

### Sessions, Phases, Blocks, and Exercises

Every workout in boostME follows a hierarchical structure:

```
Session (your WOD)
├── Session Goal (what athletes are competing for)
├── Warmup Phase (optional)
│   └── Block(s) → Exercise(s)
├── Skill / Strength Phase (optional)
│   └── Block(s) → Exercise(s)
├── Workout Phase (the main event)
│   └── Block(s) → Exercise(s)
└── Cooldown Phase (optional)
    └── Block(s) → Exercise(s)
```

**Session** — The complete workout. It has a goal and up to four phases.

**Phase** — A section of the workout (Warmup, Skill/Strength, Workout, Cooldown). Each phase can be skipped if not needed. Each phase contains one or more blocks.

**Block** — A group of exercises with a specific format. This is the key structural element. A block defines *how* the exercises are performed (straight sets, AMRAP, EMOM, For Time).

**Exercise** — An individual movement with optional sets, reps, duration, and weight recommendation.

---

## Session Goal

Every WOD needs a goal. The goal defines what athletes are competing for and how the leaderboard is sorted.

| Goal Type | Description | Leaderboard Ranking |
|-----------|-------------|---------------------|
| **AMRAP** | As Many Rounds As Possible in a given time | Most rounds + reps wins |
| **For Time** | Complete the prescribed work as fast as possible | Fastest time wins |
| **Max Weight** | Build to the heaviest load | Heaviest lift wins |
| **Max Reps** | Accumulate the most repetitions | Most reps wins |
| **Max Calories** | Accumulate the most calories on an erg | Most calories wins |
| **EMOM** | Every Minute On the Minute — complete prescribed work each minute | Weight achieved or completion |

**Example:**
- Goal Type: `AMRAP`
- Description: `12-min AMRAP: Thrusters, Pull-ups, Box Jumps`
- Target Value: `8` (expected rounds for a strong athlete — helps set expectations)

---

## Block Formats

Blocks are the heart of workout design. Each block has a **format** that determines how exercises within it are executed.

### Straight (Sets & Reps)

The default format. Athletes perform each exercise for the prescribed sets and reps, resting as needed between sets.

**When to use:** Warm-up movements, strength work, cooldown stretches.

**Example:**
```
Block: Straight
├── Back Squat — 5 sets × 3 reps @ 80% 1RM
└── Strict Press — 3 sets × 5 reps @ 75% 1RM
```

Athletes work through Back Squat first (all 5 sets), then move to Strict Press.

### AMRAP (As Many Rounds As Possible)

Athletes cycle through the listed exercises continuously for a fixed time. The timer counts down. Athletes track how many complete rounds (plus extra reps) they finish.

**When to use:** The main workout block when you want maximum effort over a fixed time.

**Settings:**
- **Timecap (minutes):** How long the AMRAP runs (e.g., 12 minutes)
- **Label:** Displayed name (e.g., "12-min AMRAP")

**Example:**
```
Block: AMRAP — 12 minutes
├── Thrusters — 12 reps @ 43 kg
├── Pull-ups — 9 reps
└── Box Jumps — 15 reps @ 24" box
```

Athletes repeat the cycle (Thrusters → Pull-ups → Box Jumps → Thrusters → ...) for 12 minutes. Their score is total rounds + remaining reps.

### EMOM (Every Minute On the Minute)

A new minute starts every 60 seconds. Athletes must complete the prescribed work within each minute. Any remaining time is rest. The timer shows the current minute and seconds remaining.

**When to use:** Skill/technique work with enforced pacing, or conditioning with built-in rest.

**Settings:**
- **Timecap (minutes):** Total EMOM duration (e.g., 10 minutes = 10 rounds)
- **Label:** Displayed name (e.g., "10-min EMOM Technique")

**Example — Single exercise:**
```
Block: EMOM — 10 minutes
└── Power Clean — 3 reps @ 70% 1RM
```

Every minute: perform 3 Power Cleans. Rest until the next minute starts.

**Example — Alternating exercises:**
```
Block: EMOM — 12 minutes
├── Odd minutes: 5 Deadlifts @ 100 kg
└── Even minutes: 10 Push-ups
```

Note: In the current builder, list both exercises. The coach should specify the alternating pattern in the exercise names or the block label (e.g., "Alternating EMOM: Odd = Deadlifts, Even = Push-ups").

### For Time

Athletes complete all prescribed work as fast as possible. The timer counts up. An optional timecap prevents the workout from running too long.

**When to use:** When you want athletes to race against the clock.

**Settings:**
- **Timecap (minutes):** Maximum allowed time (e.g., 15 minutes). If an athlete finishes before the cap, their actual time is their score. If they hit the cap, they record total reps completed.
- **Label:** Displayed name (e.g., "For Time — 15 min cap")

**Example:**
```
Block: For Time — 15 min cap
├── Deadlifts — 3 sets × 10 reps @ 80 kg
└── Burpees — 3 sets × 15 reps
```

Athletes do 10 Deadlifts, 15 Burpees, 10 Deadlifts, 15 Burpees, 10 Deadlifts, 15 Burpees — as fast as possible.

---

## Phases in Detail

### Warmup Phase

Prepares the body for the main workout. Typically 8–10 minutes.

**Typical content:**
- 1 general cardio exercise (Jump Rope, Rowing, Jumping Jacks) — 2–3 minutes
- 2–4 dynamic warmup movements targeting the muscles used in the WOD

**Recommended format:** Straight (sets & reps or duration)

**Example:**
```
Warmup Phase
└── Block: Straight
    ├── Jump Rope — 120 seconds
    ├── Arm Circles (Forward) — 2 × 15 reps
    ├── Leg Swings — 2 × 12 reps per side
    └── Inchworms — 10 reps
```

### Skill / Strength Phase

Focused work on a single compound movement or skill. Typically 15–20 minutes.

**Common patterns:**
- **Heavy triples:** 5 × 3 @ 85–95%
- **Pyramid:** 5 sets ascending weight [5, 4, 3, 2, 1]
- **EMOM technique drill:** 10-min EMOM × 3 reps @ moderate weight
- **Build to 1RM:** [5, 3, 2, 1, 1] ascending weight

**Example with straight block:**
```
Skill/Strength Phase
└── Block: Straight
    └── Back Squat — 5 × 3 reps @ 85% 1RM
```

**Example with EMOM block:**
```
Skill/Strength Phase
└── Block: EMOM — 10 minutes
    └── Power Snatch — 2 reps @ 70% 1RM
```

**Example with mixed blocks (advanced):**
```
Skill/Strength Phase
├── Block: EMOM — 10 minutes (label: "10-min EMOM Technique")
│   └── Power Clean — 3 reps @ 70% 1RM
└── Block: Straight
    └── Strict Press — 3 × 5 reps @ 75% 1RM
```

### Workout Phase (WOD)

The main event — this is what athletes compete on. Typically 12–25 minutes.

**This is where you use AMRAP, For Time, or EMOM blocks.**

You can combine a strength component with a conditioning component:

**Example — Strength + AMRAP:**
```
Workout Phase
├── Block: Straight
│   └── Back Squat — 5 × 3 reps @ 80% 1RM
└── Block: AMRAP — 12 minutes (label: "12-min AMRAP")
    ├── Thrusters — 12 reps @ 43 kg
    ├── Pull-ups — 9 reps
    └── Box Jumps — 15 reps
```

### Cooldown Phase

Recovery and mobility work. Typically 5–10 minutes.

**Typical content:**
- 1–2 foam rolling / soft tissue exercises (30–60 seconds each)
- 2–3 static stretches targeting worked muscles (30–40 seconds each)

**Recommended format:** Straight

**Example:**
```
Cooldown Phase
└── Block: Straight
    ├── Foam Roll Quads — 40 seconds per side
    ├── Pigeon Stretch — 40 seconds per side
    ├── Hamstring Stretch — 40 seconds
    └── Child's Pose — 60 seconds
```

---

## Exercise Properties

Each exercise in a block can have the following properties:

| Property | Description | Example |
|----------|-------------|---------|
| **Name** | The exercise name (from the exercise catalog) | "Thrusters" |
| **Sets** | Number of sets (for straight blocks) | 5 |
| **Reps** | Repetitions per set | 12 |
| **Duration (seconds)** | Time-based instead of reps | 120 |
| **Weight Recommendation** | Suggested load | "43 kg" or "@80% 1RM" |

**Notes:**
- For AMRAP/EMOM blocks, sets are typically omitted (the block timer controls repetition).
- For straight blocks, both sets and reps should be specified.
- Duration is used for exercises like Jump Rope, Planks, or stretches.
- Weight recommendations can be absolute ("60 kg") or relative ("@75% 1RM").

---

## Complete WOD Examples

### Example 1: Classic AMRAP WOD

**Goal:** AMRAP — "Complete as many rounds as possible in 15 minutes"

```
Warmup Phase
└── Block: Straight
    ├── Rowing — 120 seconds
    ├── Arm Circles — 2 × 15 reps
    ├── Air Squats — 15 reps
    └── Push-ups — 10 reps

Skill/Strength Phase (skipped)

Workout Phase
└── Block: AMRAP — 15 minutes (label: "Cindy")
    ├── Pull-ups — 5 reps
    ├── Push-ups — 10 reps
    └── Air Squats — 15 reps

Cooldown Phase
└── Block: Straight
    ├── Foam Roll Lats — 40 seconds per side
    ├── Shoulder Stretch — 30 seconds per side
    └── Seated Forward Fold — 60 seconds
```

**Athletes compete on:** Total rounds + extra reps in 15 minutes.

### Example 2: Strength + Conditioning

**Goal:** Max Weight — "Build to a heavy single Clean & Jerk"

```
Warmup Phase
└── Block: Straight
    ├── Jump Rope — 120 seconds
    ├── PVC Overhead Squats — 10 reps
    ├── Barbell Muscle Cleans — 8 reps (empty bar)
    └── Front Squats — 5 reps (empty bar)

Skill/Strength Phase
└── Block: Straight
    └── Clean & Jerk — sets: [5, 3, 2, 1, 1, 1] ascending weight
        Weight: "Build from 60% to max"

Workout Phase
└── Block: For Time — 10 min cap
    ├── Thrusters — 21 reps @ 43 kg
    ├── Box Jumps — 21 reps
    ├── Thrusters — 15 reps @ 43 kg
    ├── Box Jumps — 15 reps
    ├── Thrusters — 9 reps @ 43 kg
    └── Box Jumps — 9 reps

Cooldown Phase
└── Block: Straight
    ├── Foam Roll Quads — 40 seconds
    └── Hip Flexor Stretch — 40 seconds per side
```

**Athletes compete on:** Heaviest Clean & Jerk achieved + For Time score.

### Example 3: EMOM Skill Focus

**Goal:** EMOM — "10-minute EMOM: 3 Power Snatches"

```
Warmup Phase
└── Block: Straight
    ├── Rowing — 120 seconds
    ├── Snatch Grip Deadlifts — 8 reps (empty bar)
    ├── Overhead Squats — 8 reps (empty bar)
    └── Muscle Snatches — 5 reps

Skill/Strength Phase
└── Block: EMOM — 10 minutes (label: "10-min EMOM: Power Snatch")
    └── Power Snatch — 3 reps @ 70% 1RM

Workout Phase
└── Block: AMRAP — 8 minutes
    ├── Overhead Squats — 8 reps @ 50 kg
    ├── Toes to Bar — 12 reps
    └── Calorie Row — 15 cal

Cooldown Phase
└── Block: Straight
    ├── Foam Roll Thoracic Spine — 60 seconds
    ├── Wrist Stretches — 30 seconds
    └── Child's Pose — 60 seconds
```

---

## Tips for Great WODs

1. **Have a clear scoring metric.** Athletes need to know exactly what they're competing on. Make sure the Session Goal matches the primary workout block format.

2. **Scale appropriately.** Your subscribers range from beginners to experienced athletes. Include weight recommendations that work for the middle ground, and mention scaling options in exercise names (e.g., "Pull-ups (scale: Ring Rows)").

3. **Keep it to 45–60 minutes total.** Including warmup and cooldown, a complete WOD should fit within an hour.

4. **Warm up what you'll work.** If the WOD has heavy overhead movements, the warmup should include shoulder mobility. If it has heavy squats, warm up the hips and ankles.

5. **Use the block structure wisely.** You can have multiple blocks in a single phase. Use this to combine a strength component with a conditioning component in the Workout phase.

6. **Name your WODs.** Use the block label field to give your AMRAP or EMOM a catchy name. Named WODs are more memorable and shareable.

7. **Vary the formats.** Don't publish an AMRAP every day. Mix it up with For Time, EMOM, and strength-focused WODs to keep your subscribers engaged.

---

## Technical Notes

- **One WOD per coach per day.** You can publish one WOD each day. It becomes available to subscribers immediately and expires after 24 hours.
- **All times are UTC.** The system handles timezone conversion automatically — athletes see times in their local timezone.
- **Exercise catalog.** You can search and select from 250+ exercises in the builder. Each exercise includes video links and scaling options.
- **Leaderboard sorting.** Results are automatically ranked based on the Session Goal type. For AMRAP: most rounds wins. For Time: fastest time wins. The composite ranking key ensures fair ordering.
