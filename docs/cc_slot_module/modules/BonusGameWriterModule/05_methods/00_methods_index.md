---
id: "cc_slot_module:BonusGameWriterModule:methods:index"
title: "BonusGameWriterModule Methods Index"
category: "cc_slot_module"
tags: ["BonusGameWriterModule", "bonus_game_writer", "cc_slot_module", "methods", "index"]
---

# 📋 BonusGameWriterModule Methods Index

<!-- convention-summary-start -->
### BonusGameWriterModule Methods Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BonusGameWriterModule Methods Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `./makeScriptResumeGameMode.md`, `./makeScriptShowResultEntry.md`, `./makeScriptShowResultFinal.md`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Declared Generator Methods Summary Table

| Method Signature | Visibility | Return Type | Purpose |
| :--- | :--- | :--- | :--- |
| **[`makeScriptResumeGameMode(): any[]`](./makeScriptResumeGameMode.md)** | `public` | `any[]` | Compiles `_blockBonusGame`, `_resumeOpenedBoxes`, `_unblockBonusGame`, `_startCountDown`. |
| **[`makeScriptShowResultEntry(): any[]`](./makeScriptShowResultEntry.md)** | `public` | `any[]` | Unblocks UI and reveals prize if picks remain; blocks UI if feature ends. |
| **[`makeScriptShowResultFinal(): any[]`](./makeScriptShowResultFinal.md)** | `public` | `any[]` | Compiles `_stopCountDown`, `_openFinalItem`, `_openAllItems`, `_playFinalResultEffect`, `_clearCurrentBonusGameData`. |
