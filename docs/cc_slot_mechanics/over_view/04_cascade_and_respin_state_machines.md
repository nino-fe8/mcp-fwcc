---
id: "cc_slot_mechanics:overview:cascade_respin_fsm"
title: "Cascade & Respin State Machine Choreography"
category: "cc_slot_mechanics"
tags: ["cc_slot_mechanics", "overview", "cascade_fsm", "respin_state_machine"]
---

# 🔄 Cascade & Respin State Machine Choreography

<!-- convention-summary-start -->
### Cascade & Respin State Machine Choreography Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Cascade & Respin State Machine Choreography.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, over_view
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Multi-Step Cascade Loop
```mermaid
stateDiagram-v2
    [*] --> SpinStart
    SpinStart --> TableStop
    TableStop --> WinEvaluation
    WinEvaluation --> WinShowcase: Win Found
    WinEvaluation --> RoundSettle: No Win
    WinShowcase --> ExplodeSymbols
    ExplodeSymbols --> DropAndRefill
    DropAndRefill --> WinEvaluation: Re-evaluate board
    RoundSettle --> [*]
```
