function multiplicationTable(number) {
  for (let i = 1; i <= 10; i++) {
    let res = number * i;
    console.log(`${number} X ${i} = ${res}`);
  }
}
multiplicationTable(3);
