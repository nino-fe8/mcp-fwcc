---
id: "cc_network:CommandManager:methods:resendMessage"
title: "CommandManager.resendMessage Method Walkthrough"
category: "cc_network"
tags: ["CommandManager", "resendMessage", "retry", "backoff", "retransmission"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📖 `CommandManager.resendMessage()`

<!-- convention-summary-start -->
### CommandManager.resendMessage Method Walkthrough Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for CommandManager.resendMessage Method Walkthrough.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_network, 02_methods
- **Scope & Code Paths**: `assets/cc-common/cc-network/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Declaring Class**: `CommandManager`
- **Signature**: `resendMessage(messageId: string): void`

---

## 1. 🔍 Method Logic & Walkthrough

Handles automatic command retransmissions when socket transport suffers packet loss:
1. Looks up stored message metadata (`commandId`, `commandPayload`, `numberResend`, `resendCount`).
2. If `numberResend < resendCount`:
   - Increments retry counter `numberResend++`.
   - Re-dispatches command payload through `MessageManager.sendMessage()`.
   - Updates `_messageIdInfosMap` with new `messageId`.
3. If `numberResend >= resendCount`:
   - Max retry limit exceeded. Emits `COMMAND_FAILED_RETRY` with `commandId` to trigger game error dialog.
