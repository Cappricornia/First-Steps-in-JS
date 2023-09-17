function cinemaTickets(input){
    index = 0;
    let command = input[index];
    let studentCounter = 0;
    let standardCounter = 0;
    let kidCounter = 0;
    let totalTicketsCount = 0;


    while (command !== "Finish"){
        let film = command;
        index ++;
        let freeSeats = parseInt(input[index]);
        index ++;

        let ticketType = input[index];
        let ticketCounter = 0;

        while (ticketType !== "End"){

            ticketCounter++;

            switch (ticketType) {
                case "standard": standardCounter++; break;
                case "student": studentCounter++; break;
                case "kid": kidCounter++; break;

            }

            if (ticketCounter >= freeSeats){
                break;
            }

            ticketType = input[++index];
            
        }
        totalTicketsCount += ticketCounter;
        let resultPerFilm = ticketCounter / freeSeats * 100;

        console.log(`${film} - ${resultPerFilm.toFixed(2)}% full.`);
        command = input[++index];
   

 }
 console.log(`Total tickets: ${totalTicketsCount}`);
 console.log(`${(studentCounter / totalTicketsCount * 100).toFixed(2)}% student tickets.`);
 console.log(`${(standardCounter / totalTicketsCount * 100).toFixed(2)}% standard tickets.`);
 console.log(`${(kidCounter / totalTicketsCount * 100).toFixed(2)}% kids tickets.`);

}


cinemaTickets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"]);


