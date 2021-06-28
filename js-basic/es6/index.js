// Var, let, const

// Hoisting : pengangkatan atau deklarasi awal ketika program di jalankan

const angka = 10;
// angka = 100;
// console.log(angka);

const foods = ["nasi goreng", "nasi kotak"];
foods.push("nasi kuning")
// console.log(foods)
foods.pop()
// console.log(foods)

let items = "pencil"

function printItem() {
    items = "ballpoint"
    console.log(items);
}

// printItem()
// console.log(items)



// Function : Declaration, Expression, Arrow (ES6)

// Declaration
// hello();
// function hello(){
// console.log("Hello World!")
// }

// Expression
// hello()
// const hello = function(){
//     console.log("Hello World!")
// }

// Arrow (ES6)
// hello()
// const hello = () => {
// console.log("Hello World!")
// }

// const tambah = function (a,b) {
//     return a + b;
// }

const tambah = (a, b) => console.log(a + b);
// console.log(tambah(1,2))
// tambah(1,2)

// High Order Function

// .forEach(), .map(), .filter()

const drinks = ["ice tea", "coffee milk", "boba"];

for (let i = 0; i < drinks.length; i++) {
    // console.log(drinks[i]);
}

drinks.forEach((drink, index) => {
    // console.log(drink,index)
})

let math = [1, 2, 3, 4, 5];
// result : [1,4,9,16,25]

let temp = [];
for (let i = 0; i < math.length; i++) {
    // ES5 => Math function
    // temp.push(Math.pow(math[i], 2));
    // ES6
    temp.push(math[i] ** 2)
}
// console.log(temp)

let quadratic = math.map(number => number ** 2);
// console.log(quadratic)

let tempFilter = []
for (let i = 0; i < quadratic.length; i++) {
    if (quadratic[i] > 10) {
        tempFilter.push(quadratic[i])
    }
}
// console.log(tempFilter)
let resultFilter = quadratic.filter(n => n > 10)


// console.log(resultFilter)
let resultTotal;
// math.map(number => number ** 2).filter(n => n > 10).forEach(n => console.log(n));
// console.log(resultTotal)

// Destructring : Array & Object

let langs = ["Javascript", 1995, "Brendan Eich"];
// ES5
// let name = langs[0];
// let year = langs[1];
// let creator = langs[2];

// ES6
// let [name, year, creator] = langs;
// console.log(name, year, creator)

let profile = {
    name: "James",
    age: 25
}
let { name, age } = profile;
// console.log(name, age)

// Rest & Spread Operator

let a = [1, 2, 3];
let b = [4, 5];

let c = [...a, ...b];
// c.push(a.slice(0));
// c.push(b.slice(0));
// console.log(c)

// ES6 
const information = (...args) => {
    // console.log(args)
    const [name, score, subjects, location, isAvailable] = args;
    return {
        name, score, subjects, location, isAvailable
    }
}

console.log(information("Vincent", 3.21, ["math"], "Jakarta", true))
/**
 * {
 *      name: "Vincent",
 *      score: 3.21,
 *      subjects: ["math"],
 *      location: "Jakarta",
 *      isAvailable: true
 * }
 */