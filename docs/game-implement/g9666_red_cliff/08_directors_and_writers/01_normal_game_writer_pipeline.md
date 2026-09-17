---
id: "game-implement:9666:directors:normal_writer_pipeline"
title: "Red Cliff (g9666) Normal Game Writer Command Pipeline"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "NormalGameWriterModule9666", "pipeline", "commands"]
---

# 🎬 Red Cliff (g9666) Normal Game Writer Command Pipeline

<!-- convention-summary-start -->
### Red Cliff (g9666) Normal Game Writer Command Pipeline Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Red Cliff (g9666) Normal Game Writer Command Pipeline.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: game_implement, 08_directors_and_writers
- **Scope & Code Paths**: `file:///c:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/NormalGameWriterModule9666.ts`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Source File**: [`NormalGameWriterModule9666.ts`](file:///c:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/NormalGameWriterModule9666.ts)

---

## 1. Complete Spin Execution Flow

```typescript
makeScriptNormalSpinTrigger(): Command[] {
    return [
        { command: "_pauseWallet" },
        { command: "_startSpinningTable" },
        { command: "_startSpinningTopTable" },
        { command: "_stopSpinningTopTable" },
        { command: "_stopSpinningTable" },
        { command: "_syncStackWild" },
        { command: "_collectWildMultiplier" },
        { command: "_setUpPaylines" },
        { command: "_showAllPaylines" },
        { command: "_checkAndRunRespin" },
        { command: "_showWinAmount" },
        { command: "_checkFeatureTrigger" },
        { command: "_resumeWallet" }
    ];
}
```
