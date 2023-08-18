function godzillaVsKong(input){
    let budgetFilm = Number(input[0]);
    let numberOfStatists =  Number(input[1]);
    let clothesPerStatistPrice = Number(input[2]);
    let decor = budgetFilm * 0.1;
    let clothesPrice = numberOfStatists * clothesPerStatistPrice;
    let totalPrice = 0.0;
    if (numberOfStatists > 150){
        clothesPrice -= clothesPrice * 0.1; 
    }
    totalPrice = clothesPrice + decor;

    if (totalPrice <= budgetFilm){
        console.log(`Action!\nWingard starts filming with ${(budgetFilm - totalPrice).toFixed(2)} leva left.`);
    } else{
        console.log(`Not enough money!\nWingard needs ${(totalPrice - budgetFilm).toFixed(2)} leva more.`);
    }

}

godzillaVsKong(["20000","120","55.5"]);
godzillaVsKong(["15437.62","186","57.99"]);
godzillaVsKong(["9587.88","222","55.68"]);


