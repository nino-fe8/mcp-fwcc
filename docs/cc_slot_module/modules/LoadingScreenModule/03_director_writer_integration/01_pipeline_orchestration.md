---
id: "cc_slot_module:LoadingScreenModule:pipeline:pipeline_orchestration"
title: "LoadingScreenModule Scene Handshake & Director Handover"
category: "cc_slot_module"
tags: ["LoadingScreenModule", "loading_screen_module", "cc_slot_module", "pipeline", "handover"]
---

# 🎛️ LoadingScreenModule Scene Handshake & Director Handover

<!-- convention-summary-start -->
### LoadingScreenModule Scene Handshake & Director Handover Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for LoadingScreenModule Scene Handshake & Director Handover.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `GameInit.ts`, `GameDirector.ts`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Handover into Main Game Director

When `LoadingScreenModule` invokes `director.loadScene(this.updatedScene)`, the target main game scene mounts `GameInit.ts` and `GameDirector.ts`, which initialize game logic and begin socket handshakes.
