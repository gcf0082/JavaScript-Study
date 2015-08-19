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

// 函数递归 调用自身
function factorial(n) {
    if ((n == 0) || (n == 1)) {
        return 1;
    }
    else
        return (n * factorial(n - 1));
}

var a, b, c, d, e;
a = factorial(1);  // 1
b = factorial(2);  // 2
c = factorial(3);  // 6
d = factorial(4);  // 24
e = factorial(5);  // 120


// 函数的域
// The following variables are defined in the global scope
var num1 = 20,
    num2 = 30,
    name = "Chamahk";

// This function is defined in the global scope
function multiply() {
    return num1 * num2;
}

multiply(); // 600
// A nested function example
function getScope() {
    var num1 = 2,
        num2 = 3;
    function add() {
        return name + " scored " + (num1 + num2);
    }

    return add();
}

getScope();  // Returns "Chamahk scored 5"

// 作用域和函数堆栈
// 递归 一个函数可以指向并调用自身。有三种方法可以达到这个目的：
// 1、通过使用函数名
// 2、使用arguments.callee
// 3、使用作用域下的一个变量名指向函数

var foo = function bar() {
   // statements go here
}

// 以下语句是等阶的
// bar()
// arguments.callee()
// foo()

// 可以被转化成一个递归函数对其的调用
function loop(x) {
    if (x >= 10)
        return;
    // do stuff
    loop(x + 1);  // the recursive call
}
loop(0);

// 另一个递归
function walkTree(node) {
    if (node == null)
        return;
    // do something with node
    for (var i = 0; i < node.childNodes.length; i++) {
        walkTree(node.childNodes[i]);
    }
}

// 类似堆栈行为
function foo(i) {
    if (i < 0)
        return;
    console.log("begin: " + i);
    foo(i - 1);
    console.log("end" + i);
}

// 嵌套函数和闭包
// 嵌套函数是容器函数的私有成员。它自身也形成了一个闭包。一个闭包是一个可以拥有独立的环境与变量的表达式
function addSquares(a, b) {
    function square(x) {
        return x * x;
    }
    return square(a) + square(b);
}

a = addSquares(2, 3);    // 13
b = addSquares(3, 4);    // 25

function outside(x) {
    function inside(y) {
        return x + y;
    }
    return inside;
}

fn_inside = outside(3);   // 变量状态保存
result = fn_inside(5);
result1 = outside(3)(5);

// 多层嵌套函数
function A(x) {
    function B(y) {
        function C(z) {
            console.log(x + y + z);
        }
        C(3);
    }
    B(2);
}
A(1);  // logs 6( 1 + 2 + 3)