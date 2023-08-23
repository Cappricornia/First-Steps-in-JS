function workingHours(input){
    let hour = Number(input[0]);
    let day = input[1];
    let workingDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    if (hour < 0 || hour > 23){
        throw new Error ("Invalid hour! Please enter an hour between 0 and 23!")
    }
    if (workingDays.includes(day)){
        if (hour >= 10 && hour <= 18){
            console.log("The office is open. We would be happy to assist you.");
        } else{
            console.log("The office is closed now. We work from Monday to Saturday inclusive with working hours from 10 to 18.");
        }  
    } else if (day == "Sunday"){
        console.log("The office is closed now. We work from Monday to Saturday inclusive with working hours from 10 to 18.");
    } else{
        console.log("Please enter a valid day of the week!");
    }
}

workingHours(["11", "Monday"]);
workingHours(["11", "Sunday"]);
workingHours(["19", "Friday"]);
workingHours(["19", "January"]);
workingHours(["24", "Tuesday"]);