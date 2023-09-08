function  sequence2kPlus1(input){
    let n = Number(input[0]);
    let count = 1;
    
    // reads a number n entered by the user and prints all numbers ≤ n from the sequence
    //each subsequent number is calculated by multiplying the previous one by 2 and adding 1
    while (count <= n){
        console.log(count);
        count = count * 2 + 1;
    }
}

sequence2kPlus1(["3"]);
sequence2kPlus1(["8"]);
sequence2kPlus1(["17"]);
sequence2kPlus1(["31"]);