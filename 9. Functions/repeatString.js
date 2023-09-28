function repeatString(string, n){
    let newString = "";

    for (let i=0; i<n; i++){
        let char = string;
        newString += char;
    }

    console.log(newString)
}


repeatString("abc", 3);
repeatString("someString", 4);