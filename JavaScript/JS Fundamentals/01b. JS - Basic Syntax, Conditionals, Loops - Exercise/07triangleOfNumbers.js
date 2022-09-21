function triangleOfNumbers(n) {
  let line = "";
  for (let x = 1; x <= n; x++) {
    for (let y = 0; y < x; y++) {
      line += x + " ";
    }
    //console.log(printline);
    console.log(line);
    line = "";
  }
}

function tria(m) {
  for (let i = 1; i <= m; i++) {
    let x = " " + i;
    console.log(x.repeat(i));
  }
}
/*
triangleOfNumbers(3);
triangleOfNumbers(5);
triangleOf
*/

tria(3);
