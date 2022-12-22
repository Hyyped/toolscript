for (;;) {
    if(confirm("Confirm to select a program\nCurrent Program: Basic Calculators") == true) {
        for (;;) {
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
            let quotient = Number(dividend) / Number(divisor); 
            alert(quotient);
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
            if(confirm("Cancel to end process") == false) {
                throw error("Calculation Completed");
            }
        }
        }
    }
    if(confirm("Confirm to select a program\nCurrent program: Time Converters") == true) {
        for (;;) {
            if(confirm("Confirm to select time convertion\nCurrent convertion: years to months") == true) {
                let years = window.prompt("Enter the amount of years");
                let months = years * 12;
                alert("There are " + months + " months in " + years + " years.");
                if(confirm("Cancel to end process") == false) {
                    throw error("Calculation Completed");
            }
        }
            if(confirm("Confirm to select time convertion\nCurrent convertion: months to days") == true) {
                let months = window.prompt("Enter the amount of months");
                let days = months * 30;
                alert("There are (about) " + days + " days in " + months + " months.");
                if(confirm("Cancel to end process") == false) {
                    throw error("Calculation Completed");
            }
        }
        if(confirm("Confirm to select time convertion\nCurrent convertion: days to hours") == true) {
            let days = window.prompt("Enter the amount of days");
            let hours = days * 24;
            alert("There are " + hours + " hours in " + days + " days.");
            if(confirm("Cancel to end process") == false) {
                throw error("Calculation Completed");

        }
    }
    if(confirm("Confirm to select time convertion\nCurrent convertion: hours to minutes") == true) {
        let hours = window.prompt("Enter the amount of hours");
        let minutes = hours * 60;
        alert("There are " + minutes + " minutes in " + hours + " hours.");
        if(confirm("Cancel to end process") == false) {
            throw error("Calculation Completed");
        }
    }
    if(confirm("Confirm to select time convertion\nCurrent convertion: minutes to seconds") == true) {
        let minutes = window.prompt("Enter the amount of minutes");
        let seconds = minutes * 60;
        alert("There are " + seconds + " seconds in " + minutes + " minutes.");
        if(confirm("Cancel to end process") == false) {
            throw error("Calculation Completed");
        }
    }
}
    }
    if(confirm("Confirm to select a program\nCurrent program: Weight Converters") == true) {
        for (;;) {
            if(confirm("Confirm to select weight convertion\nCurrent convertion: tons to pounds") == true) {
            let tons = prompt("Enter the amount of tons");
            let pounds = tons * 2000;
            alert("There are " + pounds + " pounds in " + tons + " tons.");
            if(confirm("Cancel to end process") == false) {
                throw error("Calculation Completed");
            }
        }
        if(confirm("Confirm to select weight convertion\nCurrent convertion: pounds to ounces") == true) {
            let pounds = prompt("Enter the amount of pounds");
            let ounces = pounds * 16;
            alert("There are " + ounces + " ounces in " + pounds + " pounds.");
            if(confirm("Cancel to end process") == false) {
                throw error("Calculation Completed");
            }
        }
    }
}
if(confirm("Confirm to select a program\nCurrent program: Volume Converters") == true) {
    for(;;) {
        if(confirm("Confirm to select a measurement convertion\nCurrent convertion: gallons to quarts") == true) {
            let gallons = prompt("Enter the amount of gallons");
            let quarts = gallons * 4;
            alert("There are" + quarts + " quarts in " + gallons + " gallons.");
            if(confirm("Cancel to end process") == false) {
                throw error("Calculation Completed");
            }
        }
            if(confirm("Confirm to select a measurement convertion\nCurrent convertion: quarts to pints") == true) {
                let quarts = prompt("Enter the amount of quarts");
                let pints = quarts * 2;
                alert("There are " + pints + " pints in " + quarts + " quarts.");
                if(confirm("Cancel to end process") == false) {
                    throw error("Calculation Completed");
                }
            }
            if(confirm("Confirm to select a measurement convertion\nCurrent Convertion: pints to cups") == true) {
                let pints = prompt("Enter the amount of pints");
                let cups = pints * 2;
                alert("There are " + cups + " cups in " + pints + " pints.");
                if(confirm("Cancel to end process") == false) {
                    throw error("Calculation Completed");
                }
            }
            if(confirm("Confirm to select a measurement convertion\nCurrent Convertion: cups to fluid ounces") == true) {
                let cups = prompt("Enter the amount of cups");
                let fluid_ounces = cups * 8;
                alert("There are " + fluid_ounces + " fluid ounces in " + cups + " cups.");
                if(confirm("Cancel to end process") == false) {
                    throw error("Calculation Completed");
                }
            }
            if(confirm("Confirm to select a measurement convertion\nCurrent Convertion: fluid ounces to tablespoons") == true) {
                let fluid_ounces = prompt("Enter the amount of fluid ounces");
                let tablespoons = fluid_ounces * 2;
                alert("There are " + tablespoons + " tablespoons in " + fluid_ounces + " fluid ounces.");
                if(confirm("Cancel to end process") == false) {
                    throw error("Calculation Completed");
                }
            }
            if(confirm("Confirm to select a measurement convertion\nCurrent Convertion: tablespoons to teaspoons") == true) {
                let tablespoons = prompt("Enter the amount of tablespoons");
                let teaspoons = tablespoons * 3;
                alert("There are " + teaspoons + " teaspoons in " + tablespoons + " tablespoons.");
                if(confirm("Cancel to end process") == false) {
                    throw error("Calculation Completed");
                }
            }
        }
    }
}
