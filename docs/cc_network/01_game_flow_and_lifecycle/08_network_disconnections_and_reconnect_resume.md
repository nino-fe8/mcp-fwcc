---
id: "cc_network:game_flow:network_disconnections_and_reconnect_resume"
title: "Game Flow 08: Network Disconnections & Reconnect Resume Flow"
category: "cc_network"
tags: ["game_flow", "disconnect", "reconnect", "resume", "client_state_request", "network_drop", "offline"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 🛡️ Game Flow 08: Network Disconnections & Reconnect Resume Flow

<!-- convention-summary-start -->
### Game Flow 08: Network Disconnections & Reconnect Resume Flow Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for Game Flow 08: Network Disconnections & Reconnect Resume Flow.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_network, 01_game_flow_and_lifecycle
- **Scope & Code Paths**: `assets/cc-common/cc-network/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


This document details how the network kernel handles unexpected drops during active spins and automatically restores uninterrupted gameplay upon reconnection.

---

## 1. 📊 Sequence Diagram: Drop Mid-Spin & Reconnect Recovery

```mermaid
sequenceDiagram
    autonumber
    participant UI as Player / Spin Button
    participant Logic as SlotGameLogic
    participant CmdMgr as CommandManager
    participant MsgMgr as MessageManager
    participant Server as Backend Slot Server
    participant Dialog as DialogMessage / NetworkModal

    UI->>CmdMgr: Player Spins (Command sent, commandId = "uuid-123")
    Note over MsgMgr, Server: Network drops unexpectedly (Wi-Fi drop / Carrier switch)

    MsgMgr->>MsgMgr: Heartbeat ping times out ➔ Trigger onNetworkDisconnect()
    MsgMgr->>Dialog: onShowPopupDisconnected() (Show reconnect modal)
    MsgMgr->>MsgMgr: Execute Jittered Exponential Backoff Reconnection

    Note over MsgMgr, Server: Connection Re-established (HTTP Upgrade Success)
    MsgMgr-->>Logic: Broadcast onNetworkResume() / onNetworkConnected()
    Dialog->>Dialog: Dismiss Reconnect Modal

    Logic->>Server: Send "client-state-request" with session token
    Server-->>Logic: Return latest verified state (Result of "uuid-123" + new wallet balance)
    Logic->>Logic: _onStateResume(recoveredSpinData)
    Logic->>UI: Animate reel stop with recovered symbols, credit win, restore button interaction
```

---

## 2. ⚡ Key Fault-Tolerance Mechanisms

1. **Idempotent Retry Safety**:
   Because every spin command is assigned a unique UUID (`commandId`), if the client reconnects and queries state, the server returns the cached outcome of `uuid-123` instead of initiating a second debit.
2. **Smooth Recovery without Game Reload**:
   When network resumes within normal thresholds, `SlotGameLogic.onNetworkResume()` synchronizes data in-place without restarting the Cocos engine, preserving audio preferences, bet size selections, and ongoing cascade combos.
