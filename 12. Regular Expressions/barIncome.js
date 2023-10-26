function barIncome(input) {
    let regex = /%(.+?)%<(.+?)>\|(\d+)\|([\d.]+)\$/;
    let totalPrice = 0;
    let totalIncome = 0;
    let invalidCount = 0;

    for (let line of input) {
        let match = line.match(regex);

        if (match) {
            const customerName = match[1];
            const product = match[2];
            const count = parseInt(match[3]);
            const price = parseFloat(match[4]);

            totalPrice = count * price;
            totalIncome += totalPrice;
            console.log(`${customerName}: ${product} - ${totalPrice.toFixed(2)}`)
        } else {
            if (line.includes("InvalidName")) {
                invalidCount++;
            } else {
                invalidCount++;
            }
        }
    }

    console.log(`Total income: ${totalIncome.toFixed(2)}`);
    console.log(`Invalid data count: ${invalidCount}`);
}

const input = ['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid Name%<Valid Product>|10|20$',
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'];

barIncome(input);
