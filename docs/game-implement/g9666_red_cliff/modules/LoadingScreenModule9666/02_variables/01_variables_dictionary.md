---
id: "game-implement:9666:module:LoadingScreenModule9666:variables"
title: "LoadingScreenModule9666 Exhaustive Variables & Fields Dictionary"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "LoadingScreenModule9666", "loading_screen_module9666", "variables", "fields", "properties"]
---

# 📋 `LoadingScreenModule9666` Exhaustive Variables & Fields Dictionary

<!-- convention-summary-start -->
### LoadingScreenModule9666 Exhaustive Variables & Fields Dictionary Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for LoadingScreenModule9666 Exhaustive Variables & Fields Dictionary.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: game_implement, 02_variables
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Declared Variables & Properties Table

| Line # | Variable Name | Scope | Type | Default / Decorator | Technical Purpose & Invariant |
| :---: | :--- | :---: | :--- | :--- | :--- |
| **10** | `splashSkeleton` | `public` | `sp.Skeleton` | `@property` | Runtime state tracking `splashSkeleton` in `LoadingScreenModule9666`. |
| **12** | `idleAnimName` | `public` | `string` | `@property` | Runtime state tracking `idleAnimName` in `LoadingScreenModule9666`. |
| **14** | `startAnimName` | `public` | `string` | `@property` | Runtime state tracking `startAnimName` in `LoadingScreenModule9666`. |
| **16** | `delayBeforeHideLoading` | `public` | `number` | `@property` | Runtime state tracking `delayBeforeHideLoading` in `LoadingScreenModule9666`. |
| **18** | `delayBeforeStartAnim` | `public` | `number` | `@property` | Runtime state tracking `delayBeforeStartAnim` in `LoadingScreenModule9666`. |
| **20** | `earlySwitchOffset` | `public` | `number` | `@property` | Runtime state tracking `earlySwitchOffset` in `LoadingScreenModule9666`. |
| **22** | `pendingGateEvent` | `private` | `string` | `''` | Runtime state tracking `pendingGateEvent` in `LoadingScreenModule9666`. |

---

## 2. State Mutation Guardrails

All variables in `LoadingScreenModule9666` are initialized during instantiation (`onLoadExtend` / `initExtend`) and reset across spins (`RESET_ON_SPIN` / `BEFORE_RESET_TABLE`). Direct external mutation is guarded to ensure thread and animation safety.
