function personInfo(firstName, lastName, age){
    const person = {
        firstName: firstName,
        lastName: lastName,
        age: parseInt(age) 
      };
      return person;
}
    
const firstName = "Peter";
const lastName = "Pan";
const age = "20";
    
const personObject = personInfo(firstName, lastName, age);
console.log(`firstName: ${personObject.firstName}`);
console.log(`lastName: ${personObject.lastName}`);
console.log(`age: ${personObject.age}`);