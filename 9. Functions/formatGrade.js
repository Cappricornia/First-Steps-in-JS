function formatGrade(grade) {
    let description;
    let isFailed = false;

    if (grade < 3.00) {
        description = "Fail";
        isFailed = true;
    } else if (grade < 3.50) {
        description = "Poor";
    } else if (grade < 4.50) {
        description = "Good";
    } else if (grade < 5.50) {
        description = "Very good";
    } else {
        description = "Excellent";
    }

    if (isFailed){
        grade = 2;
        console.log(`${description} (${grade})`);
    } else{
        console.log(`${description} (${grade.toFixed(2)})`);
    }
}


formatGrade(2.80);   
formatGrade(3.20);   
formatGrade(4.00);   
formatGrade(5.70); 

