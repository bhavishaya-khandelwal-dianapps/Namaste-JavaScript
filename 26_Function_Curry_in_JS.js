// let multiply = function (x, y) {
//     console.log(x * y);
// }

// let multiplyByTwo = multiply.bind(this, 2);
// multiplyByTwo(4);

// let multiplyByThree = multiply.bind(this, 4);
// multiplyByThree(34);










function add(a) {
    return function(b) {
        return function(c) {
            return (a + b + c);
        }
    }
}

const addVar = add(5);
const addVar2 = addVar(5);
const res = addVar2(5);

console.log(res);