var hecto = prompt("Enter a hecto conversion number");
var deca = prompt("Enter a deca conversion number");
var dih = hecto * 10;
var hid = deca / 10;
if (isNaN(dih || hid)) {
alert("error.invalidSyntax");
}
else {
alert("There are " + dih + " deca in " + hecto + " hecto.\n\nThere are " + hid + " hecto in " + deca + " deca.");
};