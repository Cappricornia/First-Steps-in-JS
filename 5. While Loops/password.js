function password(input){
    let user = input[0];
    let password = input[1];
    let index = 1;

    while (true){
        let passwordInput = input[index];
        index ++;

        if (password === passwordInput){
            console.log(`Welcome, ${user}!`);
            break;
        }
    }
}


password(["Cappricornia",
"1234@Cprjdjsjsjdaaa1232",
"Pass",
"1324",
"1234@Cprjdjsjsjdaaa1232"])

