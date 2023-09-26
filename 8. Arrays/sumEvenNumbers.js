function sumEvenNumbers(arr){
    let sumEven = 0;

    for (let i=0; i< arr.length; i++){
        let number = Number(arr[i]);

        if (!isNaN(number) && number % 2 === 0){
            sumEven += number;
        }
    }

    console.log(`The sum of the even numbers is: ${sumEven}.`);
}


arr = ['1','2','3','4','5','6'];
sumEvenNumbers(arr);
