function numbersDivisibleBy9(input){
    let  number1 = Number(input[0]);
    let  number2 = Number(input[1]);

    let sumAllNums = 0;
    // all the numbers in the range that are divisible by 9 without a remainder, as well as their sum
    
    for (let i = number1; i <= number2; i++) {
        let currentNum = i;
        if (currentNum % 9 == 0){
            sumAllNums += currentNum;   
        }
      
    }

    console.log(`The sum: ${sumAllNums}`)

    for (let i = number1; i <= number2; i++) {
        let currentNum = i;
        if (currentNum % 9 == 0){
            console.log(currentNum);
        }
    }
   
}

numbersDivisibleBy9(["100", "200"]);
