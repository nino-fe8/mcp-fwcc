---
id: "cc_slot_module:PaylineLineModule:methods:clearAll"
title: "PaylineLineModule.clearAll Method"
category: "cc_slot_module"
tags: ["PaylineLineModule", "payline_line_module", "cc_slot_module", "methods", "clearAll"]
---

# 📖 `PaylineLineModule.clearAll()`

<!-- convention-summary-start -->
### PaylineLineModule.clearAll Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineLineModule.clearAll Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Emits `"RESET"` on each active line and returns it cleanly to `linePool`.

```typescript
protected clearAll(): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected clearAll(): void {
    this.lines.forEach(line => {
        line.emit("RESET");
        this.linePool.put(line);
    });
    this.lines.length = 0;
}
```
