function matchDates(input) {
    const regex = /\b(?<day>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;

    let match;
    while ((match = regex.exec(input)) !== null) {
        let { day, month, year } = match.groups;
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }
}

const input = ['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016'];
matchDates(input);
