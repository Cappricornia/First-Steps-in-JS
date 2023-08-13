function depositCalculator(input){
    let deposit = parseFloat(input[0]);
    let duration = parseInt(input[1]);
    let annualprc = parseFloat(input[2]);
    let annualInterest = deposit * (annualprc/100);
    let interestPerMonth = annualInterest / 12;
    let totalInterest = deposit + (duration * interestPerMonth);
    console.log(totalInterest);
}

depositCalculator(["200","3", "5.7"]);
depositCalculator(["2350","6 ","7"]);