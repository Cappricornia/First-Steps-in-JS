function meetings(input){
    let meetings = {};

    for(let i=0; i< input.length; i++){
        let [dayOfWeek, name] = input[i].split(' ');

        if(dayOfWeek in meetings){
            console.log(`Conflict on ${dayOfWeek}!`);
        } else{
            meetings[dayOfWeek] = name;
            console.log(`Scheduled for ${dayOfWeek}`);
        }
    }

    for (const key in meetings ){
        console.log(`${key} -> ${meetings[key]}`)
    }
}


const input = ['Monday Peter','Wednesday Bill','Monday Tim','Friday Tim'];

meetings(input);