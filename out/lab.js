//@ts-check
class Vehicle {
    constructor(make, model, wheels) {
        this.status = "stopped";
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
class Car extends Vehicle {
    constructor(make, model) {
        super(make, model, 4);
    }
}
class MotorCycle extends Vehicle {
    constructor(make, model) {
        super(make, model, 2);
    }
}
class NCycle {
    constructor(make, model, wheels) {
        this.status = "stopped";
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
    print(index = 0) {
        if (Array.isArray(this.make) && Array.isArray(this.model)) {
            if (this.make.length > index && this.model.length > index) {
                console.log(`This NCycle has a ${this.make[index]} ${this.model[index]} at ${index}.`);
            }
            else {
                console.log("This NCycle was not created properly.");
            }
        }
        else {
            console.log(`This is a ${this.make} ${this.model} NCycle.`);
        }
    }
    printAll() {
        if (Array.isArray(this.make) && Array.isArray(this.model)) {
            const shorter = this.make.length < this.model.length ? this.make : this.model;
            for (let i = 0; i < shorter.length; i++) {
                console.log(`This NCycle has a ${this.make[i]} ${this.model[i]} at ${i}.`);
            }
        }
        else {
            console.log(`"This is a ${this.make} ${this.model} NCycle."`);
        }
    }
}
function printStatus(vehicle) {
    if (vehicle.status === "running") {
        console.log("The vehicle is running.");
    }
    else {
        console.log("The vehicle is stopped.");
    }
}
const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");
myHarley.start();
printStatus(myHarley);
console.log(myHarley.make.toUpperCase());
const myBuick = new Car("Buick", "Regal");
myBuick.wheels = myBuick.wheels - 1;
console.log(myBuick.wheels);
console.log(myBuick.model);
// Rudimentary testing Code, not part of the assignment
const separator = "----------------------------------------";
const testCycle1 = new NCycle(1, 2, 3);
console.log("testCycle:1", "\n", separator);
testCycle1.print();
testCycle1.printAll();
console.log(separator);
console.log("testCycle2:", "\n", separator);
const testCycle2 = new NCycle("This", "That", 4);
testCycle2.print();
testCycle2.printAll();
console.log(separator);
console.log("testCycle3:", "\n", separator);
const testCycle3 = new NCycle("Make", 10, 4);
testCycle3.print(4);
testCycle3.printAll();
console.log(separator);
console.log("testCycle4:", "\n", separator);
const makes4 = ["Volkswagon", "Tesla", "Audi"];
const models4 = ["Passat", "Model X", "A4"];
const testCycle4 = new NCycle(makes4, models4, 4);
testCycle4.print(2);
testCycle4.printAll();
console.log(separator);
console.log("testCycle5:", "\n", separator);
const makes5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const models5 = [1, 1, 2, 3, 5];
const testCycle5 = new NCycle(makes5, models5, 0);
testCycle5.print(7);
testCycle5.printAll();
console.log(separator);
const add = (x, y) => x + y;
console.log(`Add function: ${add(testCycle1.make, testCycle5.model[1])}`);
// Error expected here
// add(testCycle2.make, testCycle4.model[1]);
