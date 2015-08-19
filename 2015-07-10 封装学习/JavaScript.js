//一、生成对象的原始模式
//我们把猫看成一个对象，它有"名字"和"颜色"两个属性
//var Cat = {
//    name: '',
//    color: ''
//}
//现在我们需要根据这个原型对象的规格(schema)，生成两个实例对象。
//var cat1 = {};       //创建一个空对象
//    cat1.name = "大毛";
//    cat1.color = "黄色";
//var cat2 = {};
//    cat1.name = "二毛";
//    cat1.color = "黑色";
//上面就是一个简单的封装了，把两个属性封装在一个对象中

//二、原始模式的改进
    //function Cat(name, color) {
    //    return {
    //        name: name,
    //        color:color
    //    }
    //}
//然后生成实例对象，就等于是在调用函数
    //var cat3 = Cat("大毛", "黄色");
    //var cat4 = Cat("二毛", "黑色");

//三、构造函数模式
//"构造函数"，其实就是一个普通函数，但是内部使用了this变量。
//对构造函数使用new运算符，就能生成实例，并且this变量会绑定在实例对象上
    //function Cat(name, color) {
    //    this.name = name;
    //    this.color = color;
    //}
    //var cat1 = new Cat("大毛", "黄色");
    //var cat2 = new Cat("二毛", "黑色");
    //alert(cat1.name);
//alert(cat2.color);

//四、构造函数模式的问题（浪费内存）
function Cat(name, color) {
    this.name = name;
    this.color = color;
    this.type = "猫科动物";
    this.eat = function () { alert("吃老鼠"); };
    //生成实例
    var cat1 = new Cat("大毛", "黄色");
    var cat2 = new Cat("二毛", "黑色");
    alert(cat1.type);         //猫科动物
    cat.eat();           //吃老鼠

    //type属性和eat()方法都是一模一样的内容，每生成一个实例，都必须为重复的内容
    //占用内存
}
//五、Prototype模式
//Javascript 规定，每一个构造函数都有一个prototype属性，指向
//另一个对象。这个对象的属性和方法，都会被构造函数的实例继承
function Cat(name, color) {
    this.name = name;
    this.color = color;
}
Cat.prototype.type = "猫科动物";
Cat.prototype.eat = function () { alert("吃老鼠"); };
//生成实例
var cat1 = new Cat("大毛", "黄色");
var cat2 = new Cat("二毛", "黑色");
alert(cat1.type);
cat1.eat();

//这时实例的type属性和eat()方法，用的都是一个内存地址，指向了protottype对象