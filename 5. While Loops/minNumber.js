function minNumber(input){
    let data = input[0];
    let index = 0;
    let minNum = Number.POSITIVE_INFINITY;

    while (true){
        data = input[index]
        let currentNum = Number(input[index]);

        if (data === "Stop"){
            break;
        }

        if (currentNum < minNum){
            minNum = currentNum;
        }
      
        index ++;
    }

    console.log(minNum);
}

minNumber(["100","99","80","70","Stop"]);

minNumber(["-10","20","-30","Stop"]);

minNumber(["999","Stop"]);

minNumber(["-1","-2","Stop"]);



