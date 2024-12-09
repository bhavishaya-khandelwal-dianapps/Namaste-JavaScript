const cart = ["shoes", "pants", "kurta"];
// const cart = [];



createOrder(cart)
.then((orderId) => {
    console.log(orderId);
    return orderId;
})
.then((orderId) => {
    return proceedToPayment(orderId);
})
.then((paymentInfo) => {
    console.log(paymentInfo);
    return paymentInfo;
})
.catch((error) => {
    console.log(error);
})



function createOrder(cart) {
    //* We can create a promise using Promise() constructor and this promise constructor will take a function and this functions contains two parameters one is called RESOLVE, and the other one is REJECT. 
    const pr = new Promise(function(resolve, reject) {

        //* validateCart 
        if(!validateCart(cart)) {
            const err = new Error("Cart is empty");
            reject(err);
        }
        //* logic for create order 
        // else {
        //     const orderId = "12345";
        //     resolve(orderId);
        // }
        const orderId = "12345";
        if(orderId) {
            setTimeout(function() {
                resolve(orderId);
            }, 1000);
        }
    });
    
    return pr;
}



function validateCart(cart) {
    if(cart.length === 0) return false;
    return true;
}



function proceedToPayment(orderId) {
    return new Promise(function(resolve, reject) {
        resolve("Payment Successful");
    });
}