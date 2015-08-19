
//面向对象与基于对象
//定义一个函数
function add(a, b) {
    add.invokeTimes++;
    return a + b;
}
//因为函数本身也是对象，这里为函数add定义一个属性，用来记录此函数被调用的次数
add.invokeTimes = 0;
add(1 + 1);
add(2 + 3);
console.log(add.invokeTimes);  //2

//模拟JavaScript中类和继承
//通过prototype创建自定义对象的一个例子
//构造函数
function Person(name, sex) {
    this.name = name;
    this.sex = sex;
}
//定义person的原型，原型中的属性可以被自定义对象引用
Person.prototype = {
    getName: function () {
        return this.name;
    },
    getSex: function () {
        return this.sex;
    }
}
//这里我们把函数Person称为构造函数，也就是创建自定义对象的函数。
//可以看出，JavaScript通过构造函数和原型的方式模拟实现了类的功能。
//创建自定义对象（实例化）的代码
var zhangsan = new Person("ZhangSan", "man");
console.log(zhangsan.getName());       //"ZhangSan"
var chun = new Person("ChunTian", "woman");
console.log(chun.getSex());   //Sex
//prototype模板并不是被拷贝到实例化的对象中，而是一种链接的方式
function Person(name, sex) { 
    this.name = name;
    this.sex = sex;
}
Person.prototype.age = 20;
var zhang = new Person("ZhangSan", "man");
console.log(zhang.age);  //20
//覆盖prototype中age的属性
zhang.age = 19;
console.log(zhang.age);  //19
delete zhang.age;
console.log(zhang.age);   //20

//一个简单的继承
function Employee(name, sex, employeeID) {
    this.name = name;
    this.sex = sex;
    this.employeeID = employeeID;
}
//将Employee的原型指向Person的一个实例
//因为Person 的实例可以调用Person原型中的方法，所以Employee的实例也可以调用Person原型中的属性
Employee.prototype = new Person();
Employee.prototype = getEmployeeID = function () {
    return this.employeeID;
};
var zhang = new Employee("ZhangSan", "man", "1234");
console.log(zhang.getName());

//JavaScript中的几个重要的属性
//this
//this表示当前对象。在全局范围内使用this，则指代当前页面对象window;在函数中使用this,
//则this指代什么事根据运行时此函数在什么对象上被调用。
//可以用apply和call两个全局方法来改变函数中this的具体指向
//1、纯粹的函数调用
function test() {
    this.x = 1;
    alert(this.x);
}
test();//1

var x = 1;
function test1() {
    alert(this.x);
}
tes1t();  //1

var x = 1;
function test2() {
    this.x = 0;
}
test2();
alert(x);//0
//2、作为对象方法的调用
function test() {
    alert(this.x);
}
var o = {};
o.x = 1;
o.m = test;
o.m();   //1
//3、作为构造函数使用
function test() {
    this.x = 1;
}
var o = new test();
alert(o.x);  //1
//4、apply调用
var x = 0;
function test() {
    alert(this.x);
}
var o = {};
o.x = 1;
o.m = test;
o.m.apply();  //0
//apply()的参数为空时，默认调用全局对象。因此，这时调用的运行结果为0，证明this指的是全局对象。
o.m.apply(o); //1
运行结果变成了1，证明了这时this代表的是对象o


//prototype



//constructor