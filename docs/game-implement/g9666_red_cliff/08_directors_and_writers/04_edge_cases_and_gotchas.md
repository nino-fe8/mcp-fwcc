---
id: "game-implement:9666:directors:gotchas"
title: "Red Cliff (g9666) Director & Writer Edge Cases & Gotchas"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "gotchas", "directors", "writers", "deadlocks"]
---

# ⚠️ Red Cliff (g9666) Director & Writer Edge Cases & Gotchas

<!-- convention-summary-start -->
### Red Cliff (g9666) Director & Writer Edge Cases & Gotchas Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Red Cliff (g9666) Director & Writer Edge Cases & Gotchas.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: game_implement, 08_directors_and_writers
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Gotcha: Command Promise Deadlock on Missing Animation Callback
- **Symptom**: Game hangs forever between cascade drops.
- **Root Cause**: A command returns an unresolving `Promise` because a Spine animation complete callback failed to trigger.
- **Fix**: Always wrap Spine playback promises with a safety timeout fallback:
```typescript
await Promise.race([
    spinePlayPromise,
    this.delayAction(3.0) // Safety fallback timeout
]);
```
