function reverseInPlace(array) {
  for (let i = 0; i < array.length / 2; i++) {
    swapElements(arr, i, arr.length - 1 - i);
  }
  console.log(arr.join(" "));

  function swapElements(arr, i, j) {}
}
reverseInPlace(["a", "b", "c", "d", "e"]);
