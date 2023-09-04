function cleverLily(input){
    let age = Number(input[0]);
    let priceWashingMachine = Number(input[1]);
    let pricePerToy = Number(input[2]);

    let totalToysCount = 0;
    let totalMoneySaved = 0;
    let addedMoney = 0;
    

    for (let i=1; i<=age; i++){
        
        if (i % 2 === 0){
            addedMoney += 10;
            totalMoneySaved += addedMoney - 1;
        } else{
            totalToysCount += 1
        }
    }

    totalMoneySaved += totalToysCount * pricePerToy;
   
    if (totalMoneySaved >= priceWashingMachine){
        console.log(`Yes! Money left: £${(totalMoneySaved - priceWashingMachine).toFixed(2)}`);
    } else{
        console.log(`No! Money needed: £${(priceWashingMachine-totalMoneySaved).toFixed(2)}`);
    }
}


cleverLily(["10","170.00","6"]);
cleverLily(["21","1570.98","3"]);

