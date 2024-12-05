//* 1. Function Statement / Function Declaration :- 
a();
function a() {
    console.log("So, this way of creating a function is called function statement");
}



//* 2. Function Expression :- 
// b();  Not allowed to call above declaration 
var b = function () {
    console.log("We can assign functions to a variable and this way of creating a function is called function expression")
}



//* 3. Function Declaration :- 
//? It is nothing but function statement



//* 4. Anonymous Function :- 
//? A function without a name is called as anonymous function.
// function() {

// }
//! This will going to throw a syntax error---Function statements require a function name
//todo--- Anonymous functions are used in a place where functions are used as values






//* 5. Named Function Expression :- 
var c = function xyz() {
    console.log("Named Function Expression");
}
c();






//* 6. Difference between Parameters and Arguments...??
//? These are parameters 
function fun(param1, param2) {
    console.log(param1, param2);
}

//* The value which we pass inside a function are known as arguments. 
fun(1, 2); 




//* 7. First Class Function :- 
//? The ability to use functions as values is known as first class functions.  
//? The ability of functions to be used as values and can be passed them as an argument to another functions and can be returned from the functions if known as FIRST CLASS FUNCTIONS.






//* 8. Arrow Functions :- Introduced in ES6 
