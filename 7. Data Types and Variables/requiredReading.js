function requiredReading(currPages, pages, days){
    let numberCurrentPages = currPages;
    let pagesPerHour = pages;
    let daysToRead = days;
    let hoursToReadPerDay = (numberCurrentPages/ pagesPerHour) / daysToRead;

    console.log(hoursToReadPerDay)
}

requiredReading(432, 15, 4);