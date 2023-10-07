function convertToObject(jsonString) {
    try {
      const parsedObject = JSON.parse(jsonString);
      let result = '';
  
      for (const key in parsedObject) {
        result += `${key}: ${parsedObject[key]}\n`;
      }
  
      return result;
    } catch (error) {
      console.error("Invalid JSON string:", error.message);
      return null;
    }
  }
  
  const jsonString = '{"name": "George", "age": 40, "town": "Sofia"}';
 // const jsonString = [23, "ABC", false]; // wrong format
  
  const result = convertToObject(jsonString);
  console.log(result);
  
