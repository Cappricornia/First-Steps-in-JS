function addressBook(input){
    let addressBook = {};

    for(let i=0; i< input.length; i++){
        let [name, address] = input[i].split(':');
        addressBook[name] = address;
    }

    const sortedAddressBook = Object.keys(addressBook).sort();

    sortedAddressBook.forEach(key => {
        console.log(`${key} -> ${addressBook[key]}`)
    });
}


const input = ['Tim:Doe Crossing','Bill:Nelson Place','Peter:Carlyle Ave','Bill:Ornery Rd'];
addressBook(input);