var percentage = prompt("Enter a percentage");
var numerator = percentage;
var denominator = 100;
var number = percentage / 100;
var GCD = (a, b) => b ? GCD(b, a % b) : a;
var div = GCD(numerator, denominator);
alert(percentage + "% is equal to " + number + " or " + numerator / div + "/" + denominator / div + ".");