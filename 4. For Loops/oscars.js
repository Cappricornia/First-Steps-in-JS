function oscars(input) {
    let actorName = input[0];
    let initialPoints = Number(input[1]);
    let jury = Number(input[2]);
    let totalPoints = 0.0; 
    let isNominee = false;
  
    for (let i = 3; i < input.length; i += 2) {
      let actor = input[i];
      let points = parseFloat(input[i + 1]);
      let currentPoints = 0.0;
     
      if (points === 0){
        // if points 0 skip the points
        currentPoints = initialPoints + (actor.length / 2);
      } else{
        currentPoints = initialPoints + (actor.length * points) / 2;
      }

      totalPoints = currentPoints; 
      
  
      if (currentPoints >= 1250.5) {
        isNominee = true;
        break;
      }
      initialPoints = currentPoints;
     
    }
    
    if (isNominee) {
      console.log(`Congratulations! ${actorName} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
    } else {
        let diff = 1250.5 - totalPoints;
        console.log(`Sorry, ${actorName}, you need ${diff.toFixed(1)} more!`);
    }
  }
  
  

oscars(["Gwyneth Paltrow","0","4","Johnny Depp","0","Will Smith","0","Jet Lee","0","Matthew Mcconaughey","0"]);

oscars(["Sandra Bullock","340","5", "Robert De Niro","50","Julia Roberts","40.5","Daniel Day-Lewis","39.4","Nicolas Cage","29.9","Sylvester Stallone","33"]);

oscars(["Jason Statham","205","4","Johnny Depp","45","Will Smith","29","Jet Lee","10","Matthew Mcconaughey","39"]);






