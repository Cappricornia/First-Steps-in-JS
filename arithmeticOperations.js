function subtract(input) {
  let a = Number(input[0]);
  let b = Number(input[1]);
  let result = a - b;
  console.log("Result is: " + result);
}
  subtract([5, 3])

  function add(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let result = a + b;
    console.log("Result is: " + result);
  }
    add([5, 3])


    function multiply(input) {
        let a = Number(input[0]);
        let b = Number(input[1]);
        let result = a * b;
        console.log("Result is: " + result);
      }
        multiply([5, 3])

    function divide() {
        let a = 25;
        let i = a / 4;      	
        let f = parseInt(a / 4.0);  
        let infinity = parseInt(a / 0); // NaN 
        let sqrt = parseInt(Math.sqrt(4));  
         let odd = parseInt(3 % 2); 
        let evenNum = parseInt(4 % 2); 
        let error = parseInt(3 % 0); // Nan
        console.log(i);
        console.log(f);
        console.log(infinity);
        console.log(sqrt);
        console.log(odd);
        console.log(evenNum);
        console.log(error);
       
    
    }

    divide();
        