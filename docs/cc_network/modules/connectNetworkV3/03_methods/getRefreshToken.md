---
id: "cc_network:connectNetworkV3:methods:getRefreshToken"
title: "connectNetworkV3.getRefreshToken Method Walkthrough"
category: "cc_network"
tags: ["connectNetworkV3", "getRefreshToken", "token_refresh"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📖 `connectNetworkV3.getRefreshToken()`

<!-- convention-summary-start -->
### connectNetworkV3.getRefreshToken Method Walkthrough Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for connectNetworkV3.getRefreshToken Method Walkthrough.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_network, 03_methods
- **Scope & Code Paths**: `../../../../../../../assets/cc-common/cc-network/v3/connectNetworkV3.js#L101-L113`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Declaring Module**: `connectNetworkV3` ([`connectNetworkV3.js`](../../../../../../../assets/cc-common/cc-network/v3/connectNetworkV3.js#L101-L113))
- **Signature**: `getRefreshToken(): string`

---

## 1. 🔍 Method Implementation

```javascript
getRefreshToken() {
    const loadConfigAsync = require('loadConfigAsync');
    const {LOGIN_IFRAME, URL_REFRESH_TOKEN = 'refresh-token', USER_REFRESH_TOKEN = 'user-refresh-token'} = loadConfigAsync.getConfig();
    let refreshToken = '';
    if (LOGIN_IFRAME) {
        const {getUrlParam} = require('gameCommonUtils');
        refreshToken = getUrlParam(URL_REFRESH_TOKEN);
        cc.sys.localStorage.setItem(USER_REFRESH_TOKEN, refreshToken);
    } else {
        refreshToken = cc.sys.localStorage.getItem(USER_REFRESH_TOKEN);
    }
    return refreshToken;
}
```

---

## 2. ⚡ Execution Analysis
- In iframe mode (`LOGIN_IFRAME`), reads parameter `URL_REFRESH_TOKEN` (defaulting to `'refresh-token'`) from URL query and caches it into `localStorage['user-refresh-token']`.
- In non-iframe portal mode, reads cached refresh token from local storage directly.
