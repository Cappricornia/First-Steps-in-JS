function travelling(input){
    index = 0;

    while (true){
        let destination = input[index];
        index ++;
        let budget = Number(input[index]);
        index ++;
        let savings = 0;

        if (destination === "End"){
            break;
        }

        while (true){
            let amount = Number(input[index]);
            index ++;

            savings += amount;

            if (savings >= budget){
                console.log(`Going to ${destination}!`)
                break;
            }


        }
    }
}

travelling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])

