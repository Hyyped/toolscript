var number = prompt("Enter a number");
percentage = number * 100;
if (isNaN(percentage)) {
alert("error.invalidSyntax");
}
else {
alert(number + " is equal to " + percentage + "%");
};