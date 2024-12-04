// function x() {
//     var i = 1;
//     setTimeout(function() {
//         console.log(i);
//     }, 3000);
//     console.log("Namaste JavaScript");
// }

// x();





function X() {
    for(var i = 1 ; i <= 5 ; i++) {
        
        function close(i) {
            setTimeout(function() {
                console.log(i);
            }, i * 1000);
        }

        close(i);
    }

    console.log("Namaste JavaScript");
}

X();

//* Output :- 6 6 6 6 6 
//* It is working this way because of closure 