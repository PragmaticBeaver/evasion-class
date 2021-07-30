import ActorSheet5eCharacter from "../../../../systems/dnd5e/module/actor/sheets/character.js";
import { calcECValue, calcARValue } from "./calc.js";

export default class EvasionActorSheetCharacter extends ActorSheet5eCharacter {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["dnd5e", "sheet", "actor", "character"],
            width: super.defaultOptions.width + 100,
        });
    }

    getData() {
        return super.getData();
    }

    get template() {
        return "modules/evasion-class/src/templates/evasion-sheet-character.html";
    }

    activateListeners(html) {
        super.activateListeners(html);

        const data = this.actor.data.data;
        const ac = data.attributes.ac.value;

        data.attributes.evasionClass = {};

        const ar = calcARValue(ac);
        data.attributes.evasionClass.ar = ar;
        html.find("#evasionClass-ar").text(ar);

        const ec = calcECValue(this.actor);
        data.attributes.evasionClass.ec = ec;
        html.find("#evasionClass-ec").text(ec);
    }
}
