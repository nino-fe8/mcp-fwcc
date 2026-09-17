---
id: "cc_slot_module:GameModeDirectorModule:method:_handleBigWin"
title: "GameModeDirectorModule._handleBigWin() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_handleBigWin", "BigWin", "speed_routing"]
---

# `GameModeDirectorModule._handleBigWin(data: any): Promise<void>`

<!-- convention-summary-start -->
### GameModeDirectorModule._handleBigWin() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameModeDirectorModule._handleBigWin() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public _handleBigWin(data: any): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
1. Reads active speed: `const gameSpeed = this.gameSettings.gameSpeed`.
2. If `gameSpeed === GAME_SPEED_ENUM.NORMAL`:
   - Calls `this._showBigWin(data)` (runs full sequential celebration, blinks paylines, awaits cutscene completion, updates win numbers).
3. If `gameSpeed !== GAME_SPEED_ENUM.NORMAL` (Turbo / FTR):
   - Calls `this._showFastBigWin(data)` (launches cutscene and immediately renders win payline concurrently to avoid delay).

---

## 3. Un-truncated Source Code Implementation
```typescript
_handleBigWin(data): Promise<void> {
    const gameSpeed = this.gameSettings.gameSpeed;
    if (gameSpeed === GAME_SPEED_ENUM.NORMAL) {
        return this._showBigWin(data);
    } else {
        return this._showFastBigWin(data);
    }
}
```
