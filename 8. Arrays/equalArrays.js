function arraysAreEqual(arr1, arr2) {
    let sum = 0;
    
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          console.log(`Arrays are not identical. Found difference at ${i} index`);
          return;
        } else{
            sum += Number(arr1[i]);
        }
      }

    console.log(`Arrays are identical. Sum: ${sum}`);  
}
    
    

    
array1 = ['10','20','30'];
array2 = ['10','20','30'];
array3 = ['10','20','0'];
arraysAreEqual(array1, array2);
arraysAreEqual(array2, array3);
