function integerAndFloat(a, b, c) {
  let sum = a + b + c;
  let type = "Integer";

  let roundedSum = Math.round(sum);

  sum != roundedSum ? (type = "Float") : (type = "Integer");

  console.log(`${sum} - ${type}`);
}
integerAndFloat(9, 100, 1.1);
console.log(`---------`);
integerAndFloat(100, 200, 303);
