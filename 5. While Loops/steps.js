function steps(input){
    const goal = 10000;
    index = 0;
    let totalSteps = 0;
    let isGoalReached = false;
    
    while (true){
        let steps = input[index];
        index ++;

        if (steps === "Going home"){
           
            while (index < input.length) {
                let nextSteps = input[index];
                let nextStepsNumber = parseInt(nextSteps);
                totalSteps += nextStepsNumber;
                break;
            }

            if (totalSteps >= goal){
                isGoalReached = true;
                break;
            } else{
                isGoalReached = false;
                break;
            }
            
        }

        if (totalSteps >= goal){
            isGoalReached = true;
            break;
        };

        totalSteps += parseInt(steps);
    }

    if (isGoalReached){
        console.log(`Goal reached! Good job!\n${Math.abs(totalSteps - goal)} steps over the goal!`);
    } else {
        console.log(`${Math.abs(goal - totalSteps)} more steps to reach goal.`);
    }
}

steps(["1000","1500","2000","6500"]);
steps(["125","250","4000","30","2678","4682"]);
steps(["1500","3000","250","1548","2000","Going home","2000"]);
steps(["1500","300","2500","3000","Going home","200"])




