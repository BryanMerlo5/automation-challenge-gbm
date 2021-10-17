//**d)Write a program to calculate the modules of two numbers without using any inbuilt modulus operator */

function calculateModule(num, divisor) {
    while (num >= divisor)
        num -= divisor;
    return num;
}
 
// Driver code
let num = 10, divisor = 7;
console.log(calculateModule(num, divisor));