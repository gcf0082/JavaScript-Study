//全局命名空间
var MYAPP = MYAPP || {};

//创建子命名空间
MYAPP.event = {};

//给普通方法创建一个叫做MYAPP.commonMethod的容器
MYAPP.commonMethod = {
    regExForName: "",   //定义名字的正则验证
    regExForPhone: "",   //定义电话的正则验证
    validateName: function (name) {
        // 对名字name做些操作，可以通过使用"this.regExForname"
        // 访问regExForName变量
    },
    validatePhoneNo: function (phoneNo) {
        //  对电话号码做操作
    }
}

//对象和方法一起声明
MYAPP.event = {
    addListener: function (el, type, fn) {
        //代码
    },
    removeListener: function (el, type, fn) {
        //代码
    },
    getEvent: function (e) {
        //代码
    }
    //还可以添加其他的属性和方法
}

//使用addListner方法的写法：
MYAPP.event.addListener("yourel", "type", callback);

//使用Math对象获得一个随机数
console.log(Math.random());

//定义一个新类Person
function Person() { }
//或
var Person = function () { }

//对象（类的实例）
//我们使用new obj创建对象obj的新实例，将结果(obj 类型赋值给一个变量方便稍后调用)
function Person() {
    var person1 = new Person();
    var person2 = new Person();
}

//构造器
function Person() {
    alert("Person instantiated");
}
var person1 = new Person();
var person2 = new Person();

//属性
//为Person类定义一个属性firstName并在实例化时赋初值
function Person(firstName) {
    this.firstName = firstName;
    alert("Person instantiated");
}

var person1 = new Person("Alice");
var person2 = new Person("Bob");

// Show the firstName properties of the objects
alert("person1 is " + person1.firstName);
alert("person2 is " + person2.firstName);

//方法
function Person(firstName) {
    this.firstName = firstName;
}

Person.prototype.SayHello = function () {
    alert("I'm is " + this.firstName);
}

var person1 = new Person("Alice");
var person2 = new Person("Bob");
var helloFunction = person1.SayHello;

person1.SayHello();   // Alice
person2.SayHello();   // Bob
helloFunction();      // undefined

alert(helloFunction === person1.SayHello);       // true
alert(helloFunction === Person.prototype.SayHello);       //true
helloFunction.call(person1);      // Alice

// 继承
// 定义Person构造器
function Person(firstName) {
    this.firstName = firstName;
}
//  在Person.prototype中加入方法
Person.prototype.walk = function () {
    alert("I am walking!");
};
Person.prototype.SayHello = function () {
    alert("Hello, I'm " + this.firstName);
};

// 定义Student构造器
function Student(firstName, subject) {
    // 调用父类构造器，确保(使用Function#call)"this"在调用过程中使用正确
    Person.call(this, firstName);

    // 初始化Student 类特有属性
    this.subject = subject;
}

// 建立一个由Person.prototype继承而来的Student.prototype对象
// 注意：常见的错误是使用 "new Person()" 来建立Student.prototype
// 这样做的错误有很多，最重要的一点是我们在实例化时
// 不能赋予 Person 类任何的firstName参数
Student.prototype = Object.create(Person.prototype);

// 设置 "constructor" 属性指向Student
Student.prototype.constructor = Student;

// 更换"sayHello"方法
Student.prototype.SayHello = function () {
    alert("Hello, I'm " + this.firstName + ". I'm studying " + this.subject + ".");
}

// sayGoodBye 方法
Student.prototype.sayGoodBye = function () {
    alert("GoodBye!");
};

// 测试实例
var student1 = new Student("Janet", "Applied Physics");
student1.SayHello();
student1.sayGoodBye();
Student.walk();

// Check that instanceof works correctly
alert(student1 instanceof Person);      //true
alert(student1 instanceof Student);     //true

