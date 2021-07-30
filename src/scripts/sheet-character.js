import ActorSheet5eCharacter from "../../../../systems/dnd5e/module/actor/sheets/character.js";

export default class EvasionActorSheetCharacter extends ActorSheet5eCharacter {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["dnd5e", "sheet", "actor", "character"],
            width: super.defaultOptions.width + 100,
        });
    }

    get template() {
        return "modules/evasion-class/src/templates/evasion-sheet-character.html";
    }
}
