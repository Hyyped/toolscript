/** 
* @license ToolScript © 2023 by Hyyped is licensed under CC BY-NC-SA 4.0 
* All Reproduction of this code MUST be a remix and attribution is required 
* Any PUBLIC copy of this work is not legal and a DMCA takedown of said repo or website will be submitted
* WARNING:
* I am not responsible for any trouble you get in for using any of the scripts included in ToolScript© 
**/

var centi = prompt("Enter a centi conversion number");
var milli = prompt("Enter a milli conversion number");
var mic = centi * 10;
var cim = milli / 10;
if (isNaN(mic || cim)) {
alert("error.invalidSyntax");
}
else {
alert("There are " + mic + " milli in " + centi + " centi.\n\nThere are " + cim + " centi in " + milli + " milli.");
};