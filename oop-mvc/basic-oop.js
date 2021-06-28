class Vehicle {
    constructor(name, type, price, engine, tags) {
        this.name = name;
        this.type = type;
        this.price = price;
        this.engine = engine;
        this.tags = tags;
    }

    startEngine() {
        console.log("Start Engine..")
    }
    stopEngine() {
        console.log("Stop Engine..")
    }
}
// Proses instanciation => proses pembuatan instance
let civic = new Vehicle("Civic", "Sedan", 1000000, 1000, ["sedan"]);
let colt = new Vehicle("Colt", "Pickup", 1500000, 1500, ["box"]);
let tiguan = new Vehicle("Tiguan", "SUV", 3500000, 3500, ["sport"]);
console.log(civic);
console.log(colt);
console.log(tiguan);

/**
 Bikinlah class Student yang memiliki:

Attributes:
name;
subject (dalam bentuk larik);
score.

Method:
sebutkanNama();
sebutkanSubject().
 
*/
