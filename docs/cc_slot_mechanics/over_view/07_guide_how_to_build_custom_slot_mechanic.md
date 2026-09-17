---
id: "cc_slot_mechanics:overview:create_custom_mechanic"
title: "Developer Guide: How to Build a Custom Slot Mechanic from Scratch"
category: "cc_slot_mechanics"
tags: ["cc_slot_mechanics", "overview", "custom_mechanic_guide", "developer_tutorial"]
---

# 🛠️ Developer Guide: How to Build a Custom Slot Mechanic from Scratch

<!-- convention-summary-start -->
### Developer Guide: How to Build a Custom Slot Mechanic from Scratch Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Developer Guide: How to Build a Custom Slot Mechanic from Scratch.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, over_view
- **Scope & Code Paths**: `[Name]Config.ts`, `[Name]Data.ts`, `[Name]Module.ts`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. 5-Step Mechanic Creation Checklist
1. **Define Config**: Create `[Name]Config.ts` with timings and animation parameters.
2. **Define Data**: Create `[Name]Data.ts` extending `BaseDataModule` with `registeredKeys`.
3. **Build Controller**: Create `[Name]Module.ts` extending `SlotBaseModule`.
4. **Wire Writer Actions**: Implement action script steps in `NormalGameWriterModule` or dedicated mechanic writer.
5. **Create Test Scene**: Build `[Name]SceneTest.ts` for isolated unit testing.
