// example 
function square(num) {
    return num * num;
}

function myFunc(theObject) {
    var mycar = { make: "Honda", model: "Accord", year: 1998 },
        x,
        y;
    x = mycar.make;   // x gets the value "Honda"

    myFunc(mycar);
    y = mycar.make;   // y gets the value "Toyota"
}

// 重新给参数分配一个对象，并不会对函数的外部有任何影响，因为这样只是改变了参数的值，而不是改变了参数的属性

// 在第一段例子里，对象mycar被传递给了函数myFunc,进而函数改变了它。第二段例子里，函数并没有改变传递来的对象；
// 相反，它生成了一个新的恰好和传递的全局对象同名的局部变量，因此对传递来的全局对象没有任何影响。
function myFunc1(theObject) {
    theObject = { make: "Ford", model: "Focus", year: 2006 };


    var mycar = { make: "Honda", model: "Accord", year: 1998 },
        x,
        y;
    x = mycar.make;
    myFunc1(mycar);
    y = mycar.make;
}

// 满足一定条件时，定义函数  
// 一下定义方法是非法的
//if (num == 0) {
//    function myFunc3(theObject) {
//        theObject.make = "Toyota";
//    }
//}

// 由表达式产生的函数
var square = function (number) { return number * number };

function map(f, a) {
    var result = [], // create a new Array
        i;
    for (i = 0; i < a.length; i++) {
        result[i] = f(a[i]);
    }
}

function mapuse() {
    var m = [];
    m = map(function (x) { return x * x * x }, [0, 1, 2, 5]);
    alert(m);
}

// window.onload = mapuse();

