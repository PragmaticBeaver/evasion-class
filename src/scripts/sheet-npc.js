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

        const ar = this._calcARValue(ac);
        data.attributes.evasionClass.ar = ar;
        html.find("#evasionClass-ar").text(ar);

        let armorType = "";
        if (this.actor.armor) {
            armorType = this.actor.armor.data.data.armor.type;
        }
        const ec = this._calcECValue(data.abilities, armorType);
        data.attributes.evasionClass.ec = ec;
        html.find("#evasionClass-ec").text(ec);
    }

    // AR = AC - 10
    _calcARValue(ac) {
        const ar = ac - 10;
        return ar < 0 ? 0 : ar;
    }

    // EC =
    //      unarmored || light? = 10 + dex-mod;
    //      medium? = 10 + dex-mod (max 2);
    //      heavy? = 10
    _calcECValue(abilites, armorType) {
        switch (armorType) {
            case "medium":
                const mod = abilites.dex.mod > 2 ? 2 : abilites.dex.mod;
                return 10 + mod;
            case "heavy":
                return 10;
            default:
                // light || unarmored
                return 10 + abilites.dex.mod;
        }
    }
}
