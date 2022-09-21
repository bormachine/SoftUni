function rightPlace(word, char, match) {
  //create variable for result
  let result = "";

  //combine word with char

  //-- read characters one by one
  //-- if current charater is '_' add char parameter to result
  //-- else add current character to result

  for (let i = 0; i < word.length; i++) {
    if (word[i] == "_") {
      result += char;
    } else {
      result += word[i];
    }
  }
  //console.log(result);
  //compare result with match and print message

  if (result == match) {
    console.log("Matched");
  } else {
    console.log("Not Matched");
  }
}
rightPlace("Str_ng", "I", "Strong");
rightPlace("Str_ng", "i", "String");
