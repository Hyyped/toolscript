let dividend = window.prompt("Enter the dividend"); 
let divisor = window.prompt("Enter the divisor"); 
let quotient = Number(dividend) / Number(divisor); 
if (isNaN(quotient)) {
quotient = "error.invaldSyntax";
alert(quotient) 
}
else {
let quotient = Number(dividend) / Number(divisor); 
let wholeNum = Math.floor(Number(dividend) / Number(divisor));
let remainder = Number(dividend) % Number(divisor);
alert(quotient + "\n\nMixed Number: " + wholeNum + " " + remainder + "/" + divisor)
}
