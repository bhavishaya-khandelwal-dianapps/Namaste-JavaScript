{
    //? this is a block or we can say that a block is defined by these curly braces
    //* Block is also known as compound statement
    //? Used to grp multiple js statements together
    var dsbvi = 10;
    console.log(dsbvi);
}



var a = 2343;
let b = 32;
const c = 23;
if(true) {
    var a = 10;
    let b = 20;
    const c = 30;

    console.log(`Global Scope a = ${a}`);

    console.log(`Block Scope b = ${b}`);

    console.log(`Block Scope c = ${c}`);
}
console.log(`Global Scope a = ${a}`);
console.log(`Global Scope b = ${b}`);
console.log(`Global Scope c = ${c}`);

//* One 'b' is from block scope 
//* One 'b' is from script scope




function x() {
    const c = 30;
    console.log(c);
}

x();
console.log(c);  //* 23 








var p = 23;
{
    let p = 24;
    console.log(p);
}  


const m = 10;
{
    const m = 100;
    {
        const m = 200;
        console.log(m);
    }
    console.log(m);
}
console.log(m);