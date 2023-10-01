function calculateOddEvenSum(n){
    let evenSum = 0;
    let oddSum = 0;
    let stringNumber = String(n);

    for(let i=0; i< stringNumber.length; i++ ){
        let digit = parseInt(stringNumber[i]);
        if (digit % 2 === 0){
            evenSum += digit;
        } else{
            oddSum += digit
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

calculateOddEvenSum(3495892137259234);
