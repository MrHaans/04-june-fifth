// Pilar utama OOP
// 1. Inheritance
// 2. Polymorphism  : Override, Overload
// 3. Encapsulation : Public, Private, Protected
// 4. Abstraction

// POLYMORPH
class BangunDatar {
    constructor(panjang, lebar) {
        this.panjang = panjang;
        this.lebar = lebar;
    }
    hitungLuas() {
        let luas = this.panjang * this.lebar;
        return luas;
    }
}

class Segitiga extends BangunDatar {
    constructor(panjang, lebar) {
        super(panjang, lebar);
    }
    // Override
    hitungLuas() {
        let luas = 1 / 2 * this.panjang * this.lebar;
        return luas;
    }
}

// ENCAPSULATE

class Student {
    constructor(name, gpa) {
        this._name = name;
        this._gpa = gpa;
    }
    // Getter
    get name(){
        return this._name;
    }
    get gpa(){
        return this._gpa;
    }
    // Setter
    set setName(name){
        this._name = name;
    }
    set setGpa(gpa){
        this._gpa = gpa;
    }
}

let student = new Student("Vincent", 3.21);
student.setName = "Andi";
console.log(student.name);