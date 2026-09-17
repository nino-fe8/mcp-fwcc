---
id: "cc_slot_module:systems:pooling_compatibility:waiting_overlays"
title: "Network Latency & Waiting Overlays"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "waiting_scene", "latency_spinner", "reconnect_overlay"]
---

# ⏳ Network Latency & Waiting Overlays

<!-- convention-summary-start -->
### Network Latency & Waiting Overlays Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Network Latency & Waiting Overlays.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 11_pooling_compatibility_and_utility_services
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. WaitingSceneModule
Observes `WaitingSceneData.active` in the reactive data store:
- Automatically reveals a semi-transparent dark mask and rotating spinner if network round-trip time exceeds thresholds or during session reconnects.
- Swallows all touch events to prevent erratic user input during network stalls.
