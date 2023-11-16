submitBtn.addEventListener("click", () => {
  const date = document.querySelector("#date").value;
  const month = document.querySelector("#month").value;
  const year = document.querySelector("#year").value;

  const submitBtn = document.querySelector("#submitBtn");
  const dateNow = new Date();
  let newDate, newMonth, newYear;
  console.log(dateNow.getMonth());
  console.log(dateNow.getDate());
  newDate = dateNow.getDate() - date;
  newMonth = dateNow.getMonth() + 1 - month;
  newYear = dateNow.getFullYear() - year;

  document.getElementById(
    "result"
  ).innerHTML = `Your age is ${newYear} Years ${newMonth} Months ${newDate} Days.`;
});
