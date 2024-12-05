console.log("Start");

setTimeout(() => {
    console.log("CallBack");
}, 0);

console.log("End");

//* million of line of code 


let startDate = new Date().getTime();
let endDate = startDate;
while(endDate < startDate + 10000) {
    endDate = new Date().getTime();
}

console.log("While expires");