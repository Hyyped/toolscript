var deca = prompt("Enter a deca conversion number");
var unit = prompt("Enter a unit conversion number");
var uid = deca * 10;
var diu = unit / 10;
if (isNaN(uid || diu)) {
alert("error.invalidSyntax");
}
else {
alert("There are " + uid + " units in " + deca + " deca.\n\nThere are " + diu + " deca in " + unit + " units.");
};