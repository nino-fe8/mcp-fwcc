---
id: "cc_slot_module:GameDirector:method:onSwitchGameMode"
title: "GameDirector.onSwitchGameMode() Method Specification"
category: "cc_slot_module"
tags: ["GameDirector", "game_director", "cc_slot_module", "method", "onSwitchGameMode", "mode_stack"]
---

# `GameDirector.onSwitchGameMode(mode: number): void`

<!-- convention-summary-start -->
### GameDirector.onSwitchGameMode() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameDirector.onSwitchGameMode() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public onSwitchGameMode(mode: number): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Checks if current active mode is already `mode`. If yes, logs warning and returns.
2. Searches `this.gameModes` for an element where `gameMode.type === mode`.
3. If found:
   * Pushes `newMode` onto `this.currentModes`.
   * Sets `newMode.rootNode.active = true`.
   * If previous mode existed, sets `currentMode.rootNode.active = false`.
   * Updates `this.dataStore.currentGameMode = mode`.
   * Invokes `newMode.rootNode.getComponent(BaseGameMode).enter()`.
   * Emits `GameUIEvents.UI_MANAGER.UPDATE_GAME_MODE_UI` with `mode`.

---

## 3. Un-truncated Source Code Implementation
```typescript
onSwitchGameMode(mode): void {
    const currentMode = this.currentModes[this.currentModes.length - 1];
    if (currentMode && currentMode.type === mode) {
        this.logger.warn('[GameView]', '[Director]', 'Switching to the same game mode', mode);
        return;
    }

    let newMode = this.gameModes.find(gameMode => gameMode.type === mode);
    if (newMode) {
        this.currentModes.push(newMode);
        newMode.rootNode.active = true;

        if (currentMode) {
            currentMode.rootNode.active = false;
        }
        this.dataStore.currentGameMode = mode;
        newMode.rootNode.getComponent(BaseGameMode).enter();
        this.eventManager.emit(GameUIEvents.UI_MANAGER.UPDATE_GAME_MODE_UI, mode);
    } else {
        this.logger.error('[GameView]', '[Director]', 'Game mode is not implemented:', mode);
    }
}
```
