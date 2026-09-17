---
id: "cc_slot_module:PortraitBetModule:methods:disableBet"
title: "PortraitBetModule.disableBet Method"
category: "cc_slot_module"
tags: ["PortraitBetModule", "portraitbetmodule", "cc_slot_module", "methods", "disableBet"]
---

# 📖 `PortraitBetModule.disableBet()`

<!-- convention-summary-start -->
### PortraitBetModule.disableBet Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PortraitBetModule.disableBet Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Locks shortcut buttons during spin sequences.

```typescript
public disableBet(): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Invoker**: Spin start trigger.

---

## 3. Detailed Algorithmic Breakdown

1. Calls `super.disableBet()`.
2. Sets `this.minBetBtn.interactable = false` and `this.maxBetBtn.interactable = false`.

---

## 4. Caller & Callee Execution Graph

```mermaid
graph TD
  A[Spin Start] --> B[disableBet]
  B --> C[super.disableBet]
  B --> D[Disable buttons]
```

---

## 5. Parameters & Return Value Specification

| Parameter | Type | Description |
| :--- | :--- | :--- |
| None | `void` | Lifecycle method. |

---

## 6. Complete Source Code Implementation

```typescript
disableBet(): void {
	super.disableBet();
	this.minBetBtn.interactable = false;
	this.maxBetBtn.interactable = false;
}
```
