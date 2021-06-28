// Looping

var n = 5;
var temp = ""
for (var i = 0; i < n; i++) {
    // console.log(i+1)
    temp = temp + (i + 1);
}
// console.log(temp)
// Result : 12345

var item = "Laptop Dell";
// console.log(item[0])
for (var i = 0; i < item.length; i++) {
    if (item[i] !== " ") {
        // console.log(item[i]);
    }
}

var pantun = "beli batik di kota jakarta";

var temp1 = "";
for (var i = 0; i < pantun.length; i++) {
    if (pantun[i] !== " ") {
        temp1 = temp1 + pantun[i];
    }
    else {
        // console.log(temp1);
        temp1 = "";
    }
    if (i === pantun.length - 1) {
        // console.log(temp1);
        temp1 = "";
    }
}
// console.log(pantun.split(" "))
// Result :
/**
 * beli
 * batik
 * di
 * kota
 * jakarta
 */
var x = 5;
var tempX = ""
for(var i = 0; i < x; i++){
    for(var j = 0; j <= i; j++){
        // console.log("*");
        tempX += (j+1);
    }
    console.log(tempX);
    tempX = "";
}