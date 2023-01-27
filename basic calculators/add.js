let digit1add = window.prompt("Enter Digit 1"); 
let digit2add = window.prompt("Enter Digit 2"); 
let sum = Number(digit1add) + Number(digit2add);
if (isNaN(sum)) {
sum = "error.invaldSyntax";
alert(sum) 
}
else {
let sum = Number(digit1add) + Number(digit2add);
alert(sum)
}
