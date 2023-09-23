function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let helmetBrokenCount = Math.floor(lostFightsCount / 2);
    let swordBrokenCount = Math.floor(lostFightsCount / 3);
    let shieldBrokenCount = Math.floor(lostFightsCount / 6);
    let armorRepairCount = Math.floor(shieldBrokenCount / 2);

    let totalPrice = (helmetBrokenCount * helmetPrice) +
                     (swordBrokenCount * swordPrice) +
                     (shieldBrokenCount * shieldPrice) +
                     (armorRepairCount * armorPrice);

    console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`);
}


gladiatorExpenses(7, 2, 3, 4, 5);