function trekkingMania(input){
  let numberGroup = parseInt(input[0]);

  let musala = 0;
  let montblanc = 0;
  let kilimanjaro = 0;
  let k2 = 0;
  let everest = 0;
  

  let totalPeople = 0;

  for (let i = 1; i < input.length; i++ ) {
      totalPeople += Number(input[i]);
  }
 
  
  for (let i=1; i<= numberGroup; i++){
    let currentGroup = parseInt(input[i]);
    
    if (currentGroup <= 5){
      musala += currentGroup;
    } else if (currentGroup >= 6 && currentGroup <= 12){
      montblanc += currentGroup;
    }else if (currentGroup >= 13 && currentGroup <= 25){
      kilimanjaro += currentGroup;
    } else if (currentGroup >= 26 && currentGroup <= 40){
      k2 += currentGroup;
    } else{
      everest += currentGroup;
    }

  }
  
  console.log(`${(musala / totalPeople * 100).toFixed(2)}%`);
  console.log(`${(montblanc / totalPeople * 100).toFixed(2)}%`);
  console.log(`${(kilimanjaro / totalPeople * 100).toFixed(2)}%`);
  console.log(`${(k2 / totalPeople * 100).toFixed(2)}%`);
  console.log(`${(everest / totalPeople * 100).toFixed(2)}%`);
}


trekkingMania(["10","10","5","1","100","12","26","17","37","40","78"]);
