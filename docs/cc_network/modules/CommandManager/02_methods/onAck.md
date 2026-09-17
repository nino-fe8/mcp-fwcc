---
id: "cc_network:CommandManager:methods:onAck"
title: "CommandManager.onAck Method Walkthrough"
category: "cc_network"
tags: ["CommandManager", "onAck", "ack", "packet_confirmation"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📖 `CommandManager.onAck()`

<!-- convention-summary-start -->
### CommandManager.onAck Method Walkthrough Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for CommandManager.onAck Method Walkthrough.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_network, 02_methods
- **Scope & Code Paths**: `assets/cc-common/cc-network/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Declaring Class**: `CommandManager`
- **Signature**: `onAck(messageId: string): void`

---

## 1. 🔍 Method Logic & Walkthrough

Handles incoming server acknowledgment packets:
1. Checks if `messageId` exists in `_messageIdInfosMap`.
2. Extracts associated `commandPayload` and removes entry from `_messageIdInfosMap`.
3. Releases command execution lock in `_executingCommandType` for that action event.
4. Emits `COMMAND_SEND_SUCCESSFULLY` event to notify listening modules that server received the command.
