window.onload = function () {

var ins = document.getElementsByClassName('blankMe');
var prompts = [""];
for (var i = 0; i < 2; i++) {
  prompts[i] = ins[i].value;
  assignClear(ins[i],prompts[i]);
}
function assignClear(input, prompt) {
  input.onfocus = function () {
    if (input.value == prompt) {
      input.value = "";
    }
  }
}
