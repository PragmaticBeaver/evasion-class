// AR = AC - 10
export function calcARValue(ac) {
    const ar = ac - 10;
    return ar < 0 ? 0 : ar;
}

// EC =
//      unarmored || light? = 10 + dex-mod;
//      medium? = 10 + dex-mod (max 2);
//      heavy? = 10
// shields add there AC to EC
export function calcECValue(actor) {
    const abilites = actor.data.data.abilities;
    let armorType = "";
    if (actor.armor) {
        armorType = actor.armor.data.data.armor.type;
    }

    let ec = 0;
    switch (armorType) {
        case "medium":
            const mod = abilites.dex.mod > 2 ? 2 : abilites.dex.mod;
            ec = 10 + mod;
        case "heavy":
            ec = 10;
        default:
            // light || unarmored
            ec = 10 + abilites.dex.mod;
    }

    if (actor.shield) {
        ec += actor.shield.data.data.armor.value;
    }

    return ec;
}
