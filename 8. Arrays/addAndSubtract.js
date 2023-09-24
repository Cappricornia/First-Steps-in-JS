function addAndSubtract(arrayInput){
    let newArray = [];
    let sumOldArray = 0;
    let sumNewArray = 0;

    for (let i=0; i < arrayInput.length; i++){
        let currNum = arrayInput[i];
        sumOldArray += currNum;

        if (currNum % 2 === 0){
            currNum += i;
            sumNewArray += currNum;
            newArray.push(currNum);
        } else{
            currNum -= i;
            sumNewArray += currNum;
            newArray.push(currNum);
        }
    }

    console.log(newArray);
    console.log(sumOldArray);
    console.log(sumNewArray);
}


addAndSubtract([5, 15, 23, 56, 35]);
