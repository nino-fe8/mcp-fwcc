---
id: "game-implement:9666:spec:executive_summary"
title: "Red Cliff (g9666) Executive Summary & Math Specification"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "g9666", "red_cliff", "specification", "math", "symbols", "ways"]
---

# 📜 Red Cliff (g9666) Executive Summary & Math Specification

<!-- convention-summary-start -->
### Red Cliff (g9666) Executive Summary & Math Specification Summary

- **Core Architecture / Purpose**: Master technical specification and game design reference for Red Cliff (g9666) slot engine.
- **Key Mechanisms & Design**: $4 \times 6$ grid with $1 \times 4$ top horizontal sub-reel, dual cascade system, up to 10,000 ways, multi-size mega symbols, Zhuge Liang stack wilds, Zhou Yu multiplier wilds, scatter flag collection free spins, and 4-tier hero token jackpot.
- **Domain Capabilities**: game_implement, g9666_red_cliff
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/`, `assets/cc-common/`
- **Related Docs**: [Master Index](./INDEX.md), [00_ALL_GAME_FEATURES_DEEP_DIVE.md](./00_ALL_GAME_FEATURES_DEEP_DIVE.md)
<!-- convention-summary-end -->

---

## 1. Game Overview & Grid Dimensions

- **Game Code**: `g9666` / `cc1-red-cliff`
- **Commercial Title**: Red Cliff - Đại Chiến Xích Bích
- **Engine Framework**: Cocos Creator 2.4 + ARK Slot Framework Module System (`eno`)
- **Pay System**: `PAY_SYSTEM_TYPE_ENUM.ALLWAYS` (Up to 10,000 Ways to win)
- **Base Bet Units**: 20 credits per spin (`TOTAL_BET_CREDIT = 20`)
- **Grid Layout**:
  - **Main Board**: 6 vertical reels $\times$ 4 rows (`TABLE_FORMAT: [4, 4, 4, 4, 4, 4]`).
  - **Top Sub-Reel (Horizontal)**: 1 row $\times$ 4 columns spanning Reels 2, 3, 4, and 5 (`HorizontalTableModule9666`).
  - Effective reel heights: Column 1 = 4, Columns 2..5 = 5 (4 vertical + 1 horizontal), Column 6 = 4.

---

## 2. Official Symbol Code Registry & Roles

Mapped directly from [`TableModuleConfig9666.ts`](file:///c:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Table/TableModuleConfig9666.ts), [`SlotSymbolModule9666.ts`](file:///c:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Table/SlotSymbolModule9666.ts), and [`en_US.json`](file:///c:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/data/9666_Localization/en_US.json):

| Symbol Code | In-Game Name / Theme | Category | Base Multiplier (3 / 4 / 5 / 6 of a kind) | Mechanics & Properties |
| :---: | :--- | :---: | :---: | :--- |
| **`K`** | Thuyền Cỏ (Grass Boat) | Wild | Substitutes all regular symbols except Scatter | Appears on reels 2..5 and Top Sub-Reel. Also created by Transform Symbol. |
| **`K1-x`** | Kim Nguyên Bảo (Gold Ingot) | Multiplier Wild | Substitutes + awards $\times 2, \times 3, \times 4, \times 5, \times 8$ | Multiplier badge collected to Consolidated Banner. Unexploded wild reverts on next spin. |
| **`K2`** | Gia Cát Lượng (Zhuge Liang) | Stack Wild | Triggers full column expansion | Replaces entire vertical column with Stacked Wilds (`K, K, K, K`). Priority `zIndex = 10`. |
| **`A`** | Chiến Thuyền / Chiến Kỳ (Warship Scatter) | Scatter | Feature trigger ($4+\text{ A} \rightarrow \text{Free Game}$) | Collects into 4 Flags. In Free Game: $+1$ extra spin per Scatter. |
| **`2`** | Quan Vũ (Guan Yu) | High Pay (Top) | $10\times / 20\times / 40\times / 80\times$ | Supports Mega variants (`2_1_2`, `2_1_3`). Spine skin `default`. |
| **`3`** | Trương Phi (Zhang Fei) | High Pay | $8\times / 15\times / 30\times / 60\times$ | Supports Mega variants (`3_1_2`, `3_1_3`). Spine skin `default`. |
| **`4`** | Triệu Vân (Zhao Yun) | High Pay | $6\times / 12\times / 25\times / 50\times$ | Supports Mega variants (`4_1_2`, `4_1_3`). Spine skin `default`. |
| **`5`** | Hoàng Trung (Huang Zhong) | Mid Pay | $4\times / 8\times / 15\times / 30\times$ | Supports Mega variants (`5_1_2`, `5_1_3`). |
| **`6`** | Mã Siêu (Ma Chao) | Mid Pay | $3\times / 6\times / 12\times / 25\times$ | Supports Mega variants (`6_1_2`, `6_1_3`). |
| **`7`** | Cung Tên / Binh Khí (Weapons) | Mid Pay | $2\times / 4\times / 8\times / 20\times$ | Supports Mega variants (`7_1_2`, `7_1_3`). |
| **`8`** | A (Ace) | Royal Low | $1\times / 2\times / 3\times / 5\times$ | Spine skin `symbol_8`. Multi-size variants with frame animation. |
| **`9`** | K (King) | Royal Low | $1\times / 2\times / 3\times / 5\times$ | Spine skin `symbol_9`. Multi-size variants with frame animation. |
| **`B`** | Q (Queen) | Royal Low | $1\times / 2\times / 3\times / 5\times$ | Spine skin `symbol_10`. Multi-size variants with frame animation. |
| **`C`** | J (Jack) | Royal Low | $1\times / 2\times / 3\times / 5\times$ | Spine skin `symbol_11`. Multi-size variants with frame animation. |
| **`D`** | 10 (Ten) | Royal Low | $1\times / 2\times / 3\times / 5\times$ | Spine skin `symbol_12`. Multi-size variants with frame animation. |

---

## 3. Core Mechanics & Mathematical Formulas

### 3.1 Ways to Win Evaluation (AllWays)
Winning combinations start from the leftmost reel and continue consecutively on adjacent reels from left to right.
$$\text{Total Ways} = \prod_{c=1}^{6} N_c$$
Where $N_c$ represents the number of winning symbols matching the paying symbol (or Wild `K`, `K1`, `K2`) on column $c$.
$$\text{Win Coin} = \text{Ways} \times \text{BasePay}(\text{Symbol}, \text{ReelCount})$$
$$\text{Total Cash Win} = \text{Win Coin} \times \text{Coin Value} \times \text{Active Multiplier}$$

### 3.2 Mega Symbol Representation
Standard symbols can occupy 1, 2, or 3 cells vertically on vertical reels:
- $1 \times 1$: Standard symbol code (`2`, `3`, `8`, etc.)
- $1 \times 2$: Multi-cell symbol code (`2_1_2`, `3_1_2`, etc.)
- $1 \times 3$: Multi-cell symbol code (`2_1_3`, `4_1_3`, etc.)
Mega symbols occupy single logical column entries with increased visual height and count towards multiple cell heights during cascade drop calculations.

### 3.3 Progressive Cascade Multiplier
- **Normal Game**: Multiplier starts at $\times 1$. Increased by collecting Ingot Wilds (`K1-x`). Resets to $\times 1$ on each new normal spin.
- **Free Game**: Multiplier starts at $\times 2$. Increases by $+ \times 2$ after every cascade drop up to a cap of $\times 20$. In addition, Ingot Wilds (`K1-x`) boost the payout.
