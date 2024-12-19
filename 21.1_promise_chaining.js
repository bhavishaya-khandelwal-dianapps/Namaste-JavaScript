const cart = ["shoes", "t-shirt", "jeans", "pants"];


const validateCart = (cart) => {
    if(cart.length > 0) {
        return true;
    } 
    return false;
}


const createOrder = (cart) => {
    const pr = new Promise((resolve, reject) => {
        if(validateCart(cart)) {
            const newOrderID = "123";
            resolve(newOrderID);
        }
        else {
            reject("Your cart is empty");
        }
    });
    return pr;
}


const proceedToPayment = (orderId) => {
    return new Promise((resolve, reject) => {
        resolve("Payment Successful");
    });
}

const updateWallet = (paymentInfo) => {
    const pr = new Promise((resolve, reject) => {
        if(paymentInfo) {
            resolve("Wallet updated successfully");
        }
        else {
            reject("Transaction failed");
        }
    })
    return pr;
}


createOrder(cart)
.then((orderId) => {
    console.log(orderId)
    return proceedToPayment(orderId);
})
.then((paymentInfo) => {
    console.log(paymentInfo);
    return updateWallet(paymentInfo);
})
.then((aboutTransaction) => {
    console.log(aboutTransaction);
    return aboutTransaction;
})
.catch((error) => {
    console.log(error);
})