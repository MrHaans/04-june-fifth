// Conditional

// Task 1
/**
 * Ada 3 jenis access : Public, Protected, Private.
 * Jika access kosong, maka tampilkan "Input access"
 * 
 * Access public, jika level di bawah 5 maka tampilkan "Public di bawah 5"
 * Access public, jika level di atas 5 maka tampilkan "Public di atas 5"
 * Access public, jika level sama dengan 5 maka tampilkan "Public five"
 * 
 * Access private, jika level di bawah 5 maka tampilkan "Private di bawah 5"
 * Access private, jika level di atas 5 maka tampilkan "Private di atas 5"
 * Access private, jika level sama dengan 5 maka tampilkan "Private five"
 * 
 * Access protected, jika level di bawah 5 maka tampilkan "Protected di bawah 5"
 * Access protected, jika level di atas 5 maka tampilkan "Protected di atas 5"
 * Access protected, jika level sama dengan 5 maka tampilkan "Protected five"
 * 
 * Jika access salah, tampilkan "Access is not defined"
 * 
 * BUAT CODING menggunakan Nested Conditional : Switch case dan if else
 */

// Algoritma -> sama dengan soal


// Pseudocode
/**
 * STORE access WITH ANY STRING
 * STORE level WITH ANY NUMBER
 * 
 * IF access EMPTY STRING THEN
 *  DISPLAY "Input Access"
 * ELSE IF access EQUAL "Public" THEN
 *  IF level LESS THAN 5 THEN
 *      DISPLAY "Public di bawah 5"
 *  ELSE IF level MORE THEN 5 THEN
 *      DISPLAY "Public di atas 5"
 *  ELSE 
 *      DISPLAY "Public five"
 *  ENDIF
 * ELSE IF access EQUAL "Protected" THEN
 *  IF level LESS THAN 5 THEN
 *      DISPLAY "Protected di bawah 5"
 *  ELSE IF level MORE THEN 5 THEN
 *      DISPLAY "Protected di atas 5"
 *  ELSE 
 *      DISPLAY "Protected five"
 *  ENDIF
 * ELSE IF access EQUAL "Private" THEN
 *  IF level LESS THAN 5 THEN
 *      DISPLAY "Private di bawah 5"
 *  ELSE IF level MORE THEN 5 THEN
 *      DISPLAY "Private di atas 5"
 *  ELSE 
 *      DISPLAY "Private five"
 *  ENDIF
 * ELSE 
 *  DISPLAY "Access is not defined"
 * ENDIF
 */

// Coding
var access = "Public";
var level = 5;

switch (access) {
    case "Public":
        if (level < 5) {
            console.log(access + " di bawah 5");
        } else if (level > 5) {
            console.log(access + " di atas 5");
        } else {
            console.log(access + " five");
        }
        break;
    case "Private":
        if (level < 5) {
            console.log(access + " di bawah 5");
        } else if (level > 5) {
            console.log(access + " di atas 5");
        } else {
            console.log(access + " five");
        }
        break;
    case "Protected":
        if (level < 5) {
            console.log(access + " di bawah 5");
        } else if (level > 5) {
            console.log(access + " di atas 5");
        } else {
            console.log(access + " five");
        }
        break;
    default:
        if(access === ""){
            console.log("Input access")
        }else {
            console.log("Input is not defined")
        }
        break;
}

// Task 2

/**
 * Cek status BMI (Body Mass Index)
 * Jika BMI di atas 100, maka Obesity
 * Jika BMI di antara 80 dan 100, maka Overweight
 * Jika BMI diantara 65 dan 80, maka Normal
 * Jika BMI diantara 50 dan 65, maka Thin
 * Jika BMI di bawah 50, maka Skinny
 */

// Algoritma
/**
 * 1. Buat variable BMI
 * 2. Cek BMI :
 *  2.1 Jika di atas 100, maka tampilkan "Obesity"
 *  2.2 Jika di antara 80 dan 100, maka tampilkan "Overweight"
 *  2.3 Jika di antara 65 dan 80, maka tampilkan "Normal"
 *  2.4 Jika di antara 50 dan 65, maka tampilkan "Thin"
 *  2.5 Jika di bawah 50, maka tampilkan "Skinny"
 */

// Pseudocode
/**
 * STORE BMI WITH ANY NUMBER
 *
 * IF BMI MORE THAN 100 THEN
 *  DISPLAY "Obesity"
 * ELSE IF BMI MORE THAN 80 AND BMI LESS THAN EQUAL 100 THEN
 *  DISPLAY "Overweight"
 * ELSE IF BMI MORE THAN 65 AND BMI LESS THAN EQUAL 80 THEN
 *  DISPLAY "Normal"
 * ELSE IF BMI MORE THAN 50 AND BMI LESS THAN EQUAL 65 THEN
 *  DISPLAY "Thin"
 * ELSE IF BMI LESS THAN EQUAL 50 THEN
 *  DISPLAY "Skinny"
 * ENDIF
 */

// Coding
// var bmi = 75;

// if(bmi > 100){
//     console.log("Obesity")
// }else if(bmi > 80 && bmi <= 100){
//     console.log("Overweight")
// }else if(bmi > 65 && bmi <= 80){
//     console.log("Normal")
// }else if(bmi > 50 && bmi <= 65){
//     console.log("Thin")
// }else if(bmi <= 50){
//     console.log("Skinny")
// }

// Ganjil dan Genap

// Algoritma
/**
 * 1. Buat variable angka
 * 2. Cek apakah angka ganjil atau genap
 *  2.1 Jika angka modulus 2 sama dengan 0 maka genap
 *  2.2 Jika angka modulus 2 sama dengan 1 maka ganjil
 */

// Pseudocode
/**
 * STORE angka WITH ANY NUMBER
 *
 * IF angka MOD 2 EQUAL 0 THEN
 *  DISPLAY "genap"
 * ELSE IF angka MOD 2 EQUAL 1 THEN
 *  DISPLAY "ganjil"
 * ENDIF
 */

// // Coding
// var angka = 5;
// if(angka % 2 === 0){
//     console.log(angka + " genap")
// }else if(angka % 2 === 1){
//     console.log(angka + " ganjil")
// }