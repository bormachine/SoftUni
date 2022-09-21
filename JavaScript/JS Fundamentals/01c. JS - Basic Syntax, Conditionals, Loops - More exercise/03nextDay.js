function nextDay(y, m, d) {
  let date = new Date(y, m - 1, d);
  /*
  dateString = `${y}-${m}-${d}`;
  // console.log(dateString);
  const date = new Date(dateString);
*/

  let newDate = date.setDate(date.getDate() + 1);

  let day = newDate.getDate();
  let month = newDate.getMonth();
  let year = newDate.getFullYear();
  /*if (year == 2001) {
    year = 1901;
  }
*/
  // console.log(date);
  console.log(`${year}-${month + 1}-${day}`);
}
nextDay(1, 1, 1);
