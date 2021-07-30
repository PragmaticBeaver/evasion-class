import ActorSheet5eNPC from "../../../../systems/dnd5e/module/actor/sheets/npc.js";

export default class EvasionActorSheetNpc extends ActorSheet5eNPC {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["dnd5e", "sheet", "actor", "npc"],
            width: super.defaultOptions.width + 100,
        });
    }

    get template() {
        return "modules/evasion-class/src/templates/evasion-sheet-npc.html";
    }
}
