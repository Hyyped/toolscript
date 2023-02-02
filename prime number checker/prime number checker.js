/** 
* @license ToolScript © 2023 by Hyyped is licensed under CC BY-NC-SA 4.0 
* All Reproduction of this code MUST be a remix and attribution is required 
* Any PUBLIC copy of this work is not legal and a DMCA takedown of said repo or website will be submitted
* WARNING:
* I am not responsible for any trouble you get in for using any of the scripts included in ToolScript© 
**/

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