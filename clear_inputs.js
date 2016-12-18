var ins = document.getElementsByTagName('input');
var prompts = ['enter first name','enter last name'];
for (var i = 0; i < prompts.length; i++) {
  assignClear(ins[i],prompts[i]);
}
function assignClear(input, prompt) {
  input.onfocus = function () {
    if (input.value == prompt) {
      input.value = "";
    }
  }
}
//document.getElementById('testMe').innerHTML = "this";
