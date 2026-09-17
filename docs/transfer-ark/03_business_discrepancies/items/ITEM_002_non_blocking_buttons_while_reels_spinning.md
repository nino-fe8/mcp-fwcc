---
id: "transfer-ark:discrepancy:item_002_non_blocking_buttons_while_reels_spinning"
title: "Item #02: Non-blocking Action Panel Buttons While Reels Are Spinning"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["SlotButtonNormal", "SlotTable", "GameDirector", "BetManager"]
tags: ["discrepancy_item_02", "spin_lock", "interactable", "buttons", "refer_standard"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📌 Item #02: Non-blocking Action Panel Buttons While Reels Are Spinning

<!-- convention-summary-start -->
### Non-blocking Action Panel Buttons While Reels Are Spinning Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, and player interaction differences between Cocos Creator and Reference Game for Item #02: Non-blocking Action Panel Buttons While Reels Are Spinning.
- **Key Mechanisms & Design**: Adopts Theo Ref (According to Reference Game). Reconciles base SDK component locking, event dispatching, and view rehydration to match reference specifications exactly.
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/GUI/SlotButton/SlotButtonNormal.ts`, `SlotButtonNormal9666.ts`, `SlotDirector9666.ts`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Excel Reference Row**: `#2` in `Compare Cocos vs Pixijs.xlsx` (Section 1: Base Game & Action Panel)
- **QA Bug Tracking Link**: [ClickUp Task 86d418ykx](https://app.clickup.com/t/9008199668/86d418ykx)
- **Final Decision**: **Theo Ref (According to Reference Game)**

---

## 1. 🏢 Behavior Comparison

| Aspect | Cocos Creator Base SDK (`cc-common`) | Reference Game (Pixi.js) | ARK Final Solution |
| :--- | :--- | :--- | :--- |
| **Button States During Spin** | All UI buttons on Action Panel (Bet +/-, Setting, Info, Paytable, Sound) are locked (`interactable = false`) while reels are spinning. | Buttons remain interactive (`interactable = true`). The player can freely adjust volume or view Info/Rules during spins. | **Theo Ref**: Keep non-critical buttons clickable while reels spin. Only lock bet modification and the spin trigger button itself. |

---

## 2. 🔍 Root Cause Analysis in Base Framework

In `assets/cc-common/cc-slot-module/GUI/SlotButton/SlotButtonNormal.ts` and `GameModeDirectorModule`:
```typescript
onSpinStarted(): void {
    // ❌ Base SDK disables all registered action panel buttons
    this.buttonList.forEach(btn => btn.interactable = false);
}
```
This aggressive locking interrupts player UX when they only wanted to check game rules or adjust audio while reels are spinning.

---

## 3. 🛠️ Implementation & Codebase Override Recipe

In custom subclass `SlotButtonNormal9666.ts` or within `SlotDirector9666.ts`:

```typescript
// Override spin lock logic to keep Info, Sound, and Settings interactive
protected updateButtonLockState(isSpinning: boolean): void {
    // 1. Lock Spin button to prevent concurrent spins
    if (this.btnSpin) {
        this.btnSpin.interactable = !isSpinning;
    }
    // 2. Lock Bet adjustment buttons during active spin
    if (this.btnBetPlus) this.btnBetPlus.interactable = !isSpinning;
    if (this.btnBetMinus) this.btnBetMinus.interactable = !isSpinning;

    // 3. Keep Info, Rules, Sound, and Setting buttons interactable (Theo Ref)
    if (this.btnInfo) this.btnInfo.interactable = true;
    if (this.btnSetting) this.btnSetting.interactable = true;
    if (this.btnSound) this.btnSound.interactable = true;
}
```

---

## 4. ⚠️ Gotchas & Edge Cases

1. **Popup Opening Mid-Spin**:
   If the player opens the Info/Paytable modal while reels are spinning, ensure the game does not pause or block the network socket response. Reels must stop cleanly in the background.
2. **Bet Changes Prevented**:
   Never allow Bet + / Bet - buttons to modify active spin stake once the network packet is in-flight.

---

## 5. 🔗 Codebase References
- Base Class: `assets/cc-common/cc-slot-module/GUI/SlotButton/SlotButtonNormal.ts`
- Implementation: `assets/cc-release-slot/cc1-red-cliff/scripts/`
