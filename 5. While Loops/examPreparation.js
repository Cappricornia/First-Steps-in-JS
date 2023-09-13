function examPreparation(input){
    index = 0;
    let badGrades = Number(input[index]);
    index ++;
    let totalGrade = 0.0;
    let lastTask;
    let countBadGrades = 0;
    let taskCount = 0;
    let isFinished = false;

    while (true){

        let task = input[index];
        index ++;
        let grade = Number(input[index]);
        index ++;
        
        if (grade <= 4){
            countBadGrades += 1;
           
            if (countBadGrades === badGrades){
                isFinished = false;
                console.log(`You need a break, ${countBadGrades} poor grades.`)
                break;
            }   
        } 

        if (task === "Enough"){
            isFinished = true;
            break;          
        }

        lastTask = task;
        taskCount += 1;
        totalGrade += grade;
        
    }

    if (isFinished){
        let avgGrade = totalGrade / taskCount;
        console.log(`Average score: ${avgGrade.toFixed(2)}\nNumber of problems: ${taskCount}\nLast problem: ${lastTask}`)
    }
      
}

examPreparation(["3","Money","6","Story","4","Spring Time","5","Bus","6","Enough"]);
examPreparation(["2","Income","3","Game Info","6","Best Player","4"]);

