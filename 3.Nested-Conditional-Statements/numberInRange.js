function numberInRange(input){
    let number = Number(input[0]);

    if (number >= -100  && number <= 100  && number != 0){
        console.log("Yes, the number is in the range from -100 to 100 inclusive and different from 0.");
    } else{
        console.log("No! The number must either be greater than -100 or greater than 100, excluding 0.");
    }
}

numberInRange(["0"])
numberInRange(["100"])
numberInRange(["-101"])
numberInRange(["99"])