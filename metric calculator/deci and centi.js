/** 
* @license ToolScript © 2023 by Hyyped is licensed under CC BY-NC-SA 4.0 
* All Reproduction of this code MUST be a remix and attribution is required 
* Any PUBLIC copy of this work is not legal and a DMCA takedown of said repo or website will be submitted
* WARNING:
* I am not responsible for any trouble you get in for using any of the scripts included in ToolScript© 
**/

var deci = prompt("Enter a deci conversion number");
var centi = prompt("Enter a centi conversion number");
var cid = deci * 10;
var dic = centi / 10;
if (isNaN(cid || dic)) {
alert("error.invalidSyntax");
}
else {
alert("There are " + cid + " centi in " + deci + " deci.\n\nThere are " + dic + " deci in " + centi + " centi.");
};