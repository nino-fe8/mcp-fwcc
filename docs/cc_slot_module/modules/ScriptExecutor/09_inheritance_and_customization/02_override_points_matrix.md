---
id: "cc_slot_module:ScriptExecutor:customization:override_points_matrix"
title: "ScriptExecutor API Consumption & Dynamic Resolution Matrix"
category: "cc_slot_module"
tags: ["ScriptExecutor", "script_executor", "cc_slot_module", "customization", "override_matrix", "hooks"]
---

# 📊 ScriptExecutor API Consumption & Dynamic Resolution Matrix

<!-- convention-summary-start -->
### ScriptExecutor API Consumption & Dynamic Resolution Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for ScriptExecutor API Consumption & Dynamic Resolution Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Dynamic Method Resolution Reference Table

| Invoked Pattern | Target Resolved On Director | Purpose in Game Flow |
| :--- | :--- | :--- |
| `makeScript[ActionName]` | Companion Writer instance | Synchronously builds declarative array of command objects. |
| `[COMMAND]` | Companion Director instance | Standard async command step executed in normal speed. |
| `[COMMAND]_1` | Companion Director instance | Speed 1 (Turbo) specialized command override. |
| `[COMMAND]_2` | Companion Director instance | Speed 2 (FTR / Instant) specialized command override. |
| `_reset[Command]` | Companion Director instance | Fast-forward cleanup method invoked when action is interrupted. |
