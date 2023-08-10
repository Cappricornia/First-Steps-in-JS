function repainting(input){
    let protectorSqM = parseInt(input[0]);
    let paintLitres = parseInt(input[1]);
    let paintThinnerLitres = parseInt(input[2]);
    let hoursWork = parseInt(input[3]);
    let extraPaint = paintLitres * 0.1;
    let costMaterials = (protectorSqM + 2) * 1.5 + (paintLitres + extraPaint) * 14.5 + (paintThinnerLitres * 5) + 0.4;
    let costPaintersPerHour = costMaterials * 0.3;
    let totalCost = costMaterials + (costPaintersPerHour * hoursWork);
    console.log(totalCost);
}

repainting(["10","11","4","8"]);