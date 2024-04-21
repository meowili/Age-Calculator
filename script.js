const userInput = document.getElementById("date");

// to make sure the user doesn't select a date in the future
userInput.max = new Date().toISOString().split("T")[0];

const button = document.getElementById("btn");

// function to calculate age
button.addEventListener("click", () => {
  let birthDate = new Date(userInput.value);
  const result = document.getElementById("result");

  // to get th user birthdate
  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();

  // to get the current date
  let today = new Date();

  let d2 = today.getDate();
  let m2 = today.getMonth();
  let y2 = today.getFullYear();

  // to calculate the difference
  let d3, m3, y3;

  y3 = y2 - y1;

  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }

  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = getDaysInMonth(y1, m1) + d2 - d1;
  }
  if (m3 < 0) {
    m3 = 11;
    y3--;
  }
  //   displaying the age in the webpage
  result.innerHTML = `Your are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old`;
});

// function to get how many days are in each month
function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
