function thePyramidOfKingJoser(size, increment) {
  //Level 1 stone required
  let stones = 0;
  let marble = 0;
  let lapisLazuli = 0;
  let gold = 0;
  let step = 1;

  while (size >= 1) {
    if (size > 2) {
      if (step % 5 == 0) {
        lapisLazuli += size * 4 - 4 * increment;
      } else {
        marble += size * 4 - 4 * increment;
      }
      step++;

      stones += Math.pow(size - 2, 2) * increment;
    } else {
      gold += Math.pow(size, 2) * increment;
    }
    size -= 2;
  }
  console.log(`Stone required: ${Math.ceil(stones)}`);
  console.log(`Marble required: ${Math.ceil(marble)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
  console.log(`Gold required: ${Math.ceil(gold)}`);
  console.log(`Final pyramid height: ${Math.floor(step * increment)}`);

  /*
Stone required: 165
Marble required: 112
Lapis Lazuli required: 8
Gold required: 1
Final pyramid height: 6	Step	Size	Stone	Marble	Lapis	Gold
*/
}
thePyramidOfKingJoser(11, 1);
