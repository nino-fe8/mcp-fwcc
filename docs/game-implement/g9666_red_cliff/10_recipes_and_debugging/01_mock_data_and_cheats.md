---
id: "game-implement:9666:recipes:mock_and_cheats"
title: "Red Cliff (g9666) Mock Data Injection & Cheat Key Recipes"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "TutorialMockData9666", "cheats", "mock", "recipes"]
---

# 🧪 Red Cliff (g9666) Mock Data Injection & Cheat Key Recipes

<!-- convention-summary-start -->
### Red Cliff (g9666) Mock Data Injection & Cheat Key Recipes Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Red Cliff (g9666) Mock Data Injection & Cheat Key Recipes.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: game_implement, 10_recipes_and_debugging
- **Scope & Code Paths**: `file:///c:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Mock/TutorialMockData9666.ts`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Injecting Custom Mock Spin in Developer Mode

Edit [`TutorialMockData9666.ts`](file:///c:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Mock/TutorialMockData9666.ts):

```typescript
export const MockFreeGameTriggerSpin = {
    matrix: [
        ["SC", "R1", "R2"],
        ["S1", "SC", "R3", "R4"],
        ["R5", "R1", "SC"],
        ["S2", "SC", "R2"],
        ["R3", "R4", "R5"],
        ["R1", "R2", "R3"]
    ],
    horizontalMatrix: ["K1-8", "S1", "S2", "R1"],
    paylineCounts: {},
    totalWin: 0,
    freeGameRemain: 10
};
```
