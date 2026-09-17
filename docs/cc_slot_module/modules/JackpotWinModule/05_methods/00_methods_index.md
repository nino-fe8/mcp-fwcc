---
id: "cc_slot_module:JackpotWinModule:methods:index"
title: "JackpotWinModule Methods Catalog Index"
category: "cc_slot_module"
tags: ["JackpotWinModule", "jackpot_win_module", "cc_slot_module", "methods", "index"]
---

# 📚 JackpotWinModule Methods Catalog Index

<!-- convention-summary-start -->
### JackpotWinModule Methods Catalog Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotWinModule Methods Catalog Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `./onLoadExtend.md`, `./enter.md`, `./initValue.md`
- **Related Docs**: [`onLoadExtend`](./onLoadExtend.md), [`enter`](./enter.md), [`initValue`](./initValue.md)
<!-- convention-summary-end -->


---

## 1. Declared Methods Index

| Method Name | Scope | Return Type | Brief Purpose |
| :--- | :--- | :--- | :--- |
| **[`onLoadExtend`](./onLoadExtend.md)** | `public` | `void` | Resolves label and particle component references. |
| **[`enter`](./enter.md)** | `public` | `void` | Begins particles, sound, and starts rolling tween. |
| **[`initValue`](./initValue.md)** | `public` | `void` | Unpacks content payload and sets initial state flags. |
| **[`startUpdateWinAmount`](./startUpdateWinAmount.md)**| `public` | `void` | Runs 10s money count-up via `moneyTween.runNumber`. |
| **[`startParticle`](./startParticle.md)** | `public` | `void` | Resets and triggers coin particle emissions. |
| **[`stopParticle`](./stopParticle.md)** | `public` | `void` | Stops coin particle emissions. |
| **[`onClick`](./onClick.md)** | `public` | `void` | Accelerates money count-up to a 1s completion on player tap. |
| **[`finish`](./finish.md)** | `public` | `void` | Formats final string and schedules modal exit. |
| **[`resumeMainBGM`](./resumeMainBGM.md)** | `public` | `void` | Virtual audio hook to restore main game BGM. |
| **[`exit`](./exit.md)** | `public` | `void` | Restores background music and exits cutscene. |
| **[`bindQuickShow`](./bindQuickShow.md)** | `public` | `void` | Unlocks `_skippable` after `delayShowTime`. |
