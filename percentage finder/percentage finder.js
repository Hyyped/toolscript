/** 
* @license ToolScript © 2023 by Hyyped is licensed under CC BY-NC-SA 4.0 
* All Reproduction of this code MUST be a remix and attribution is required 
* Any PUBLIC copy of this work is not legal and a DMCA takedown of said repo or website will be submitted
* WARNING:
* I am not responsible for any trouble you get in for using any of the scripts included in ToolScript© 
**/

for(;;) {
    if (confirm("Confirm to select a percentage finder\nCurrent conversion: number to percent") == true) {
        var number = prompt("Enter a number");
        percentage = number * 100;
        if (isNaN(percentage)) {
            alert("error.invalidSyntax");
        }
        else {
            alert(number + " is equal to " + percentage + "%");
        };
        if (confirm("Cancel to end process") == false) {
            throw error("Calculation Completed");
        }
    };
    if (confirm("Confirm to select a percentage finder\nCurrent conversion: fraction to percent") == true) {
        var numerator = prompt("Enter the numerator");
        var denominator = prompt("Enter the denominator");
        var diff = 100 / denominator;
        var percentage = numerator * diff;
        if (isNaN(percentage)) {
            alert("error.invalidSyntax");
        }
        else {
            alert(numerator + "/" + denominator + " is equal to " + percentage + "%");
        };
        if (confirm("Cancel to end process") == false) {
            throw error("Calculation Completed");
        }
    };
    if (confirm("Confirm to select a percentage finder\nCurrent conversion: percentage to number or fraction") == true) {
        var percentage = prompt("Enter a percentage");
        var numerator = percentage;
        var denominator = 100;
        var number = percentage / 100;
        var GCD = (a, b) => b ? GCD(b, a % b) : a;
        var div = GCD(numerator, denominator);
        alert(percentage + "% is equal to " + number + " or " + numerator / div + "/" + denominator / div + ".");
        if (confirm("Cancel to end process") == false) {
            throw error("Calculation Completed");
        }
    };
    if (confirm("Confirm to select a percentage finder\nCurrent finder: find percentage of number") == true) {
        var number = prompt("Enter a number");
        var percentage = prompt("Enter a percentage");
        var diff = 100 / percentage;
        var vEnd = number / diff;
        alert(percentage + "% of " + number + " is " + vEnd + ".");
        if (confirm("Cancel to end process") == false) {
            throw error("Calculation Completed");
        }
    };
    if (confirm("Confirm to select a percentage finder\nCurrent finder: find whole") == true) {
        var part = prompt("Enter the part");
        var percentage = prompt("Enter a percentage");
        var whole = part / (percentage / 100);
        alert(`Question: ${percentage}% of _ is ${part}?\nAnswer: ${whole}`);
        if (confirm("Cancel to end process") == false) {
            throw error("Calculation Completed");
        }
    };
    if (confirm("Confirm to select a percentage finder\nCurrent finder: get discount") == true) {
        var price = prompt("Enter a price (no $ sign)");
        var percentOff = prompt("Enter a discount (% off)");
        var newPrice = (price * (percentOff / 100));
        var saved = price - newPrice;
        alert(`An object that costs $${price} and is ${percentOff}% off costs $${newPrice}, and you would save $${saved}`);
        if (confirm("Cancel to end process") == false) {
            throw error("Calculation Completed");
        }
    }
};