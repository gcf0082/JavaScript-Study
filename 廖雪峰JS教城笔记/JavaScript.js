// 创建对象
var Student = {
    name: "Robot",
    height: 1.6,
    run: function () {
        console.log(this.name + " is running...");
    }
};

var xiaoming = {
    name: "小明"
};

xiaoming._proto_ = Student;
xiaoming.name;// 小明
xiaoming.run(); // 小明 is running...

// 原型对象
var Student = {
    name: "Robot",
    height: 1.2,
    run: function () {
        console.log(this.name + " is running");
    }
};

function createStudent(name) {
    // 基于Student原型创建一个新对象
    var s = Object.create(Student);
    // 初始化对象:
    s.name = name;
    return s;
}

var xiaoming = createStudent("小明");
xiaoming.run();  // 小明 is running...
xiaoming._proto_ === Student;// true

// 创建 Array 对象
var arr = [1, 2, 3];

// 构造函数
function Student(name) {
    this.name = name;
    this.hello = function () {
        alert("Hello, " + this.name + "!");
    }
}

var xiaoming = new Student("小明");  // 创建一个对象 xiaoming
var xiaohong = new Student("小红"); // 创建另一个对象 xiaohong
xiaoming.name; // 小明
xiaoming.hello();  // Hello, 小明！


xiaoming.name; // 小明
xiaohong.name; // 小红
xiaoming.hello; // function: Student.hello();
xiaohong.hello; // function: Student.hello();
xiaoming.hello === xiaohong.hello;  // false

function Student(name) {
    this.name = name;
}

Student.prototype.hello = function () {
    alert("Hello, " + this.name + "!");
};


function Student(props) {
    this.name = props.name || "匿名"; // 默认值是 "匿名"
    this.grade = props.grade || 1; // 默认值是1
}

Student.prototype.hello = function () {
    alert("Hello, " + this.name + "!");
}

function creatStudent(props) {
    return new Student(props || {});
}

var xiaoming = createStudent({
    name:"小明"
})

xiaoming.grade; // 1

function PrimaryStudent(props) {
    // 调用Student构造函数，绑定this变量
    Student.call(this, props);
    this.grae = props.grade || 1;
}

// 空函数 F
function F() {
}

// 把F的原型指向Student.prototype
F.prototype = Student.prototype;

// 把PrimaryStudent的原型指向一个新的对象，F对象的原型正好指向Student.prototype
PrimaryStudent.prototype = new F();

// 把PrimaryStudent原型的构造函数修复为PrimaryStudent
PrimaryStudent.prototype.constructor = PrimaryStudent;

// 继续在PrimaryStudent原型(就是new F()对象)上定义方法
PrimaryStudent.prototype.getGrade = function () {
    return this.grade;
};

// 创建xiaoming
var xiaoming = new PrimaryStudent({
    name: "小明",
    grade: 2
});

xiaoming.name; // 小明
xiaoming.grae; // 2

// 验证原型
xiaoming._proto_ === PrimaryStudent.prototype; // true
xiaoming._proto_._proto_ === Student.prototype; // true



