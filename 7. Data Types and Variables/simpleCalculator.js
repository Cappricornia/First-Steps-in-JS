function simpleCalculator(num1, op, num2){
    let number1 = num1;
    let number2 = num2;
    let operator = op;

    let result = 0;

    if (number2 === 0) {
        console.log('Division by zero is not allowed.');
        return;
    }

    switch (operator){
        case "+":
            result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "*":
            result = number1 * number2;
            break;
        case "/":
            result = number1 / number2;
            break;
    }
    console.log(`${number1} ${operator} ${number2} = ${result.toFixed(2)}`);
}

simpleCalculator(5,  '+',  10);
simpleCalculator(25,  '-',  12);
simpleCalculator(5,  '*',  6);
simpleCalculator(15,  '/',  5);
simpleCalculator(5,  '/',  0);