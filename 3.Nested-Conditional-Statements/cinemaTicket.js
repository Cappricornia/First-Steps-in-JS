function cinemaTicket(input){
    let day = input[0];

    let price1 = ["Monday", "Tuesday", "Friday"];
    let price2 = ["Wednesday", "Thursday"];
    let price3 = ["Saturday", "Sunday"];

    let price = 0.0;

    if (price1.includes(day)){
        price = 12;
    } else if (price2.includes(day)){
        price = 14;
    } else if (price3.includes(day)){
        price = 16;
    } else{
        console.log("Please enter a valid day of the week.")
        return;
    }
    console.log(`The ticket price is: £${price}.`);
}

cinemaTicket(["Monday"]);
cinemaTicket(["February"]);