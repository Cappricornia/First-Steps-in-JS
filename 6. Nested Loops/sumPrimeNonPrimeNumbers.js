function isPrime(num) {
    if (num <= 1) return false;
    const sqrtNum = Math.sqrt(num);
  
    for (let i = 2; i <= sqrtNum; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    
    return true;
  }
  

function sumPrimeNonPrime(input){
    let index = 0;
    let sumPrime = 0;
    let sumNonPrime = 0;
   
    while(true){
        data = input[index];
        index++;

        if (data === "stop"){
            break;
        }

        let number = Number(data);
        
        if(number < 0){
            console.log("Number is negative.");
            continue;
        } 

        if (isPrime(number)){
            sumPrime += number;
        } else{
            sumNonPrime += number;
        }
    }
   
    console.log(`Sum of all prime numbers is: ${sumPrime}`)
    console.log(`Sum of all non-prime numbers is: ${sumNonPrime}`)
}



sumPrimeNonPrime(["30","83","33","-1","20","stop"]);
sumPrimeNonPrime(["0","-9","0","stop"]);
sumPrimeNonPrime(["3","9","0","7","19","4","stop"]);



