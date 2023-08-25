function skiTrip(input){
    let daysToStay = Number(input[0]);
    let accommodation = input[1];
    let review = input[2];

    let nights = daysToStay - 1;
    let totalSum = 0.0;
    
    if (accommodation == "room for one person"){
        totalSum = nights * 18;
    }

    if (nights < 10){
        if (accommodation == "apartment"){
            totalSum = (nights * 25) - (nights * 25 * 0.3);
        } else if (accommodation == "president apartment"){
            totalSum = (nights * 35) - (nights * 35 * 0.1);
        }
    } else if (nights >= 10 && nights <= 15){
        if (accommodation == "apartment"){
            totalSum = (nights * 25) - (nights * 25 * 0.35);
        } else if (accommodation == "president apartment"){
            totalSum = (nights * 35) - (nights * 35 * 0.15);
        }
    } else if (nights > 15){
        if (accommodation == "apartment"){
            totalSum = (nights * 25) - (nights * 25 * 0.5);
        } else if (accommodation == "president apartment"){
            totalSum = (nights * 35) - (nights * 35 * 0.2);
        }
    }

    if (review == "positive"){
        totalSum += totalSum * 0.25;
    } else if (review == "negative"){
        totalSum -= totalSum * 0.1;
    }

    console.log(totalSum.toFixed(2));
}

skiTrip(["14","apartment","positive"]);
skiTrip(["30","president apartment","negative"]);
skiTrip(["12","room for one person","positive"]);
skiTrip(["2","apartment","positive"]);



