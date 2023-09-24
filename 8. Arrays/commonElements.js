function commonElements(arr1, arr2) {
    arr1.forEach((element) => {
      if (arr2.includes(element)) {
        console.log(element);
      }
    });
  }
  
  console.log('Common elements:');


  const array1 = ['Hey', 'hello', 2, 4, 'Peter', 'e'];
  const array2 = ['Petar', 10, 'hey', 4, 'hello', '2'];

  commonElements(array1, array2);


  
