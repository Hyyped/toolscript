/** 
* @license ToolScript © 2023 by Hyyped is licensed under CC BY-NC-SA 4.0 
* All Reproduction of this code MUST be a remix and attribution is required 
* Any PUBLIC copy of this work is not legal and a DMCA takedown of said repo or website will be submitted
* WARNING:
* I am not responsible for any trouble you get in for using any of the scripts included in ToolScript© 
**/

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
let numerator = Number(dividend) % Number(divisor);
let denominator = divisor;
var GCD = (a, b) => b ? GCD(b, a % b) : a;
var div = GCD(numerator, denominator);
alert(quotient + "\n\nMixed Number: " + wholeNum + " " + numerator / div + "/" + denominator / div)
}
