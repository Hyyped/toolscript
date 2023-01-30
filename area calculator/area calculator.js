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