---
id: "transfer-ark:bugfix:fix_visual_stutter_and_frame_drops_in_pre_ingame_to_main_game_transition"
title: "Fix Visual Stutter and Frame Drops in Pre-ingame to Main Game Transition"
category: "bugfix"
game_ids: ["g9666","all"]
sdk_modules: ["LoadingScreenModule","LoadingScreenModule9666"]
tags: ["splash","loading","transition","spine_stutter","frame_drop","earlySwitchOffset","g9666"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# BUG-010: Fix Visual Stutter and Frame Drops in Pre-ingame to Main Game Transition

<!-- convention-summary-start -->
### Fix Visual Stutter and Frame Drops in Pre-ingame to Main Game Transition Summary

- **Core Architecture / Purpose**: Documents root cause, architectural pitfalls, reproduction steps, and official code fix for Fix Visual Stutter and Frame Drops in Pre-ingame to Main Game Transition.
- **Key Mechanisms & Design**: Guards edge cases, prevents race conditions/null crashes, and enforces state machine integrity during game transitions.
- **Domain Capabilities**: bugfix, 01_bugs_and_gotchas
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/Core/LoadingScreenModule9666.ts`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. 📌 Problem / Feature Overview
- **Issue / Requirement**: Visual stuttering and severe frame drops occurred during the transition animation from Pre-ingame (Splash/Loading) into AP (Main Game) because earlySwitchOffset (0.5s) triggered cc.director.loadScene synchronously at second 2.16s in the middle of active Spine zoom and mesh deformation in the 'start' animation (duration 2.67s). The synchronous scene load blocked the JS main thread, causing 0 FPS freeze and skipping the fade-out outro before jumping into the main game.
- **Occurrence Scope**: Affects spinning reel strip generation during normal, turbo, and free spins.

---

## 2. 🏢 Vendor SDK vs ARK Business Discrepancy
- **Vendor SDK Default Behavior**: Default `cc-common` implementation does not account for customized business rules and game constraints.
- **ARK Business Requirement**: Ensure correct symbol distribution, visual feedback, and zero regressions across all reel columns.

---

## 3. 🔍 Root Cause Analysis in Base SDK
- Offending modules: `LoadingScreenModule`, `LoadingScreenModule9666`.
- Unfiltered random selection or missing size format mapping in configuration arrays.

---

## 4. 🛠️ Implementation & Override Solution
```typescript
// In LoadingScreenModule9666.ts:
@property
delayBeforeHideLoading: number = 0.3;
@property
delayBeforeStartAnim: number = 0.2;
@property
earlySwitchOffset: number = 0.0;

private playStartAnim(): Promise<void> {
    return new Promise<void>((resolve) => {
        if (!cc.isValid(this.splashSkeleton)) {
            resolve();
            return;
        }

        let isResolved = false;
        const complete = () => {
            if (isResolved) return;
            isResolved = true;
            if (cc.isValid(this.splashSkeleton)) {
                this.splashSkeleton.setCompleteListener(() => { });
            }
            this.unschedule(fallbackTimer);
            resolve();
        };

        const fallbackTimer = () => {
            complete();
        };

        this.splashSkeleton.setCompleteListener((trackEntry: any) => {
            if (trackEntry && trackEntry.animation && trackEntry.animation.name === this.startAnimName) {
                complete();
            }
        });

        const duration = eno.SpineUtils.getAnimationDuration(this.splashSkeleton, this.startAnimName) || 2.67;
        this.splashSkeleton.setAnimation(0, this.startAnimName, false);

        if (this.earlySwitchOffset > 0) {
            const switchDelay = Math.max(duration - this.earlySwitchOffset, 0.1);
            this.scheduleOnce(complete, switchDelay);
        } else {
            this.scheduleOnce(fallbackTimer, duration + 0.1);
        }
    });
}
```

---

## 5. ⚠️ Gotchas & Edge Cases
1. **Zero-Code Modification on `cc-common`**: Never modify base engine files directly; apply overrides in game-specific classes.
2. **Buffer Rows Margin**: Ensure `BUFFER_TOP >= 3` and `BUFFER_BOT >= 3` for multi-size symbols to avoid visual clipping.
3. **Safety Guards**: Always guard against empty array pools.

---

## 6. ♻️ Reusability Guide for Future Game Titles
1. Identify the target game config and reel module classes.
2. Apply the dynamic generator and override pattern in the game subclass.
3. Verify that reel strips render all symbol sizes properly during continuous spin.

---

## 7. 🔗 Codebase References
- `assets/cc-release-slot/cc1-red-cliff/scripts/Core/LoadingScreenModule9666.ts`
- `assets/cc-release-slot/cc1-red-cliff/g9666.fire`
