class Vehicle {
    constructor(type, model, parts, fuel) {
      this.type = type;
      this.model = model;
      this.parts = parts;
      this.fuel = fuel;
      this.parts.quality = parts.engine * parts.power;
    }
  
    drive(loss) {
      this.fuel -= loss;
    }
  }
  
  
  let parts = { engine: 9, power: 500 };
  let vehicle = new Vehicle('a', 'b', parts, 840);
  vehicle.drive(20);
  
  console.log('Remaining fuel after the drive:', vehicle.fuel, 'units');
  console.log('Quality of vehicle parts:', vehicle.parts.quality);
  
 
  