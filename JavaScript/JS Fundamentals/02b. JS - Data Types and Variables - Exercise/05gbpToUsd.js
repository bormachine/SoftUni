function gbpToUsd(gbp) {
  let rate = 1.31;

  let usd = gbp * rate;
  console.log(usd.toFixed(3));
}
gbpToUsd(80);
