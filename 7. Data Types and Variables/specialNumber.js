function specialNumber(num){
    let number = num;
    let trueOrFalse = "";

    for (let i = 1; i <= number; i++){
        let currDigit = i;
        let sum = 0;

        if (currDigit < 10){
            sum += currDigit;
            if (sum === 5 || sum === 7 || sum === 11){
                trueOrFalse = "True";
            } else{
                trueOrFalse = "False";
            }

        } else{
            currNumTostr = currDigit.toString();
            for (let j = 0; j<currNumTostr.length; j++){
                sum += parseInt(currNumTostr[j]);
            }

            if (sum === 5 || sum === 7 || sum === 11){
                trueOrFalse = "True";
            } else{
                trueOrFalse = "False";
            }
        }
        console.log(`${currDigit} -> ${trueOrFalse}`);
    }

}

specialNumber(20);

