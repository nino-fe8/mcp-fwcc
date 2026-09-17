---
id: "cc_slot_module:NormalGameWriterModule:customization:production_game_case_study"
title: "Production Case Study: NormalGameWriterModule9666 (Red Cliff Slot)"
category: "cc_slot_module"
tags: ["NormalGameWriterModule", "normal_game_writer", "cc_slot_module", "customization", "case_study", "red_cliff", "production_code"]
---

# 📖 Production Case Study: NormalGameWriterModule9666 (Red Cliff Slot)

<!-- convention-summary-start -->
### Production Case Study: NormalGameWriterModule9666 (Red Cliff Slot) Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Production Case Study: NormalGameWriterModule9666 (Red Cliff Slot).
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Context & Production Code Flow

In **Red Cliff (`g9666L`)**, `NormalGameWriterModule9666` customizes spin stops and respins to insert top reel stops, stacked wild synchronizations, and multiplier gathering:

```typescript
const { _decorator } = cc;
import { NormalGameWriterModule } from '../../../../cc-common/cc-slot-module/SlotModuleExport';
const { ccclass } = _decorator;

@ccclass
export class NormalGameWriterModule9666 extends NormalGameWriterModule {
    // 1. Adds wild multiplier gathering during session resume
    makeScriptPreResumeGameMode(): Object[] {
        let listScript = [];
        listScript.push({ command: "_pauseWallet" });
        listScript.push({ command: "_resumeNormalTable" });
        listScript.push({ command: "_collectWildMultiplier" });
        listScript.push({ command: "_setUpPaylines" });
        listScript.push({ command: "_resumeWinAmount" });
        return listScript;
    }

    // 2. Resets multiplier before spinning
    makeScriptStartSpinning(): Object[] {
        let listScript = [];
        listScript.push({ command: '_resetMultiplier' });
        listScript.push({ command: "_startSpinningTable" });
        return listScript;
    }

    // 3. Inserts top reel stop & stacked wild synchronization
    makeScriptStopSpinningTable(): Object[] {
        let listScript = [];
        listScript.push({ command: "_stopSpinningTopTable" });
        listScript.push({ command: "_stopSpinningTable" });
        listScript.push({ command: "_syncStackWild" });
        listScript.push({ command: "_collectWildMultiplier" });
        listScript.push({ command: "_setUpPaylines" });
        return listScript;
    }
}
```

---

## 2. Key Architectural Takeaway

By customizing `NormalGameWriterModule9666`, game mechanics like `_stopSpinningTopTable` and `_collectWildMultiplier` become declarative command objects in the `ScriptExecutor` queue, guaranteeing sequential execution without polluting engine lifecycle methods!
