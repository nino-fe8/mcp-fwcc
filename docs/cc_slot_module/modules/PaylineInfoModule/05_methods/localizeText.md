---
id: "cc_slot_module:PaylineInfoModule:methods:localizeText"
title: "PaylineInfoModule.localizeText Method"
category: "cc_slot_module"
tags: ["PaylineInfoModule", "payline_info_module", "cc_slot_module", "methods", "localizeText"]
---

# 📖 `PaylineInfoModule.localizeText()`

<!-- convention-summary-start -->
### PaylineInfoModule.localizeText Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineInfoModule.localizeText Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Fetches localized string translations for "LINE" and "WIN" keys.

```typescript
public localizeText(): void
```

---

## 2. Complete Source Code Implementation

```typescript
localizeText(): void {
    this.lineText = this.gameLogic.getGameText("LINE");
    this.winText = this.gameLogic.getGameText(this.getWinText());
}
```
