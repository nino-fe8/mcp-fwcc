---
id: "cc_slot_module:FortuneWheelGameDirector:customization:game_creation_workflow"
title: "Game Creation Workflow: Configuring Wheel Mini-Games"
category: "cc_slot_module"
tags: ["FortuneWheelGameDirector", "fortune_wheel_director", "cc_slot_module", "customization", "workflow", "checklist"]
---

# 🚀 Game Creation Workflow: Configuring Wheel Mini-Games

<!-- convention-summary-start -->
### Game Creation Workflow: Configuring Wheel Mini-Games Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Game Creation Workflow: Configuring Wheel Mini-Games.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


Follow this 4-step checklist when setting up Fortune Wheel mini-games:

---

## Step 1: Create Wheel Node
Under `Canvas/Director/GameMode/FortuneWheel`, attach `FortuneWheelGameDirector` and `FortuneWheelGameWriter`.

---

## Step 2: Configure Wheel Physics in `FortuneWheelModule`
Attach `FortuneWheelModule`, `FortuneWheelModuleConfig`, and `FortuneWheelModuleData` to the child `WheelTable` node.

---

## Step 3: Wire Spin Button
Attach a `cc.Button` emitting `ON_SPIN_WHEEL` up to the director.

---

## Step 4: Validate Rotation & Landing
1. Click Spin ➔ Verify wheel accelerates into steady spin.
2. Server responds ➔ Verify wheel decelerates smoothly onto winning wedge.
3. Test fast stop ➔ Verify tap shortens deceleration cleanly.
