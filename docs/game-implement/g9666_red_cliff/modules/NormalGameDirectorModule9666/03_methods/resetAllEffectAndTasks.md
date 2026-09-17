---
id: "game-implement:9666:module:NormalGameDirectorModule9666:methods:resetAllEffectAndTasks"
title: "NormalGameDirectorModule9666.resetAllEffectAndTasks Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "NormalGameDirectorModule9666", "normal_game_director_module9666", "methods", "resetAllEffectAndTasks"]
---

# 📖 `NormalGameDirectorModule9666.resetAllEffectAndTasks()`

<!-- convention-summary-start -->
### NormalGameDirectorModule9666.resetAllEffectAndTasks Line-by-Line Method Walkthrough Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for NormalGameDirectorModule9666.resetAllEffectAndTasks Line-by-Line Method Walkthrough.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: game_implement, 03_methods
- **Scope & Code Paths**: `file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/NormalGameDirectorModule9666.ts`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature & Overview

```typescript
public resetAllEffectAndTasks(): void
```

- **Declaring Class**: `NormalGameDirectorModule9666` ([`NormalGameDirectorModule9666.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/NormalGameDirectorModule9666.ts))
- **Source Range**: Lines 171 to 174
- **Execution Cost**: $O(1)$ synchronous logic or timer Promise.

---

## 2. Complete Source Implementation

```typescript
	protected resetAllEffectAndTasks(): void {
		super.resetAllEffectAndTasks();
		this._enableNormalSpinButton();
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **171** | `protected resetAllEffectAndTasks(): void {` | Method entry signature declaring `resetAllEffectAndTasks()` returning `void`. |
| **172** | `super.resetAllEffectAndTasks();` | Delegates to parent superclass lifecycle implementation. |
| **173** | `this._enableNormalSpinButton();` | Executes core logic. |
| **174** | `}` | Scope boundary closing block. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as NormalGameDirectorModule9666
    participant Target as Engine / UI

    Caller->>Mod: Call resetAllEffectAndTasks()
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return void
```
