/** 
* @license ToolScript © 2023 by Hyyped is licensed under CC BY-NC-SA 4.0 
* All Reproduction of this code MUST be a remix and attribution is required 
* Any PUBLIC copy of this work is not legal and a DMCA takedown of said repo or website will be submitted
* WARNING:
* I am not responsible for any trouble you get in for using any of the scripts included in ToolScript© 
**/

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