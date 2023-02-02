/** 
* @license ToolScript © 2023 by Hyyped is licensed under CC BY-NC-SA 4.0 
* All Reproduction of this code MUST be a remix and attribution is required 
* Any PUBLIC copy of this work is not legal and a DMCA takedown of said repo or website will be submitted
* WARNING:
* I am not responsible for any trouble you get in for using any of the scripts included in ToolScript© 
**/

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
