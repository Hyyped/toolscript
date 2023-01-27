let minuend = window.prompt("Enter Digit 1"); 
let subtrahend = window.prompt("Enter digit 2"); 
let difference = minuend - subtrahend;
if (isNaN(difference)) {
difference = "error.invaldSyntax";
alert(difference) 
}
else {
let difference = minuend - subtrahend;
alert(difference)
}
