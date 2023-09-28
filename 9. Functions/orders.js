function orders(product, quantity) {
    const prices = {
        coffee: 1.50,
        water: 1.00,
        coke: 1.40,
        snacks: 2.00
    };

    const pricePerItem = prices[product.toLowerCase()];

    if (pricePerItem !== undefined) {
        const totalPrice = pricePerItem * quantity;
        console.log(`Total price for ${quantity} ${product}(s): $${totalPrice.toFixed(2)}`);
    } else {
        console.log('Invalid product. Please choose from coffee, water, coke, or snacks.');
    }
}


orders("coffee", 3); 
orders("coke", 2);   
orders("juice", 1);  