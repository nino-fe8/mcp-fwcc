---
id: "cc_slot_module:SlotButtonModule:methods:playAnimIdle"
title: "SlotButtonSpine.playAnimIdle Method"
category: "cc_slot_module"
tags: ["SlotButtonModule", "SlotButtonSpine", "cc_slot_module", "methods", "playAnimIdle", "spine"]
---

# 📖 `SlotButtonSpine.playAnimIdle()`

<!-- convention-summary-start -->
### SlotButtonSpine.playAnimIdle Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotButtonSpine.playAnimIdle Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Plays looping idle Spine animation (`animIdle` / `"Spin"`) on `spineBtnSpin`.

```typescript
public playAnimIdle(): void
```

---

## 2. Complete Source Code Implementation

```typescript
playAnimIdle(): void {
    if (this.spineBtnSpin && this.spineBtnSpin.findAnimation(this.animIdle)) {
        if (this.spineBtnSpin.animation !== this.animIdle) {
            this.spineBtnSpin.setAnimation(0, this.animIdle, true);
        }
    } else { 
        log("[SlotButton] Not Found Animation: " + this.animIdle);
    }
}
```
