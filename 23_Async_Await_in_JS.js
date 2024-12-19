//* What is async ?
//* What is await ?
//* How async await works behind the scenes ?
//* Examples of using async / await ? 
//* Error Handling ? 
//* Interviews 
//* Async await vs Promise.then / .catch


const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved");
    }, 10000);
});

async function getData() {
    return p;
}
//* So, this is a async function, let's see how this function is different from normal function

//? 1. It should always return a promise 
//* 2. If you don't return a promise from it, and if you return a value from it, then this function will automatically wrap this value inside a promise and then return that promise.


// const data = getData();
// data.then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })


// //? Both are same 

// p.then((res) => {
//     console.log(res);
// }).catch((error) => {
//     console.log(error);
// })












//todo --- How we use async with await...??
//? Async and await combo is used to handle promises 


function getTheData() {
    console.log("Hellooooo");
    
    //* Here, JS Engine will not wait for promise to be resolved 
    p.then((res) => {
        console.log(res);
    })
    
    console.log("Namaste JavaScript");
}

// getTheData();




const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2 Resolved");
    }, 5000);
})




//todo --- NOTE : await is a keyword that can be used inside an async function
async function handlePromise() {
    console.log("Hello World");

    //* Here our JS Engine was waiting for promise to be resolved
    const value = await p;
    console.log("Namaste JavaScript");
    console.log(value);


    const value_2 = await p2;
    console.log("Namaste JavaScript 2");
    console.log(value_2);
}

handlePromise();















//todo --- Real world example of async await :- 
const API_URL = "https://api.github.com/users/BHAVISHAYA";
async function getUserData() {
    try {
        const response = await fetch(API_URL);
        console.log(response);
        const data = await response.json();
        console.log(data);
    }
    catch(error) {
        console.log(error);
    }
}

getUserData();