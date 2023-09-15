function building(input){
    let floors = parseInt(input[0]);
    let appartments = parseInt(input[1]);


    for (let f = floors; f > 0; f--){
        let floorLine = " ";

        for (let a = 0; a < appartments; a++){
            if (f === floors){
                floorLine += `L${f}${a}`+ " "; // top floor olways Large app - L + floor number + large appartment number
            }else if (f % 2 === 0){
                floorLine += `O${f}${a}` + " "; // office - O + floor number + office number
            } else if(f % 2 === 1){
                floorLine += `A${f}${a}` + " "; // appartment - A + floor number + appartment number
            } 
        }
        console.log(floorLine);

    }
}

building(["6", "4"]);
building(["9", "5"]);