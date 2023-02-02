/** 
* @license ToolScript © 2023 by Hyyped is licensed under CC BY-NC-SA 4.0 
* All Reproduction of this code MUST be a remix and attribution is required 
* Any PUBLIC copy of this work is not legal and a DMCA takedown of said repo or website will be submitted
* WARNING:
* I am not responsible for any trouble you get in for using any of the scripts included in ToolScript© 
**/

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
