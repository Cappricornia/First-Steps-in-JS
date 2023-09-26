//Write a program, which receives an array of strings and reverses the array without creating a new array.

function reverseInPlace(arr){
    let reversedArr = arr.reverse();
    console.log(reversedArr.join(' '));
}

arr = ['a', 'b', 'c', 'd', 'e'];
reverseInPlace(arr);
console.log(`The original array has been reversed: ${arr}`);