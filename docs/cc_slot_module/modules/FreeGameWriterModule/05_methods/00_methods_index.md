---
id: "cc_slot_module:FreeGameWriterModule:methods:index"
title: "FreeGameWriterModule Methods Index"
category: "cc_slot_module"
tags: ["FreeGameWriterModule", "free_game_writer", "cc_slot_module", "methods", "index"]
---

# 📋 FreeGameWriterModule Methods Index

<!-- convention-summary-start -->
### FreeGameWriterModule Methods Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for FreeGameWriterModule Methods Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `./makeScriptResumeGameMode.md`, `./makeScriptSyncPlaySessionData.md`, `./makeScriptFreeSpinTrigger.md`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Declared Methods Catalog

| Member Signature | Purpose |
| :--- | :--- |
| **[`makeScriptResumeGameMode(): Object[]`](./makeScriptResumeGameMode.md)** | Creates script steps to resume Free Game after reconnecting. |
| **[`makeScriptSyncPlaySessionData(): Object[]`](./makeScriptSyncPlaySessionData.md)** | Creates script steps to sync session win values. |
| **[`makeScriptFreeSpinTrigger(): Object[]`](./makeScriptFreeSpinTrigger.md)** | Creates script steps executed before every free spin. |
| **[`makeScriptShowResultFinal(): Object[]`](./makeScriptShowResultFinal.md)** | Routes between remaining spins and feature conclusion. |
| **[`getFreeGameRemainScript(): Object[]`](./getFreeGameRemainScript.md)** | Generates badge counter update command. |
| **[`getFreeGameEndScript(): Object[]`](./getFreeGameEndScript.md)** | Generates `TOTAL_WIN` dialog and exit sequence. |
