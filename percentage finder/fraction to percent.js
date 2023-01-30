var numerator = prompt("Enter the numerator");
var denominator = prompt("Enter the denominator");
var diff = 100 / denominator;
var percentage = numerator * diff;
if (isNaN(percentage)) {
alert("error.invalidSyntax");
}
else {
alert(numerator + "/" + denominator + " is equal to " + percentage + "%");
};