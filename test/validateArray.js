/**b)From the following array ['a''b''c''d'], validate if it contains the following values: 'a' 'b' 'f'. Return a Boolean depending on the result*/

const arr = ['a', 'b', 'c', 'd'];

function isPresentInArray(arr, val) {
  let value = arr.some(arrVal => val === arrVal);
  if(value){
    console.log('The value ' + val + ' is present in the array: ', arr);
  } else {
    console.log('The value ' + val + ' is not present in the array: ', arr);
  }
}

isPresentInArray(arr, 'a');
isPresentInArray(arr, 'b');
isPresentInArray(arr, 'f');
