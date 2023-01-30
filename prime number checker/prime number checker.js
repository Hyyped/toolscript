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