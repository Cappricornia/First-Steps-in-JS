function vacationBooksList(input){
    let numberPages = parseInt(input[0]);
    let pagesPerHour = parseFloat(input[1]);
    let days = parseInt(input[2]);
    let hoursToRead = numberPages / pagesPerHour;
    let hoursPerDay = hoursToRead / days;
    console.log(hoursPerDay);
}

vacationBooksList(["212 ", "20", "2"]);
