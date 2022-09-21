function gladiatorExpenses(
  lostFightCount,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let helmetCounter = 0;
  let swordCounter = 0;
  let isHelmBroken = 0;
  let isSwordBroken = 0;
  let shieldCounter = 0;
  let armorCounter = 0;

  for (let i = 1; i <= lostFightCount; i++) {
    isHelmBroken = 0;
    isSwordBroken = 0;
    if (i % 2 === 0) {
      helmetCounter++;
      isHelmBroken = 1;
    }
    if (i % 3 === 0) {
      swordCounter++;
      isSwordBroken = 1;
    }
    if (isHelmBroken && isSwordBroken) {
      shieldCounter++;
    }

    armorCounter = Math.floor(shieldCounter / 2);
  }

  let expenses =
    armorCounter * armorPrice +
    shieldCounter * shieldPrice +
    swordCounter * swordPrice +
    helmetCounter * helmetPrice;
  console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gladiatorExpenses(7, 2, 3, 4, 5);
