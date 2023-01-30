var kilo = prompt("Enter a kilo conversion number");
var hecto = prompt("Enter a hecto conversion number");
var hik = kilo * 10;
var kih = hecto / 10;
if (isNaN(hik || kih)) {
alert("error.invalidSyntax");
}
else {
alert("There are " + hik + " hecto in " + kilo + " kilo.\n\nThere are " + kih + " kilo in " + hecto + " hecto.");
};