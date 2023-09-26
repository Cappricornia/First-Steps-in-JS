// Write a program that calculates the difference between the sum of the even and the sum of the odd numbers in an array.
function evenAndOddSubtraction(arr){
    let sumEven = 0;
    let sumOdd = 0;

    for (let i=0; i< arr.length; i++){
        let number = arr[i];
       
        if (number % 2 === 0){
            sumEven += number;
        } else{
            sumOdd += number
        }
    }

    let diff = sumEven - sumOdd;
    console.log(`The difference between the sum of the even and odd numbers in the array is ===> ${diff}`);
}


arr = [1,2,3,4,5,6];
evenAndOddSubtraction(arr);

