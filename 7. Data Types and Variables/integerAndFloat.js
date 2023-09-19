function integerAndFloat(num1, num2, num3){
    let number1 = num1;
    let number2 = num2;
    let number3 = num3;

    let res = number1 + number2 + number3;
    if (res % 1 !== 0) {
        console.log(`${res} - Float`);
      } else {
        console.log(`${res} - Integer`);
      }
}


integerAndFloat(9, 100, 1.1);
integerAndFloat(9, 10, 11);