---
id: "transfer-ark:feature:jackpot_collection:05_implementation_code"
title: "Jackpot Collection - Complete Implementation Code"
category: "feature"
game_ids: ["g9666", "all"]
sdk_modules: ["JackpotCollectionModule", "JackpotCollectionItem", "JackpotCollectionData", "JackpotCollectionConfig"]
tags: ["source_code", "typescript", "implementation", "copy_paste_ready"]
created_at: "2026-09-17"
author: "ARK Slot Engineering Team"
---

# 5. 💻 Complete Source Code Implementation

<!-- convention-summary-start -->
### Jackpot Collection - Complete Implementation Code Summary

- **Core Architecture / Purpose**: Complete, production-verified TypeScript source code for the 4 Jackpot Collection components.
- **Key Mechanisms & Design**: Standalone, copy-paste ready implementations with zero missing imports or implicit dependencies.
- **Domain Capabilities**: feature, RECIPE_004_jackpot_collection_system
- **Scope & Code Paths**: 
  - `assets/cc-release-slot/<game_id>/scripts/Gui/JackpotCollectionConfig.ts`
  - `assets/cc-release-slot/<game_id>/scripts/Gui/JackpotCollectionData.ts`
  - `assets/cc-release-slot/<game_id>/scripts/Gui/JackpotCollectionItem.ts`
  - `assets/cc-release-slot/<game_id>/scripts/Gui/JackpotCollectionModule.ts`
- **Related Docs**: [02. Architecture & Data Flow](./02_architecture_and_data_flow.md), [07. Reusability & Setup Guide](./07_reusability_and_setup_guide.md)
<!-- convention-summary-end -->

---

## 5.1 File 1: `JackpotCollectionConfig.ts`
**Path**: `assets/cc-release-slot/<game_id>/scripts/Gui/JackpotCollectionConfig<GameId>.ts`

```typescript
const { ccclass, property } = cc._decorator;

@ccclass("SymbolSpriteMapping")
export class SymbolSpriteMapping {
    @property({ type: cc.String })
    symbolCode: string = "";

    @property({ type: sp.SkeletonData })
    spineSymbol: sp.SkeletonData = null!;
}

@ccclass
export default class JackpotCollectionConfig extends cc.Component {
    @property({ type: [SymbolSpriteMapping] })
    symbolSpriteMappings: SymbolSpriteMapping[] = [];
}
```

---

## 5.2 File 2: `JackpotCollectionData.ts`
**Path**: `assets/cc-release-slot/<game_id>/scripts/Gui/JackpotCollectionData<GameId>.ts`

```typescript
import { BaseDataModule } from "../../../../cc-common/cc-slot-module/SlotModuleExport";
import JackpotCollectionConfig from "./JackpotCollectionConfig";

export interface SymbolCollectInfo {
    symbolCode: string;
    collected: number;
    required: number;
}

const { ccclass } = cc._decorator;

@ccclass
export default class JackpotCollectionData extends BaseDataModule {
    private _config: JackpotCollectionConfig = null!;
    override registeredKeys: string[] = ["collectSymbols", "jackpotType", "jackpotWinAmount"];

    onloadExtend(): void {
        this._config = this.getComponent(JackpotCollectionConfig);
    }

    getJackpotInfo(): { jackpotType: string; jackpotValue: number } {
        if (this.dataStore && typeof (this.dataStore as any).getJackpotInfo === 'function') {
            const info = (this.dataStore as any).getJackpotInfo();
            if (info) return info;
        }
        return {
            jackpotType: this["jackpotType"] || "GRAND",
            jackpotValue: Number(this["jackpotWinAmount"]) || 0
        };
    }

    getCollectInfoList(customRawList?: string[]): SymbolCollectInfo[] {
        const rawList = customRawList || this["collectSymbols"] || [];
        const result: SymbolCollectInfo[] = [];

        for (const item of rawList) {
            if (typeof item === 'string') {
                const parts = item.split(':');
                if (parts.length >= 3) {
                    const symbolCode = parts[0];
                    const collected = parseInt(parts[1], 10) || 0;
                    const required = parseInt(parts[2], 10) || 0;
                    result.push({ symbolCode, collected, required });
                }
            }
        }
        return result;
    }

    getSkeletonDataBySymbolCode(symbolCode: string): sp.SkeletonData {
        if (!this._config || !this._config.symbolSpriteMappings) {
            return null as any;
        }
        const mapping = this._config.symbolSpriteMappings.find(m => m.symbolCode === symbolCode);
        return mapping ? mapping.spineSymbol : (null as any);
    }
}
```

---

## 5.3 File 3: `JackpotCollectionItem.ts`
**Path**: `assets/cc-release-slot/<game_id>/scripts/Gui/JackpotCollectionItem<GameId>.ts`

```typescript
import { SymbolCollectInfo } from "./JackpotCollectionData";

const { ccclass, property } = cc._decorator;
const { SpineUtils } = eno;

@ccclass
export default class JackpotCollectionItem extends cc.Component {
    @property(sp.Skeleton)
    spine: sp.Skeleton = null!;

    @property(sp.Skeleton)
    collect: sp.Skeleton = null!;

    @property(sp.Skeleton)
    mark: sp.Skeleton = null!;

    @property(cc.Label)
    lbProgress: cc.Label = null!;

    @property(cc.Node)
    checkmark: cc.Node = null!;

    @property
    animIdle: string = "idle_reel_1";

    @property
    animIdleFallback: string = "idle";

    @property
    animActive: string = "active_reel_1";

    @property
    animActiveFallback: string = "active";

    @property
    animCollect: string = "eff_coll_symbol";

    @property
    animCollectDone: string = "eff_coll_done_symbol";

    @property
    animMarkIn: string = "in_eff_tick_coll_symbol";

    @property
    animMarkIdle: string = "idle_eff_tick_coll_symbol";

    private _symbolCode: string = "";
    private _collected: number = 0;
    private _pendingReplays: (() => void)[] = [];

    protected onEnable(): void {
        if (this._pendingReplays.length === 0) return;
        const replays = this._pendingReplays;
        this._pendingReplays = [];
        replays.forEach(replay => replay());
    }

    get symbolCode(): string {
        return this._symbolCode;
    }

    get collected(): number {
        return this._collected;
    }

    init(info: SymbolCollectInfo, skeletonData: sp.SkeletonData): void {
        this._symbolCode = info.symbolCode;
        this._collected = info.collected;

        if (this.spine && skeletonData) {
            this.spine.skeletonData = skeletonData;
            this.playIdle();
        }
        if (this.checkmark) this.checkmark.active = false;
        if (this.collect) this.collect.node.active = false;
        if (this.mark) this.mark.node.active = false;
        if (this.lbProgress) {
            this.lbProgress.string = `${info.collected}/${info.required}`;
        }

        // Restore already completed state
        if (info.collected >= info.required) {
            if (this.checkmark) this.checkmark.active = true;
            if (this.collect && SpineUtils.hasAnimation(this.collect, this.animCollectDone)) {
                this.collect.node.active = true;
                this.collect.setAnimation(0, this.animCollectDone, true);
            }
            if (this.mark && SpineUtils.hasAnimation(this.mark, this.animMarkIdle)) {
                this.mark.node.active = true;
                this.mark.setAnimation(0, this.animMarkIdle, true);
            }
        }
    }

    updateProgress(info: SymbolCollectInfo): void {
        const prevCollected = this._collected;
        this._collected = info.collected;

        if (this.lbProgress) {
            this.lbProgress.string = `${info.collected}/${info.required}`;
        }

        const isComplete = info.collected >= info.required;
        const justCompleted = isComplete && prevCollected < info.required;

        if (this.checkmark) {
            this.checkmark.active = isComplete;
        }

        if (info.collected > prevCollected) {
            this.playActiveThenIdle();
            this.playCollectEffect(isComplete);
        }

        if (justCompleted) {
            this.playMarkEffect();
        }
    }

    private resolveAnimName(preferred: string, fallback: string): string {
        if (SpineUtils.hasAnimation(this.spine, preferred)) return preferred;
        if (SpineUtils.hasAnimation(this.spine, fallback)) return fallback;
        return "";
    }

    private playIdle(): void {
        if (!this.spine || !this.spine.skeletonData) return;
        if (!this.node.activeInHierarchy) {
            this._pendingReplays.push(() => this.playIdle());
            return;
        }
        const animName = this.resolveAnimName(this.animIdle, this.animIdleFallback);
        if (animName) {
            this.spine.setAnimation(0, animName, true);
        }
    }

    private playActiveThenIdle(): void {
        if (!this.spine || !this.spine.skeletonData) return;
        if (!this.node.activeInHierarchy) {
            this._pendingReplays.push(() => this.playActiveThenIdle());
            return;
        }
        const activeAnimName = this.resolveAnimName(this.animActive, this.animActiveFallback);
        if (!activeAnimName) {
            this.playIdle();
            return;
        }
        this.spine.setAnimation(0, activeAnimName, false);
        const idleAnimName = this.resolveAnimName(this.animIdle, this.animIdleFallback);
        if (idleAnimName) {
            this.spine.addAnimation(0, idleAnimName, true);
        }
    }

    private playCollectEffect(isComplete: boolean): void {
        if (!this.collect || !this.collect.skeletonData) return;
        if (!this.node.activeInHierarchy) {
            this._pendingReplays.push(() => this.playCollectEffect(isComplete));
            return;
        }

        this.collect.node.active = true;
        if (!SpineUtils.hasAnimation(this.collect, this.animCollect)) {
            if (isComplete && SpineUtils.hasAnimation(this.collect, this.animCollectDone)) {
                this.collect.setAnimation(0, this.animCollectDone, true);
                return;
            }
            this.collect.node.active = false;
            return;
        }

        this.collect.setAnimation(0, this.animCollect, false);

        if (isComplete) {
            if (SpineUtils.hasAnimation(this.collect, this.animCollectDone)) {
                this.collect.addAnimation(0, this.animCollectDone, true);
            }
            return;
        }

        const collectAnimName = this.animCollect;
        this.collect.setCompleteListener((trackEntry: any) => {
            if (trackEntry?.animation?.name === collectAnimName) {
                this.collect.setCompleteListener(() => {});
                this.collect.node.active = false;
            }
        });
    }

    private playMarkEffect(): void {
        if (!this.mark || !this.mark.skeletonData) return;
        if (!this.node.activeInHierarchy) {
            this._pendingReplays.push(() => this.playMarkEffect());
            return;
        }
        if (!SpineUtils.hasAnimation(this.mark, this.animMarkIn)) return;

        this.mark.node.active = true;
        this.mark.setAnimation(0, this.animMarkIn, false);
        if (SpineUtils.hasAnimation(this.mark, this.animMarkIdle)) {
            this.mark.addAnimation(0, this.animMarkIdle, true);
        }
    }
}
```

---

## 5.4 File 4: `JackpotCollectionModule.ts`
**Path**: `assets/cc-release-slot/<game_id>/scripts/Gui/JackpotCollectionModule<GameId>.ts`

```typescript
import { SlotBaseModule, GameUIEvents, CUTSCENE_TYPE_ENUM } from "../../../../cc-common/cc-slot-module/SlotModuleExport";
import JackpotCollectionData, { SymbolCollectInfo } from "./JackpotCollectionData";
import JackpotCollectionItem from "./JackpotCollectionItem";

const { ccclass, property } = cc._decorator;

@ccclass
export default class JackpotCollectionModule extends SlotBaseModule {
    @property(cc.Prefab)
    itemPrefab: cc.Prefab = null!;

    @property(cc.Node)
    itemContainer: cc.Node = null!;

    @property sfxCollectSymbolId: string = "COLLECT_SYMBOL";
    @property sfxCollectCompleteId: string = "COLLECT_COMPLETE";

    private _dataModule: JackpotCollectionData = null!;
    private _items: JackpotCollectionItem[] = [];
    private _isCollectionComplete: boolean = false;
    private _hasPendingJackpotWin: boolean = false;

    onLoadExtend(): void {
        this._dataModule = this.getComponent(JackpotCollectionData);
        this.initItems();
    }

    protected registerEvents(): void {
        this.moduleEvent.on("UPDATE_JACKPOT_COLLECTION", this.onUpdateCollection, this);
        this.moduleEvent.on("CASCADE_SYMBOLS_FILLED", this.onCascadeSymbolsFilled, this);
        this.eventManager.on('INIT_JACKPOT_COLLECTION', this.initItems, this);
        this.eventManager.on('JOIN_GAME_SUCCESS', this.onJoinGameSuccess, this);
    }

    private onJoinGameSuccess(data: any): void {
        const joinGameData = data?.joinGameData;
        const resumeData = joinGameData?.dataResume || data?.dataResume;
        const rawList = resumeData?.collectSymbols || joinGameData?.collectSymbols;

        if (!rawList) return;

        const paylines = resumeData?.freeGamePayLines || resumeData?.paylines || resumeData?.normalGamePayLines;
        if (resumeData && paylines && paylines.length > 0) {
            const paylineCounts: Record<string, number> = {};
            const parsedPaylines = eno.SlotUtils?.convertPayLineAllWays 
                ? eno.SlotUtils.convertPayLineAllWays(paylines) 
                : paylines;
            const winningSymbolIds = new Set<string>();

            for (const pl of parsedPaylines) {
                const sym = pl.symbolId || pl.symbolName || pl.symbolCode || pl.symbol;
                if (sym) winningSymbolIds.add(String(sym).trim());
            }

            const rawMatrix = resumeData.freeGameMatrix || resumeData.normalGameMatrix || resumeData.matrix || [];
            const traceWay: number[] = resumeData.traceWay || [];

            winningSymbolIds.forEach((symId) => {
                let count = 0;
                if (traceWay && traceWay.length > 0 && rawMatrix.length > 0) {
                    traceWay.forEach((idx: number) => {
                        const sym = rawMatrix[idx];
                        if (sym) {
                            const cleanSym = String(sym).split('_')[0];
                            if (cleanSym === symId || cleanSym.startsWith('K')) count++;
                        }
                    });
                }

                if (count === 0) {
                    for (const pl of parsedPaylines) {
                        const sym = String(pl.symbolId || pl.symbolName || pl.symbolCode || '').trim();
                        if (sym === symId) count += (pl.reelCount || 1);
                    }
                }
                paylineCounts[symId] = count;
            });

            const adjustedList = rawList.map((item: string) => {
                if (typeof item !== 'string') return item;
                const parts = item.split(':');
                if (parts.length >= 3) {
                    const symbolCode = parts[0];
                    const collected = parseInt(parts[1], 10) || 0;
                    const required = parseInt(parts[2], 10) || 0;
                    const currentWinCount = paylineCounts[symbolCode] || 0;
                    const beforeCollect = Math.max(0, collected - currentWinCount);
                    return `${symbolCode}:${beforeCollect}:${required}`;
                }
                return item;
            });

            this.initItems(adjustedList);
            return;
        }

        this.initItems(rawList);
    }

    private initItems(customRawList?: string[]): void {
        if (!this.itemPrefab || !this.itemContainer) {
            console.warn("itemPrefab or itemContainer is not set");
            return;
        }

        this.resetCollection();

        const initData = this._dataModule.getCollectInfoList(customRawList);
        const alreadyComplete = initData.length > 0 && initData.every(info => info.collected >= info.required);
        if (alreadyComplete) {
            this._isCollectionComplete = true;
        }

        for (const info of initData) {
            const node = cc.instantiate(this.itemPrefab);
            node.setParent(this.itemContainer);

            const itemComp = node.getComponent(JackpotCollectionItem);
            if (itemComp) {
                const skeletonData = this._dataModule.getSkeletonDataBySymbolCode(info.symbolCode);
                itemComp.init(info, skeletonData);
                this._items.push(itemComp);
            }
        }
    }

    protected async onUpdateCollection(): Promise<void> {
        const infoList = this._dataModule.getCollectInfoList();
        if (this._items.length === 0 && infoList.length > 0) {
            this.initItems();
        }

        const wasComplete = this._isCollectionComplete;

        for (const info of infoList) {
            const item = this._items.find(x => x.symbolCode === info.symbolCode);
            if (item) {
                if (info.collected > item.collected) {
                    this.soundPlayer.playSfx(this.sfxCollectSymbolId);
                    this.eventManager.emit('ON_COLLECT_SYMBOL');
                }
                item.updateProgress(info);
            }
        }

        this.checkCollectionComplete(infoList, wasComplete);
    }

    private checkCollectionComplete(infoList: SymbolCollectInfo[], wasComplete: boolean): void {
        if (infoList.length === 0) return;

        const allComplete = infoList.every(info => info.collected >= info.required);
        if (!wasComplete && allComplete) {
            this._isCollectionComplete = true;
            this._hasPendingJackpotWin = true;
            this.soundPlayer.playSfx(this.sfxCollectCompleteId);
            this.eventManager.emit('ON_COLLECT_COMPLETE');
        }
    }

    private async onCascadeSymbolsFilled(): Promise<void> {
        if (!this._hasPendingJackpotWin) return;
        await this.delayAction(0.5);
        this._hasPendingJackpotWin = false;

        const jackpotInfo = this._dataModule
            ? this._dataModule.getJackpotInfo()
            : { jackpotType: 'GRAND', jackpotValue: 0 };
        const collectSymbols = this._dataModule
            ? this._dataModule.getCollectInfoList().map(info => info.symbolCode)
            : [];

        await this.eventManager.emit(GameUIEvents.CUTSCENES.PLAY_CUTSCENE, {
            cutsceneType: CUTSCENE_TYPE_ENUM.JACKPOT_WIN,
            cutsceneData: { ...jackpotInfo, collectSymbols }
        });
    }

    private delayAction(time: number = 0): Promise<void> {
        return new Promise<void>((resolve) => {
            this.scheduleOnce(resolve, time);
        });
    }

    protected resetCollection(): void {
        this.itemContainer.removeAllChildren();
        this._items = [];
        this._isCollectionComplete = false;
        this._hasPendingJackpotWin = false;
    }
}
```
