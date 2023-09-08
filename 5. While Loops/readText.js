function readText(input){
    let index = 0;

    while (true){
        let str = input[index];

        index ++;

        if (str === "Stop"){
            break;
        }

        console.log(str);
    }
}


readText(["Hello, Ameca!",
"JS",
"QA",
"Computer Science",
"AI",
"Stop",
"AfterStop",
"Error",
"HelloWorld"])
