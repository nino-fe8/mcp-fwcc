---
id: "cc_slot_module:PaylineSymbolModule:events:scoped_module_events"
title: "PaylineSymbolModule Scoped Module & Internal Bus Events"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "events", "scoped_events"]
---

# 📡 PaylineSymbolModule Scoped Module & Internal Bus Events

<!-- convention-summary-start -->
### PaylineSymbolModule Scoped Module & Internal Bus Events Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineSymbolModule Scoped Module & Internal Bus Events.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Internal `payLineEmitter` Events

| Event Name | Direction | Payload | Purpose |
| :--- | :--- | :--- | :--- |
| **`PAYLINE_SET_DATA`** | Listens To | `{ matrix, payLines }` | Ingests matrix and paylines. |
| **`PAYLINE_BLINK_ALL`** | Listens To | `{ blinkDuration }` | Blinks all winning symbols across all hit lines. |
| **`PAYLINE_STOP_ALL`** | Listens To | None | Stops win animation loops. |
| **`PAYLINE_DIM_ALL`** | Listens To | `excludeSymbols` | Dims unhit symbols. |
| **`PAYLINE_SHOW_LINE`** | Listens To | `payLine, duration` | Highlights single payline in cycle. |
| **`PAYLINE_CLEAR`** | Listens To | None | Cleans up and recycles symbols to pool. |
| **`SYMBOL_PLAY_ANIMATION_WIN`** | Emits | `{ symbol, loop, duration }` | Informs `PaylineWinFrameModule` to play synced border box animation. |

---

## 2. Scoped `moduleEvent` Subscriptions

| Event Name | Direction | Payload | Purpose |
| :--- | :--- | :--- | :--- |
| **`SHOW_IDLE_SYMBOLS`** | Listens To | `symbols?: cc.Node[]` | Transitions symbols to idle animation loops. |
