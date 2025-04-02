//@ts-check

class Vehicle<T> {
  status: string = "stopped";
  make: string
  model: string
  wheels: number

  constructor(make: string, model: string, wheels: number) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }
  start() {
    this.status = "started";
  }
  stop() {
    this.status = "stopped";
  }
}

class Car<T> extends Vehicle<T> {
  constructor(make: string, model: string) {
    super(make, model, 4);
  }
}

class MotorCycle<T> extends Vehicle<T> {
  constructor(make: string, model: string) {
    super(make, model, 2);
  }
}

class NCycle<T> {
  status: string = "stopped";
  make: string | string[]
  model: string | string[]
  wheels: number

  constructor(make: string | string[], model: string | string[], wheels: number) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }
  start() {
    this.status = "started";
  }
  stop() {
    this.status = "stopped";
  }
  print(index: number = 0) {
    if(typeof this.make === "string" && typeof this.model === "string"){
      console.log(`"This is a ${this.make} ${this.model} NCycle."`)
    } 
    else if(this.make.length > index && this.model.length > index){
      console.log(`"This NCycle has a ${this.make} ${this.model} at ${index}."`)
    } 
    else {
      console.log("This NCycle was not created properly.")
    }
  }
}

function printStatus(vehicle: Vehicle<string | number>) {
  if (vehicle.status === "running") {
    console.log("The vehicle is running.");
  } else {
    console.log("The vehicle is stopped.");
  }
}

const myHarley = new MotorCycle<string>("Harley-Davidson", "Low Rider S");
myHarley.start();
printStatus(myHarley);
console.log(myHarley.make.toUpperCase());

const myBuick = new Car<string>("Buick", "Regal");
myBuick.wheels = myBuick.wheels - 1;
console.log(myBuick.wheels);
console.log(myBuick.model);