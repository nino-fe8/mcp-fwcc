---
id: "cc_slot_mechanics:overview:ways_lines_clusters"
title: "Paylines vs AllWays vs Clusters Evaluation Comparison"
category: "cc_slot_mechanics"
tags: ["cc_slot_mechanics", "overview", "evaluation_comparison", "allways", "cluster_pay", "paylines"]
---

# ⚖️ Paylines vs AllWays vs Clusters Evaluation Comparison

<!-- convention-summary-start -->
### Paylines vs AllWays vs Clusters Evaluation Comparison Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Paylines vs AllWays vs Clusters Evaluation Comparison.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, over_view
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Comparative Matrix

| Evaluation Mode | Grid Structure | Evaluation Algorithm | Minimum Trigger |
| :--- | :--- | :--- | :--- |
| **Paylines** | $5\times 3$ or $5\times 4$ | Predefined coordinate tracks | 3 on a fixed line |
| **AllWays / Megaways** | $5\times 3$ up to $6\times 7$ | Left-to-right adjacent column product | 3 consecutive cols |
| **Cluster Pay** | $7\times 7$ or $8\times 8$ | Orthogonal 4-directional BFS flood fill | $\ge 4$ connected cells |
