function commonElements(arr1, arr2) {
    arr1.forEach((element) => {
      if (arr2.includes(element)) {
        console.log(element);
      }
    });
  }
  
  // printed first
  console.log('Common elements:');


  const array1 = ['Hey', 'hello', 2, 4, 'Peter', 'e'];
  const array2 = ['Petar', 10, 'hey', 4, 'hello', '2'];

  // the function is called and then it prints the elements
  commonElements(array1, array2);


  /*The print('Common elements:') statement will be executed first, printing "Common elements:".
   Then, the print_common_elements() function (equivalent to the printCommonElements() function in JavaScript) 
   will be called, and it will print the common elements.

The order of output in the console should follow the sequence of these statements. If you're observing a different order, 
please review your code to ensure there are no modifications causing this behavior.*/