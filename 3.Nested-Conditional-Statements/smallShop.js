function smallShop(input){
    let product = input[0];
    let town = input[1];
    let quantity = Number(input[2]);
    let totalSum = 0.0;
    const products = ["coffee", "water", "beer", "sweets", "peanuts"];
    const towns = ["Sofia", "Plovdiv", "Varna"];
   
    
    if (!towns.includes(town)){
        throw new Error("Wrong town!");
    }

    if (!products.includes(product)){
        throw new Error("Invalid product!");
    } 

    if (quantity < 0){
        throw new Error("Invalid quantity!");
    }
    
    
    if (town == "Sofia"){
        if (product == "coffee"){
            totalSum = 0.5 * quantity;
        } else if(product == "water"){
            totalSum = 0.8 * quantity;
        } else if (product == "beer"){
            totalSum = 1.2 * quantity;
        } else if (product == "sweets"){
            totalSum = 1.45 * quantity;
        } else if (product == "peanuts"){
            totalSum = 1.60 * quantity;
        } 
    } else if (town == "Plovdiv"){
        if (product == "coffee"){
            totalSum = 0.4 * quantity;
        } else if(product == "water"){
            totalSum = 0.7 * quantity;
        } else if (product == "beer"){
            totalSum = 1.15 * quantity;
        } else if (product == "sweets"){
            totalSum = 1.30 * quantity;
        } else if (product == "peanuts"){
            totalSum = 1.50 * quantity;
        } 
    } else if (town == "Varna"){
        if (product == "coffee"){
            totalSum = 0.45 * quantity;
        } else if(product == "water"){
            totalSum = 0.7 * quantity;
        } else if (product == "beer"){
            totalSum = 1.10 * quantity;
        } else if (product == "sweets"){
            totalSum = 1.35 * quantity;
        } else if (product == "peanuts"){
            totalSum = 1.55 * quantity;
        } 
    } 

    console.log(totalSum);
}

smallShop(["beer","Sofia", "2"]);
smallShop(["beer","Plovdiv", "3"]);
smallShop(["beer","Varna", "3"]);
smallShop(["beer","Varna", "3"]);
smallShop(["beer","Varna", "-3"]);
smallShop(["apple juice","Varna", "3"]);
smallShop(["apple juice","Burgas", "-3"]);