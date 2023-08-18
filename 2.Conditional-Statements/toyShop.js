function toyShop(input){
    let tripPrice = Number(input[0]);
    let puzzlesNumber = Number(input[1]);
    let dollsNumber = Number(input[2]);
    let teddiesNumber = Number(input[3]);
    let minionsNumber = Number(input[4]);
    let toyTrucksNumber = Number(input[5]);
    let orderPrice = 0.0;

    orderPrice = puzzlesNumber * 2.6 + dollsNumber * 3 + teddiesNumber * 4.1 + minionsNumber * 8.2 + toyTrucksNumber * 2;
    let totalToysNumber = puzzlesNumber + dollsNumber + teddiesNumber + minionsNumber + toyTrucksNumber;

    if (totalToysNumber >= 50){
        orderPrice -= orderPrice * 0.25;
    }

    orderPrice -= orderPrice * 0.1;

    if (orderPrice >= tripPrice){
        console.log(`Yes! ${(orderPrice - tripPrice).toFixed(2)} lv left.`)
    } else{
        console.log(`Not enough money! ${(tripPrice - orderPrice).toFixed(2)} lv needed.`)
    }
}


toyShop(["40.8","20","25","30","50","10"]);
toyShop(["320","8","2","5","5","1"]);

