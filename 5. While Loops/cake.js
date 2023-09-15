function cake(input){
    index = 0;
    let lengthCake = parseInt(input[index]);
    index++;
    let widthCake = parseInt(input[index]);
    index ++;
    let cakeSize = lengthCake * widthCake;
    let countHelping = 0;

    while (true){
        let pieces = input[index];
        index ++;

        if (cakeSize < 0){
            console.log(`No more cake left! You need ${Math.abs(cakeSize)} pieces more.`);
            break;
        }

        if (pieces == "STOP"){
            console.log(`${cakeSize} pieces are left.`);
            break;
        }

        cakeSize -= parseInt(pieces);

    }
}

cake(["10","10","20","20","20","20","21"]);

cake(["10","2","2","4","6","STOP"]);

