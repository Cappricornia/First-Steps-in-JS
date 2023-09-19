function amazingNumbers(num){
    let number = num.toString();
    let sum = 0;

    for (let i=0; i< number.length; i++){
        let digit = Number(number[i]);
        sum += digit
        
    }
    
    sumStr = sum.toString();

    if (sumStr.includes("9")){
        console.log(`${number} Amazing? True`);
    } else{
        console.log(`${number} Amazing? False`);
    }
}

amazingNumbers(1234);
amazingNumbers(45);
amazingNumbers(999);