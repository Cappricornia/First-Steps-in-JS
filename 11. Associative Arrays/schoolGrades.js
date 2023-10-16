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
     
    /*Array.from() to convert the iterator of keys into an array. This is because the sort() method works on arrays, so we need to convert the iterator into an array to use sort().
    gradesMap.keys(): This uses the keys() method of the Map object. The keys() method returns an iterator 
    object that contains the keys (in this case, the student names) of the Map. 
     By calling sort() on the array of student names, we sort the names in lexicographical order (alphabetical order). */
    let sortedStudents = Array.from(gradesMap.keys()).sort();


    // It iterates over the elements (in this case, student names) of the sortedStudents array one by one.
    for (const student of sortedStudents) {
        //  to retrieve the grades associated with that student from the gradesMap
        const grades = gradesMap.get(student);
        //grades.reduce((sum, grade) => sum + grade, 0) uses the reduce() method to sum up all the grades for the current student. 
        //The reduce() method accumulates a single result by iterating through an array.
        //The arrow function (sum, grade) => sum + grade is the function applied to each element during the iteration. sum is the
        // accumulated sum (initially set to 0 - Providing an initial value of 0), and grade is each grade in the array.
        const averageGrade = (grades.reduce((sum, grade) => sum + grade, 0) / grades.length).toFixed(2);
        console.log(`${student}: ${averageGrade}`);
    }
}



const input = [ 'Lilly 4 6 6 5','Tim 5 6','Tammy 2 4 3', 'Tim 6 6'];
schoolGrades(input);