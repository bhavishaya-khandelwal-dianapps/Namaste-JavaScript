//? Example 1 
function x() {
    var a = 3;
    function y() {
        console.log(a);
    }
    y();
}

x();




//? Example 2 
function fun1() {
    var val1 = 10;
    function fun2() {
        var val2 = 20;
        function fun3() {
            var val3 = 30;
            console.log(val1, val2, val3);
        }
        fun3();
    }
    fun2();
}

fun1();