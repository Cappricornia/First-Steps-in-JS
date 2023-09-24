function mergeArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      console.log('Arrays must have equal length.');
      return;
    }
  
    let result = [];
  
    for (let i = 0; i < arr1.length; i++) {
      if (i % 2 === 0) {
        // If index is even, calculate the sum of both elements
        let sum = Number(arr1[i]) + Number(arr2[i]);
        result.push(sum);
      } else {
        // If index is odd, concatenate the elements
        let concatenated = arr1[i] + arr2[i];
        result.push(concatenated);
      }
    }
  
    console.log('Result:', result.join(' - '));
  }
  
  const arr1 = ['13', '12312', '5', '77', '4'];
  const arr2 = ['22', '333', '5', '122', '44'];


  
  mergeArrays(arr1, arr2); // Output: Result: 35 - 12312333 - 10 - 77122 - 48
  