---
id: "cc_network:connectNetworkV3:methods:loginScene"
title: "connectNetworkV3.loginScene Method Walkthrough"
category: "cc_network"
tags: ["connectNetworkV3", "loginScene", "login", "auth_failed", "globalNetwork"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📖 `connectNetworkV3.loginScene()`

<!-- convention-summary-start -->
### connectNetworkV3.loginScene Method Walkthrough Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for connectNetworkV3.loginScene Method Walkthrough.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_network, 03_methods
- **Scope & Code Paths**: `../../../../../../../assets/cc-common/cc-network/v3/connectNetworkV3.js#L114-L170`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Declaring Module**: `connectNetworkV3` ([`connectNetworkV3.js`](../../../../../../../assets/cc-common/cc-network/v3/connectNetworkV3.js#L114-L170))
- **Signature**: `loginScene(params: {callback: Function, gameId: string, userIndex?: number, callbackAuthFailed: Function}): void`

---

## 1. 🔍 Method Source Code & Logic

```javascript
loginScene({callback, gameId, userIndex, callbackAuthFailed}) {
    const loadConfigAsync = require('loadConfigAsync');
    const {IS_FINISHED_REMOTE, DEV_ENV, USER_TOKEN} = loadConfigAsync.getConfig();

    if (!IS_FINISHED_REMOTE) {
        setTimeout(() => {
            this.loginScene({callback, gameId, userIndex, callbackAuthFailed});
        }, 100);
        return;
    }
    this.gameId = gameId;
    const token = this.getToken();
    const {LOGIN_IFRAME} = loadConfigAsync.getConfig();
    const envId = LOGIN_IFRAME ? 'iframe' : 'portal';
    const gameIdSocket = LOGIN_IFRAME ? gameId : 'all';

    if (token || !DEV_ENV) {
        if (token) {
            globalNetwork.init(token, envId, gameIdSocket);
            callback();
        } else {
            callbackAuthFailed();
        }
    } 
}
```

---

## 2. ⚡ Algorithmic Steps

1. **Remote Config Readiness Check**: Verifies `IS_FINISHED_REMOTE`. If remote config is still loading, schedules a 100ms polling backoff.
2. **Environment Classification**:
   - `envId`: `'iframe'` if `LOGIN_IFRAME` is true, otherwise `'portal'`.
   - `gameIdSocket`: Specific game ID (e.g. `'9666'`) for iframe deployments, or `'all'` for portal mode.
3. **Session Handshake Initiation**:
   - If a valid token exists, calls `globalNetwork.init(token, envId, gameIdSocket)` and triggers the success `callback()`.
   - If token is missing, triggers `callbackAuthFailed()` to display authentication failure error dialog.
