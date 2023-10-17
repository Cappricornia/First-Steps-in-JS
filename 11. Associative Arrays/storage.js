function storage(input){
    let storageMap = new Map();

    for(let i=0; i< input.length; i++){
        let [item, quantity] = input[i].split(' ');
        quantity = parseInt(quantity);

        if(storageMap.has(item)){
            let currentQuantity = storageMap.get(item);
            storageMap.set(item, currentQuantity + quantity);
        } else{
            storageMap.set(item, quantity);
        } 
    }

    for (const [item, quantity] of storageMap) {
        console.log(`${item} -> ${quantity}`);
      }
}

const input = ['tomatoes 10','coffee 5','olives 100','coffee 40'];
storage(input);