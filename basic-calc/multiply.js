let factor1 = window.prompt("Enter the first factor");
let factor2 = window.prompt("Enter the second factor"); 
let product = Number(factor1) * Number(factor2); 
if (isNaN(product)) {
product = "error.invaldSyntax";
alert(product) 
}
else {
product = Number(factor1) * Number(factor2);
alert(product)
}
