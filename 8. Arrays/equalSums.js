function findEqualSumsIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
      let leftSum = 0;
      let rightSum = 0;
  
      // Calculate left sum
      for (let j = 0; j < i; j++) {
        leftSum += arr[j];
      }
  
      // Calculate right sum
      for (let k = i + 1; k < arr.length; k++) {
        rightSum += arr[k];
      }
  
      if (leftSum === rightSum) {
        console.log(i);
        return;  
      }
    }
  
    console.log("no");
  }
  
  const inputArray1 = [1, 2];
  console.log('Output:');
  findEqualSumsIndex(inputArray1);  // Output: no
  
  const inputArray2 = [1, 2, 3, 3];
  console.log('Output:');
  findEqualSumsIndex(inputArray2);  // Output: 2
  