---
id: "cc_slot_module:SlotTableModule:method:createReelNode"
title: "SlotTableModule.createReelNode() Method Specification"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "method", "createReelNode"]
---

# `SlotTableModule.createReelNode(col: number): cc.Node`

<!-- convention-summary-start -->
### SlotTableModule.createReelNode() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableModule.createReelNode() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
protected createReelNode(col: number): cc.Node
```

---

## 2. Detailed Algorithmic Execution Logic
Instantiates `this.reelPrefab`, names it `Reel_${col}`, sets position `(this.START_X + col * this.SYMBOL_WIDTH, 0)`, and assigns parent `this.table`.

---

## 3. Un-truncated Source Code Implementation
```typescript
protected createReelNode(col: number): cc.Node {
    const node = instantiate(this.reelPrefab);
    node.name = `Reel_${col}`;
    node.setPosition(this.START_X + col * this.SYMBOL_WIDTH, 0);
    node.setParent(this.table);
    return node;
}
```
