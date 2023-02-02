/** 
* @license ToolScript © 2023 by Hyyped is licensed under CC BY-NC-SA 4.0 
* All Reproduction of this code MUST be a remix and attribution is required 
* Any PUBLIC copy of this work is not legal and a DMCA takedown of said repo or website will be submitted
* WARNING:
* I am not responsible for any trouble you get in for using any of the scripts included in ToolScript© 
**/

var hecto = prompt("Enter a hecto conversion number");
var deca = prompt("Enter a deca conversion number");
var dih = hecto * 10;
var hid = deca / 10;
if (isNaN(dih || hid)) {
alert("error.invalidSyntax");
}
else {
alert("There are " + dih + " deca in " + hecto + " hecto.\n\nThere are " + hid + " hecto in " + deca + " deca.");
};