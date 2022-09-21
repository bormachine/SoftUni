function reversedChars(char1, char2, char3) {
  let inputString = char1 + char2 + char3;
  console.log(inputString.split("").reverse().join(" "));
}
reversedChars("a", "b", "c");
