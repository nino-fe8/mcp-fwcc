---
id: "cc_slot_module:IntroGameModule:gotchas:local_storage_parse_corrupt_crash"
title: "Gotcha: Corrupted localStorage Data Throws JSON.parse Exception"
category: "cc_slot_module"
tags: ["IntroGameModule", "intro_game_module", "cc_slot_module", "gotchas", "local_storage", "json_parse"]
---

# ⚠️ Gotcha: Corrupted `localStorage` Data Throws `JSON.parse` Exception

<!-- convention-summary-start -->
### Gotcha: Corrupted localStorage Data Throws JSON.parse Exception Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Corrupted localStorage Data Throws JSON.parse Exception.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Problem Description

In `IntroGameModule.init()`:
```typescript
const cacheValue = JSON.parse(sys.localStorage.getItem("HideIntroGame")) || {};
```
If `sys.localStorage` contains invalid string data (e.g. from an older app version or malformed web cache), `JSON.parse` throws an unhandled exception that halts the entire scene initialization script.

---

## 2. Solution

Wrap the call in a defensive `try...catch` block:
```typescript
let cacheValue = {};
try {
    const raw = sys.localStorage.getItem("HideIntroGame");
    if (raw) {
        cacheValue = JSON.parse(raw) || {};
    }
} catch (e) {
    cacheValue = {};
}
```
