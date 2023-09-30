function sum(numOne, numTwo){
    return numOne + numTwo;
}

function subtract(numOne, numTwo, numThree){
    let additionResult = sum(numOne, numTwo);
    let subtraction = additionResult - numThree;
    console.log('Subtraction result:', subtraction);
}

const firstNumber = 23;
const secondNumber = 6;
thirdNumber = 10;

subtract(firstNumber, secondNumber, thirdNumber);