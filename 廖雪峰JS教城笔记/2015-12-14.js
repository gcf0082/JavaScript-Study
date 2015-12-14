var robot = {
    name: 'Robot',
    height: 1.6,
    run: function () {
        console.log(this.name + " is running...");
    }
}

var Student = {
    name: 'Robot',
    height: 1.2,
    run: function () {
        console.log(this.name + ' is running...');
    }
}

var xiaoming = {
    name: '小明'
};
xiaoming._proto_ = Student;
xiaoming.name;  // '小明'
xiaoming.run(); // 小明 is running

// 如果你把 xiaoming 的原型指向其它对象
var Bird = {
    fly: function () {
        console.log(this.name + " is flying...");
    }
};
xiaoming._proto_ = Bird;

xiaoming.fly(); // 小明 is flying

// 上述函数用于演示目的，用函数创建小明
// 原型对象
var Student = {
    name: "Robot",
    height: 1.2,
    run: function () {
        console.log(this.name + " is running...");
    }
};

function createStudent(name) {
    // 基于Student原型创造一个新对象
    var s = Object.create(Student);
    // 初始化新对象
    s.name = name;
    return s;
}

var xiaoming = createStudent("小明");
xiaoming.run(); // 小明 is running
xiaoming._proto_ === Student; // true

// JavaScript 对每个创建的对象都会设置一个原型，指向它的原型对象
// js 作用域链
// 当我们用obj.xxx访问一个对象的属性时，JavaScript引擎先在当前对象上查找该属性，如果没有找到，就到其原型对象上找，如果还没有找到，
// 就一直上溯到Object.prototype对象，最后，如果还没有找到，就只能返回undefined。
// 创建一个Array对象
var arr = [1, 2, 3];
// arr ----> Array.prototype ----> Object.prototype ----> null

// 创建一个函数时
function foo() {
    return 0;
}
// foo ----> Function.prototype ----> Object.prototype ----> null

// 构造函数
// 除了直接用{ ... }创建一个对象外，JavaScript还可以用一种构造函数的方法来创建对象。它的用法是，先定义一个构造函数：
function Student(name) {
    this.name = name;
    this.hello = function () {
        alert("Hello, " + this.name + "!");
    }
}

// 在JavaScript中，可以用关键字new来调用这个函数，并返回一个对象：
var xiaoming = new Student("小明");
xiaoming.name; // 小明
xiaoming.hello(); // Hello, 小明!
// xiaoming ----> Student.prototype ----> Object.prototype ----> null

// 小问题
xiaoming.name; // 小明
xiaohong.name; // 小红
xiaohong.hello; // function: Student.hello();
xiaoming.hello; // function: Student.hello();
xiaoming.hello === xiaohong.hello; // false

// 如果我们通过new Student()创建了很多对象，这些对象的hello函数实际上只需要共享同一个函数就可以了，这样可以节省很多内存。
// 修改如下
function Student(name) {
    this.name = name;
}

Student.prototype.hello = function () {
    alert('Hello, ' + this.name + "!");
};

// 编写一个createStudent() 函数，在内部封装所有的new 操作。一个常用的编程模式像这样
function Student(props) {
    this.name = props.name || "匿名"; // 默认值为 '匿名'
    this.grade = props.grade || 1;  // 默认值为1
}

Student.prototype.hello = function () {
    alert('Hello, ' + this.name + "!");
};

function createStudent(props) {
    return new Student(props || {});
}

// 这个createStudent()函数有几个巨大的优点：一是不需要new来调用，二是参数非常灵活，可以不传，也可以这么传：
var xiaoming = createStudent({
    name: "小明"
});

// 构造函数回顾
function Student(props) {
    this.name = props.name || "Unnamed";
}

Student.prototype.hello = function () {
    alert("Hello, " + this.name + "!");
}

function PrimaryStudent(props) {
    // 调用Student构造函数，绑定this变量
    Student.call(this.props);
    this.grade = props.grade || 1;
}

// ProjectStudent构造函数
function PrimaryStudent(props) {
    Student.call(this, props);
    this.grade = props.grade || 1;
}

// 空函数F
function F() {
    
}

// 把F的原型指向Student.prototype
F.prototype = Student.prototype;

// 把PrimaryStudent的原型指向一个新的F对象，F对象的原型正好指向Student.protype
PrimaryStudent.prototype = new F();

// 把PrimaryStudent原型的构造函数修复为PrimaryStudent;
PrimaryStudent.prototype.constructor = PrimaryStudent;

// 继续在PrimaryStudent原型(就是 new F() 对象)上定义方法;
PrimaryStudent.prototype.getGrade = function () {
    return this.grade;
};

// 创建 xiaoming:
var xiaoming = new PrimaryStudent({
    name: "小明",
    grade: 2
});
xiaoming.name; // "小明"
xiaohong.grade; // 2

// 验证原型
xiaoming._proto_ === PrimaryStudent.prototype; // true
xiaoming._proto_._proto_ === Student.prototype; // true

// 验证继承关系
xiaoming instanceof PrimaryStudent; // true
xiaoming instanceof Student; // true  instanceof 验证某个实例是否是一个对象的实例
