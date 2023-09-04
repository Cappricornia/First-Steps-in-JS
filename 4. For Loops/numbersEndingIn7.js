function numbersEndingIn7(){
    let number1 = 1;
    let number2 = 1000;

    for (let i = number1; i <= number2; i++){
        if (i % 10 === 7){
            console.log(i);
        }
    }
}

numbersEndingIn7();