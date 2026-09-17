---
id: "cc_slot_module:WinEffectModule:overview:architecture_and_role"
title: "WinEffectModule Architectural Role & Celebration Engine"
category: "cc_slot_module"
tags: ["WinEffectModule", "win_effect_module", "cc_slot_module", "overview", "architecture", "big_win", "mega_win"]
---

# 🏛️ WinEffectModule Architectural Role & Celebration Engine

<!-- convention-summary-start -->
### WinEffectModule Architectural Role & Celebration Engine Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WinEffectModule Architectural Role & Celebration Engine.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Architectural Mission

`WinEffectModule` is the celebratory victory overlay controller for Big Win, Mega Win, and Super Win milestones. Extending `BaseCutscene`, it manages dynamic title scaling, rolling number count-ups (`MoneyTween.runBigWinNumber`), coin particle sprays (`CoinsEffect`), touch-to-skip acceleration, and fast-particle Turbo/FTR fallbacks.

```mermaid
graph TD
    DataStore[GameDataStore / Content] -->|totalBet & winAmount| WEM[WinEffectModule]
    WEM -->|Normal Mode| Normal[showEffectWin: Fullscreen Overlay + Coins + Rolling Label]
    WEM -->|Turbo / FTR Mode| Fast[showFastEffectWin: 1s Fast Particle Burst]
    
    Normal -->|updateCurrentTitle()| Title[Dynamic Scale Big -> Mega -> Super]
    Normal -->|onClick() / Tap| Skip[Fast-forward Money Count to Final Value]
    Normal -->|finish()| Teardown[delayHideTime -> exit()]
```

---

## 2. Key Responsibilities

1. **Dual Execution Modes**:
   - **Normal Mode (`showEffectWin`)**: Fullscreen dimming overlay, pulsing win label, coin particles, title escalation ($1.2\times$ pulse), and sound fanfare.
   - **Fast-to-Result Mode (`showFastEffectWin`)**: Disables overlay, activates fast particle system for $1\text{s}$, and resolves callback immediately.
2. **Dynamic Win Tier Escalation (`updateCurrentTitle`)**:
   - Evaluates `currentValue` against thresholds:
     - `_megaWinAmount = totalBet * megaRate` (Default $40\times$)
     - `_superWinAmount = totalBet * superRate` (Default $25\times$)
   - Scales title to $2.0\times$ scale tween upon promotion.
3. **Safe Touch-to-Skip (`bindQuickShow` & `onClick`)**:
   - Guards against accidental skips for `delayShowTime` ($1.0\text{s}$), then fast-forwards label count-up to `winAmount` on player tap.
