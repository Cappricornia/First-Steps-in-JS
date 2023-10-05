function calculateFactorialDivision(num1, num2) {
    function factorial(n) {
        if (n === 0 || n === 1)
            return 1;
        return n * factorial(n - 1);
    }

    const factorialNum1 = factorial(num1);
    const factorialNum2 = factorial(num2);

    const divisionResult = (factorialNum1 / factorialNum2).toFixed(2);

    console.log(`Division Result: ${divisionResult}`);
}


calculateFactorialDivision(5, 3);  
