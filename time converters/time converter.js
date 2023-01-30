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