
const pr1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise 1 reject");
    }, 2000);
});


const pr2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise 2 reject");
    }, 1000);
})


const pr3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise 3 reject");
    }, 7000);
})



// Promise.all([pr1, pr2, pr3])
// .then((res) => {
//     console.log(res);
// })
// .catch((error) => {
//     console.log(error);
// })




// Promise.allSettled([pr1, pr2, pr3])
// .then((res) => {
//     console.log(res);
// })
// .catch((error) => {
//     console.log(error);
// })





// Promise.race([pr1, pr2, pr3])
// .then((res) => {
//     console.log(res);
// })
// .catch((error) => {
//     console.log(error);
// })





Promise.any([pr1, pr2, pr3])
.then((res) => {
    console.log(res);
})
.catch((erro) => {
    console.log(erro);
})
