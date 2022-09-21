function bitcoinMining(input) {
  let day = 0;
  let counter = 0;
  let bitcoin = 0;
  let dayP = 0;
  let money = 0;
  let dailyGold = 0;
  index = 0;

  for (i = 1; i <= input.length; i++) {
    dailyGold = input[index];

    if (i % 3 == 0) {
      dailyGold -= 0.3 * dailyGold;
    }
    money += dailyGold * 67.51;

    if (money >= 11949.16) {
      //bitcoin += 1;
      // money -= 11949.16;
      bitcoin += Math.floor(money / 11949.16);
      money -= Math.floor(money / 11949.16) * 11949.16;
      counter++;
    }

    if (counter == 1) {
      dayP = index + 1;
    }

    index++;
  }
  /*
  while (day <= input.length - 1) {
    dailyGold = input[day];

    if (counter >= 1) {
      dailyGold = dailyGold * 0.7;
    }
    money += dailyGold * 67.51;

    if (money >= 11949.16) {
      bitcoin += Math.floor(money / 11949.16);
      money -= Math.floor(money / 11949.16) * 11949.16;
      // bitcoin += money / 11949.16;
      //money -= (money / 11949.16) * 11949.16;
      counter++;

      if (counter == 1) {
        dayP = day + 1;
      }
    }

    day++;
  }
  */

  console.log(`Bought bitcoins: ${bitcoin}`);
  if (counter >= 1) {
    console.log(`Day of the first purchased bitcoin: ${dayP}`);
  }
  console.log(`Left money: ${money.toFixed(2)} lv.`);
}
bitcoinMining([100, 200, 300]);
bitcoinMining([3124.15, 504.212, 2511.124]);
bitcoinMining([50, 100]);
