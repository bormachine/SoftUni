function distance(x1, y1, x2, y2) {
  let h = Math.abs(y2 - y1);
  let b = Math.abs(x2 - x1);

  let dis = (h ** 2 + b ** 2) ** 0.5;

  console.log(dis);
}
distance(2.34, 15.66, -13.55, -2.9985);
