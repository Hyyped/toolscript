/** 
* @license ToolScript © 2023 by Hyyped is licensed under CC BY-NC-SA 4.0 
* All Reproduction of this code MUST be a remix and attribution is required 
* Any PUBLIC copy of this work is not legal and a DMCA takedown of said repo or website will be submitted
* WARNING:
* I am not responsible for any trouble you get in for using any of the scripts included in ToolScript© 
**/

var unit = prompt("Enter a unit conversion number");
var deci = prompt("Enter a deci conversion number");
var diun = unit * 10;
var unid = deci / 10;
if (isNaN(diun || unid)) {
alert("error.invalidSyntax");
}
else {
alert("There are " + diun + " deci in " + unit + " units.\n\nThere are " + unid + " units in " + deci + " deci.");
};