/** 
* @license ToolScript © 2023 by Hyyped is licensed under CC BY-NC-SA 4.0 
* All Reproduction of this code MUST be a remix and attribution is required 
* Any PUBLIC copy of this work is not legal and a DMCA takedown of said repo or website will be submitted
* WARNING:
* I am not responsible for any trouble you get in for using any of the scripts included in ToolScript© 
**/

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
