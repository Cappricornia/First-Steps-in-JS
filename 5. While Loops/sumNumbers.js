function sumNumbers(input){
    let number = Number(input[0]);
    let index = 1;
    let totalSum = 0;

    while (true){
        let nextNumbers = Number(input[index]);
        totalSum += nextNumbers;

        index ++

        if ( totalSum >= number){
            console.log(totalSum);
            break;
        }
    }  
}

sumNumbers(["100","10","20","30","40","18"]);
sumNumbers(["20","1","2","3","4","5","6", "3", "120"]);

