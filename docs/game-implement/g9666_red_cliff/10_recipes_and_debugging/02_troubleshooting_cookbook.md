---
id: "game-implement:9666:recipes:troubleshooting_cookbook"
title: "Red Cliff (g9666) Troubleshooting Cookbook & Common Bug Fixes"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "troubleshooting", "cookbook", "bug_fixes", "p0"]
---

# 🩺 Red Cliff (g9666) Troubleshooting Cookbook & Common Bug Fixes

<!-- convention-summary-start -->
### Red Cliff (g9666) Troubleshooting Cookbook & Common Bug Fixes Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Red Cliff (g9666) Troubleshooting Cookbook & Common Bug Fixes.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: game_implement, 10_recipes_and_debugging
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Quick Diagnostic Flowchart

```mermaid
graph TD
    Bug[Reported Issue] --> Q1{Where does it happen?}
    Q1 -->|Cascade / Drops| C1[Check 03_composite_cascade/05_edge_cases_and_gotchas.md]
    Q1 -->|Multiplier Badges| C2[Check 04_multiplier_and_stack_wild/05_edge_cases_and_gotchas.md]
    Q1 -->|Jackpot Meters| C3[Check 05_jackpot_collection/04_edge_cases_and_gotchas.md]
    Q1 -->|Spine Bone Drift| C4[Check 06_payline_and_spine_sync/04_edge_cases_and_gotchas.md]
    Q1 -->|Spin Freeze| C5[Check 08_directors_and_writers/04_edge_cases_and_gotchas.md]
```
