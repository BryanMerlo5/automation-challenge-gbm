//**c)Sum all the elements of an array: [1,34,56,72,123]*/

function sumValuesInArray(arr){
    let total = 0;
    let i = 0;
    for(i in arr) { 
        total += arr[i];
    }
    return total;
}

let arr = [1, 34, 56, 72, 123];

console.log('The total sum is: ', sumValuesInArray(arr));