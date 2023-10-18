function wordOccurrences(input){
    let wordCount = new Map();

    for(let i=0; i< input.length; i++){
        let words = input[i].split(',');
        
        for(const word of words){
           
            if(wordCount.has(word)){
               wordCount.set(word, wordCount.get(word) + 1);
            } else{
                wordCount.set(word, 1);
            }
        }
    }

    const sortedArray = Array.from(wordCount.entries()).sort((a, b) => b[1] - a[1]);

    for (const [key, value] of sortedArray) {
        console.log(`${key} -> ${value} times`);
      }
}


const input = ["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"];
wordOccurrences(input);