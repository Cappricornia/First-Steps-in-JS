function fishingBoat(input){
    let budget = Number(input[0]);
    let season = input[1];
    let numberFishermen = Number(input[2]);

    let rentPrice = 0.0;

    if (season == "Spring"){
        rentPrice = 3000;
    } else if (season == "Summer" || season == "Autumn"){
        rentPrice = 4200;
    } else if (season == "Winter"){
        rentPrice = 2600;
    } 

    if (numberFishermen > 0 && numberFishermen <= 6){
        rentPrice -= rentPrice * 0.1;
    } else if (numberFishermen >= 7 && numberFishermen <= 11){
        rentPrice -= rentPrice * 0.15;
    } else if (numberFishermen > 12){
        rentPrice -= rentPrice * 0.25;
    }

    if (numberFishermen % 2==0 && season != "Autumn"){
        rentPrice -= rentPrice * 0.05;
    }


    if (budget >= rentPrice){
        console.log(`Yes! You have ${(budget - rentPrice).toFixed(2)} leva left.`)
    } else{
        console.log(`Not enough money! You need ${(rentPrice - budget).toFixed(2)} leva.`)
    }
}

fishingBoat(["3000","Summer","11"]);
fishingBoat(["3600","Autumn","6"]);
fishingBoat(["2000","Winter","13"]);

