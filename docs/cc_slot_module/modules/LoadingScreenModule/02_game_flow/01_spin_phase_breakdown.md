---
id: "cc_slot_module:LoadingScreenModule:game_flow:spin_phase_breakdown"
title: "LoadingScreenModule Preload & Transition Phases"
category: "cc_slot_module"
tags: ["LoadingScreenModule", "loading_screen_module", "cc_slot_module", "game_flow", "preload_phases"]
---

# ⚡ LoadingScreenModule Preload & Transition Phases

<!-- convention-summary-start -->
### LoadingScreenModule Preload & Transition Phases Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for LoadingScreenModule Preload & Transition Phases.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Loading Phase Breakdown

1. **Bootstrap Phase**: Initializes progress bar to 0%, verifies remote environment flags (`IS_FINISHED_REMOTE`).
2. **Routing Phase**: Resolves target scene based on device memory and URL parameters (`?history=true`).
3. **Asset Preload Phase**: Downloads textures, audio files, and Spine assets with progress callbacks.
4. **Finalization Phase**: Triggers `setProgressFull()` tween to smoothly reach 100% before triggering `director.loadScene()`.
