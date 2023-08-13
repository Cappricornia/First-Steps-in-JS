function passwordGuess(input){
    let password = input[0];

    if (password === "dkdkdk£!jsjsP@ssw0rd"){
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}

passwordGuess(["dkdkdk£!jsjsP@ssw0rd"]);
passwordGuess(["wrongPassword"]);