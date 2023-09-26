function sumFirstandLastElement(arr){
    let firstElement = arr[0];
    let lastElement = arr[arr.length - 1];
    let sum = firstElement + lastElement;

    console.log(`Array first element (${firstElement}) + array last element (${lastElement}) = ${sum}`)
}

array = [10, 17, 22, 33];
sumFirstandLastElement(array);