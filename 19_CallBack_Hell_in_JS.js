//? Javascript is a synchronous single threaded language and it can do one thing at a time.
//* And whatever code you provide to JS, the JS engine quickly executes it and it does not wait for anything. 
//todo --- Callback :- Any function that is passed as an argument to another function so that it can be executed in that other function is called as callback function.




console.log("Namaste");


//* Now, its the job of setTimeout to executes this function after 5000ms 
setTimeout(function () {
    console.log("JavaScript");
}, 5000);



console.log("Season 2");


//* Callback is a powerful way to do asynchronous things in JavaScript.

const cart = ["shoes", "pants", "kurta", "shirts"];



// api.createOrder();
// api.proceedToPayment();

api.createOrder(cart, function() {
    api.proceedToPayment(function () {
        api.showOrderSummary(function () {
            api.updateWallet(function () {

            });
        });
    });
});
//* So the problem is that API is dependent on one after another, so this is nothing but a callback hell.
//* Pyramid of Doom










//? INVERSION OF CONTROL -> is the another problem we see while using callbacks, it is like you loose the control of your code when we are using callbacks.

api.createOrder(cart, function() {
    api.proceedToPayment()
})



//todo --- Async programming exixt in JS, only because callback exists. 