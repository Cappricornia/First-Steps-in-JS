function projectCreation(input){
    let name = input[0];
    let projectsCount = input[1];
    let totalTime = parseInt(projectsCount * 3);
    let result = `The architect ${name} will need ${totalTime} hours to complete ${projectsCount} project/s.`;
    console.log(result);
}

projectCreation(["Antoni Gaudí","9"]);