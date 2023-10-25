function furnitureCost(input) {
    let furniture = [];
    let totalCost = 0;

    for (const line of input) {
        if (line === 'Purchase') {
            break;
        }

        const pattern = />>[A-Z][A-Za-z]+<<(\d+(\.\d+)?)!(\d+)/;
        let match = line.match(pattern);

        if (match) {
            let price = parseFloat(match[1]);
            let quantity = parseInt(match[3]);
            totalCost += price * quantity;

            const name = line.match(/>>[A-Z][A-Za-z]+<</)[0].replace(/>>|<</g, '');
            furniture.push(name);
        }
    }

    console.log('Bought furniture:');
    furniture.forEach(name => {
        console.log(name);
    });

    console.log(`Total money spend: ${totalCost.toFixed(2)}`);
}

const input = [
    '>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase',
];

furnitureCost(input);
