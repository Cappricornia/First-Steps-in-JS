function buildDictionary(input) {
  const dictionary = {}; 
  for (const termDefinitionString of input) {
    const termDefinition = JSON.parse(termDefinitionString); 
    const term = Object.keys(termDefinition)[0]; 
    const definition = termDefinition[term]; 

    dictionary[term] = definition;
  }

  const sortedTerms = Object.keys(dictionary).sort(); 

  for (const term of sortedTerms) {
    const definition = dictionary[term]; 
    console.log(`Term: ${term} => Definition: ${definition}`);
  }

}


const input = [
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
];


buildDictionary(input);
