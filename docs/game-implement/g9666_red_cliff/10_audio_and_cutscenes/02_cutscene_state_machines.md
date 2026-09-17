---
id: "game-implement:9666:audio:cutscenes"
title: "Red Cliff (g9666) Cutscene State Machines Specification"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "CutsceneControllerModule", "BigWin", "JackpotWin", "TotalWin"]
---

# 🎬 Red Cliff (g9666) Cutscene State Machines Specification

<!-- convention-summary-start -->
### Red Cliff (g9666) Cutscene State Machines Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Red Cliff (g9666) Cutscene State Machines Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: game_implement, 10_audio_and_cutscenes
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. BigWin / MegaWin / SuperWin Tier Thresholds

$$\text{Win Tier} = \begin{cases}
\text{Big Win} & 20\times \le \text{Win} < 50\times \\
\text{Mega Win} & 50\times \le \text{Win} < 100\times \\
\text{Super Win} & \text{Win} \ge 100\times
\end{cases}$$
