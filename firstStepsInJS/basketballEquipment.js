function basketballEquipment(input){
    let annualFee = parseInt(input[0]);
    let trainers = annualFee - (annualFee * 0.4);
    let clothes = trainers - (trainers * 0.2);
    let ball = clothes / 4;
    let accessories = ball / 5;
    let totalCost = annualFee + trainers + clothes + ball + accessories;
    console.log(totalCost);
} 

basketballEquipment(["235"]);
