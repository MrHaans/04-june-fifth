class Cookie {
    constructor(name, price, ingredients, type) {
        this._name = name;
        this._price = price;
        this._ingredients = ingredients;
        this._type = type;
    }
    // Getter
    get name() {
        return this._name;
    }
    get price() {
        return this._price;
    }
    get ingredients() {
        return this._ingredients;
    }
    get type() {
        return this._type;
    }
    // Setter
    set setName(name) {
        this._name = name;
    }
    set setPrice(price) {
        this._price = price;
    }
    set setIngredient(ingredient) {
        this._ingredients.push(ingredient);
    }
    set setType(type) {
        this._type = type;
    }
}

class Chocolate extends Cookie {
    constructor(name, price, ingredients, type, isSweet) {
        super(name, price, ingredients, type);
        this._isSweet = isSweet;
    }
    get isSweet() {
        return this._isSweet;
    }
    set setIsSweet(isSweet) {
        this._isSweet = isSweet;
    }
}

class Sweet extends Cookie {
    constructor(name, price, ingredients, type, isSweet) {
        super(name, price, ingredients, type);
        this._isSweet = isSweet;
    }
    get isSweet() {
        return this._isSweet;
    }
    set setIsSweet(isSweet) {
        this._isSweet = isSweet;
    }
}

class Strawberry extends Cookie {
    constructor(name, price, ingredients, type, isSweet) {
        super(name, price, ingredients, type);
        this._isSweet = isSweet;
    }
    get isSweet() {
        return this._isSweet;
    }
    set setIsSweet(isSweet) {
        this._isSweet = isSweet;
    }
}
module.exports = {
    Chocolate, Sweet, Strawberry
}