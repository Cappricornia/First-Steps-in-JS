function lunchBreak(input){
    let nameTVSeries = input[0];
    let durationSeries = Number(input[1]);
    let durationBreak = Number(input[2]);

    let timeForLucnch = durationBreak * 1/8;
    let timeForBreak = durationBreak * 1/4;
    let timeLeft = durationBreak - timeForLucnch - timeForBreak;

    if (timeLeft >= durationSeries){
        console.log(`You have enough time to watch ${nameTVSeries} and left with ${Math.ceil(timeLeft - durationSeries)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${nameTVSeries}, you need ${Math.ceil(durationSeries - timeLeft)} more minutes.`)
    }
}

lunchBreak(["Game of Thrones","60","96"]);
lunchBreak(["Teen Wolf","48","60"]);

