function tennisRanklist(input){
    let numberOfTournaments = Number(input[0]);
    let initialPoints = Number(input[1]);

    let finalPoints = 0;
    let allGivenPoints = 0;
    let winner = 0;

    for (let i= 2; i <input.length; i++){
        let currentStage = input[i];

        switch(currentStage){
            case "SF":
                allGivenPoints += 720;
                break;
            case "F":
                allGivenPoints += 1200;
                break;
            case "W":
                allGivenPoints += 2000;
                winner +=1;
                break;
        }
    }

finalPoints = allGivenPoints + initialPoints;
let avgGivenPointsPerTournament = allGivenPoints / numberOfTournaments
let prcWinner = (winner / numberOfTournaments) * 100;

console.log(`Final points: ${finalPoints}\nAverage points: ${Math.floor(avgGivenPointsPerTournament)}\n${prcWinner.toFixed(2)}%`)
} 

tennisRanklist(["5","1400","F","SF","W","W","SF"]);
tennisRanklist(["4","750","SF","W","SF","W"]);
tennisRanklist(["7","1200","SF","F","W","F","W","SF","W"]);



