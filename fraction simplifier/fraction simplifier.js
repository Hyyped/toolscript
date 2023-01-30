var numerator = prompt("Enter the numerator");
var denominator = prompt("Enter the denominator");
var GCD = (a, b) => b ? GCD(b, a % b) : a;
var div = GCD(numerator, denominator);
alert(numerator + "/" + denominator + " simplifies to " + numerator / div + "/" + denominator / div + ".");