/** 
* @license ToolScript © 2023 by Hyyped is licensed under CC BY-NC-SA 4.0 
* All Reproduction of this code MUST be a remix and attribution is required 
* Any PUBLIC copy of this work is not legal and a DMCA takedown of said repo or website will be submitted
* WARNING:
* I am not responsible for any trouble you get in for using any of the scripts included in ToolScript© 
**/

var numerator = prompt("Enter the numerator");
var denominator = prompt("Enter the denominator");
var GCD = (a, b) => b ? GCD(b, a % b) : a;
var div = GCD(numerator, denominator);
alert(numerator + "/" + denominator + " simplifies to " + numerator / div + "/" + denominator / div + ".");