var centi = prompt("Enter a centi conversion number");
var milli = prompt("Enter a milli conversion number");
var mic = centi * 10;
var cim = milli / 10;
if (isNaN(mic || cim)) {
alert("error.invalidSyntax");
}
else {
alert("There are " + mic + " milli in " + centi + " centi.\n\nThere are " + cim + " centi in " + milli + " milli.");
};