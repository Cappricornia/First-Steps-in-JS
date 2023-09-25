//Write a function, which prints all unique pairs in an array of integers whose sum is equal to a given number
function magicSums(arr, number){
    let printPairs = pairs => {
        pairs.forEach(pair => console.log(pair.join(' ')));
      };
    
      let pairs = [];
    
      for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] + arr[j] === number) {
            pairs.push([arr[i], arr[j]]);
          }
        }
      }
    
      printPairs(pairs);
 }


magicSums([14, 20, 60, 13, 7, 19, 8], 27)