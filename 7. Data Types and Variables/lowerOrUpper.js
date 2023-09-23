function lowerOrUpper(ch) {

    let char = ch;

    if (/[A-Z]/.test(char)) {
        console.log(`${char} is upper case`);
    } else if (/[a-z]/.test(char)) {
        console.log(`${char} is lower case`);
    } else {
        console.log(`${char} is not a letter`);
    }
}

lowerOrUpper("D");
lowerOrUpper("i");
lowerOrUpper("*");