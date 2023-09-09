function maxNumber(input){
    let data = input[0];
    let index = 0;
    let maxNum = Number.NEGATIVE_INFINITY;

    while (true){
        data = input[index]
        let currentNum = Number(input[index]);

        if (data === "Stop"){
            break;
        }

        if (currentNum > maxNum){
            maxNum = currentNum;
        }
      
        index ++;
    }

    console.log(maxNum);
}

maxNumber(["100","99","80","70","Stop"]);

maxNumber(["-10","20","-30","Stop"])

maxNumber(["45","-20","7","99","Stop"])

maxNumber(["999","Stop"])

maxNumber(["-1","-2","Stop"])


