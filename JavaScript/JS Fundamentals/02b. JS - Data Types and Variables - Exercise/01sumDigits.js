function sumDigits(num) {
  let numAsString = String(num);
  let result = 0;

  for (let i = 0; i < numAsString.length; i++) {
    result += Number(numAsString[i]);
  }
  console.log(result);
}
sumDigits(97561);
