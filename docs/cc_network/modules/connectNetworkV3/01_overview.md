---
id: "cc_network:connectNetworkV3:overview"
title: "connectNetworkV3 Module Architecture & Authentication Dispatcher"
category: "cc_network"
tags: ["connectNetworkV3", "auth", "token", "login", "bridge", "jsb", "iframe"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 🔑 `connectNetworkV3` Module Architecture & Authentication Dispatcher

<!-- convention-summary-start -->
### connectNetworkV3 Module Architecture & Authentication Dispatcher Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for connectNetworkV3 Module Architecture & Authentication Dispatcher.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_network, connectNetworkV3
- **Scope & Code Paths**: `../../../../../../assets/cc-common/cc-network/v3/connectNetworkV3.js`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Source Location**: [`assets/cc-common/cc-network/v3/connectNetworkV3.js`](../../../../../../assets/cc-common/cc-network/v3/connectNetworkV3.js)
- **Role**: Primary client authentication orchestrator, token extractor, and Native JSB bridge bridgehead.

---

## 1. 🏛️ Architecture & Role Specification

`connectNetworkV3` acts as the gatekeeper for user authentication during the initial game scene bootstrap. It resolves tokens dynamically across heterogeneous host environments:
1. **Direct Web Portal**: Extracts user token directly from configuration or local storage.
2. **Iframe Parent Containers**: Inspects parent URL query parameters (`&token=`, `&trialMode=`, `&ru=`). When operating in trial mode without a real token, it automatically generates a synthetic token formatted as `tr-${uuid()}` and injects it into the browser location query.
3. **Native Mobile App WebViews**: Communicates with native iOS/Android containers via `vjsb` message channels or `window.__Game_Bridge.getUSS()` bridges.

---

## 2. 📱 Native JSB Bridge Command Set (`CC_CMD`)

```typescript
class CC_CMD {
    static CMD_HOME = 1;               // Requests app to navigate back to home screen
    static CMD_TEST = 2;               // Diagnostics / Ping testing
    static CMD_AUTH = 3;               // Requests native container to supply auth token
    static CMD_GET_SOUND_ENABLE = 4;   // Query native sound toggle status
    static CMD_SET_SOUND_ENABLE = 5;   // Update native sound toggle status
    static CMD_GET_MUSIC_ENABLE = 6;   // Query native music toggle status
    static CMD_SET_MUSIC_ENABLE = 7;   // Update native music toggle status
}
```
When `vjsb` is detected in the global environment, `connectNetworkV3` listens for `vjsb.c2jsMessage` incoming callbacks and immediately dispatches `bridgeAppClient.sendGetToken()` to initialize credentials.
