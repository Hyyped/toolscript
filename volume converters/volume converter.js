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