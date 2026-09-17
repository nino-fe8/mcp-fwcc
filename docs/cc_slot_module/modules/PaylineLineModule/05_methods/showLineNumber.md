---
id: "cc_slot_module:PaylineLineModule:methods:showLineNumber"
title: "PaylineLineModule.showLineNumber Method"
category: "cc_slot_module"
tags: ["PaylineLineModule", "payline_line_module", "cc_slot_module", "methods", "showLineNumber"]
---

# 📖 `PaylineLineModule.showLineNumber()`

<!-- convention-summary-start -->
### PaylineLineModule.showLineNumber Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineLineModule.showLineNumber Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Retrieves or spawns a line instance node for `lineID`, parents it to `container`, and emits `"INIT"` and `"SHOW"`.

```typescript
protected showLineNumber(lineID: any): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected showLineNumber(lineID: any): void {
    let line = this.lines[lineID];
    if (!line) {
        line = this.getLine();
        line.setParent(this.container);
        line.emit("INIT", lineID);
        this.lines[lineID] = line;
    }
    line.emit("SHOW");
}
```
