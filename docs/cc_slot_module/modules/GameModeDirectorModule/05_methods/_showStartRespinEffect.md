---
id: "cc_slot_module:GameModeDirectorModule:method:showStartRespinEffect"
title: "GameModeDirectorModule._showStartRespinEffect() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_showStartRespinEffect"]
---

# `GameModeDirectorModule._showStartRespinEffect(): Promise<void>`

<!-- convention-summary-start -->
### GameModeDirectorModule._showStartRespinEffect() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameModeDirectorModule._showStartRespinEffect() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
async _showStartRespinEffect(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
If `this.dataStore.playSession.payLines` exists, blinks winning lines via `this._blinkAllPaylines()` and clears them with `this._clearPaylines()` before initiating the respin.

---

## 3. Un-truncated Source Code Implementation
```typescript
async _showStartRespinEffect(): Promise<void> {
    if (this.dataStore.playSession.payLines) {
        await this._blinkAllPaylines();
        await this._clearPaylines();
    }
    return Promise.resolve();
}
```
