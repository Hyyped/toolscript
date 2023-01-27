for (;;) {
    if(confirm("Confirm to select a program\nCurrent Program: Basic Calculators") == true) {
        for (;;) {
            if(confirm("Confirm to select operation\nCurrent operation: multiplication") == true) {
            let factor1 = window.prompt("Enter the first factor");
            let factor2 = window.prompt("Enter the second factor"); 
            let product = Number(factor1) * Number(factor2); 
            if (isNaN(product)) {
                product = "error.invaldSyntax";
                alert(product) 
            }
            else {
                product = Number(factor1) * Number(factor2);
                alert(product)
            }
            if(confirm("Cancel to end process") == false) {
                throw error("Calculation Completed");
            }
        }
        if(confirm("Confirm to select operation\nCurrent operation: division") == true) {
            let dividend = window.prompt("Enter the dividend"); 
            let divisor = window.prompt("Enter the divisor"); 
            let quotient = Number(dividend) / Number(divisor); 
            if (isNaN(quotient)) {
                quotient = "error.invaldSyntax";
                alert(quotient) 
            }
            else {
                let quotient = Number(dividend) / Number(divisor); 
                let wholeNum = Math.floor(Number(dividend) / Number(divisor));
                let remainder = Number(dividend) % Number(divisor);
                alert(quotient + "\n\nMixed Number: " + wholeNum + " " + remainder + "/" + divisor)
            }
            if(confirm("Cancel to end process") == false) {
                throw error("Calculation Completed");
            }
        }
        if(confirm("Confirm to select operation\nCurrent operation: addition") == true) {
            let digit1add = window.prompt("Enter Digit 1"); 
            let digit2add = window.prompt("Enter Digit 2"); 
            let sum = Number(digit1add) + Number(digit2add);
            if (isNaN(sum)) {
                sum = "error.invaldSyntax";
                alert(sum) 
            }
            else {
                let sum = Number(digit1add) + Number(digit2add);
                alert(sum)
            }
            if(confirm("Cancel to end process") == false) {
                throw error("Calculation Completed");
            }
        }
        if(confirm("Confirm to select operation\nCurrent operation: subtraction") == true) {
            let minuend = window.prompt("Enter Digit 1"); 
            let subtrahend = window.prompt("Enter digit 2"); 
            let difference = minuend - subtrahend;
            if (isNaN(difference)) {
                difference = "error.invaldSyntax";
                alert(difference) 
            }
            else {
                let difference = minuend - subtrahend;
                alert(difference)
            }
            if(confirm("Cancel to end process") == false) {
                throw error("Calculation Completed");
            }
        }
        if(confirm("Confirm to select operation\nCurrent operation: exponents") == true) {
            let base = window.prompt("Enter the base"); 
            let exponent = window.prompt("Enter the exponent"); 
            let solvedExponent = Number(base) ** Number(exponent);
            if (isNaN(solvedExponent)) {
                solvedExponent = "error.invaldSyntax";
                alert(solvedExponent) 
            }
            else {
                let solvedExponent = Number(base) ** Number(exponent);
                alert(solvedExponent)
            }
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
    if(confirm("Confirm to select a program\nCurrent program: Prime Number Checker") == true) {
let checkPrimeNumber = parseInt(prompt("Enter a number: "));
let isPrimeNumber = true;

if (checkPrimeNumber === 1 || 0) {
    isPrimeNumber = null;
}

else if (checkPrimeNumber > 1) {


    for (let i = 2; i < checkPrimeNumber; i++) {
        if (checkPrimeNumber % i == 0) {
            isPrimeNumber = false;
            break;
        };
    };
    };
if (isPrimeNumber == false) {
    alert(checkPrimeNumber + " is a composite number.");
}
else if (isPrimeNumber == true) {
    alert(checkPrimeNumber + " is a prime number.");
}
else {
    alert(checkPrimeNumber + " is neither a prime nor composite number.")
};
if (confirm("Cancel to end process") == false) {
    throw error("Calculation Completed");
}
};
if(confirm("Confirm to select a program\nCurrent program: Metric Calculator") == true) {
    for (;;) {
    if(confirm("Confirm to select a metric conversion\nCurrent conversion: kilo and hecto") == true) {
        var kilo = prompt("Enter a kilo conversion number");
        var hecto = prompt("Enter a hecto conversion number");
        var hik = kilo * 10;
        var kih = hecto / 10;
        if (isNaN(hik || kih)) {
            alert("error.invalidSyntax");
        }
        else {
            alert("There are " + hik + " hecto in " + kilo + " kilo.\n\nThere are " + kih + " kilo in " + hecto + " hecto.");
        };
        if (confirm("Cancel to end process") == false) {
            throw error("Calculation Completed");
        }
    };
    if(confirm("Confirm to select a metric conversion\nCurrent conversion: hecto and deca") == true) {
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
        if (confirm("Cancel to end process") == false) {
            throw error("Calculation Completed");
        }
    };
    if(confirm("Confirm to select a metric conversion\nCurrent conversion: deca and unit") == true) {
        var deca = prompt("Enter a deca conversion number");
        var unit = prompt("Enter a unit conversion number");
        var uid = deca * 10;
        var diu = unit / 10;
        if (isNaN(uid || diu)) {
            alert("error.invalidSyntax");
        }
        else {
            alert("There are " + uid + " units in " + deca + " deca.\n\nThere are " + diu + " deca in " + unit + " units.");
        };
        if (confirm("Cancel to end process") == false) {
            throw error("Calculation Completed");
        }
    };
    if(confirm("Confirm to select a metric conversion\nCurrent conversion: unit and deci") == true) {
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
        if (confirm("Cancel to end process") == false) {
            throw error("Calculation Completed");
        }
    };
    if(confirm("Confirm to select a metric conversion\nCurrent conversion: deci and centi") == true) {
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
        if (confirm("Cancel to end process") == false) {
            throw error("Calculation Completed");
        }
    };
    if(confirm("Confirm to select a metric conversion\nCurrent conversion: centi and milli") == true) {
        var centi = prompt("Enter a centi conversion number");
        var milli = prompt("Enter a milli conversion number");
        var mic = centi * 10;
        var cim = milli / 10;
        if (isNaN(mic || cim)) {
            alert("error.invalidSyntax");
        }
        else {
            alert("There are " + mic + " milli in " + centi + " centi.\n\nThere are " + cim + " centi in " + milli + " milli.");
        };
        if (confirm("Cancel to end process") == false) {
            throw error("Calculation Completed");
        }
    };
};
};
if(confirm("Confirm to select a program\nCurrent program: Percentage Finder") == true) {
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
};
if (confirm("Confirm to select a program\nCurrent program: Fraction Simplifier") == true) {
    var numerator = prompt("Enter the numerator");
    var denominator = prompt("Enter the denominator");
    var GCD = (a, b) => b ? GCD(b, a % b) : a;
    var div = GCD(numerator, denominator);
    alert(numerator + "/" + denominator + " simplifies to " + numerator / div + "/" + denominator / div + ".");
    if (confirm("Cancel to end process") == false) {
        throw error("Calculation Completed");
    }
};
if (confirm("Confirm to select a program\nCurrnet program: Area Calculator") == true) { 
for (;;) {
if (confirm("Confirm to select an area calculator\nCurrent area calculator: Width and Length") == true) {
    var width = prompt("Enter the width");
    var length = prompt("Enter the length");
    var area = `An object ${width} units wide and ${length} units long has an area of ${width * length} units squared.`;
    alert(area);
    if (confirm("Cancel to end process") == false) {
        throw error("Calculation Completed");
    }
};
if (confirm("Confirm to select an area calculator\nCurrent area calculator: Width, Length, and Height") == true) {
    var width = prompt("Enter the width");
    var length = prompt("Enter the length");
    var height = prompt("Enter the height");
    var area = `An object ${width} units wide, ${length} units long and ${height} units tall has an area of ${width * length * height} units cubed`;
    alert(area);
    if (confirm("Cancel to end process") == false) {
        throw error("Calculation Completed");
    }
};
};
};
};