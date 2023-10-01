function charactersInRange(charOne, charTwo){
    let f = charOne.charCodeAt(0);
    let l = charTwo.charCodeAt(0);
    let result = " ";

    if (l < f){
        f = charTwo.charCodeAt(0);
        l = charOne.charCodeAt(0);
    };

    for (let i=f+1; i<l; i++){
        let char = String.fromCharCode(i);
        result += char + " ";
    }    
    console.log(result);
}

charactersInRange('C', '#');