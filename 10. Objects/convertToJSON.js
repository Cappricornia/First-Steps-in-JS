function convertToJSON(firstName, lastName, hairColour){
    let personObj = {
        name: firstName,
        lastName: lastName,
        hairColour: hairColour
    };
    
    // Converts the object to a JSON string
    let parsedJSONPerson = JSON.stringify(personObj);
    
    console.log(parsedJSONPerson);
}

let firstName = "Ani";
let lastName = "Jones";
let haircolour = "Brown";

convertToJSON(firstName, lastName, haircolour)