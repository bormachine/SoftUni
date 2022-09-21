function specialNumber(n) {
  let result = 0;
  let numAsString = "";
  let num = 0;

  for (let i = 1; i <= n; i++) {
    num = 0;
    result = 0;
    num = i;
    numAsString = String(num);
    //convert to string

    // go through the string
    for (let j = 0; j < numAsString.length; j++) {
      // convert each one to  numbers

      result += Number(numAsString[j]);
      //console.log(`${num} -> ${j}  - total ${result}`);
    }

    switch (result) {
      case 5:
      case 7:
      case 11:
        console.log(`${num} -> True`);
        break;
      default:
        console.log(`${num} -> False`);
    }
  }
}
specialNumber(56);
