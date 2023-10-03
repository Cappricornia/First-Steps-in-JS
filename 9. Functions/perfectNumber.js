function isPerfectNumber(num) {
    if (num <= 0) {
      console.log("Please enter a positive integer.");
      return;
    }
  
    let divisorSum = 0;
  
    for (let i = 1; i < num; i++) {
      if (num % i === 0) {
        divisorSum += i;
      }
    }
  
    
    if (divisorSum === num) {
      console.log("We have a perfect number!");
    } else {
      console.log("It's not so perfect.");
    }
  }
  
  
  isPerfectNumber(28); 
  isPerfectNumber(12); 
  