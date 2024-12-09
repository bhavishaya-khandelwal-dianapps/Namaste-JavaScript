let multiply = function (x, y) {
    console.log(x * y);
}

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(4);

let multiplyByThree = multiply.bind(this, 4);
multiplyByThree(34);