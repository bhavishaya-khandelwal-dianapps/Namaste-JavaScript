//* Promises :- Promises are used to handle async operations in JS. 
//? A promise is an object that represent the eventaul completion or failure of any asynchronous opeartion.


const cart = ["shoes", "pants", "kurta"];

// createOrder(cart);   //* orderId 




//* How we handle this situation using callback...? 
//? Now, it is the responsibility of createOrder() API to create an order first of all and then will call our callBack function back once the order is created with the orderId.  
//* So, this is how we handle async operations using callbacks.
//? But there is a issue with this code and that is INVERSION OF CONTROL.
//* We are blindly trust our createOrder() function, but what if this function never calls the callBack() function or it may calls it twice, who knows...??

// createOrder(cart, function() {
//     proceedToPayment(orderId); 
// });

//todo ---- NOTE : Here we are passing a callback function 











//todo ---- Now, let us handle this type of situation using promises.....?? 

// const promise = createOrder(cart);  //* Whenever this line is executed by JS this createOrder API will return us a promise and promise is nothing but you can assume it to be a empty object. 
//? { data : undefined }
//? After sometime this promise object will filled with data automatically 
//* So this is what promise is
//* { data : orderDetails }


// promise.then(function (orderId) {
//     proceedToPayment(orderId); 
// });

//todo ---- Here we are attatching a callback function 

//* The promise will guarantee us that i will call this callback function only whenever this promise gets the data inside this promise object.



const GITHUB_API = "https://api.github.com/users/bhavishaya-khandelwal-dianapps";


const user = fetch(GITHUB_API);

//todo --- There can be only 3 states in promise 
//? 1. Pending 
//? 2. Fullfilled 
//? 3. Rejected








//*=====================================
//* Interview Questions :- 
//*=====================================

//! Que : 1 What is Promise in JS...??
//? Promise is a container for FUTURE value.
//? A Promise is an object representing the eventual completion or failure of an asynchronous operation. 


//! Que : 2 What is callback hell in JS...??? 
//? So according to the MDN Docs, callback hell is a situation in JavaScript where multiple nested callback functions make code difficult to read and debug. 
//* Or we can say that callback hell occurs when multiple callbacks are nested within each other, 
//? Or it also happens, when we are dealing with asynchronous operations that depends on each other. 


//! Que : 3 What is callback function in JS...??
//? A function which is to be executed after another function has finished execution. 
//* More formally, Any function that is passed as an argument to another function so that it can be executed in that other function is called as a callback function. 


//! Que : 4 What is promise chaining...??
//? Promise chaining in JS is a technique that uses .then() and .catch() methods to sequentially handle asynchronous operations. It allows developers to pass the results of one promise to the next as input, creating a chain of promises. 
//todo ---NOTE :- Always return a promise from a promise when we are chaining it. 


createOrder(cart)
.then(function (orderId) {
    return proceedToPayment(orderId);
})
.then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
})
.then(function (paymentInfo) {
    return updateWalletBalance(paymentInfo); 
})
.catch((error) => {
    console.log(error);
})





//? This is how we create promise chaining 
createOrder(cart)
.then((orderId) => {
    return proceedToPayment(orderId);
})
.then((paymentInfo) => {
    return showOrderSummary(paymentInfo);
})
.then((paymentInfo) => {
    updateWalletBalance(paymentInfo);
})
.catch((error) => {
    console.log(error);
})