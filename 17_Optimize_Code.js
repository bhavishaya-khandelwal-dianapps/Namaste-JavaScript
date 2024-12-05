//* Here we are repeating so many things 
const radius = [3, 1, 2, 4];

const area = function (radius) {
    return Math.PI * radius * radius;
};

const circumference = function (radius) {
    return Math.PI * 2 * radius;
}

const diameter = function (radius) {
    return (radius + radius);
}

const calculate = function (radius, logic) {
    const output = [];
    for(let value of radius) {
        output.push(logic(value));
    }
    return output;
}

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));