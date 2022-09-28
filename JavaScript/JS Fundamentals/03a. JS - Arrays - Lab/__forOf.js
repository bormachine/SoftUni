let arr = [10, 20, 30, 40, 50, 60, 70];

for (let i = 0; i < arr.length; i++) {
  let current = arr[i];
  console.log(current);
}

for (let current of arr) {
  console.log(current);
}
