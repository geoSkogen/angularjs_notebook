var myArray = [{first:"sam", middle:"I",last:"am"}];
var table = document.getElementsByTagName('table')[0];

var xmlhttp = new XMLHttpRequest();
var url = "students.txt";

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var allStudents = JSON.parse(this.responseText);
        makeTable(allStudents);
    } else {
        makeTable(myArray);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function makeTable(arr) {
    var output = "";
    for (var i = 0; i < arr.length; i++) {
        output += "<tr><td>" + arr[i].first + "</td><td>" + arr[i].middle +
                   "</td><td>" + arr[i].last + "</td></tr>";
    }
    table.innerHTML += output;
}
makeTable(myArray);