function sortNumbers(x, y, z) {
  if (x > z && x > y) {
    if (y > z) {
      console.log(x);
      console.log(y);
      console.log(z);
    } else {
      console.log(x);
      console.log(z);
      console.log(y);
    }
  } else if (y > x && y > z) {
    if (x > z) {
      console.log(y);
      console.log(x);
      console.log(z);
    } else {
      console.log(y);
      console.log(z);
      console.log(x);
    }
  } else if (z > x && z > y) {
    if (x > y) {
      console.log(z);
      console.log(x);
      console.log(y);
    } else {
      console.log(z);
      console.log(y);
      console.log(x);
    }
  }
}
sortNumbers(2, 1, 3);
