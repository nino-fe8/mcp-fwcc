---
id: "game-implement:9666:module:FreeGameDirectorModule9666:methods:_showStartRespinEffect"
title: "FreeGameDirectorModule9666._showStartRespinEffect Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "FreeGameDirectorModule9666", "free_game_director_module9666", "methods", "_showStartRespinEffect"]
---

# 📖 `FreeGameDirectorModule9666._showStartRespinEffect()`

<!-- convention-summary-start -->
### FreeGameDirectorModule9666._showStartRespinEffect Line-by-Line Method Walkthrough Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for FreeGameDirectorModule9666._showStartRespinEffect Line-by-Line Method Walkthrough.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: game_implement, 03_methods
- **Scope & Code Paths**: `file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/FreeGameDirectorModule9666.ts`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature & Overview

```typescript
public _showStartRespinEffect(): Promise<void>
```

- **Declaring Class**: `FreeGameDirectorModule9666` ([`FreeGameDirectorModule9666.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/FreeGameDirectorModule9666.ts))
- **Source Range**: Lines 110 to 125
- **Execution Cost**: $O(1)$ synchronous logic or timer Promise.

---

## 2. Complete Source Implementation

```typescript
	async _showStartRespinEffect(): Promise<void> {
		if (this.dataStore.playSession.payLines
			|| this.dataStore.playSession.freeGamePayLines
			|| this.dataStore.playSession.normalGamePayLines) {
			this._blinkAllPaylines();

			this._showPaylineAmount();
			const speed = (this.gameSettings.isFastToResult || this.gameSettings.isTurboActive) ? 2 : 1;
			await this.delayAction(1 / speed);
			await this.eventManager.emit("APPLY_MULTIPLIER_TO_WIN_AMOUNT", this.dataStore.playSession.respinGameTotal === 1);
			// await this.eventManager.emit('ON_HIDE_PAYLINE_INFO');
			this.eventManager.emit(COMMIT_RESPIN_WIN_AMOUNT);
			await this._clearPaylines();
		}
		return Promise.resolve();
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **110** | `async _showStartRespinEffect(): Promise<void> {` | Method entry signature declaring `_showStartRespinEffect()` returning `Promise<void>`. |
| **111** | `if (this.dataStore.playSession.payLines` | Conditional guard evaluating branching prerequisite. |
| **112** | `\|\| this.dataStore.playSession.freeGamePayLines` | Executes core logic. |
| **113** | `\|\| this.dataStore.playSession.normalGamePayLines) {` | Executes core logic. |
| **114** | `this._blinkAllPaylines();` | Executes core logic. |
| **115** | `` | Executes core logic. |
| **116** | `this._showPaylineAmount();` | Executes core logic. |
| **117** | `const speed = (this.gameSettings.isFastToResult \|\| this.gameSettings.isTurboActive) ? 2 : 1;` | Allocates local variable `speed`. |
| **118** | `await this.delayAction(1 / speed);` | Executes core logic. |
| **119** | `await this.eventManager.emit("APPLY_MULTIPLIER_TO_WIN_AMOUNT", this.dataStore.playSession.respinGameTotal === 1);` | Dispatches event `APPLY_MULTIPLIER_TO_WIN_AMOUNT` to subscribers. |
| **120** | `// await this.eventManager.emit('ON_HIDE_PAYLINE_INFO');` | Dispatches event `ON_HIDE_PAYLINE_INFO` to subscribers. |
| **121** | `this.eventManager.emit(COMMIT_RESPIN_WIN_AMOUNT);` | Dispatches event `Event` to subscribers. |
| **122** | `await this._clearPaylines();` | Executes core logic. |
| **123** | `}` | Scope boundary closing block. |
| **124** | `return Promise.resolve();` | Returns value or promise to calling sequence. |
| **125** | `}` | Scope boundary closing block. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as FreeGameDirectorModule9666
    participant Target as Engine / UI

    Caller->>Mod: Call _showStartRespinEffect()
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return Promise<void>
```
