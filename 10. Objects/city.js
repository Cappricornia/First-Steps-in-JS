function cityInfo(obj) {
    for (let key in obj) {
      console.log(`${key} -> ${obj[key]}`);
    }
}
  
const city = {
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postcode: "1000"
};
  
cityInfo(city);
  