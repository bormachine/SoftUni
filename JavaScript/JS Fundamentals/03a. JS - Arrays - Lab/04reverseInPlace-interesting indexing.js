function reverseInPlace(arr) {
  //repeat for all elements from beginning to middle
  let k = arr.length - 1;
  for (let i = 0; i < arr.length / 2; i++, k--) {
    let temp = arr[i];
    arr[i] = arr[k];
    arr[k] = temp;
  }
  console.log(arr.join(" "));

  //swap current element(Start+i) with element in other half (end-i)
  //use temp variable to store value during swap

  /*
    let k - length-1-i;

  */
}
reverseInPlace(["a", "b", "c", "d", "e"]);
