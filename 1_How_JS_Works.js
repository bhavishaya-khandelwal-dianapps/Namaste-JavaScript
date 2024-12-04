//todo --- How JS Works........??? 
//? Javascript is a synchronous single-threaded language. 
//? Everything in JS happens inside an Execution Context.






//todo --- What happens when you run JavaScript code....??
//? 

var n = 2;
function square(num) {
    var ans = num * num;
    return ans;
}

var square2 = square(n);
var square4 = square(4);







getName();   
getName2();   //? getName2 is not a function 
getName3();  //? getName3 is not a function  
console.log(x);  //? undefined 
console.log(getName);
var x = 7;

function getName() {
    console.log("Namaste JavaScript");
}

var getName2 = () => {
    console.log("Namaste javaScript");
}

var getName3 = function() {
    console.log("Namaste JavaScript");
}