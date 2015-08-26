// 重新认识面向对象
// 一切事物皆对象 对象具有封装性和继承性 对象与对象之间使用消息通信，各自存在信息隐藏

// 清单1.对象的上下文依赖
function list1Fun() {
    var str = "我是一个 String 对象 ， 我声明在这里 ， 但我不是独立存在的！ ";
    var obj = { des: "我是一个 Object 对象 ， 我声明在这里，我也不是独立存在的。 " };
    var fun = function () {
        console.log("我是一个 Function 对象 ， 谁调用我，我属于谁：", this);
    };

    obj.fun = fun;

    console.log(this === window);   // 打印true
    console.log(window.str === str);  // 打印true
    console.log(window.obj === obj);  // 打印true
    console.log(window.fun === fun);  // 打印true
    fun();                            // 打印 我是一个 Function 对象 ， 谁调用我，我属于谁：window
    obj.fun();                        // 打印 我是一个 Function 对象 ， 谁调用我，我属于谁：obj
    fun.apply(str);                   // 我是一个 Function 对象 ， 谁调用我，我属于谁：str
    // apply()方法接收两个参数：一个是在其中运行函数的作用域，另一个是参数数组。
    // 其中，第二个参数可以是Array的实例，也可以是arguments对象
}

// 清单2.字面式(literal natation)对象声明
function list2Fun() {
    var person = {
        name: "张三",
        age: 26,
        gender: "男",
        eat: function (stuff) {
            alert("我在吃" + stuff);
        }
    };
    person.height = 176;
    delete person["age"];
}

// 清单3：使用函数构造函数构造对象
function list3Fun() {
    // 构造器 Person 本身就是一个函数对象
    function Person() {
        // 此处可做初始化工作
    }
    
    // Person 有一个名叫 prototype 的属性
    Person.prototype = {
        name: "张三",
        age: "26",
        gender: "男",
        eat: function (stuff) {
            alert("我在吃" + stuff);
        }
    }

    // 使用 new 关键字构造对象
    var p = new Person();
}

// 彻底理解原型链(Prototype chain)
// 清单4.对象 _proto_ 属性和隐式引用
function list4Fun() {
    function Person(name) {
        this.name = name;
    }
    var p = new Person();
    // 对象的隐式引用指向了构造器的 prototype 属性，所以此处打印 true
    console.log(p._proto_ === Person.prototype);

    // 原型本身是一个 Object 对象， 所以他的隐式引用指向了
    // Object 构造器的 prototype 属性，故而打印 true
    console.log(Person.prototype._proto_ === Object.prototype);

    // 构造器 Person 本身是一个函数对象，所以此处打印 true
    console.log(Person.prototype._prot_ === Function.prototype);
}

// 清单5.利用原型链 Horse->Mammal->Animal实现继承
function list5() {
    // 声明 Animal 对象构造器
    function Animal() {
        
    }
    // 将 Animal 的 prototype 属性指向一个对象
    // 亦可直接理解为指定 Animal 对象的原型
    Animal.prototype = {
        name: "animal",
        weight: "0",
        eat: function () {
            alert("Animal is eating!");
        }
    }

    // 声明 Mammal 对象构造器
    function Mammal() {
        this.name = "mammal";
    }

    // 指定 Mammal 对象的原型为一个 Animal 对象
    // 实际上此处便是在创建 Mammal 对象和 Animal 对象之间的原型链
    Mammal.prototype = new Animal();

    // 声明 Horse 对象的构造器
    function Horse(height, weight) {
        this.name = "horse";
        this.height = height;
        this.weight = weight;
    }
    
    // 将 Horse 对象的原型指定为一个 Mammal 对象，继续构造 Horse 与 Mammal 之间的原型链
    Horse.prototype = new Mammal();
    
    // 重新指定 eat 方法， 此方法将覆盖从 Animal 原型链继承来的 eat 方法
    Horse.prototype.eat = function () {
        alert("Horse is eating grass!");
    }

    // 验证并理解原型链
    var horse = new Horse(100, 2);
    console.log(horse._proto_ === Horse.prototype);
    console.log(Horse.prototype._proto_ === Mammal.prototype);
    console.log(Mammal.prototype._proto_ === Animal.prototype);
}

// JavaScript 类式继承的实现方法
// 使用 Simple Inheritance 实现类式继承
function list6Fun() {

    // 声明 Person 类
    var Person = Class.extend({
        _issleeping: true,
        init: function (name) {
            this._name = name;
        },
        isSleeping: function () {
            return this._issleeping;
        }
    });

    // 声明 programmer 类，并继承 Person
    var Programmer = Person.extend({
        init: function (name, issleeping) {
            // 调用父类构造函数
            this._supper(name);
            // 设置自己的状态
            this._issleeping = issleeping;
        }
    });

    var person = new Person("张三");
    var diors = new Programmer("张江南", false);

    // 打印 true
    console.log(person.isSleeping());

    // 打印 false
    console.log(diors.issleeping());

    // 此处全为 true ,故打印 true
    console.log(person instanceof Person && person instanceof Class
        && diors instanceof Person && diors instanceof Class);

}


// JavaScript 私有成员实现
// 清单7.使用闭包实现信息隐藏
function list7Fun() {
    function User(pwd) {
        // 定义私有属性
        var password = pwd;

        // 定义私有方法
        function getPassword() {
            // 返回闭包中的 password
            return password;
        }

        // 特权函数声明，用于该对象其他公有方法能通过该特权方法访问到私有成员
        this.passwordService = function () {
            return getPassword();
        }
    }

    // 公有成员声明
    User.prototype.checkPassword = function (pwd) {
        return this.passwordService() === pwd;
    };

    // 验证隐藏性
    var u = new User("123456");
    // 打印 true 
    console.log(u.checkPassword("123456"));
    // 打印 undefined 
    console.log(u.password);
    // 打印 true 
    console.log(typeof u.gePassword === "undefined");

}
