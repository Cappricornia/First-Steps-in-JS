function parkingLot(arr) {
    let parkingLot = new Map();

    for (let str of arr) {
        let [direction, carNumber] = str.split(',');

        if (direction === 'IN') {
            parkingLot.set(carNumber, true);
        } else {
            parkingLot.delete(carNumber);
        }
    }

    if (parkingLot.size === 0) {
        console.log('Parking Lot is Empty');
    } else {
        let sortedCarNumbers = Array.from(parkingLot.keys()).sort();
        for (const carNumber of sortedCarNumbers) {
            console.log(carNumber);
        }
    }
}


const arr = ['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']

parkingLot(arr);