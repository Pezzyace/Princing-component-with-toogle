const mySwitch = document.getElementById("mySwitch");
const basicAnnualPrice = document.getElementById("basic-annual-price");
const profAnnualPrice = document.getElementById("prof-annual-price");
const masterAnnualPrice = document.getElementById("master-annual-price");
const basicMonthPrice = document.getElementById("basic-month-price");
const profMonthPrice = document.getElementById("prof-month-price");
const masterMonthPrice = document.getElementById("master-month-price");


mySwitch.addEventListener("change", function() {
  if (this.checked) {
    basicMonthPrice.style.display = "flex";
    profMonthPrice.style.display = "flex";
    masterMonthPrice.style.display = "flex";
    basicAnnualPrice .style.display = "none";
    profAnnualPrice .style.display = "none";
    masterAnnualPrice .style.display = "none";
  } else {
    basicMonthPrice.style.display = "none";
    profMonthPrice.style.display = "none";
    masterMonthPrice.style.display = "none";
    basicAnnualPrice .style.display = "flex";
    profAnnualPrice .style.display = "flex";
    masterAnnualPrice .style.display = "flex";
  }
});