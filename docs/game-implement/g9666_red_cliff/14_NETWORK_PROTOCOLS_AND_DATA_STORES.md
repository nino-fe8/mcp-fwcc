---
id: "game-implement:9666:protocol:network_and_data_stores"
title: "Red Cliff (g9666) Network Protocol & Data Contract Specification"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "network", "protocol", "websocket", "payload", "json"]
---

# 🌐 Red Cliff (g9666) Network Protocol & Data Contract Specification

<!-- convention-summary-start -->
### Red Cliff (g9666) Network Protocol & Data Contract Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Red Cliff (g9666) Network Protocol & Data Contract Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: game_implement, g9666_red_cliff
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Spin Request & Response Packet Format

### Client Request: `SPIN_REQUEST`
```json
{
    "action": "spin",
    "betAmount": 10000,
    "betLevel": 1,
    "isTurbo": false
}
```

### Server Response: `SPIN_RESPONSE`
```json
{
    "status": 200,
    "matrix": [
        ["S1", "R1", "R2", "R3"],
        ["K1-8", "S2", "R4"],
        ["S3", "R5", "R1", "R2", "R3"],
        ["S4", "R4", "R5"],
        ["R1", "R2", "R3", "R4"],
        ["S1", "R5", "R1"]
    ],
    "horizontalMatrix": ["K1-2", "S1", "S3", "R2"],
    "payLines": [
        {
            "symbol": "S1",
            "count": 3,
            "winAmount": 20000,
            "multiplier": 8,
            "cells": [[0, 0], [1, 0], [2, 0]]
        }
    ],
    "cascades": [
        {
            "step": 1,
            "verticalMatrix": [["R2", "R3", "R4"], ["S2", "R4"]],
            "horizontalMatrix": ["S1", "S3", "R2", "R1"],
            "stepWin": 160000
        }
    ],
    "jackpotTokens": {
        "S1": { "current": 14, "target": 15 },
        "S2": { "current": 6, "target": 12 },
        "S3": { "current": 4, "target": 9 },
        "S4": { "current": 2, "target": 6 }
    },
    "totalWin": 180000,
    "walletBalance": 9980000
}
```
