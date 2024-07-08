//https://github.com/rivantmedia/the-button-thingy

let check1 = document.getElementById("check1");
let check2 = document.getElementById("check2");
let check3 = document.getElementById("check3");

check1.addEventListener("change", function () {
  checkCondition1();
});
check2.addEventListener("change", function () {
  checkCondition2();
});
check3.addEventListener("change", function () {
  checkCondition3();
});

function checkCondition3() {
  if (check2.checked && check3.checked) {
    check1.checked = false;
  }
}
function checkCondition1() {
  if (check1.checked && check3.checked) {
    check2.checked = false;
  }
}
function checkCondition2() {
  if (check1.checked && check3.checked) {
    check3.checked = false;
  }
}
