function cinema(input){
    let typeScreen = input[0];
    let rows = Number(input[1]);
    let cols = Number(input[2]);
    
    if (rows < 0 || cols < 0){
        throw new Error("Invalid rows or cols number")
    }

    let totalPrice = rows * cols;

    if (typeScreen == "Premiere"){
        totalPrice *= 12;
    } else if (typeScreen == "Normal"){
        totalPrice *= 7.5;
    } else if (typeScreen == "Discount"){
        totalPrice *= 5;
    } else{
        console.log("Invalid screen")
        return;
    }

    console.log(`${totalPrice.toFixed(2)} leva`)
}

cinema(["Premiere","10","12"]);
cinema(["Normal","21","13"]);
cinema(["Discount","12","30"]);
cinema(["Invalid Screen","12","30"]);
cinema(["Discount","-12","30"]);
cinema(["Discount","12","-30"]);



