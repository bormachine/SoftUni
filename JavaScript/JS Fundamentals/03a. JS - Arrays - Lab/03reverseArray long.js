function reverseArray(n, array) {
  let slice = [];
  //take slice from original array
  for (let i = 0; i < n; i++) {
    slice.push(array[i]);
  }

  //print new array in reverse
  let result = "";
  for (let i = slice.length - 1; i >= 0; i--) {
    result += slice[i];
    result += " ";
  }
}
reverseArray(3, [10, 20, 30, 40, 50]);
