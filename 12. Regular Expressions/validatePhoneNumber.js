function validatePhoneNumbers(inputArr) {
    const regex = /^\+359\s2\s\d{3}\s\d{4}$/;

    inputArr.forEach(phoneNumber => {
        if (regex.test(phoneNumber)) {
            console.log(`Valid phone numbers => ${phoneNumber}`);
        } else {
            console.log(`Invalid phone numbers: ${phoneNumber}`);
        }
    });
}


const inputArr = [
    '+359 2 222 2222',
    '+359 2 234 2452',
    '359-2-222-2222',
    '+359/2/222/2222',
    '+359-2 222 2222 +359 2-222-2222',
    '+359-2-222-222',
    '+359-2-222-22222 +359-2-222-2222'
];

validatePhoneNumbers(inputArr);
