var xmlhttp = new XMLHttpRequest();
var url = "students.txt";

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var allStudents = JSON.parse(this.responseText);
        makeTable(allStudents);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function makeTable(arr) {
    document.getElementsByClassName("test")[0].innerHTML = "snax";
}
