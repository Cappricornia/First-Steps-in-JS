function vacation(input){
    index = 0;
    let moneyNeeded = Number(input[index]);
    index ++;
    let savedMoney = Number(input[index]);
    index ++;
    let countDays = 0;
    let countSpend = 0;
    let isMoneyEnough = false;
    
    while (true){
        let action = input[index];
        index ++;
        let amount = Number(input[index]);
        index ++;
        countDays += 1;
        
        if (action === "save"){
            savedMoney += amount;
            countSpend = 0;
        } else if (action === "spend"){
            savedMoney -= amount;
            countSpend += 1;
           
            if (savedMoney < 0){
                savedMoney = 0;
            } 

            if (countSpend === 5){
                isMoneyEnough = false;
                break;
            }
        }

        if (savedMoney >= moneyNeeded){
            isMoneyEnough = true;
            break;
        }
    }

    if (isMoneyEnough){
        console.log(`You saved the money for ${countDays} days.`)
        
    } else{
        console.log("You can't save the money.");
        console.log(countDays);
    }
}


vacation(["2000","1000","spend","1200","save","2000"]);
vacation(["110","60","spend","10","spend","10","spend","10","spend","10","spend","10"]);
vacation(["250","150","spend","50","spend","50","save","100","save","100"]);
vacation(["110","60","save","2","spend", "10", "spend","10","spend","10","spend","10","spend","10"]);

