function race(input) {
    const participants = input.shift().split(', ');
    const racers = {};

    for (let participant of participants) {
        racers[participant] = 0;
    }

    for (let info of input) {
        if (info === 'end of race') break;

        let name = '';
        let distance = 0;

        for (let char of info) {
            if (/[A-Za-z]/.test(char)) {
                name += char;
            } else if (/\d/.test(char)) {
                distance += parseInt(char);
            }
        }

        if (racers.hasOwnProperty(name)) {
            racers[name] += distance;
        }
    }

    const sortedRacers = Object.entries(racers).sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${sortedRacers[0][0]}`);
    console.log(`2nd place: ${sortedRacers[1][0]}`);
    console.log(`3rd place: ${sortedRacers[2][0]}`);
}


const input = [
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
];

race(input);
