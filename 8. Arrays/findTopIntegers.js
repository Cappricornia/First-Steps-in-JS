function findTopIntegers(arr) {
    let maxRight = arr[arr.length - 1];  
    const topIntegers = [maxRight];
  
    for (let i = arr.length - 2; i >= 0; i--) {
      if (arr[i] > maxRight) {
        maxRight = arr[i];
        topIntegers.push(maxRight);
      }
    }
  
    let reversedInts = topIntegers.reverse();
    console.log(reversedInts.join(' '));
  }
  
  
  findTopIntegers([1, 4, 3, 2]);  // Output: 4 3 2
  