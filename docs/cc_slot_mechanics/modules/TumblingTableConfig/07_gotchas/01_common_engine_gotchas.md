---
id: "cc_slot_mechanics:TumblingTableConfig:gotchas:common"
title: "TumblingTableConfig Engine Gotchas & Troubleshooting"
category: "cc_slot_mechanics"
tags: ["TumblingTableConfig", "tumbling_table_config", "cc_slot_mechanics", "gotchas", "troubleshooting"]
---

# ⚠️ `TumblingTableConfig` Engine Gotchas & Troubleshooting

<!-- convention-summary-start -->
### TumblingTableConfig Engine Gotchas & Troubleshooting Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TumblingTableConfig Engine Gotchas & Troubleshooting.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Gotcha: Mask Clipping & Bounding Box Overflow
- **Symptom**: Multi-height expanded symbols or horizontal sub-reel items get clipped unexpectedly during spin animations.
- **Root Cause**: The parent `cc.Mask` rectangle bounds do not match the expanded symbol dimensions.
- **Fix**: Adjust `Mask` node dimensions or reparent highlight nodes to the top-level VFX container.

---

## 2. Gotcha: Fast-Stop Desynchronization
- **Symptom**: Fast-stop button click causes symbols to freeze mid-air or skip drop settling.
- **Root Cause**: Skipping tween animations without completing the underlying data matrix update.
- **Fix**: Ensure `fastStop()` always invokes `stopSpin()` / `recycleSymbol()` to guarantee deterministic matrix state.
