---
id: "cc_slot_module:ScriptExecutor:customization:subclassing_guide"
title: "ScriptExecutor Customization & Architecture Guide"
category: "cc_slot_module"
tags: ["ScriptExecutor", "script_executor", "cc_slot_module", "customization", "subclassing", "architecture"]
---

# 🏗️ ScriptExecutor Customization & Architecture Guide

<!-- convention-summary-start -->
### ScriptExecutor Customization & Architecture Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for ScriptExecutor Customization & Architecture Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Architectural Philosophy: Closed Queue Driver

`ScriptExecutor` is a **Core Infrastructure Driver**.

In almost all slot games, developers do **NOT** subclass `ScriptExecutor`. Instead, game mechanics are customized by:
1. **Adding Writer Methods**: Defining `makeScript[ActionName](data)` on custom Writers.
2. **Adding Director Command Handlers**: Defining `COMMAND(data)`, `COMMAND_1(data)`, `COMMAND_2(data)` on custom Directors.
3. **Registering Reset Hooks**: Defining `_reset[Command]()` for skippable actions.
