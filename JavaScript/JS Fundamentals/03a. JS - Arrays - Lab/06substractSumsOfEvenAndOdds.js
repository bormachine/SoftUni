function subtractSums(arr) {
  sumEven = 0;
  sumOdd = 0;
  for (element of arr) {
    if (element % 2 == 0) {
      sumEven += element;
    } else {
      sumOdd += element;
    }
  }
  console.log(sumEven - sumOdd);
}
subtractSums([1, 2, 3, 4, 5, 6]);
