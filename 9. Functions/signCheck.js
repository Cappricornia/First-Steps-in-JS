function signCheck(numOne, numTwo, numThree) {
    const negativeCount = [numOne, numTwo, numThree].filter(num => num < 0).length;
    let result =  negativeCount % 2 === 0 ? "positive" : "negative";
    console.log(`The result of the multiplication is ${result}.`);
}

signCheck(5, 12, -15);
signCheck(-2, -6, 13);