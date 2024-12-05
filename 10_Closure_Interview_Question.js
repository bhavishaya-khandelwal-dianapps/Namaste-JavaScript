//! Example-1 
function outest() {

    var c = 20;
    function outer(b) {
    
        function inner() {
            console.log(a, b, c); 
        }
        let a = 10;
        return inner;

    }
    return outer;

}
let a = 132;

let innerFun = outest()("Hello World");
innerFun();







//! Example-2 
function counter() {
    var count = 0;
    return function incrementCounter() {
        count++;
        console.log(count);
    }
}

let counterFunction = counter();
counterFunction();
counterFunction();


//* This is completely new counter, this will again form a closure with new independent copy
let counterFunction2 = counter();
counterFunction2();
counterFunction2();
counterFunction2();








//! Example-3 
function Counter() {
    var count = 0;
    this.incrementCounter = function () {
        count++;
        console.log(count);
    }

    this.decrementCounter = function () {
        count--;
        console.log(count);
    }
}
console.log("\n");
let counter1 = new Counter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();
counter1.decrementCounter();









//todo --- Whats the relation between garbage collector and closure...??
function A() {
    var x = 436, z = 23;
    return function b() {
        console.log(x);
    }
}
console.log("\n");
var y = A();
y();






