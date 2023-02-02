/** 
* @license ToolScript © 2023 by Hyyped is licensed under CC BY-NC-SA 4.0 
* All Reproduction of this code MUST be a remix and attribution is required 
* Any PUBLIC copy of this work is not legal and a DMCA takedown of said repo or website will be submitted
* WARNING:
* I am not responsible for any trouble you get in for using any of the scripts included in ToolScript© 
**/

var deca = prompt("Enter a deca conversion number");
var unit = prompt("Enter a unit conversion number");
var uid = deca * 10;
var diu = unit / 10;
if (isNaN(uid || diu)) {
alert("error.invalidSyntax");
}
else {
alert("There are " + uid + " units in " + deca + " deca.\n\nThere are " + diu + " deca in " + unit + " units.");
};