function sumOfNumbers(input){
    let numberString = input[0];
    let sum = 0;
     
    for (let i=0; i < numberString.length; i++){
        sum += parseInt(numberString.charAt(i)); 
    }

    console.log(`The sum of the digits is: ${sum}`)
}

sumOfNumbers(["1234"]);
sumOfNumbers(["564891"]);