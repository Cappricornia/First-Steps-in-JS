function yardGreening(input){
    let sqm = input[0];
    let priceBeforeDiscount = parseFloat(sqm * 7.61);
    let discount = priceBeforeDiscount * 0.18;  // discount 18%
    let finalPrice = priceBeforeDiscount - discount;
    let result = `The final price is: ${finalPrice} lv.\nThe discount is: ${discount} lv.`;
    console.log(result);
}

yardGreening(["150"]);
