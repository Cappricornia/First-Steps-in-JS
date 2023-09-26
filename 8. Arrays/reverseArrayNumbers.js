function reverseArrayNumbers(n, arr){
    let newArr = [];

    for (let i=0; i<n; i++){
        let currNum = arr[i];
        newArr.push(currNum);  
    }
    
    let revervedNewArr = newArr.reverse();
    console.log(revervedNewArr.join(' '));

}


number = 3;
array = [10, 20, 30, 40, 50];

reverseArrayNumbers(number, array); // output 30 20 10
