let myName = {
    firstName : "Bhavishaya", 
    lastName : "Khandelwal", 
    // printFullName : function() {
    //     console.log(this.firstName + " " + this.lastName);
    // }
};


let printFullName = function(homeTown, state) {
    console.log(this.firstName + " " + this.lastName + " from " + homeTown + ", " + state);
}

// myName.printFullName();
printFullName.call(myName, "Bandikui", "Rajasthan");

let myName2 = {
    firstName : "Adit",
    lastName : "Pawar",
};


//* Function borrowing :- 
// myName.printFullName.call(myName2);
printFullName.call(myName2, "Ajmer", "Rajasthan");




printFullName.apply(myName, ["Pune", "Maharashtra"]);



let printMyName = printFullName.bind(myName2, "Nagpur", "Maharashtra");
printMyName();




//* Call() :- Here we pass arguments seperated by comma's 
//? Apply() :- The only difference between call and apply method is the way we pass the arguments, Here we pass arguments in a array list  
//* Bind() :- The bind() method as the name suggests, binds this method(printFullName) with a object and returns us the copy of that method so that we can use them in future.
