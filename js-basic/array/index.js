// Array => kumpulan variable yang memiliki index yang berurutan

var numbers = [10, 5, 7, 12, 3, 1, 17];
// console.log(numbers);
// Index array dimulai dari 0 hingga n - 1, n = jumlah array

// Array Built in functions
var lengthNumbers = numbers.length;
// console.log("Numbers length : ", lengthNumbers);

numbers.push(15);
// console.log(numbers);
numbers.pop();
// console.log(numbers);

// Array Multidimensi

var items = [
    ["apple", "cherry", "banana"], ["carrots", "broccoli", "potato"]
]
// console.log(items[0][0]);
// console.log(items[0][1]);
// console.log(items[0][2]);

// Task 1
// Total dari array

var total = 0;
for (var i = 0; i < numbers.length; i++) {
    // console.log(numbers[i]);
    total += numbers[i];
}
console.log("Total : ", total)

// Task 2
// Rata-rata dari array
var mean = total / numbers.length
console.log("Mean : ", mean.toFixed(2))