//todo 1. Promise.all() : It is used to handle multiple API calls together.
//? It takes an array of promises as input.

//!  Promise.all([p1, p2, p3]);
//* It will three parallel API calls and get the result. 



//! Case 1 :- 
//? Soppose p1 takes 3sec to complete  -- Success 
//? Suppose p2 takes 1sec to complete -- Success
//? Suppose p3 takes 2 sec to complete -- Success 

//*============OUTPUT :- 
//?============Will be the array of all these three promise [val1, val2, val3], but it will wait for all of them to finish.



//! Case 2 :- 
//? Suppose p1 takes 3sec to complete -- 
//? Suppose p2 takes 1sec to complete -- rejected 
//? Suppose p3 takes 2sec to complete --
//todo --- NOTE :- As soon as any of these promise will get rejected, Promise.all() will throw an ERROR  
//* Immediately throws error, it will not wait for other promises













//todo -- 2. Promise.allSettled() : 
//? Suppose if we pass an array of promises 
//* Promise.allSettled([p1, p2, p3]);



//! Case 1 :- 
//* p1 -> 3sec -> success 
//* p2 -> 1sec -> success 
//* p3 -> 2sec -> success 
//?=======================OUTPUT :- 
//?=======================Will get after 3 seconds  [val1, val2, val3]



//! Case 2 :- 
//* p1 -> 3sec -> success 
//* p2 -> 1sec -> fails 
//* p3 -> 2sec -> success 
//?===========================OUTPUT :- 
//?===========================It will wait for all promises to get settled [val1, err2, val3]














//todo 3. Promise.race() :- Now, as the name suggests, its a race and the person who finish first will be the winner.
//* It will give you the value of first settled promise.
//? Seeking the first one to complete, either fullfilled or rejected


//! Case 1 :- 
//? p1 -> takes 3 seconds 
//? p2 -> takes 1 second -> success -> returns (val2) after 1 second 
//? p3 -> takes 2 seconds 



//! Case 2 :- What if after 1 second p2 fails 
//? p1 -> takes 3 seconds 
//? p2 -> takes 1 second -> error ->  returns (err2) after 1 second 
//? p3 -> takes 2 seconds  
//* Error will come after 1 sec 














//todo 4. Promise.any() :- It again takes a list of promises, whenever the first promise get resolved it will retrun that promise value.
//* Here we will wait for the first success
//? Seeking the first success  


//! Case 1 :- 
//? p1 -> takes 3sec ->  success
//? p2 -> takes 1sec -> fails 
//? p3 -> takes 2sec -> success 
//*=========================OUTPUT :- It will return p3, because it is the first promise that is successful.



//! Case 2 :- If all the promises fails 
//? then it will return a AGGREGATE ERROR -> it will be array of all the errors [err1, err2, err3]









//*=============================================
//* Coding Part :- 
//*=============================================


const p1 = new Promise((resolve, reject) => {
    // setTimeout(() => {
    //     resolve("P1 success");
    // }, 3000);

    setTimeout(() => {
        reject("P1 Failure");
    }, 3000);
})

const p2 = new Promise((resolve, reject) => {
    // setTimeout(() => {
    //     resolve("P2 success");
    // }, 1000);

    setTimeout(() => {
        reject("P2 Failure");
    }, 1000);
})

const p3 = new Promise((resolve, reject) => {
    // setTimeout(() => {
    //     resolve("P3 success");
    // }, 2000);

    setTimeout(() => {
        reject("P3 Failure");
    }, 2000);
})


//* Promise.all() :- 
Promise.all([p1, p2, p3]).then((res) => {
    console.log(res);
}).catch((error) => {
    console.log(error);
})




//* Promise.allSettled() :- 
Promise.allSettled([p1, p2, p3]).then((res) => {
    console.log(res);
}).catch((error) => {
    console.log(error);
})




//* Promise.race() :- 
Promise.race([p1, p2, p3]).then((res) => {
    console.log(res);
}).catch((error) => {
    console.log(error);
})




//* Promise.any() :- 
Promise.any([p1, p2, p3]).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
    console.log(err.errors);
})
//* If all the promises fails then it will give you : AggregateError : All promises were rejected






//! What is AggregateError ? 
//? The AggregateError object represents an error when several errors need to be wrapped in a single error. It is thrown when multiple errors need to be reported by an operation, for example by Promise.any(), when all promises passed to it reject.