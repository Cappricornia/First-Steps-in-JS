function graduation(input){
    let studentName = input[0];
    let countGrade = 0;
    let index = 1;

    let notPass = 0;
    let totalGrade = 0.0;

    while (true){
        let data = input[index];
        let currentGrade = Number(data);

        if (currentGrade >= 4 && currentGrade <= 6){
            countGrade += 1;
            totalGrade += currentGrade;

            if (countGrade === 12){
                break;
            }

        } else if(currentGrade === 2 || currentGrade == 3){
            countGrade += 1;
            notPass += 1;
            totalGrade += currentGrade;
            
            if (notPass === 2){
            console.log(`${studentName} has been excluded at ${countGrade-1} grade`);
            break; 
            }   
        }

        index ++;
    }

    if (countGrade === 12){
        let avgGrade = totalGrade/countGrade;
        console.log(`${studentName} graduated. Average grade: ${avgGrade.toFixed(2)}`);
    }
}


graduation(["Maria Ramirez", "5","6","5","6","5","6","6","2","3"]);
graduation(["Alexander Gordon", "5","5.5","6","5.43","5.5","6","5.55","5","6","6","5.43","5"]);

