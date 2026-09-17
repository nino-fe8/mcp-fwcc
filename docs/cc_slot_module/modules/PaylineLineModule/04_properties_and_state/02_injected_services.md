---
id: "cc_slot_module:PaylineLineModule:properties_and_state:injected_services"
title: "PaylineLineModule Injected Context & Services"
category: "cc_slot_module"
tags: ["PaylineLineModule", "payline_line_module", "cc_slot_module", "properties", "injected_services"]
---

# 💉 PaylineLineModule Injected Context & Services

<!-- convention-summary-start -->
### PaylineLineModule Injected Context & Services Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineLineModule Injected Context & Services.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Context Injected via `init()`

Inherited from `BasePaylineComponent`:

```typescript
public init(context: {
    payLineEmitter: cc.EventTarget;
    config: any;
    moduleEvent: cc.EventTarget;
    eventManager: any;
}): void {
    this.payLineEmitter = context.payLineEmitter;
    this.config = context.config;
    this.moduleEvent = context.moduleEvent;
    this.eventManager = context.eventManager;
    this.registerPaylineEvents();
}
```
