---
id: "cc_network:logic_bridge:network_event_handlers"
title: "SlotGameLogic Network Event Handlers & Lifecycle Methods"
category: "cc_network"
tags: ["logic_bridge", "SlotGameLogic", "event_handlers", "network_failed", "wallet_update", "logout"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📋 `SlotGameLogic` Network Event Handlers & Lifecycle Methods

<!-- convention-summary-start -->
### SlotGameLogic Network Event Handlers & Lifecycle Methods Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for SlotGameLogic Network Event Handlers & Lifecycle Methods.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_network, 02_game_logic_network_bridge
- **Scope & Code Paths**: `assets/cc-common/cc-network/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


This document provides a comprehensive reference of all network event handler methods implemented in `SlotGameLogic`.

---

## 1. 🔍 Master Handler Reference Table

| Method Signature | Invocation Trigger | Core Responsibilities & Flow |
| :--- | :--- | :--- |
| `_onJoinGameSuccess(meta)` | Server returns `jgr` (`client-join-game-result`) | Extracts `playSession` / `dataResume`, stores wallet balances, synchronizes paylines, and rehydrates landing matrix. |
| `_onStateResume(playSession)` | Joining ongoing session or reconnecting | Re-establishes active Free Spins, unfinished cascades, and win tallies. |
| `_onStateUpdate(playSession)` | Incoming spin/feature result packet | Pushes final matrix symbols to reel strips, triggers stop animations, and initiates win evaluation. |
| `onNetworkDisconnect(...)` | WebSocket ping timeout or drop | Halts auto-spin timer and triggers `onShowPopupDisconnected()`. |
| `onNetworkResume()` | WebSocket reconnected successfully | Queries server state via `client-state-request` and restores gameplay seamlessly. |
| `onNetworkFailed(reason)` | Fatal connection failure | Invokes `forceStopCurrentGameMode()` and presents error dialog. |
| `onJoinGameDenied(...)` | Server rejects room join request | Displays access denied modal and redirects user to lobby. |
| `onWalletUpdate(data)` | Server emits `wallet-updated` / `wud` | Dispatches wallet balance updates to header and bet controls. |
| `onUserLogout()` | User logs out or token invalidated | Cleans up event listeners, stops audio, and closes socket. |
| `showPopupNoMoney()` | Balance insufficient for selected bet | Displays "Not Enough Balance" modal (`DialogMessage`). |
