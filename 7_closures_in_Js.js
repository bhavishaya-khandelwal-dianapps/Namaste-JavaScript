//todo --- Example-1 
function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    y();
}
x();






//todo--- Example-2 
function X() {
    var A = 7;
    return function Y() {
        console.log(A);
    }
    // return Y;  //* It will return function Y()
}
let Z = X();
console.log(Z);


Z();   //* 7
//* So here comes closure into picture





//todo --- Example-3 
function p() {
    var s = 8;
    function q() {
        console.log(s);  //* Here s is not just about the value of s, its about the reference of s 
    }
    s = 100;
    return q;
}
var r = p();
console.log(r);
r();  //* 16




//todo--- Example - 4 
console.log("\n");
function fun1() {
    var value1 = 900;
    function fun2() {
        var value2 = 10;
        function fun3() {
            console.log(value1, value2);
        }
        fun3();  //* This means fun3() forms a closure along with the scope of fun2() and fun1();
    }
    fun2();
}
fun1();






//todo--- Example - 5
