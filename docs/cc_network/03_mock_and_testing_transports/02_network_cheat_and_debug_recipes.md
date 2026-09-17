---
id: "cc_network:mock_transport:network_cheat_and_debug_recipes"
title: "Network Cheat Injection & Runtime Debugging Recipes"
category: "cc_network"
tags: ["mock_transport", "cheat_panel", "CheatDebugRuntime9666", "debug", "matrix_injection"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 🧪 Network Cheat Injection & Runtime Debugging Recipes

<!-- convention-summary-start -->
### Network Cheat Injection & Runtime Debugging Recipes Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for Network Cheat Injection & Runtime Debugging Recipes.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_network, 03_mock_and_testing_transports
- **Scope & Code Paths**: `../../../../../assets/cc-release-slot/cc1-red-cliff/scripts/Core/CheatDebugRuntime9666.ts`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


This document provides recipes for injecting customized server matrices, testing edge-case paylines, and triggering network errors using `CheatDebugRuntime9666`.

---

## 1. 🔍 Injecting Custom Spin Matrices via Cheat Panel

Using [`CheatDebugRuntime9666.ts`](../../../../../assets/cc-release-slot/cc1-red-cliff/scripts/Core/CheatDebugRuntime9666.ts):
```typescript
// Example: Force 4 Scatters on next spin to trigger Free Game
cheatRuntime.injectNextSpinMatrix([
    [1, 12, 3, 4],  // 12 = Scatter
    [2, 12, 5, 6],
    [3, 12, 7, 8],
    [4, 12, 9, 10],
    [5, 2,  3, 4]
]);
```

---

## 2. ⚡ Testing Simulated Network Drops

To verify UI robustness during connection failures without pulling physical network cables:
```typescript
// Emulate sudden connection timeout
MessageManager.getInstance()._handleConnectionStatus("CAN_NOT_CONNECT");

// Verify that DialogMessage modal appears and reels safely halt
```
