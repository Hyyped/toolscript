var deci = prompt("Enter a deci conversion number");
var centi = prompt("Enter a centi conversion number");
var cid = deci * 10;
var dic = centi / 10;
if (isNaN(cid || dic)) {
alert("error.invalidSyntax");
}
else {
alert("There are " + cid + " centi in " + deci + " deci.\n\nThere are " + dic + " deci in " + centi + " centi.");
};