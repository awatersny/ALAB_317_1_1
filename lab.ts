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
  make: T
  model: T
  wheels: number

  constructor(make: T, model: T, wheels: number) {
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
    if(Array.isArray(this.make) && Array.isArray(this.model)){
      if(this.make.length > index && this.model.length > index){
        console.log(`This NCycle has a ${this.make} ${this.model} at ${index}.`)
      }
      else {
        console.log("This NCycle was not created properly.")
      }
    } 
    else {
      console.log(`This is a ${this.make} ${this.model} NCycle.`)
    } 
  }
  printAll() {
    if(Array.isArray(this.make) && Array.isArray(this.model)){
      const shorter: T | T[] = this.make.length < this.model.length ? this.make : this.model
      for(let i:number = 0; i < shorter.length; i++) {
        console.log(`This NCycle has a ${this.make} ${this.model} at ${i}.`)
      }
    } 
    else {
      console.log(`"This is a ${this.make} ${this.model} NCycle."`)
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

// Rudimentary testing Code, not part of the assignment
const testCycle1 = new NCycle<number>(1, 2, 3);
testCycle1.print();
testCycle1.printAll();

const testCycle2 = new NCycle<string>("This", "That", 4);
testCycle2.print();
testCycle2.printAll();

const testCycle3 = new NCycle<string | number>("Make", 10, 4);
testCycle3.print(4);
testCycle3.printAll();

const makes4 = ["Volkswagon", "Tesla", "Audi"];
const models4 = ["Passat", "Model X", "A4"];
const testCycle4 = new NCycle<string[]>(makes4, models4, 4);
testCycle4.print(2);
testCycle4.printAll();

const makes5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const models5 = [1, 1, 2, 3, 5];
const testCycle5 = new NCycle<number[]>(makes5, models5, 0);
testCycle5.print(7);
testCycle5.printAll();

const add = (x: number, y: number): number => x + y

add(testCycle1.make, testCycle5.model[1]);
// Error expected here
add(testCycle2.make, testCycle4.model[1]);