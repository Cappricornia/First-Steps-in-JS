function hotelRoom(input){
    let month = input[0];
    let nights = Number(input[1]);

    let apartmentTotalPrice = 0.0;
    let studioTotalPrice = 0.0;

    if (month == "May" || month == "October"){
        apartmentTotalPrice = nights * 65;
        studioTotalPrice = nights * 50;
        if (nights > 7 && nights <= 14){
            studioTotalPrice -= studioTotalPrice * 0.05;
        } else if (nights > 14){
            studioTotalPrice -= studioTotalPrice * 0.3;
        }
    } else if (month == "June" || month == "September"){
        apartmentTotalPrice = nights * 68.7;
        studioTotalPrice = nights * 75.2;
        if (nights > 14){
            studioTotalPrice -= studioTotalPrice * 0.2;
        }
    } else if (month == "July" || month == "August"){
        apartmentTotalPrice = nights * 77;
        studioTotalPrice = nights * 76;
    }

    if (nights > 14){
        apartmentTotalPrice -= apartmentTotalPrice * 0.1;
    }

    console.log(`Apartment: ${apartmentTotalPrice.toFixed(2)} lv.\nStudio: ${studioTotalPrice.toFixed(2)} lv.`);
}

hotelRoom(["May","15"]);
hotelRoom(["June","14"]);
hotelRoom(["August","20"]);


