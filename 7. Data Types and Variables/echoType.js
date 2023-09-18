function echoType(input){
    let data = input;

    if (typeof input === 'number'){
        console.log(`number\n${data}`);
    } else if (typeof input === 'string'){
        console.log(`string\n${data}`);
    } else{
        console.log('object\nParameter is not suitable for printing');
    }
}



echoType('Hello, JavaScript!');
echoType(18);
echoType(null);
