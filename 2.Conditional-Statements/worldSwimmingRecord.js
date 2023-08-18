function worldSwimmingRecord(input){
    let recordInSecs = Number(input[0]);
    let distanceToSwimInMetres = Number(input[1]);
    let timeInSecsToSwim1Meter = Number(input[2]);
    let additionalTime = Math.floor(distanceToSwimInMetres / 15) * 12.5;
    let totalTime = distanceToSwimInMetres * timeInSecsToSwim1Meter + additionalTime;
  
    if (totalTime < recordInSecs){
        console.log(`Yes, he succeeded! The new world record is ${(totalTime).toFixed(2)} seconds.`)
    } else{
        console.log(`No, he failed! He was ${(totalTime - recordInSecs).toFixed(2)} seconds slower.`)
    }
}

worldSwimmingRecord(["10464","1500","20"]);
worldSwimmingRecord(["55555.67","3017","5.03"]);

