function onTimeForTheExam(input){
    let examHour = Number(input[0]);
    let examMinutes = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinutes = Number(input[3]);
    
    let timeOfExam = examHour * 60 + examMinutes;
    let arrivalTime = arrivalHour * 60 + arrivalMinutes;
    if (arrivalTime >  timeOfExam){
        console.log("Late")
    } else if (timeOfExam - 30 <= arrivalTime && arrivalTime <= timeOfExam){
        console.log("On time")
    } else {
        console.log("Early")
    }

    difference = Math.abs(timeOfExam - arrivalTime);

    if (timeOfExam - 60 < arrivalTime && arrivalTime < timeOfExam){
        console.log(`${difference} minutes before the start`)
    } else if (arrivalTime <= timeOfExam - 60){
        let hours = Math.floor(difference / 60);
        let minutes = difference % 60;
        const formattedTime = hours + ":" + minutes.toString().padStart(2, "0") + " hours before the start";
        console.log(formattedTime)
    } else if (timeOfExam < arrivalTime && arrivalTime < timeOfExam + 60){
        console.log(`${difference} minutes after the start`)
    } else if (arrivalTime >- timeOfExam + 60){
        let hours = Math.floor(difference / 60);
        let minutes = difference % 60;
        const formattedTime = hours + ":" + minutes.toString().padStart(2, "0") + " hours after the start";
        console.log(formattedTime)
    }
 }

 onTimeForTheExam(["9","30","9","50"]);
 onTimeForTheExam(["9","00","8","30"]);
 onTimeForTheExam(["9","00","10","30"]);
 onTimeForTheExam(["14","00","13","55"]);
 onTimeForTheExam(["11","30","10","55"]);
 

 
 
 
 
 

 


 