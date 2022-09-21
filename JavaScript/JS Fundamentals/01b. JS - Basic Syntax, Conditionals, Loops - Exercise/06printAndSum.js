function printAndSum(n, m) {
  let sum = 0;
  let printline = "";
  for (let i = n; i <= m; i++) {
    sum += i;
    printline += `${i} `;
  }
  console.log(printline);
  console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);
