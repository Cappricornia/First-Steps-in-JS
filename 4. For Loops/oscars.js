function oscars(input) {
    let index = 0;
    let actorName = input[index];
    index ++;
    let totalPoints = Number(input[index]);
    index ++;
    let jury = Number(input[index]);
    index ++; 
    
    for (let i = 0; i < jury; i ++) {
      let actor = input[index];
      index ++;
      let points = Number(input[index]);
      index ++;
     
      let currentPoints = actor.length * points / 2;
      totalPoints += currentPoints; 
      
  
      if (totalPoints > 1250.5) {
         console.log(`Congratulations! ${actorName} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
         break;
      }

    }
    
    if (totalPoints <= 1250.5){
      let diff = Math.abs(1250.5 - totalPoints);
      console.log(`Sorry, ${actorName}, you need ${diff.toFixed(1)} more!`);
    }

  }
  
  

oscars(["Gwyneth Paltrow","0","4","Johnny Depp","0","Will Smith","0","Jet Lee","0","Matthew Mcconaughey","0"]);

oscars(["Sandra Bullock","340","5", "Robert De Niro","50","Julia Roberts","40.5","Daniel Day-Lewis","39.4","Nicolas Cage","29.9","Sylvester Stallone","33"]);

oscars(["Jason Statham","205","4","Johnny Depp","45","Will Smith","29","Jet Lee","10","Matthew Mcconaughey","39"]);






