

//*==============================
//* NOTE : "this" keyword works differently in strict and non-strict mode 
//*==============================



//todo===== 1.  "this" keyword in global space :- 
//? represent window object 
console.log(this);  //* Window object
//! Same in both strict and non-strict mode 






//todo===== 2. "this" keyword inside a function :- 

function x() {
    console.log(this);
}

x();
//! In non-strict mode -> value is window 
//! In strict mode -> value is undefined 







//todo===== 3. "this" inside non strict mode - (this substitution)



//todo===== 4. If the value of "this" keyword is undefined or null "this" will be replaced with globalObject



//todo===== 5. The value of "this" keyword depends on how "this" is called
x();
window.x();




//todo===== 6. "this" keyword inside a object's method :- 

const obj = {
    a : 10, 
    y : function() {
        //* here the value of "this" if the object itself 
        console.log(this);  
    }
};

obj.y();






//todo===== 7. call, apply, bind methods (sharing methods) :

const student = {
    name : "Bhavishaya Khandelwal", 
    printName : function() {
        console.log(this.name);
    }
};

const student_2 = {
    name : "Aditi Pawar", 
};



//* To override the value of "this" keyword, we can use call() method 
student.printName.call(student_2);  //* value of "this" = student_2 


//? All these methods are used to change the value of "this" keyword










//todo===== 8. "this" keyword inside arrow function :- 
//? Arrow functions does not have their own "this" 
//? They take the value of there lexical environment were they are enclosed 


//! Example 1 :- 
const obj3 = {
    x : 2, 
    y : () => {
        console.log(this);  //? It will take the value of globalSpace 
    }
};

obj3.y();





//! Example 2 :- Whenever you see a arrow function the value of this "this" keyword will be where this arrow function is lexically enclosed 
const obj4 = {
    a : 2,
    x : function() {
        //* enclosing lexical context 
        const Y = () => {
            console.log(this);
        }
        Y();
    }
};

obj4.x();














//todo===== 9. "this" keyword inside DOM :- 
//? The value is reference to HTMLelement 









//todo======10. "this" inside class, constructor
