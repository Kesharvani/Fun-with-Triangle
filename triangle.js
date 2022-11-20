var firstSelector = document.querySelector(".inputid1");
var secondSelector = document.querySelector(".inputid2");
var thirdSelector = document.querySelector(".inputid3");

var btnSelector = document.querySelector("#checktrianglebtn");

var outputSelector = document.querySelector("#outputid");

btnSelector.addEventListener("click", function isTraingle() {
  if (
    firstSelector === "" ||
    firstSelector.value <= 0 ||
    secondSelector.value <= 0 ||
    secondSelector === "" ||
    thirdSelector.value <= 0 ||
    thirdSelector === ""
  ) {
    showoutput(
      "Please Enter currect value! Field value should not be negative, blank or Zero"
    );
  } else {
    var sum = calculateSumOfAngles(
      firstSelector.value,
      secondSelector.value,
      thirdSelector.value
    );

    if (sum === 180) {
      showoutput("Yes! This is a traingle");
    } else {
      showoutput("This is not a traingle");
    }
  }
});

function calculateSumOfAngles(firstSelector, secondSelector, thirdSelector) {
  return Number(firstSelector) + Number(secondSelector) + Number(thirdSelector);
}

function showoutput(msg) {
  outputSelector.innerText = msg;
}
