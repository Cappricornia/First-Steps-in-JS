function journey(input){
    let budget = Number(input[0]);
    let season = input[1];

    let totalPrice = 0.0;
    let destination;
    let accommodation;

    if (budget > 0 && budget <= 100){
        destination = "Bulgaria";
        if (season == "summer"){
            accommodation = "Camp";
            totalPrice += budget * 0.3;
        } else if (season == "winter"){
            accommodation = "Hotel";
            totalPrice += budget * 0.7;
        }

    } else if (budget > 100 && budget <= 1000){
        destination = "Balkans";
        if (season == "summer"){
            accommodation = "Camp";
            totalPrice += budget * 0.4;
        } else if (season == "winter"){
            accommodation = "Hotel";
            totalPrice += budget * 0.8;
        }

    } else {
        destination = "Europe";
        accommodation = "Hotel";
        totalPrice += budget * 0.9;
    }

    console.log(`Somewhere in ${destination}\n${accommodation} - ${totalPrice.toFixed(2)}`)
}
journey(["50", "summer"]);
journey(["75", "winter"]);
journey(["312", "summer"]);
journey(["678.53", "winter"]);
journey(["1500", "summer"]);
