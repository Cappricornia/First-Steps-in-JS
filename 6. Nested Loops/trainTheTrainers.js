function trainTheTrainers(input){
    index = 1;
    let n = parseInt(input[0]);
    let countGrades = 0;
    let finalGrade = 0;

    
    while (true){

    let presentation = input[index];
    
    let avgGrade = 0;

    if (presentation === "Finish"){
        break;
    }

    for (let i= 0; i< n; i++){
        index ++;
        let grade = Number(input[index]);
        
        avgGrade += grade;
        countGrades += 1;
        finalGrade += grade;

    }
    index ++;

    avgGrade /= n;
    console.log(`${presentation} - ${avgGrade.toFixed(2)}.`)
  }
  finalGrade /= countGrades;
  console.log(`Student's final assessment is ${finalGrade.toFixed(2)}.`)
}


trainTheTrainers(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])


