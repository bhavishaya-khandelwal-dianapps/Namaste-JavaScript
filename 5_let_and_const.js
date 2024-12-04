var b = 10;


// console.log(a);
let a = 13;  //? Anything before line number 6 will treat as TEMPORAL DEAD ZONE for a 

console.log(a);
console.log(b);


var x = 32;
console.log(x);
console.log(window.x);


var x = 3;
console.log(x);



// const c;  //? We can't miss initialization in case of const 

const c = 12324;
console.log(c);
// c = 23;
// console.log(c);   //* TypeError : Assignment to constant variable 



const obj = {
    name : "Bhavishaya Khandelwal",
};

obj.age = 32;
console.log(obj);