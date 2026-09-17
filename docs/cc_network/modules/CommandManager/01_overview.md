---
id: "cc_network:CommandManager:overview"
title: "CommandManager Module Architecture & Queue Orchestrator"
category: "cc_network"
tags: ["CommandManager", "commands", "queue", "ack", "retry", "concurrency"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 🚀 `CommandManager` Module Architecture & Queue Orchestrator

<!-- convention-summary-start -->
### CommandManager Module Architecture & Queue Orchestrator Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for CommandManager Module Architecture & Queue Orchestrator.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_network, CommandManager
- **Scope & Code Paths**: `../../../../../../assets/cc-common/cc-network/game-network.js`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Source Location**: Compiled in [`assets/cc-common/cc-network/game-network.js`](../../../../../../assets/cc-common/cc-network/game-network.js)
- **Role**: Dispatches gameplay commands (Spin, Buy Feature, Collect), enforces concurrency constraints, tracks server acknowledgments (ACK), and manages retries.

---

## 1. 🏛️ Architecture & Role Specification

`CommandManager` ensures reliable delivery of player actions by providing:
1. **Concurrency Control**: Enforces `maxConcurrentCommand` (default: 1) to prevent race conditions during reel spins.
2. **Duplicate Action Suppression**: Prevents simultaneous execution of duplicate action types (e.g. double-tapping spin button) returning `COMMAND_FAILED_DUPLICATE`.
3. **Unique Command ID Tagging**: Automatically generates client-side UUIDs bound to each command payload for idempotent server processing.
4. **ACK Tracking & Resend Queue**: Holds sent commands in `_messageIdInfosMap` until server confirms reception via `onAck()`. If network latency or dropped packets occur, initiates automated retries with exponential backoff up to `resendCount` limit.
