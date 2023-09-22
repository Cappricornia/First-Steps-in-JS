function sumDigits(num){
    let n = num.toString();
    let sumDigits = 0;

    for (let i=0; i< n.length; i++){
        let digit = parseInt(n[i]);

        sumDigits += digit;
    }
    console.log(sumDigits);
}

sumDigits(23456);