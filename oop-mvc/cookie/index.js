const Kitchen = require('./Kitchen');
const { Chocolate, Sweet, Strawberry } = require('./Cookie');


const kitchen = new Kitchen()

kitchen.bake(new Chocolate("Brownies Almond", 100000, ["choco"], "Chocolate", true))
kitchen.bake(new Sweet("Shortbread Butter", 50000, ["sugar"], "Sweet", true))
kitchen.bake(new Strawberry("Red Velvet",75000,["berry"],"Strawberry",false))
kitchen.eat("Shortbread Butter");
// kitchen.showCookies();
kitchen.addSugar("Red Velvet")
console.log(kitchen.container);