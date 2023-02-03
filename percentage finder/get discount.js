var price = prompt("Enter a price (no $ sign)");
var percentOff = prompt("Enter a discount (% off)");
var newPrice = (price * (percentOff / 100));
var saved = price - newPrice;
alert(`An object that costs $${price} and is ${percentOff}% off costs $${newPrice}, and you would save $${saved}`);