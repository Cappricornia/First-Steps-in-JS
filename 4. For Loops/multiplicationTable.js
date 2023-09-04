function multiplicationTable(input){
    let number = Number(input[0]);

    for (let i = 1; i <= 10; i++){
        let result = i * number;
        console.log(`${i} * ${number} = ${result}`);
    }
}

multiplicationTable(["1"]);
multiplicationTable(["2"]);
multiplicationTable(["3"]);
multiplicationTable(["4"]);
multiplicationTable(["5"]);
multiplicationTable(["6"]);
multiplicationTable(["7"]);
multiplicationTable(["8"]);
multiplicationTable(["9"]);
multiplicationTable(["10"]);