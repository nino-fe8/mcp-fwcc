---
id: "transfer-ark:feature:jackpot_collection:03_visual_choreography"
title: "Jackpot Collection - Visual States & Tick Spine Choreography"
category: "feature"
game_ids: ["g9666", "all"]
sdk_modules: ["JackpotCollectionItem"]
tags: ["visual", "spine_animation", "tick_effect", "checkmark", "choreography"]
created_at: "2026-09-17"
author: "ARK Slot Engineering Team"
---

# 3. 🎨 Visual States & Tick Spine Choreography

<!-- convention-summary-start -->
### Jackpot Collection - Visual States & Tick Spine Choreography Summary

- **Core Architecture / Purpose**: Deep dive into the multi-layer visual state transitions of `JackpotCollectionItem` when symbols increment and complete their quota.
- **Key Mechanisms & Design**: 
  - Spine Symbol character state transitions (`idle_reel_1` $\rightarrow$ `active_reel_1` $\rightarrow$ `idle_reel_1`).
  - Collection particle spine transitions (`eff_coll_symbol` $\rightarrow$ `eff_coll_done_symbol`).
  - Checkmark Tick entry burst (`in_eff_tick_coll_symbol`) and looping shimmer (`idle_eff_tick_coll_symbol`).
  - Fallback animation resolver to guarantee zero runtime crashes.
- **Domain Capabilities**: feature, RECIPE_004_jackpot_collection_system
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/Gui/JackpotCollectionItem9666.ts`
- **Related Docs**: [02. Architecture & Data Flow](./02_architecture_and_data_flow.md), [05. Full Implementation Code](./05_full_implementation_code.md)
<!-- convention-summary-end -->

---

## 3.1 The 4 Visual Layers of an Item

Each symbol item in the collection bar contains 4 separate visual layers layered in Z-order:

```text
[Z-Order 4] -> checkmark / mark Spine (Celebratory Tick Effect)
[Z-Order 3] -> lbProgress (Label showing "5/5")
[Z-Order 2] -> collect Spine (Energy / smoke / coin burst)
[Z-Order 1] -> spine (Main Symbol Character skeleton)
```

---

## 3.2 State Transitions on Every Collection Increment

When `updateProgress(info)` is invoked:

```typescript
const prevCollected = this._collected;
this._collected = info.collected;
const isComplete = info.collected >= info.required;
const justCompleted = isComplete && prevCollected < info.required;
```

### 1. Main Character Animation (`playActiveThenIdle`)
* The character switches from loop idle (`idle_reel_1` or fallback `idle`) to an expressive celebration animation (`active_reel_1` or fallback `active`):
  ```typescript
  this.spine.setAnimation(0, activeAnimName, false); // plays 1 time
  this.spine.addAnimation(0, idleAnimName, true);     // queues back to idle loop
  ```

### 2. Collection Burst Effect (`playCollectEffect`)
* If `isComplete == false`:
  - Plays `eff_coll_symbol` once.
  - On animation completion listener, automatically hides `collect.node.active = false`.
* If `isComplete == true` (Symbol completed):
  - Directly adds `eff_coll_done_symbol` with `loop = true`.
  - The collection energy aura stays continuously visible, signaling to the player that this slot is locked and satisfied!

---

## 3.3 The Checkmark Tick Effect (`playMarkEffect`)

When `justCompleted == true` (the exact moment `collected >= required` is achieved):

```typescript
private playMarkEffect(): void {
    if (!this.mark || !this.mark.skeletonData) return;
    if (!this.node.activeInHierarchy) {
        this._pendingReplays.push(() => this.playMarkEffect());
        return;
    }
    if (!SpineUtils.hasAnimation(this.mark, this.animMarkIn)) return;

    this.mark.node.active = true;
    // Step 1: Play entry animation (pop in / stamp) without loop
    this.mark.setAnimation(0, this.animMarkIn, false); // "in_eff_tick_coll_symbol"

    // Step 2: Queue continuous shimmer idle animation
    if (SpineUtils.hasAnimation(this.mark, this.animMarkIdle)) {
        this.mark.addAnimation(0, this.animMarkIdle, true); // "idle_eff_tick_coll_symbol"
    }
}
```

### Static Node Checkmark Fallback:
If the art team also provides a static sprite checkmark (`this.checkmark: cc.Node`):
```typescript
if (this.checkmark) {
    this.checkmark.active = isComplete;
}
```
This guarantees an instant visual indicator even if the Spine animation fails to load or is omitted in lightweight builds.

---

## 3.4 Defensive Spine Animation Resolution

Different symbol Spine skeletons may have slightly different animation naming conventions depending on the animator (e.g. `idle_reel_1` vs `idle`, `active_reel_1` vs `active`).

To avoid runtime exceptions, always use the helper:
```typescript
private resolveAnimName(preferred: string, fallback: string): string {
    if (SpineUtils.hasAnimation(this.spine, preferred)) return preferred;
    if (SpineUtils.hasAnimation(this.spine, fallback)) return fallback;
    return "";
}
```
If neither exists, it safely returns `""` and skips playback without interrupting gameplay.
