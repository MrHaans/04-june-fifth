// Object => kumpulan value yang memiliki key dan method

var student = {
    name: "Vincent",
    gpa: 3.21,
    isGraduated: true,
    "able to code": ["JS", "C++", "Python"],
    100: 1
}

// console.log(student.name);
// console.log(student.gpa);
// console.log(student["isGraduated"]);
// console.log(student["able to code"]);
// console.log(student["100"]);

var attr = "name";
// console.log(student[attr]);

for (var key in student) {
    // console.log(key);
    // console.log(student[key]);
}

var caca = {
    name: "caca",
    weight: 45,
    height: 155,
    hobbies: ["Nonton", "Makan"],

    sebutkanHobbies: function () {
        // var name = "tests"
        console.log("Hobby caca:");
        for (var i = 0; i < this.hobbies.length; i++) {
            // console.log((i+1) + ". " + this.hobbies[i])
            // Template literal
            console.log(`${i + 1}. ${this.hobbies[i]}`)
        }
    }
}

// caca.sebutkanHobbies();

// Array of objects

var items = [
    {
        id: 1,
        name: "Dell i5-7200U",
        category: "laptop",
        price: 7500000,
        isAvailable: true
    },
    {
        id: 2,
        name: "HP i5",
        category: "laptop",
        price: 5500000,
        isAvailable: true
    },
    {
        id: 3,
        name: "MSI RTX 2080",
        category: "gpu",
        price: 5350000,
        isAvailable: true
    },
    {
        id: 4,
        name: "Razor mouse",
        category: "mouse",
        price: 1000000,
        isAvailable: true
    },
    {
        id: 5,
        name: "Nvidia GTX 1550",
        category: "gpu",
        price: 3500000,
        isAvailable: true
    }
];

// console.log(items);
for (var i = 0; i < items.length; i++) {
    console.log(` ${items[i].id}. ${items[i].name}, Rp. ${items[i].price} "${items[i].category}", ${items[i].isAvailable}`);
}