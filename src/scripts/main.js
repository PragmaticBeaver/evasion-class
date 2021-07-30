import EvasionActorSheetCharacter from "./sheet-character.js";
import EvasionActorSheetNpc from "./sheet-npc.js";

Hooks.on("init", () => {
    console.log("EC - on init");

    Actors.registerSheet("dnd5e", EvasionActorSheetCharacter, {
        types: ["character"],
        makeDefault: false,
        label: "Evasion Character sheet",
    });

    Actors.registerSheet("dnd5e", EvasionActorSheetNpc, {
        types: ["npc"],
        makeDefault: false,
        label: "Evasion NPC sheet",
    });
});

Hooks.on("ready", () => {
    console.log("EC - on ready");
});
