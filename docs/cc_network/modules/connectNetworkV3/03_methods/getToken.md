---
id: "cc_network:connectNetworkV3:methods:getToken"
title: "connectNetworkV3.getToken Method Walkthrough"
category: "cc_network"
tags: ["connectNetworkV3", "getToken", "token_resolution", "trialMode", "uuid"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📖 `connectNetworkV3.getToken()`

<!-- convention-summary-start -->
### connectNetworkV3.getToken Method Walkthrough Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for connectNetworkV3.getToken Method Walkthrough.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_network, 03_methods
- **Scope & Code Paths**: `../../../../../../../assets/cc-common/cc-network/v3/connectNetworkV3.js#L69-L100`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Declaring Module**: `connectNetworkV3` ([`connectNetworkV3.js`](../../../../../../../assets/cc-common/cc-network/v3/connectNetworkV3.js#L69-L100))
- **Signature**: `getToken(): string`

---

## 1. 🔍 Method Logic & Walkthrough

```javascript
getToken() {
    const loadConfigAsync = require('loadConfigAsync');
    const {LOGIN_IFRAME, URL_TOKEN, USER_TOKEN, TOKEN} = loadConfigAsync.getConfig();
    let token = '';

    if (TOKEN) {
        token = TOKEN;
    }
    else if (LOGIN_IFRAME) {
        const {getUrlParam, addUrlParam} = require('gameCommonUtils');
        const TRIAL_PARAM = 'trialMode';
        
        let trialMode = false;
        token = getUrlParam(URL_TOKEN);
        trialMode = (getUrlParam(TRIAL_PARAM) === 'true');
        if (!token && trialMode) {
            token = `tr-${uuid()}`;
            addUrlParam("token", token);
        }
        cc.sys.localStorage.setItem(USER_TOKEN, token);
    } else if (typeof window !== 'undefined' && 
                typeof window["__Game_Bridge"] !== 'undefined' && 
                typeof window["__Game_Bridge"].getUSS === 'function') {
        token = window["__Game_Bridge"].getUSS();
    } else {
        token = cc.sys.localStorage.getItem(USER_TOKEN);
    }
    return token;
}
```

---

## 2. ⚡ Algorithmic Resolution Priority

1. **Config Hardcoded Override**: Checks if `TOKEN` is set in remote or local config (`loadConfigAsync`).
2. **Iframe Integration Flow**:
   - Extracts token using `getUrlParam(URL_TOKEN)`.
   - If token is absent but `trialMode === 'true'`, generates a synthetic UUID token prefixed with `tr-` (e.g. `tr-9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d`) and persists it to URL query via `addUrlParam("token", token)`.
   - Saves resolved token to `localStorage[USER_TOKEN]`.
3. **WebBridge Container**: Queries `window.__Game_Bridge.getUSS()` if running within embedded WebView wrapper.
4. **LocalStorage Fallback**: Reads previously stored `localStorage.getItem(USER_TOKEN)`.
