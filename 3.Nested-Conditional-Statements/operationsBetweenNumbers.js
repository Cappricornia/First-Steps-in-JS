function operationsBetweenNumbers(input){
    let number1 = Number(input[0]);
    let number2 = Number(input[1]);
    let operator = input[2];
    let operators = ["+", "-","*"];
    
    let operation = 0.0;
    let evenOdd;

    if (operator == "+"){
        operation = (number1 + number2);
    } else if (operator == "-"){
        operation = number1 - number2;
    } else if (operator == "*"){
        operation = number1 * number2;
    } else if (operator == "/"){
        if (number2 == 0){
            console.log(`Cannot divide ${number1} by zero`)
            return;
        } else {
            operation = number1 / number2;
        }
    } else if (operator == "%"){
        if (number2 == 0){
            console.log(`Cannot divide ${number1} by zero`)
            return;
        } else{
            operation = number1 % number2;
        }   
    }
   
   
    if (operation % 2 == 0){
        evenOdd = "even";
    } else{
        evenOdd = "odd";
    }

    if (operators.includes(operator)){
        console.log(`${number1} ${operator} ${number2} = ${operation} - ${evenOdd}`)
    } else if (operator == "/"){
        console.log(`${number1} ${operator} ${number2} = ${operation.toFixed(2)}`)
    } else{
        console.log(`${number1} ${operator} ${number2} = ${operation}`)
    }
}

operationsBetweenNumbers(["1","12","+"]);
operationsBetweenNumbers(["123","12","/"]);
operationsBetweenNumbers(["112","0","/"]);
operationsBetweenNumbers(["10","3","%"]);



