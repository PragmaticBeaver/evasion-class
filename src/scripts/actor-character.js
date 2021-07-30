import Actor5e from "../../../../systems/dnd5e/module/actor/entity.js";

// todo maybe needed for new damage calculation

export class EvasionActor extends Actor5e {
    prepareData() {
        super.prepareData();
    }

    prepareDerivedData() {
        const actorData = this.data;
        console.log(JSON.stringify(actorData));

        if (actorData.type === "character") {
            this._prepareCharacterData(actorData);
            return;
        }

        if (actorData.type === "npc") {
            this._prepareNpcData(actorData);
            return;
        }
    }

    _prepareCharacterData(actorData) {
        // todo
    }

    _prepareNpcData(actorData) {
        // todo
    }
}
