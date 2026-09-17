---
id: "cc_slot_module:SlotTableData:customization:game_creation_workflow"
title: "SlotTableData Game Creation Workflow Checklist"
category: "cc_slot_module"
tags: ["SlotTableData", "slot_table_data", "cc_slot_module", "customization", "workflow"]
---

# 🚀 SlotTableData Game Creation Workflow Checklist

<!-- convention-summary-start -->
### SlotTableData Game Creation Workflow Checklist Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableData Game Creation Workflow Checklist.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Step-by-Step Integration Checklist

1. **Mount on Table Node**: Add `SlotTableData` component onto `Table` node in the Scene/Prefab.
2. **Verify Peer Config**: Ensure `TableModuleConfig` is present on the same node.
3. **Verify Server Key Ingestion**: Ensure `registeredKeys` match backend matrix packet keys (`"matrix"`, `"matrix0"`).
4. **Test Reconnection**: Test browser refresh midway through Free Spins to ensure `getResumeMatrix()` restores the board without errors.
