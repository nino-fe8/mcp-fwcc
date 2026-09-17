---
id: "cc_slot_module:SettingPanel:inheritance:game_creation_workflow"
title: "SettingPanel Game Creation Workflow"
category: "cc_slot_module"
tags: ["SettingPanel", "settingpanel", "cc_slot_module", "inheritance", "workflow"]
---

# 🚀 SettingPanel Game Creation Workflow

<!-- convention-summary-start -->
### SettingPanel Game Creation Workflow Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SettingPanel Game Creation Workflow.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `SettingPanel.prefab`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Checklist

1. Mount `SettingPanel.prefab` under `Canvas/Director/Popup/Setting`.
2. Wire `bgmToggle` and `sfxToggle`.
3. Connect button click handlers to `onShowBetHistory` and `onShowJackpotHistory`.
