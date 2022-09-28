function reverseArray(n, array) {
  //print new array in reverse
  let result = [];
  for (let i = n - 1; i >= 0; i--) {
    result.push(array[i]);
  }
  console.log(result.join(" "));
}
reverseArray(3, [10, 20, 30, 40, 50]);
