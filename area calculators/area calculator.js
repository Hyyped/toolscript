/** 
* @license ToolScript © 2023 by Hyyped is licensed under CC BY-NC-SA 4.0 
* All Reproduction of this code MUST be a remix and attribution is required 
* Any PUBLIC copy of this work is not legal and a DMCA takedown of said repo or website will be submitted
* WARNING:
* I am not responsible for any trouble you get in for using any of the scripts included in ToolScript© 
**/

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
    if (confirm("Confirm to select an area calculator\nCurrent area calculator: perimeter finder") == true) {
        var width = prompt("Enter the width");
        var length = prompt("Enter the length");
        var perimeter = Number(width * 2) + Number(length * 2);
        alert(`An object with a width of ${width} units and a length of ${length} units has a perimeter of ${perimeter} units.`);
        if (confirm("Cancel to end process") == false) {
            throw error("Calculation Completed");
        }
    };
    };