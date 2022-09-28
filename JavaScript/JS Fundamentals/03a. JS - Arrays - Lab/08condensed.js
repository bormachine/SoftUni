function condensedArray(array) {
  let condensed = [];

  while (array.length > 1) {
    for (let i = 0; i < array.length - 1; i++) {
      condensed[i] = array[i] + array[i + 1];
    }
    array.length = 0;
    for (let [index, el] of condensed.entries()) {
      array.push(condensed[index]);
    }
    /*for (el in condensed) {
      array.push(condensed[el]);
    }*/
    condensed.length = 0;
  }
  console.log(array.toString());
  Array;
}
condensedArray([5, 0, 4, 1, 2]);
condensedArray([2, 10, 3]);
condensedArray([1]);
