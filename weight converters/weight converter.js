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