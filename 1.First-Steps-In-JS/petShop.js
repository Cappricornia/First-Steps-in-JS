function petShop(input){
    let dogFoodQty = input[0];
    let catFoodQty = input[1];
    let dogTotalPrice = parseFloat(dogFoodQty * 2.5);
    let catTotalPrice = parseFloat(catFoodQty * 4);
    let totalFood = dogTotalPrice + catTotalPrice;
    console.log(totalFood);
}

petShop(["13", "9"]);