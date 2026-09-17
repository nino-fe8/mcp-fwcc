---
id: "cc_slot_module:IntroGameModule:inheritance:game_creation_workflow"
title: "IntroGameModule Game Creation Setup Workflow"
category: "cc_slot_module"
tags: ["IntroGameModule", "intro_game_module", "cc_slot_module", "inheritance", "workflow"]
---

# 🚀 IntroGameModule Game Creation Setup Workflow

<!-- convention-summary-start -->
### IntroGameModule Game Creation Setup Workflow Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for IntroGameModule Game Creation Setup Workflow.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Step-by-Step Setup

1. Add `IntroGame` node under `Canvas/Director`.
2. Attach `IntroGameModule`.
3. Wire `btnJoinGame` and optional `doNotShowNode` / `progressBar` references.
4. Set unique `gameId` in Inspector if differing from master game config.
