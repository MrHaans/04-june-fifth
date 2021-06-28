// Main class / parent class
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

// Sub class / child class
class Sedan extends Vehicle {
    constructor(name, type, price, engine, tags, wheel) {
        super(name, type, price, engine, tags);
        this.wheel = wheel;
    }
}
class Pickup extends Vehicle {
    constructor(name, type, price, engine, tags, box) {
        super(name, type, price, engine, tags);
        this.box = box;
    }
}
class SUV extends Vehicle {
    constructor(name, type, price, engine, tags, nitro) {
        super(name, type, price, engine, tags);
        this.nitro = nitro;
    }
}

let civic = new Sedan("Civic", "Sedan", 1000000, true, ["sedan"], 4);
let colt = new Pickup("Colt", "Pickup", 1500000, false, ["box"], 1);
let tiguan = new SUV("Tiguan", "SUV", 3500000, true, ["sport"], "N2O");

// console.log(civic);
// console.log(colt);
// console.log(tiguan);

// Factory class => CRUD (Create, Read, Update, Delete)
class Showroom {
    constructor(garages) {
        this.garages = garages || [];
    }
    addVehicle(vehicle) {
        this.garages.push(vehicle);
        console.log(`${vehicle.name} has been added to garage!`)
    }
    showVehicles() {
        console.log(`List vehicles : `);
        this.garages.forEach((vehicle,i) => {
            // Destructuring
            const { name, price, type } = vehicle
            console.log(`${i+1}. ${name}, Rp. ${price}, Type : ${type}`)
        })
    }
    removeVehicle(vehicle_name){
        // console.log(name)

        // ES5
        // let temp = [];
        // for(let i = 0; i < this.garages.length; i++){
        //     if(this.garages[i].name !== vehicle_name){
        //         temp.push(this.garages[i])
        //     }
        // }
        // this.garages = temp;
        console.log(`${vehicle_name} has been removed!`)

        // ES6
        this.garages = this.garages.filter( vehicle => vehicle.name !== vehicle_name)
    }
}

let showroom = new Showroom();
showroom.addVehicle(civic);
showroom.addVehicle(colt);
showroom.addVehicle(tiguan);
// console.log(showroom.garages);
showroom.removeVehicle("Colt");
showroom.showVehicles();