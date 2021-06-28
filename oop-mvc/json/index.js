const fs = require('fs');

// // Read
// let data = fs.readFileSync('./data.json', 'utf8');
// let parsedData = JSON.parse(data);

// // Write
// parsedData.push({
//     "id": 4,
//     "name": "Jane",
//     "gpa": 3.00
// })
// parsedData.push({
//     "id": 5,
//     "name": "Ray",
//     "gpa": 3.00
// })
// console.log(parsedData);
// fs.writeFileSync('./data.json', JSON.stringify(parsedData, null, 3))

class Student {
    constructor(id, name, gpa) {
        this.id = id;
        this.name = name;
        this.gpa = gpa;
    }
}

class University {
    static getStudent() {
        // console.log("Static getStudent")
        let temp = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
        let tempData = temp.map(data => {
            const { id, name, gpa } = data;
            return new Student(id, name, gpa)
        })
        return tempData
    }
    static showStudents() {
        let students = this.getStudent();
        console.table(students)
    }
}

University.showStudents();