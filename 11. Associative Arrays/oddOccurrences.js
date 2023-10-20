function oddOccurrences(inputStr) {
    let words = inputStr.toLowerCase().split(' ');
  
    let wordCount = new Map();
    let result = [];
  
    for (let word of words) {
      if (!wordCount.has(word)) {
        wordCount.set(word, 0);
      }
      wordCount.set(word, wordCount.get(word) + 1);
    }
  
    for (let word of words) {
      if (wordCount.get(word) % 2 !== 0) {
        result.push(word);
        wordCount.set(word, 0); 
      }
    }
  
    console.log(result.join(' '));
  }
  
 
  const inputStr = "Java C# Php PHP Java PhP 3 C# 3 1 5 C#";
  oddOccurrences(inputStr);
  