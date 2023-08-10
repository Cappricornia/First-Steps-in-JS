function greeting(input) {
    let name = input[0];
    let greeting = `Hello, ${name}!`;
    console.log(greeting);
}

greeting(["Gorgeous"])


function fullName(input){
let firstName = input[0];
let lastName = input[1];
let age = input[2];
let str = "Hello, " + firstName + " " + lastName + " @ " + age;
console.log(str);  

}

fullName(["Agatha", "Christie", 68])
