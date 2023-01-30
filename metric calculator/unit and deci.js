var unit = prompt("Enter a unit conversion number");
var deci = prompt("Enter a deci conversion number");
var diun = unit * 10;
var unid = deci / 10;
if (isNaN(diun || unid)) {
alert("error.invalidSyntax");
}
else {
alert("There are " + diun + " deci in " + unit + " units.\n\nThere are " + unid + " units in " + deci + " deci.");
};