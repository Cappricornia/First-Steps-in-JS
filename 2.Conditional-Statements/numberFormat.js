let number = 7.85;

// Math.floor() rounds down to the nearest integer
let floorResult = Math.floor(number); // 7

// Math.ceil() rounds up to the nearest integer
let ceilResult = Math.ceil(number);   // 8

// Math.trunc() removes the decimal part, effectively truncating the number
let truncResult = Math.trunc(number); // 7

// Math.round() rounds to the nearest integer
let roundResult = Math.round(number); // 8

// .toFixed() formats the number to a specified number of decimal places
let fixedResult = number.toFixed(1);  // Number = 7.85 -> "7.8"; Number = 7.89 -> 7.9

console.log("Original number:", number);
console.log("Math.floor():", floorResult);
console.log("Math.ceil():", ceilResult);
console.log("Math.trunc():", truncResult);
console.log("Math.round():", roundResult);
console.log(".toFixed():", fixedResult);
