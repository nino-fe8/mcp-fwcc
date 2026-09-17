---
id: "cc_slot_module:PaylineSymbolModule:method:playSymbolAnimation"
title: "PaylineSymbolModule.playSymbolAnimation Method"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "methods", "playSymbolAnimation"]
---

# 🚀 `PaylineSymbolModule.playSymbolAnimation(symbol, duration): void`

<!-- convention-summary-start -->
### PaylineSymbolModule.playSymbolAnimation Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineSymbolModule.playSymbolAnimation Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
protected playSymbolAnimation(symbol: cc.Node, duration?: number): void
```

---

## 2. Full Source Code

```typescript
protected playSymbolAnimation(symbol: cc.Node, duration?: number): void {
    if (!symbol) {
        return;
    }

    eno.changeParent(symbol, this.container);
    const loop = this.paylineConfig.PLAY_ANIMATION_LOOP || false;
    symbol.active = true;
    symbol.emit('ENABLE_HIGHLIGHT');
    symbol.emit('PLAY_ANIMATION_WIN', loop, duration);
    this.payLineEmitter.emit(PaylineEventTypes.SYMBOL_PLAY_ANIMATION_WIN, { symbol, loop, duration });
}
```
