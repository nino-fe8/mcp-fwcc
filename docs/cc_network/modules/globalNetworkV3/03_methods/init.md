---
id: "cc_network:globalNetworkV3:methods:init"
title: "globalNetworkV3.init Method Walkthrough"
category: "cc_network"
tags: ["globalNetworkV3", "init", "deviceInfo", "socketInit", "sentry"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📖 `globalNetworkV3.init()`

<!-- convention-summary-start -->
### globalNetworkV3.init Method Walkthrough Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for globalNetworkV3.init Method Walkthrough.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_network, 03_methods
- **Scope & Code Paths**: `../../../../../../../assets/cc-common/cc-network/v3/globalNetworkV3.js#L13-L38`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Declaring Module**: `globalNetworkV3` ([`globalNetworkV3.js`](../../../../../../../assets/cc-common/cc-network/v3/globalNetworkV3.js#L13-L38))
- **Signature**: `init(token: string, envId: string = 'portal', gameIdSocket: string = 'all'): void`

---

## 1. 🔍 Method Source Code & Logic

```javascript
this.init = (token, envId = 'portal', gameIdSocket = 'all') => {
    cc.log("Network using V3");
    this.token = token;
    const loadConfigAsync = require('loadConfigAsync');
    const {SOCKET_URL, API_URL} = loadConfigAsync.getConfig();
    const deviceInfo = {
        os: cc.sys.os,
        osVersion: cc.sys.osVersion,
        platform: cc.sys.platform,
        browser: cc.sys.browserType,
        browserVersion: cc.sys.browserVersion,
        language: cc.sys.language
    };
    logger.updateLogger(cc.log, cc.log, cc.warn);
    messageManager.initSocket({
        socketUrl: SOCKET_URL,
        token,
        apiUrl: API_URL,
        urlVerifyToken: 'auth/token/login',
        games: gameIdSocket,
        env: envId,
        device: deviceInfo,
        serviceRest,
    });
    loadConfigAsync.setUpSentry();
};
```

---

## 2. ⚡ Execution Analysis

1. **Token & Environment Caching**: Stores `this.token` and reads `SOCKET_URL`, `API_URL` from configuration.
2. **Device Fingerprinting**: Constructs `deviceInfo` with OS version, platform enum, browser version, and active language.
3. **Logger Bridge**: Pipes internal network logs to Cocos console (`cc.log`, `cc.warn`).
4. **Socket Handshake Bootstrap**: Calls `messageManager.initSocket()` with `urlVerifyToken: 'auth/token/login'`.
5. **Sentry Activation**: Calls `loadConfigAsync.setUpSentry()` to initialize exception monitoring.
