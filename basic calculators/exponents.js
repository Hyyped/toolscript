let base = window.prompt("Enter the base"); 
let exponent = window.prompt("Enter the exponent"); 
let solvedExponent = Number(base) ** Number(exponent);
if (isNaN(solvedExponent)) {
solvedExponent = "error.invaldSyntax";
alert(solvedExponent) 
}
else {
let solvedExponent = Number(base) ** Number(exponent);
alert(solvedExponent)
}
