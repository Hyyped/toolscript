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
};