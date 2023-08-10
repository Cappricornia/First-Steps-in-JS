function  suppliesForSchool(input){
    let pensPachageNumber = parseInt(input[0]);
    let markersPachageNumber = parseInt(input[1]);
    let CleaningDetergent = parseInt(input[2]);
    let pctDiscount = parseFloat(input[3]);
    let pensPrice = pensPachageNumber * 5.8;
    let markersPrice = markersPachageNumber * 7.2;
    let detergentPrice = CleaningDetergent * 1.2;
    let totalPrice =  (pensPrice + markersPrice + detergentPrice) - (pensPrice + markersPrice + detergentPrice) * pctDiscount/100;
    console.log(totalPrice);
} 

suppliesForSchool(["4","2", "5","13"]);
