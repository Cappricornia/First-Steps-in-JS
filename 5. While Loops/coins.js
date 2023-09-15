/* Vending machine manufacturers wanted to make their machines return as little change as possible.
 Write a function that takes an amount - the change to be returned and calculates the smallest amount of coins that can be returned.
Coins can be 2 BGN, 1 BGN, 50 stotinki, 20 stotinki, 10 stotinki, 5 stotinki, 2 stotinki or 1 stotinka.*/

function coins(input){
    let sum = input[0];

    sum = parseInt(sum * 100)  
    let coinsCounter = 0;
    coinsCounter += parseInt(sum / 200)
    sum %= 200                
    coinsCounter += parseInt(sum / 100)
    sum %= 100                      
    coinsCounter += parseInt(sum / 50)
    sum %= 50
   coinsCounter += parseInt(sum / 20)
    sum %= 20
    coinsCounter += parseInt(sum / 10)
    sum %= 10
    coinsCounter += parseInt(sum / 5)
    sum %= 5
    coinsCounter += parseInt(sum / 2)
    sum %= 2
    if (sum == 1){
        coinsCounter += 1  
    }
         
    console.log(coinsCounter);
}

coins(["1.23"]);
coins(["0.56"]);
coins(["2"]);
coins(["2.73"]);




