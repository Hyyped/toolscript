/** 
* @license ToolScript © 2023 by Hyyped is licensed under CC BY-NC-SA 4.0 
* All Reproduction of this code MUST be a remix and attribution is required 
* Any PUBLIC copy of this work is not legal and a DMCA takedown of said repo or website will be submitted
* WARNING:
* I am not responsible for any trouble you get in for using any of the scripts included in ToolScript© 
**/

var price = prompt("Enter a price (no $ sign)");
var percentOff = prompt("Enter a discount (% off)");
var newPrice = (price * (percentOff / 100));
var saved = price - newPrice;
alert(`An object that costs $${price} and is ${percentOff}% off costs $${newPrice}, and you would save $${saved}`);