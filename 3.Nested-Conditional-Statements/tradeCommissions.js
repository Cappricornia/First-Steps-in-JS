function  tradeCommissions(input){
    let town = input[0];
    let sales = Number(input[1]);
    let towns = ["Sofia", "Varna", "Plovdiv"];
    let commission = 0.0;


    if (sales < 0 && !towns.includes(town)){
        console.log("Invalid town and sales cannot be a negative number!");
        return;
    } else if (sales < 0){
        console.log("Sales cannot be a negative number!");
        return;
    }

    if (town == "Sofia"){
        if (sales >= 0 && sales <= 500){
            commission = sales * 0.05;
        } else if (sales > 500 && sales <= 1000){
            commission = sales * 0.07;
        } else if (sales > 1000 && sales <= 10000){
            commission = sales * 0.08;
        } else if (sales > 10000) {
            commission = sales * 0.12;
        }
    } else if (town == "Varna"){
        if (sales >= 0 && sales <= 500){
            commission = sales * 0.045;
        } else if (sales > 500 && sales <= 1000){
            commission = sales * 0.075;
        } else if (sales > 1000 && sales <= 10000){
            commission = sales * 0.1;
        }  else if (sales > 10000) {
            commission = sales * 0.13;
        }

    } else if (town == "Plovdiv"){
        if (sales >= 0 && sales <= 500){
            commission = sales * 0.055;
        } else if (sales > 500 && sales <= 1000){
            commission = sales * 0.08;
        } else if (sales > 1000 && sales <= 10000){
            commission = sales * 0.12;
        }  else if (sales > 10000) {
            commission = sales * 0.145;
        }
    } 

    console.log(commission.toFixed(2))
} 

tradeCommissions(["Sofia","1500"]);
tradeCommissions(["Sofia","-1500"]);
tradeCommissions(["Stara Zagora", "2000"]);
tradeCommissions(["Stara Zagora", "-2000"]);
tradeCommissions(["Varna", "3874.50"]);
tradeCommissions(["Plovdiv","499.99"])
