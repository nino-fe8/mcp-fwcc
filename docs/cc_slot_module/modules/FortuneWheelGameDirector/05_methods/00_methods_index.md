---
id: "cc_slot_module:FortuneWheelGameDirector:methods:index"
title: "FortuneWheelGameDirector Methods Index"
category: "cc_slot_module"
tags: ["FortuneWheelGameDirector", "fortune_wheel_director", "cc_slot_module", "methods", "index"]
---

# 📋 FortuneWheelGameDirector Methods Index

<!-- convention-summary-start -->
### FortuneWheelGameDirector Methods Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for FortuneWheelGameDirector Methods Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `./onExtendedLoad.md`, `./onSpinWheel.md`, `./_showWheelResult.md`
- **Related Docs**: [`onExtendedLoad(): void`](./onExtendedLoad.md), [`onSpinWheel(): void`](./onSpinWheel.md), [`_showWheelResult(bonusValue: number): Promise<void>`](./_showWheelResult.md)
<!-- convention-summary-end -->


---

## 1. Declared Methods Summary Table

| Method Signature | Visibility | Purpose |
| :--- | :--- | :--- |
| **[`onExtendedLoad(): void`](./onExtendedLoad.md)** | `public` | Calls `super.onExtendedLoad()` and registers `ON_SPIN_WHEEL` scoped listener. |
| **[`onSpinWheel(): void`](./onSpinWheel.md)** | `public` | Dispatches `SEND_BONUS_GAME_REQUEST`, emits `START_SPIN_WHEEL`, blocks UI, and stops timer. |
| **[`_showWheelResult(bonusValue: number): Promise<void>`](./_showWheelResult.md)** | `public` | Emits `STOP_SPIN_WHEEL` with target prize segment index/value. |
| **[`_fastStopWheel(): Promise<void>`](./_fastStopWheel.md)** | `public` | Emits `FAST_STOP_WHEEL` to shorten deceleration time. |
| **[`_runAutoTrigger(): void`](./_runAutoTrigger.md)** | `public` | Handles timeout by triggering `playAutoClick()`. |
| **[`playAutoClick(): void`](./playAutoClick.md)** | `public` | Invokes `onSpinWheel()` as the polymorphic auto-click implementation. |
| **[`resetBonusGame(): void`](./resetBonusGame.md)** | `public` | Calls `super.resetBonusGame()` and emits `RESET_WHEEL`. |
