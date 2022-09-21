function nextDay(y, m, d) {
  /*
  const ma = m - 1;
  const date = new Date(y, ma, d);
  date.setDate(y, ma, d);
  date.setMonth(y, ma, d);
  date.setFullYear(y, ma, d);

  //console.log(date);
  */
  let dateString = "${y]-${m}-${d}";
  const date = new Date(dateString);

  let addDays = function (originalDate, days) {
    let cloneDate = new Date(originalDate.valueOf());
    cloneDate.setDate(cloneDate.getDate() + days);
    return cloneDate;
  };

  //const date = new Date(y, m, d);
  //let day = date.getDate();
  //date.setDate(date.getDate() + 1);

  let x = addDays(date, 1);

  let day = x.getDate();
  let month = x.getMonth();
  let year = x.getFullYear();

  console.log(`${year}-${month}-${day}`);
  //y = x.toString();
  //console.log(y);
}
nextDay(2016, 9, 30);
