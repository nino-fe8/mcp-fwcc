---
id: "game-implement:9666:overview:symbols_and_paytable"
title: "Red Cliff (g9666) Symbol Registry, Skin Mapping & Paytable Specs"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "symbols", "paytable", "payouts", "skin_map", "spine"]
---

# 👑 Red Cliff (g9666) Symbol Registry, Skin Mapping & Paytable Specs

<!-- convention-summary-start -->
### Red Cliff (g9666) Symbol Registry, Skin Mapping & Paytable Specs Summary

- **Core Architecture / Purpose**: Detailed technical reference for symbol classification, Spine skin mapping, multi-size mega variants, and paytable values in Red Cliff (g9666).
- **Key Mechanisms & Design**: 1:1 mapping between backend symbol strings and frontend Spine skins, frame animation tracks, and size-specific animation clips.
- **Domain Capabilities**: game_implement, 01_game_overview
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/Table/SlotSymbolModule9666.ts`, `assets/cc-release-slot/cc1-red-cliff/scripts/Table/TableModuleConfig9666.ts`
- **Related Docs**: [00_EXECUTIVE_SUMMARY_AND_SPEC.md](../00_EXECUTIVE_SUMMARY_AND_SPEC.md), [Master Index](../INDEX.md)
<!-- convention-summary-end -->

---

## 1. Symbol Code Registry & Hierarchy

```
[Special Wilds & Scatters]
├── A     : Scatter (Warship / Cờ trận Xích Bích) -> Triggers Free Game / Extra Spins
├── K     : Wild (Grass Boat / Thuyền Cỏ Mượn Tên) -> Substitutes all except Scatter
├── K1-x  : Multiplier Wild (Gold Ingot / Kim Nguyên Bảo Chu Du) -> Wild with Badge x2..x8
└── K2    : Stack Wild (Zhuge Liang / Gia Cát Lượng) -> Summons Full-Column Wilds

[High Paying Symbols - Heroes]
├── 2     : Quan Vũ (Guan Yu - Green Robe / Thanh Long Đao)
├── 3     : Trương Phi (Zhang Fei - Bát Xà Mâu)
└── 4     : Triệu Vân (Zhao Yun - Bạch Mã / Thương)

[Mid Paying Symbols - Officers & Armory]
├── 5     : Hoàng Trung (Huang Zhong)
├── 6     : Mã Siêu (Ma Chao)
└── 7     : Cung Nỏ / Binh Khí (Weapons)

[Low Paying Symbols - Card Royals]
├── 8     : Ace (A)
├── 9     : King (K)
├── B     : Queen (Q)
├── C     : Jack (J)
└── D     : Ten (10)
```

---

## 2. Spine Skin & Frame Animation Mapping

In [`SlotSymbolModule9666.ts`](file:///c:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Table/SlotSymbolModule9666.ts), skin and skeleton attachments are determined dynamically:

```typescript
private static readonly _skinMap: { [key: string]: string } = {
    'A':  'default',    // Warship Scatter
    'K':  'default',    // Grass Boat Wild
    'K1': 'default',    // Multiplier Ingot Wild
    'K2': 'default',    // Zhuge Liang Stack Wild
    '2':  'default',    // Guan Yu
    '3':  'default',    // Zhang Fei
    '4':  'default',    // Zhao Yun
    '5':  'default',    // Huang Zhong
    '6':  'default',    // Ma Chao
    '7':  'default',    // Weapons
    '8':  'symbol_8',   // Royal Ace
    '9':  'symbol_9',   // Royal King
    'B':  'symbol_10',  // Royal Queen
    'C':  'symbol_11',  // Royal Jack
    'D':  'symbol_12',  // Royal 10
};
```

### Multi-Track Animation Architecture:
- **Track 0**: Main symbol animation (`idle`, `appear`, `win`, `disappear`, `idle_multi`, `transition_multi`).
- **Track 1**: Border Frame animation for multi-cell Royal symbols (`8`, `9`, `B`, `C`, `D`).
  - Clip name: `reel_${this.size.y}` (e.g. `reel_2`, `reel_3`).
- **High-Pay Symbol Reel Scaling**:
  - Symbols `2`, `3`, `4` append the reel height to animation clips: `${animationName}_reel_${this.size.y}` (e.g., `win_reel_2`, `win_reel_3`).

---

## 3. Paytable Matrix & Payout Multipliers

Payout table per coin bet on active AllWays combinations:

| Symbol | Character / Asset | Category | 3 Reels | 4 Reels | 5 Reels | 6 Reels | Max Multiplier |
| :---: | :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **`2`** | Quan Vũ (Guan Yu) | High Pay (Top) | $10\times$ | $20\times$ | $40\times$ | $80\times$ | $80\times$ |
| **`3`** | Trương Phi (Zhang Fei) | High Pay | $8\times$ | $15\times$ | $30\times$ | $60\times$ | $60\times$ |
| **`4`** | Triệu Vân (Zhao Yun) | High Pay | $6\times$ | $12\times$ | $25\times$ | $50\times$ | $50\times$ |
| **`5`** | Hoàng Trung (Huang Zhong) | Mid Pay | $4\times$ | $8\times$ | $15\times$ | $30\times$ | $30\times$ |
| **`6`** | Mã Siêu (Ma Chao) | Mid Pay | $3\times$ | $6\times$ | $12\times$ | $25\times$ | $25\times$ |
| **`7`** | Binh Khí (Weapons) | Mid Pay | $2\times$ | $4\times$ | $8\times$ | $20\times$ | $20\times$ |
| **`8`** | A (Ace) | Royal | $1\times$ | $2\times$ | $3\times$ | $5\times$ | $5\times$ |
| **`9`** | K (King) | Royal | $1\times$ | $2\times$ | $3\times$ | $5\times$ | $5\times$ |
| **`B`** | Q (Queen) | Royal | $1\times$ | $2\times$ | $3\times$ | $5\times$ | $5\times$ |
| **`C`** | J (Jack) | Royal | $1\times$ | $2\times$ | $3\times$ | $5\times$ | $5\times$ |
| **`D`** | 10 (Ten) | Royal | $1\times$ | $2\times$ | $3\times$ | $5\times$ | $5\times$ |
| **`A`** | Scatter Chiến Thuyền | Feature Trigger | - | $7\text{ FS}$ (4 Scatters) | $8\text{ FS}$ (5 Scatters) | $9\text{ FS}$ (6 Scatters) | Feature |
| **`K`** | Wild Thuyền Cỏ | Wild | - | - | - | - | Substitutes all except `A` |
| **`K1-x`**| Multiplier Wild Chu Du | Multiplier Wild | - | - | - | - | Boosts payout by badge value |
| **`K2`** | Gia Cát Lượng | Stack Wild | - | - | - | - | Replaces entire col with Wilds |
