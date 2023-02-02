/** 
* @license ToolScript © 2023 by Hyyped is licensed under CC BY-NC-SA 4.0 
* All Reproduction of this code MUST be a remix and attribution is required 
* Any PUBLIC copy of this work is not legal and a DMCA takedown of said repo or website will be submitted
* WARNING:
* I am not responsible for any trouble you get in for using any of the scripts included in ToolScript© 
**/

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
