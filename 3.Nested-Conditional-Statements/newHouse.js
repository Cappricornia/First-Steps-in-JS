function newHome(input){
    let flower = input[0];
    let numberFlowers = Number(input[1]);
    let budget = Number(input[2]);
    
    let totalPrice = 0.0;
  
    if (flower == "Roses"){
        totalPrice = numberFlowers * 5;
    } else if (flower == "Dahlias"){
        totalPrice = numberFlowers * 3.8;
    } else if (flower == "Tulips"){
        totalPrice = numberFlowers * 2.8;
    } else if (flower == "Narcissus"){
        totalPrice = numberFlowers * 3;
    } else if (flower == "Gladiolus"){
        totalPrice = numberFlowers * 2.5;
    }
    
    // discount or increase 
    if (numberFlowers > 80 && flower == "Roses"){
        totalPrice -= totalPrice * 0.1;
    } else if (numberFlowers > 90 && flower == "Dahlias"){
        totalPrice -= totalPrice * 0.15;
    } else if (numberFlowers > 80 && flower == "Tulips"){
        totalPrice -= totalPrice * 0.15;
    } else if (numberFlowers < 120 && flower == "Narcissus"){
        totalPrice += totalPrice * 0.15;
    } else if (numberFlowers < 80 && flower == "Gladiolus"){
        totalPrice += totalPrice * 0.2;
    } 

    if (budget >= totalPrice){
        console.log(`Hey, you have a great garden with ${numberFlowers} ${flower} and ${(budget-totalPrice).toFixed(2)} leva left.`)
    } else{
        console.log(`Not enough money, you need ${(totalPrice - budget).toFixed(2)} leva more.`)
    }
}

newHome(["Roses","55","250"]);
newHome(["Tulips","88","260"]);
newHome(["Narcissus","119","360"]);

