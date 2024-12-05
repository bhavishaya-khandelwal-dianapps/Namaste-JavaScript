//* Example - 1 
console.log("Start");

setTimeout(function cb() {
    console.log("Callback");
}, 4000);

console.log("End");





//* Example - 2 
console.log("Start");

document.getElementById("clickMe").addEventListener('click', function callBack() {
    console.log("CallBack");
});//* It means it registers a callback function on click event 

console.log("End");  






//* Example - 3
console.log("Start");
setTimeout(function cbT() {
    console.log("CB SetTimeout");
}, 5000);

fetch("https://github.com/BHAVISHAYA")
.then(function cbF() {
    console.log("CB Netflix");
})

console.log("End");