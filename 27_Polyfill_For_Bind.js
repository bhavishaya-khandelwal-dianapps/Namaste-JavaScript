let name = {
    firstName : "Bhavishaya", 
    lastName : "Khandelwal", 
};

let printName = function(homeTown, state) {
    console.log(this.firstName + " " + this.lastName + " " + homeTown + " " + state);
}

let printMyName = printName.bind(name, "Bandikui", "Rajasthan");
printMyName();
//* So that's how the traditional bind function works 







//? Our task is to write our own implementation of bind method 
Function.prototype.myBind = function (...args) {
    //* this -> printName
    let obj = this, params = args.slice(1);
    return function(...args2) {
        obj.apply(args[0], [...params, ...args2]);
    };
}

let printMyName2 = printName.myBind(name, "Bandikui", "Rajasthan");
printMyName2();