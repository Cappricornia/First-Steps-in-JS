function wordsTracker(input){
    let wordCount = new Map();
    let searchedWords = input[0].split(' ');
    
    for (let w of searchedWords){
        wordCount.set(w, 0);
    }

    for(let i=1; i< input.length; i++){
       
        let words = input[i].split(',');
       
        for(const word of words){
           
            if(wordCount.has(word)){
               wordCount.set(word, wordCount.get(word) + 1);
            } 
        }
    }

    const sortedArray = Array.from(wordCount.entries()).sort((a, b) => b[1] - a[1]);

    for (const [key, value] of sortedArray) {
        console.log(`The word '${key}' appears  ${value} times in the array of words.`);
      }
}

const input = [
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]

wordsTracker(input);