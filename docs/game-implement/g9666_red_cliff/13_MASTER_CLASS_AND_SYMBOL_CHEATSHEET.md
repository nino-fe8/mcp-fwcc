---
id: "game-implement:9666:cheatsheet:master_class_and_symbols"
title: "Red Cliff (g9666) Master Class & Symbol Cheatsheet"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "cheatsheet", "symbols", "classes", "quick_reference"]
---

# ⚡ Red Cliff (g9666) Master Class & Symbol Cheatsheet

<!-- convention-summary-start -->
### Red Cliff (g9666) Master Class & Symbol Cheatsheet Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Red Cliff (g9666) Master Class & Symbol Cheatsheet.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: game_implement, g9666_red_cliff
- **Scope & Code Paths**: `file:///c:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/NormalGameDirectorModule9666.ts`, `file:///c:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/FreeGameDirectorModule9666.ts`, `file:///c:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Table/CompositeCascade9666.ts`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Symbol Code Fast Lookup Table

| Symbol | ID | Name | Role | Base Pay (3..6) | Special Effect |
| :---: | :---: | :--- | :---: | :---: | :--- |
| 🛡️ | `K` / `K1` | Gold Ingot | Wild | - | Substitutes standard symbols |
| ⚡ | `K1-2`..`K1-10` | Multiplier Wild | Special Wild | - | Multiplies win by badge value |
| 🗡️ | `S1` | Quan Vũ (Guan Yu) | High Pay | $20\times - 250\times$ | Triggers full column Stacked Wild |
| 👑 | `S2` | Lưu Bị (Liu Bei) | High Pay | $15\times - 100\times$ | Minor Jackpot token source |
| 🛡️ | `S3` | Trương Phi (Zhang Fei) | High Pay | $10\times - 60\times$ | Major Jackpot token source |
| 🏹 | `S4` | Triệu Vân (Zhao Yun) | High Pay | $8\times - 50\times$ | Grand Jackpot token source |
| 🅰️ | `R1` | Ace | Royal | $4\times - 20\times$ | Low pay |
| 🅺 | `R2` | King | Royal | $3\times - 15\times$ | Low pay |
| 🆀 | `R3` | Queen | Royal | $2\times - 10\times$ | Low pay |
| 🅹 | `R4` | Jack | Royal | $1\times - 6\times$ | Low pay |
| 🔟 | `R5` | Ten | Royal | $1\times - 5\times$ | Low pay |
| 🚢 | `SC` | Chiến Thuyền | Scatter | - | 4+ triggers 10 Free Spins |

---

## 2. Key Engine Classes Quick Directory

| Class Name | Directory | Primary Role |
| :--- | :--- | :--- |
| [`NormalGameDirectorModule9666`](file:///c:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/NormalGameDirectorModule9666.ts) | `GameMode/` | Base game spin loop coordinator |
| [`FreeGameDirectorModule9666`](file:///c:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/FreeGameDirectorModule9666.ts) | `GameMode/` | Free spins mode loop coordinator |
| [`CompositeCascade9666`](file:///c:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Table/CompositeCascade9666.ts) | `Table/` | Dual vertical + horizontal cascade manager |
| [`CollectMultiModule9666`](file:///c:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Gui/CollectMultiModule9666.ts) | `Gui/` | Multiplier badge collection banner |
| [`JackpotCollectionModule9666`](file:///c:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Gui/JackpotCollectionModule9666.ts) | `Gui/` | 4-Tier token progress meter |
| [`PaylineInfoModule9666`](file:///c:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Gui/PaylineInfoModule9666.ts) | `Gui/` | Real-time Spine bone tracking label coordinator |
| [`StackWildModule9666`](file:///c:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Table/StackWildModule.ts) | `Table/` | Guan Yu full column wild cutscene |
| [`GameDataStore9666`](file:///c:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Data/GameDataStore9666.ts) | `Data/` | Centralized state and matrix store |
