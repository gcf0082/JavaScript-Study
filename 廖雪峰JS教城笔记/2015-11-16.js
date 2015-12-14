// 序列化
var xiaoming = {
    name: "小明",
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    "middle-school": "\'W3C\'Middle School",
    skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};

alert(JSON.stringify(xiaoming));
// {"name":"小明","age":14,"gender":true,"height":1.65,"grade":null,"middle-school":"'W3C'Middle School","skills":["JavaScript","Java","Python","Lisp"]}
alert(JSON.stringify(xiaoming, null, " "));

//{
//    "name": "小明",
//    "age": 14,
//    "gender": true,
//    "height": 1.65,
//    "grade": null,
//    "middle-school": "'W3C'Middle School",
//    "skills": [
//     "JavaScript",
//     "Java",
//     "Python",
//     "Lisp"
//    ]
//}

// 面向对象
var robot = {
    name: "Robot",
    height: 1.6,
    run: function () {
        console.log(this.name + " is running...");
    }
};

var Student = {
    name: "Robot",
    height: 1.6,
    run: function () {
        console.log(this.name + " is running...");
    }
};
var xaoming = {
    name: "小明"
};

xiaoming._proto_ = Student;

// 用函数创建小明
function createStudent(name) {
    // 基于Student 原型创建一个新对象
    var s = Object.create(Student);
    // 初始化新对象
    s.name = name;
    return s;
}

var xiaoming = createStudent("小明");
xiaoming.run(); // 小明 is running...
xiaoming._proto_ === Student; // true

// 创建一个 Array 对象
var arr = [1, 2, 3];
// 其原型链
// arr ---> Array.prototype ---> Object.prototype ---> null 

// 创建一个函数
function foo() {
    return 0;
}
// 其原型链为
// foo ---> Function.prototype ---> Object.prototype ---> null

// 构造函数 创建对象
function Student(name) {
    this.name = name;
    this.hello = function () {
        alert("Hello," + this.name + "!");
    }
}

// 如果不写 new 这就是一个普通函数，它返回 undefined, 但是，如果写了new ,它就变成了构造函数
var xiaoming = new Student("小明");
xiaoming.name; // 小明
xiaoming.hello(); // Hello ,小明！

// 
var d = document.createAttribute("style");
d.setAttribute("type", "text/css");
d.innerHTML = "p { color : red ;}";



