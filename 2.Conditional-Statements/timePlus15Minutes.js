function timePlus15Minutes(input){
    let hour = Number(input[0]);
    let minutes = Number(input[1]);
    let hoursToMinutes = (hour * 60) + minutes + 15

    let newHour = Math.floor(hoursToMinutes / 60) % 24;
    let newMinutes = hoursToMinutes % 60;
    
    
    if (newMinutes < 10 ){
        console.log(`${newHour}:0${newMinutes}`);
    } else{
        console.log(`${newHour}:${newMinutes}`);
    }
}


timePlus15Minutes(["0", "01"]);
timePlus15Minutes(["23", "59"]);
timePlus15Minutes(["12", "49"]);