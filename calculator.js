if(confirm("Confirm to select operation\nCurrent operation: multiplication") == true) {
    let factor1 = window.prompt("Enter the first factor");
    let factor2 = window.prompt("Enter the second factor"); 
    let product = Number(factor1) * Number(factor2); 
    alert(product);
    if(confirm("Cancel to end process") == false) {
        throw error("Calculation Completed");
    }
}
if(confirm("Confirm to select operation\nCurrent operation: division") == true) {
    let dividend = window.prompt("Enter the dividend"); 
    let divisor = window.prompt("Enter the divisor"); 
    let decimalquotient = Number(dividend) / Number(divisor);
    let quotient = Math.floor(Number(dividend) / Number(divisor)); 
    let remainder = Number(dividend) % Number(divisor);
    alert(quotient + " " + remainder + "/" + divisor + "\nOR\n" + decimalquotient);
    if(confirm("Cancel to end process") == false) {
        throw error("Calculation Completed");
    }
}
if(confirm("Confirm to select operation\nCurrent operation: addition") == true) {
    let digit1add = window.prompt("Enter Digit 1"); 
    let digit2add = window.prompt("Enter Digit 2"); 
    let sum = Number(digit1add) + Number(digit2add);
    alert(sum);
    if(confirm("Cancel to end process") == false) {
        throw error("Calculation Completed");
    }
}
if(confirm("Confirm to select operation\nCurrent operation: subtraction") == true) {
    let minuend = window.prompt("Enter Digit 1"); 
    let subtrahend = window.prompt("Enter digit 2"); 
    let difference = minuend - subtrahend;
    alert(difference);
    if(confirm("Cancel to end process") == false) {
        throw error("Calculation Completed");
    }
}
if(confirm("Confirm to select operation\nCurrent operation: exponents") == true) {
    let base = window.prompt("Enter the base"); 
    let exponent = window.prompt("Enter the exponent"); 
    let solvedExponent = Number(base) ** Number(exponent);
    alert(solvedExponent);
    throw error("Calculation Completed");
}
