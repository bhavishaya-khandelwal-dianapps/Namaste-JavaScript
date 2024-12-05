function x() {
    console.log("Namaste");
}


//* So, y is a higher order function 
function y(x) {
    x();
}


y(x);













//* Here we are repeating so many things 
const radius = [3, 1, 2, 4];

const calculateArea = function (radius) {
    const output = [];
    for(let value of radius) {
        output.push(Math.PI * value * value);
    }
    return output;
}

console.log(calculateArea(radius));


const calculateCircumference = function (radius) {
    const output = [];
    for(let value of radius) {
        output.push(Math.PI * 2 * value);
    }
    return output;
}

console.log(calculateCircumference(radius));


const calculateDiameter = function (radius) {
    const output = [];
    for(let value of radius) {
        output.push(value + value);
    }
    return output;
}

console.log(calculateDiameter(radius));