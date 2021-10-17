/**a)Calculate the factorial of a number */

function calculateFactorial(num) {
    let factorial = num;
    if (num === 0 || num === 1) 
      return 1; 
    while (num > 1) { 
      num--;
      factorial *= num;
    }
    return factorial;
}

console.log('The factorial is: ', calculateFactorial(5));



