var a = 10;

function b() {
    var x = 10;
}


console.log(a);
console.log(this.a);
console.log(window.a);
//? All are same 






// console.log(y);
// var y = 19;
// console.log(y);
// console.log(z);



var p;
p = 197;
console.log(p);
if(p === undefined) {
    console.log("p is undefined");
}
else {
    console.log("p is not undefined");
}

p = "Hello";
console.log(p); 




p = undefined;  //? But it not a good practice in javaScript
console.log(p);

console.log(typeof(p));