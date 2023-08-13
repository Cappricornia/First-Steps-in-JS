function fishTank(input){
    let fishTankLenght = parseInt(input[0]);
    let fishTankWidth = parseInt(input[1]);
    let fishTankHeight = parseInt(input[2]);
    let percentage = parseFloat(input[3]);
    let area = fishTankLenght * fishTankWidth * fishTankHeight;
    let volume = area / 1000;
    let litresNeeded = volume * (1 - percentage/100);
    console.log(litresNeeded);
}

fishTank(["85","75","47","17"]);