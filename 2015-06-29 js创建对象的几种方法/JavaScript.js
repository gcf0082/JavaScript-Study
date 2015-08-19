//一、基于已有对象扩充其属性和方法
function demo1() {
    var object = new object();
    object.name = "Sun Lifeng";
    object.sayName = function (name) {
        this.name = name;
        alert(this.name);
    }
    object.sayName("lisi");
}

//二、工厂方式
function createObject() {
    var object = new object();
    object.username = "zhanggan";
    object.password = "123--jqk";

    object.get = function () {
        alert(this.username + "," + this.password);
    }
    return object;
}
//
//var object1 = createObject();
//var object2 = createObject();
//改进1：带有参数的构造函数
var object1 = createObject("zhagngan", "123--jqk");
object.get();
//改进2：让多个对象共享函数对象
function get() {
    alert(this.username + "," + this.password);
}
//函数对象只有一份
function createObject(username, password) {
    var object = new object();
    object.username = username;
    object.password = password;
    object.get = get;//每一个对象的函数对象都指向同一个函数对象

    return object;
}
var object = createObject("zhangsan", "123");
var object2 = createObject("lisi", "123");
object.get();
object.get();

//三、构造函数的方式
function Person() {
    //在执行第一行代码前，js引擎会为我们生成一个对象
    this.username = "zhangsan";
    this.password = "123";
    this.getInfo = function () {
        alert(this.username + "," + this.password);
    }
    //此处有一个隐藏的return语句，用于将之前生成的对象返回
    //只有在后面用new的情况下，才会出现注释所述的这两种情况
}
//生成对象
//var person = new Person();
//person.getInfo();
//改进版：加上参数
var person = new Person("zhangsan", "123");
person.getInfo();

//四、原型（“prototype”）方式
function Person() { }

Person.prototype.username = "zhangsan";
Person.prototype.password = "123";

Person.prototype.getInfo = function () {
    alert(this.username + "," + this.password);
}

var person = new Person();
var person2 = new Person();

person.username = "lisi";
person.getInfo();
person2.getInfo();