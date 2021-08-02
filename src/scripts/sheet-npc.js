import ActorSheet5eNPC from "../../../../systems/dnd5e/module/actor/sheets/npc.js";
import { calcECValue, calcARValue } from "./calc.js";

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

    getData(options) {
        return super.getData(options);
    }

    armorLabel() {
        return super.armorLabel();
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
