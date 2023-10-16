function schoolGrades(input){
    let gradesMap = new Map();
    for (const line of input) {
        const [student, ...grades] = line.split(' ');
    
        if(gradesMap.has(student)){
            gradesMap.get(student).push(...grades.map(Number));
        } else{
            gradesMap.set(student, grades.map(Number));
        }
    }
  
    let sortedStudents = Array.from(gradesMap.keys()).sort();

    for (const student of sortedStudents) {
        const grades = gradesMap.get(student);
        const averageGrade = (grades.reduce((sum, grade) => sum + grade, 0) / grades.length).toFixed(2);
        console.log(`${student}: ${averageGrade}`);
    }
}


const input = [ 'Lilly 4 6 6 5','Tim 5 6','Tammy 2 4 3', 'Tim 6 6'];
schoolGrades(input);
