//* What is a CallBack Function in JavaScript....??

// setTimeout(function () {
//     console.log("Timer");
// }, 5000);


// function x(y) {
//     console.log("X");
//     y();
// }

// x(function y() {
//     console.log("Y");
// })




//* Closure demo with event listeners
function attatchEventListener() {
    let count = 0;
    document.getElementById("clickMe").addEventListener('click', function() {
        console.log(`Button Clicked ${++count}`);
    });
}

attatchEventListener();



//* Garbage Collection & removeEventListeners 
