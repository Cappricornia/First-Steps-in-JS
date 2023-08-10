function radiansToDegrees(input){
    let radians = input[0];
    let convertToDegrees = parseFloat(radians * 180 / Math.PI);
    console.log(convertToDegrees);
}
radiansToDegrees(["3.1416"]);