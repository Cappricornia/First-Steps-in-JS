function moving(input){
    index = 0;
    let width = parseInt(input[index]);
    index ++;
    let length = parseInt(input[index]);
    index++;
    let height = parseInt(input[index]);
    index ++;

    let area = width * length * height;
    let totalBoxes = 0;

    while (true){
        let boxSize = input[index];
        
        if (index >= input.length){
            break;
        }

        if (boxSize === "Done"){
            break;
        }

        index ++;
        totalBoxes += parseInt(boxSize);
    }
    
    let space = area - totalBoxes;
    
    if (space >= 0){
        console.log(`${space} Cubic meters left.`);
    } else{
        console.log(`No more free space! You need ${Math.abs(space)} Cubic meters more.`);
    }
}

moving(["10", "10","2","20","20","20","20","122"])

moving(["10", "1","2","4", "6","Done"]);

