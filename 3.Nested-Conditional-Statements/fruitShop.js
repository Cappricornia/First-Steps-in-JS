function fruitShop(input){
    let fruit = input[0];
    let day = input[1];
    let quantity = input[2];

    let fruits = ["banana", "apple", "kiwi", "grapes", "pineapple", "orange", "grapefruit"];
    let weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

    let price = 0.0;

    if (fruits.includes(fruit) && weekDays.includes(day)){
        if (fruit == "banana"){
            price = quantity * 2.5;
        } else if (fruit == "apple"){
            price = quantity * 1.2;
        } else if (fruit == "kiwi"){
            price = quantity * 2.7;
        } else if (fruit == "orange"){
            price = quantity * 0.85;
        } else if (fruit == "grapefruit"){
            price = quantity * 1.45;
        } else if (fruit == "pineapple"){
            price = quantity * 5.5;
        } else {
            price = quantity * 3.85;
        } 
    } else if (fruits.includes(fruit) && day == "Saturday" || day == "Sunday"){
        if (fruit == "banana"){
            price = quantity * 2.7;
        } else if (fruit == "apple"){
            price = quantity * 1.25;
        } else if (fruit == "kiwi"){
            price = quantity * 3.0;
        } else if (fruit == "orange"){
            price = quantity * 0.9;
        } else if (fruit == "grapefruit"){
            price = quantity * 1.6;
        } else if (fruit == "pineapple"){
            price = quantity * 5.6;
        } else {
            price = quantity * 4.2;
        } 
    } else {
        if (!fruits.includes(fruit) && !weekDays.includes(day) || day == "Saturday" || day == "Sunday"){
            console.log("You entered an invalid fruit and day of the week");
            return;
        } else if (!weekDays.includes(day) || day == "Saturday" || day == "Sunday"){
            console.log("You entered an invalid day of the week");
            return;
        } else if (!fruits.includes(fruit)){
            console.log("You entered an invalid fruit");
            return;
        }        
    }
    console.log(price.toFixed(2));
}

fruitShop(["apple","Tuesday","2"]);
fruitShop(["orange","Sunday","3"]);
fruitShop(["kiwi","Monday","2.5"]);
fruitShop(["tomato","Monday","0.5"]);
fruitShop(["apple","January","0.5"]);
fruitShop(["carrot","January","0.5"]);



