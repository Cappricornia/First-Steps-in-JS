function palindromeIntegers(arr){
    for(let i=0; i< arr.length; i++){
        let reversedNumber = String(arr[i]).split("").reverse().join("");
        if(reversedNumber === String(arr[i])){
            console.log(reversedNumber, "is a palindrome number ===> TRUE")
        } else{
            console.log(reversedNumber, "is not a palindrome number ===> FALSE")
        }  
    }
}

palindromeIntegers([123,323,421,121]);