function shopping(input){
    let budget = Number(input[0]);
    let videoGraphicsCards = Number(input[1]);
    let processors = Number(input[2]);
    let ram = Number(input[3]);

    let totalPrice = videoGraphicsCards * 250 + processors * ((videoGraphicsCards * 250)*0.35) + ram * (((videoGraphicsCards * 250)*0.1));

    if (videoGraphicsCards > processors){
        totalPrice -= totalPrice * 0.15;
    }

    if (totalPrice <= budget){
        console.log(`You have ${(budget-totalPrice).toFixed(2)} leva left!`);
    } else{
        console.log(`Not enough money! You need ${(totalPrice-budget).toFixed(2)} leva more!`);
    }
}

shopping(["900","2","1","3"]);
shopping(["920.45","3","1","1"]);

