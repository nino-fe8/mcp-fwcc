---
id: "game-implement:9666:module:FreeGameDirectorModule9666:methods:_collectScatter"
title: "FreeGameDirectorModule9666._collectScatter Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "FreeGameDirectorModule9666", "free_game_director_module9666", "methods", "_collectScatter"]
---

# 📖 `FreeGameDirectorModule9666._collectScatter()`

<!-- convention-summary-start -->
### FreeGameDirectorModule9666._collectScatter Line-by-Line Method Walkthrough Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for FreeGameDirectorModule9666._collectScatter Line-by-Line Method Walkthrough.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: game_implement, 03_methods
- **Scope & Code Paths**: `file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/FreeGameDirectorModule9666.ts`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature & Overview

```typescript
public _collectScatter(): Promise<void>
```

- **Declaring Class**: `FreeGameDirectorModule9666` ([`FreeGameDirectorModule9666.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/FreeGameDirectorModule9666.ts))
- **Source Range**: Lines 62 to 66
- **Execution Cost**: $O(1)$ synchronous logic or timer Promise.

---

## 2. Complete Source Implementation

```typescript
	_collectScatter(): Promise<void> {
		const scatterCollectData = this.getScatterCollectData();
		console.log('[FreeGameDirectorModule9666] emit COLLECT_SCATTER', scatterCollectData);
		return this.eventManager.emit('COLLECT_SCATTER', scatterCollectData);
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **62** | `_collectScatter(): Promise<void> {` | Method entry signature declaring `_collectScatter()` returning `Promise<void>`. |
| **63** | `const scatterCollectData = this.getScatterCollectData();` | Allocates local variable `scatterCollectData`. |
| **64** | `console.log('[FreeGameDirectorModule9666] emit COLLECT_SCATTER', scatterCollectData);` | Executes core logic. |
| **65** | `return this.eventManager.emit('COLLECT_SCATTER', scatterCollectData);` | Returns value or promise to calling sequence. |
| **66** | `}` | Scope boundary closing block. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as FreeGameDirectorModule9666
    participant Target as Engine / UI

    Caller->>Mod: Call _collectScatter()
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return Promise<void>
```
