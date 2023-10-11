function storeProvision(currentStock, delivery) {
    const productQuantities = {};
  
    for (let i = 0; i < currentStock.length; i += 2) {
      const productName = currentStock[i];
      const quantity = parseInt(currentStock[i + 1]); 
      productQuantities[productName] = (productQuantities[productName] || 0) + quantity;
    }
  
    for (let i = 0; i < delivery.length; i += 2) {
      const productName = delivery[i];
      const quantity = parseInt(delivery[i + 1]); 
      productQuantities[productName] = (productQuantities[productName] || 0) + quantity;
    }
   
    for (const productName in productQuantities) {
      console.log(`${productName} -> ${productQuantities[productName]}`);
    }
  }
  
  const currentStock = ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'];
  const delivery = ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'];
  
  storeProvision(currentStock, delivery);
  