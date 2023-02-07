/** 
* @license ToolScript © 2023 by Hyyped is licensed under CC BY-NC-SA 4.0 
* All Reproduction of this code MUST be a remix and attribution is required 
* Any PUBLIC copy of this work is not legal and a DMCA takedown of said repo or website will be submitted
* WARNING:
* I am not responsible for any trouble you get in for using any of the scripts included in ToolScript© 
**/

var part = prompt("Enter the part");
var percentage = prompt("Enter a percentage");
var whole = part / (percentage / 100);
alert(`Question: ${percentage}% of _ is ${part}?\nAnswer: ${whole}`);