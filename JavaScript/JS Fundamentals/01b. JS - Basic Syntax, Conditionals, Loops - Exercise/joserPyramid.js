function joserPyramid(side, block) {
  //stone
  //marble
  //lapis lazuli
  //gold
  let stone = 0;
  let marble = 0;
  let lapisLazuli = 0;
  let gold = 0;
  let step = 1;

  while (side >= 1) {
    if (side <= 2) {
      gold = side ** 2 * block;
    } else {
      stone += (side - 2) ** 2 * block;
      if (step % 5 === 0) {
        lapisLazuli += 4 * (side - 1) * block;
      } else {
        marble += 4 * (side - 1) * block;
      }
      step++;
    }
    side -= 2;
  }
  console.log(`Stone required: ${Math.ceil(stone)}`);
  console.log(`Marble required: ${Math.ceil(marble)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
  console.log(`Gold required: ${Math.ceil(gold)}`);
  console.log(`Final pyramid height: ${Math.floor(step * block)}`);
}
joserPyramid(23, 0.5);
