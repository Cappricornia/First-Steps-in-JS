function rotateArray(arr, rotations) {
    for (let i = 0; i < rotations; i++) {
      const firstElement = arr.shift();
      arr.push(firstElement);
    }
    return arr;
  }
  
  const inputArray = [51, 47, 32, 61, 21];
  const rotations = 2;
  
  const rotatedArray = rotateArray(inputArray, rotations);
  console.log(rotatedArray.join(' ')); // Output: 32 61 21 51 47
  