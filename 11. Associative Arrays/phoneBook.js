function phoneBook(input){
    const phoneBook = {};

    for(let i=0; i< input.length; i++){
        let [name, phoneNumber] = input[i].split(' ');
        phoneBook[name] = phoneNumber
    }

    for(const key in phoneBook){
        console.log(`${key} -> ${phoneBook[key]}`)
    }
}

const input = ['Tim 0834212554','Peter 0877547887','Bill 0896543112','Tim 0876566344'];
phoneBook(input);
