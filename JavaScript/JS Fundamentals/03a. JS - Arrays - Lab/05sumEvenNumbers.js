function sumEvenNumbers(arr) {
  let sum = 0;
  for (element of arr) {
    if (element % 2 == 0) {
      sum += Number(element);
    }
  }
  console.log(sum);
}
sumEvenNumbers(["2", "4", "6", "8", "10"]);
