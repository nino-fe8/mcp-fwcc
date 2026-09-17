---
id: "game-implement:9666:module:DialogMessageModule9666:methods:onDestroy"
title: "DialogMessageModule9666.onDestroy Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "DialogMessageModule9666", "dialog_message_module9666", "methods", "onDestroy"]
---

# 📖 `DialogMessageModule9666.onDestroy()`

<!-- convention-summary-start -->
### DialogMessageModule9666.onDestroy Line-by-Line Method Walkthrough Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for DialogMessageModule9666.onDestroy Line-by-Line Method Walkthrough.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: game_implement, 03_methods
- **Scope & Code Paths**: `file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Gui/DialogMessageModule9666.ts`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature & Overview

```typescript
public onDestroy(): void
```

- **Declaring Class**: `DialogMessageModule9666` ([`DialogMessageModule9666.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Gui/DialogMessageModule9666.ts))
- **Source Range**: Lines 88 to 92
- **Execution Cost**: $O(1)$ synchronous logic or timer Promise.

---

## 2. Complete Source Implementation

```typescript
	onDestroy(): void {
		this.gameLogic.off("SHOW_NOTICE_DIALOG", this.onShowNoticeDialog, this);
		this._clearAutoCloseTimer();
		super.onDestroy();
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **88** | `onDestroy(): void {` | Method entry signature declaring `onDestroy()` returning `void`. |
| **89** | `this.gameLogic.off("SHOW_NOTICE_DIALOG", this.onShowNoticeDialog, this);` | Executes core logic. |
| **90** | `this._clearAutoCloseTimer();` | Executes core logic. |
| **91** | `super.onDestroy();` | Delegates to parent superclass lifecycle implementation. |
| **92** | `}` | Scope boundary closing block. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as DialogMessageModule9666
    participant Target as Engine / UI

    Caller->>Mod: Call onDestroy()
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return void
```
