function equalArrays(arr1, arr2) {
  let sum = 0;
  let isDifferent = 0;
  let index = 0;

  for (i = 0; i < arr1.length; i++) {
    sum += Number(arr1[i]);
    if (arr1[i] !== arr2[i]) {
      //console.log(`Arrays are not identical. Found difference at ${i} index`);
      isDifferent = 1;
      index = i;
      break;
    }
  }
  if (isDifferent) {
    console.log(`Arrays are not identical. Found difference at ${i} index`);
  } else {
    console.log(`Arrays are identical. Sum: ${sum}`);
  }
}

equalArrays(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);
