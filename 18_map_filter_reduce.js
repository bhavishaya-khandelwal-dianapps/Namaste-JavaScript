//* Map, filter, reduce are higher order functions


//? 1. Map function is used to transform an array. 
const arr = [5, 1, 3, 2, 6];
console.log(arr);


function double(x) {
    return x * 2;
}

function triple(x) {
    return x * 3;
} 

function binary(num) {
    return num.toString(2);
}

const output = arr.map(binary);

console.log(output);
console.log("\n");






//? 2. FIlter FUnction is basically used to filter. 

function isOdd(x) {
    return (x % 2);
}

function isEven(x) {
    return (x % 2 === 0);
}

const odd = arr.filter(isOdd);
const even = arr.filter(isEven);
console.log(odd);
console.log(even);
const greater = arr.filter((currELe) => {
    return currELe > 4;
})
console.log(greater);
console.log("\n");





//? 3. Reduce -> 
let sum = arr.reduce((accumulator, currELe, index) => {
    return accumulator = accumulator + currELe;
}, 0);
console.log("Sum =", sum);


let maxValue = arr.reduce((accu, currEle) => {
    if(accu <= currEle) {
        accu = currEle;
    }
    return accu;
}, 0);
console.log(maxValue);


let minValue = arr.reduce((accu, currEle) => {
    if(currEle <= accu) {
        accu = currEle;
    }
    return accu;
}, maxValue);
console.log(minValue);










//todo-- Some more examples -> 
const users = [
    { 
        firstName : "Bhavishaya", 
        lastName : "Khandelwal", 
        age : 22, 
    }, 
    {
        firstName : "Tarush",
        lastName : "Jhalani", 
        age : 21, 
    },
    {
        firstName : "Karan",
        lastName : "Basandani", 
        age : 20,
    },
    {
        firstName : "Aditi", 
        lastName : "Pawar", 
        age : 22,
    },
];


const fullName = users.map((elem) => {
    return elem.firstName + " " + elem.lastName;
});

console.log(fullName);







//? Freq of age 
const ageMap = users.reduce((accu, currEle, index, arr) => {
    if(accu[currEle.age]) {
        accu[currEle.age]++;
    }
    else {
        accu[currEle.age] = 1;
    }
    return accu;
}, {});

console.log(ageMap);




const nums = [1, 2, 2, 3, 1, 1, 2, 4, 5];
const freq = nums.reduce((accu, currEle) => {
    if(accu[currEle]) {
        accu[currEle]++;
    }
    else {
        accu[currEle] = 1;
    }
    return accu;
}, {});

console.log(freq);