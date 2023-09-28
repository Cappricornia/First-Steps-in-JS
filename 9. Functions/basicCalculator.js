function basicCalculator(numOne, numTwo, operator) {
    const operations = {
        "multiply": () => numOne * numTwo,
        "divide": () => numOne / numTwo,
        "add": () => numOne + numTwo,
        "subtract": () => numOne - numTwo
    };

    const result = operations[operator]();

    if (operator === "divide" && numTwo === 0) {
        console.log("Error: Division by zero is not allowed.");
        return "";
    }

    if (result !== "") {
        console.log(`Result: ${result}`);
    }
    return result;
}

basicCalculator(5, 5, "add");
basicCalculator(5, 5, "subtract");
basicCalculator(5, 5, "multiply");
basicCalculator(5, 0, "divide");
basicCalculator(15, 5, "divide");
