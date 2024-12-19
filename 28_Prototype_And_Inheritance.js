let arr = ["Akshay", "Aditya", "Anurag", "Akul", "Anmol"];


let object = {
    name : "Bhavishaya Khandelwal", 
    city : "Jaipur", 
    getInfo : function() {
        console.log(this.name + " from " + this.city);
    }
};


function fun() {
    console.log("FUN");
}


//*   arr.__proto__  ===  Array.prototype
let object2 = {
    name : "Anmol",
};


//* Never do this
object2.__proto__ = object;


object2.getInfo();


Function.prototype.myBind = function() {
    console.log("lsdkb");
}