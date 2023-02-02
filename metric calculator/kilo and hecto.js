/** 
* @license ToolScript © 2023 by Hyyped is licensed under CC BY-NC-SA 4.0 
* All Reproduction of this code MUST be a remix and attribution is required 
* Any PUBLIC copy of this work is not legal and a DMCA takedown of said repo or website will be submitted
* WARNING:
* I am not responsible for any trouble you get in for using any of the scripts included in ToolScript© 
**/

var kilo = prompt("Enter a kilo conversion number");
var hecto = prompt("Enter a hecto conversion number");
var hik = kilo * 10;
var kih = hecto / 10;
if (isNaN(hik || kih)) {
alert("error.invalidSyntax");
}
else {
alert("There are " + hik + " hecto in " + kilo + " kilo.\n\nThere are " + kih + " kilo in " + hecto + " hecto.");
};