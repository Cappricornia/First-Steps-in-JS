function foodDelivery(input){
    let chickenMenus = parseInt(input[0]);
    let fishMenus = parseInt(input[1]);
    let veggieMenus =  parseInt(input[2]);
    let priceMenus = chickenMenus * 10.35 + fishMenus * 12.4 + veggieMenus * 8.15;
    let order = priceMenus + (priceMenus * 0.2) + 2.5;
    console.log(order);
}

foodDelivery(["2","4","3"]);