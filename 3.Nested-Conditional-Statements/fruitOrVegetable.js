function fruitOrVegetable(input){
    let itemToCheck = input[0].toLowerCase();
    let fruits = ["banana", "apple", "kiwi", "cherry", "lemon", "grapes", "pineapple", "peach", "apricot", "coconut", "watermelon"];
    let vegetables = ["tomato", "cucumber", "pepper", "carrot", "pinach", "onion", "eggplant", "potato", "lettuce", "cauliflower"];

    if (fruits.includes(itemToCheck)){
        console.log(`${itemToCheck.charAt(0).toUpperCase() + itemToCheck.slice(1)} is a  fruit.`);
    } else if (vegetables.includes(itemToCheck)){
        console.log(`${itemToCheck.charAt(0).toUpperCase() + itemToCheck.slice(1)} is a vegetable.`);
    } else{
        console.log("Unknown item");
    }
}

fruitOrVegetable(["Banana"]);
fruitOrVegetable(["tomato"]);
fruitOrVegetable(["shoes"]);