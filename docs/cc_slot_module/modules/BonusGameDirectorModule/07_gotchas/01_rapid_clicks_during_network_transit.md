---
id: "cc_slot_module:BonusGameDirectorModule:gotcha:rapid_clicks_during_network_transit"
title: "Gotcha: Rapid Clicks During Network Transit Corrupts State"
category: "cc_slot_module"
tags: ["BonusGameDirectorModule", "bonus_game_director", "cc_slot_module", "gotchas", "double_click"]
---

# ⚠️ Gotcha: Rapid Clicks During Network Transit Corrupts State

<!-- convention-summary-start -->
### Gotcha: Rapid Clicks During Network Transit Corrupts State Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Rapid Clicks During Network Transit Corrupts State.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Defect Symptom
If a player taps multiple chests rapidly within 100ms on high-latency connections, multiple `SEND_BONUS_GAME_REQUEST` network packets fire, causing backend desynchronization errors.

---

## 2. Root Cause Analysis
`onClickItem()` must immediately execute `this.blockBonusGame()` synchronously before dispatching the network event. If blocking is delayed to an asynchronous callback, additional touch events pass through `checkOpenedBox()`.

---

## 3. Recommended Resolution
Always invoke `this.blockBonusGame()` immediately on the first line of `onClickItem`:
```typescript
onClickItem(evt: SlotCustomEvent): void {
    evt.stopPropagation();
    const { itemId } = evt.details;
    if (this.checkOpenedBox(itemId)) return;
    
    // SYNCHRONOUS BLOCK FIRST:
    this.blockBonusGame();
    this.addItemToOpenBoxes(itemId);
    this.gameLogic.emit(GameLogicUIEvents.SEND_BONUS_GAME_REQUEST, itemId);
}
```
