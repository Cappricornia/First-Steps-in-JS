/* Write a program, which receives an array of numbers, and condenses them by summing adjacent couples of elements until 
a single number is obtained */

function condenseArray(arr) {
    while (arr.length > 1) {
      let condensed = [];
      for (let i = 0; i < arr.length - 1; i++) {
        condensed.push(arr[i] + arr[i + 1]);
      }
      arr = condensed;
    }
    return arr[0];
  }
  
  const arr = [2, 10, 3];
  const result = condenseArray(arr);
  console.log(result);  // Output: 25
  