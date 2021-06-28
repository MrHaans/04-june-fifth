// Function => kumpulan suatu code / perintah untuk menjalankan tugas tertentu

// Declaration Function
function greeting(name) {
    console.log("Halo, selamat siang " + name);
}

// // Call function / invoke function
// greeting("Cents");
// greeting(false);
// greeting("Randy");
// greeting("Rick");
// greeting(123);

function total(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    console.log(total);
}

// total([1,2,3,4,5]);
// total([-1,2,-3,5,0]);
// total([1.25,3.23,0.5,5.0,5.17]);

// MOdular Function

function tambah(a, b) {
    // var jumlah = a + b;
    // return jumlah;
    return a + b;
}

// var jumlah = tambah(5,3);
// console.log(jumlah);
// console.log(tambah(1,2));

function checkAngka(n) {
    // n array isi 2
    // n[0] dan n[1]
    var result = tambah(n[0], n[1]);
    return result;
}

// console.log(checkAngka([10,5]));
// console.log(checkAngka([0.5,-1]));
// console.log(checkAngka([1.25,2.05]));
// console.log(checkAngka([12,3]));
// console.log(checkAngka([1,0]));

// Task 
// Buat Function Calculator 
/**
 * calculator(1,+,2) // 3
 * calculator(3,*,5) // 15 
 */
function calculator(a, opr, b) {
    var result;
    switch (opr) {
        case '+':
            result = tambah(a, b)
            break;
        case '-':
            result = kurang(a, b)
            break;
        case '*':
            result = kali(a, b)
            break;
        case '/':
            result = bagi(a, b)
            break;
    }
    console.log(result);
}

function tambah(a, b) {
    return a + b;
}
function kurang(a, b) {
    return a - b;
}
function kali(a, b) {
    return a * b;
}
function bagi(a, b) {
    return a / b;
}

calculator(1, '+', 2);
calculator(3, '*', 5);
calculator(5, '/', 2);
calculator(3, '-', 5);