function greetMe(name) {
    alert("hi, " + name + " !");
}

//window.onload = greetMe("孙礼锋");

// 数组
var coffees = ["French Roast", "Colombian", "Kona"];
var fish = ["Lion", , "Angel"];   // fish.length = 3;
var myList = [, "home", , "school"];    // myList.length=4;


// 对象
var Sales = "Toyota";

function CarTypes(name) {
    return (name === "Honda") ?
        name :
        "Sorry, wo don't sell " + name + ".";
}
function carInfo() {
    var car = { myCar: "Satrun", getCar: CarTypes("Honda"), special: Sales };
    alert(car.myCar);   // Satrun
    alert(car.getCar);  // Honda
    alert(car.special); // Toyota
}
// window.onload = carInfo(); 

// 对象值嵌套
function objectTwo() {
    var car = { myCars: { a: "Saab", b: "Jeep" }, 7: "Mazda" };
    alert(car.myCars.b);  // Jeep
    alert(car[7]);        //　Mazda　　　　　　　　　　　　　　　　　　　　　　　　　　
}
// window.onload = objectTwo();

// Control_flow_and_error_handing
// if
function checkData() {
    if (document.form1.threeChar.value.length == 3) {
        return true;
    } else {
        alert("Enter exactly three charcters. " +
            document.form1.threeChar.value + " is not valid.");
        return false;
    }
}
// window.onload = checkData()
// switch
function switchFun() {
    switch (fruittype) {
        case "Oranges":
            document.write("Oranges are $0.59 a pound.<br>");
            break;
        case "Apples":
            document.write("Apples are $0.32 a pound. <br>");
            break;
        case "Bananas":
            document.write("Bananas are 0.48 a pound.<br>");
            break;
        case "Cherries":
            document.write("Cherries are $3.00 a pound.<br>");
            break;
        case "Mangoes":
        case "Papayas":
            document.write("Mangoes and papayas are $2.78 a pound.<br>");
            break;
        default:
            document.write("Sorry, wo are out of " + fruittype + ".<br>");
    }
    document.write("Is there anything else you'd like?<br>");
}

function howMany(selectObject) {
    var numberSelected = 0;
    for (var i = 0; i < selectObject.options.length; i++) {
        if (selectObject.options[i].selected) {
            numberSelected++;
        }
        return numberSelected;
    }
}

// do .. while 语句
function doWhileFun() {
    do {
        i += 1;
        document.write(i);
    } while (1 < 5);
}

// window.onload = doWhileFun();

// while 语句
function whileFun() {
    n = 0;
    x = 0;
    while (n < 5) {
        n++;
        x += n;
    }
}
function whileFun2() {
    while (true) {
        alert("Hello, world");
    }
}

// Label Statement
function labelFun() {
    markLoop:
        while (theMark == true) {
            dosomething();
        }
}

// break Statement
function breakFun() {
    for (var i = 0; i < a.length; i++) {
        if (a[i] == theValue) {
            break;
        }
    }
}

// continue Statement
function continueFun1() {
    var i, n = 0;
    while (i < 5) {
        i++;
        if (i == 3)
            continue;
        n += 1;
    }
}

function continueFun2() {
    checkiandj:
        while (i < 4) {
            document.write(i + "<br/>");
            i += 1;
            checkj:
                while (j > 4) {
                    document.write(j + "<br/>");
                    j -= 1;
                    if ((j % 2) == 0) {
                        continue checkj;
                        document.write(j + " is odd.<br/> ");
                    }
                }
            document.write("i = " + i + "<br/>");
            document.write("j = " + j + "<br/>");
        }
}

// Object Manipulation Statement 对象操作
function dump_props(obj, obj_name) {
    var result = "";
    for (var i in obj) {
        result += obj_name + ".[" + i + " ] =" + obj[i] + "<br>";
    }
    result += "<hr>";
    return result;
}

// for each...in 
//function forEachFun() {
//    var sum = 0;
//    var obj = { prop1: 5, prop2: 13, prop3: 8 };
//    for each (var item in obj){
//    sum+=i
//    }
//}

// Exception Types
// Create an object type UserException
function UserException(message) {
    this.message = message;
    this.name = "UserException";
}

// Make the exception convert to a pretty string when used as 
// a string (e.g. by the error console)
UserException.prototype.toString = function () {
    return this.name + ': "' + this.message + '"';
}

// Create an instance of the object type and throw it
throw new UserException("Value too high");

// try..catch 语句
function getMonthName(mo) {
    mo = mo - 1;  // Adjust month number for array index (1=jan,12=Dec)
    var months = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
    if (months[mo] != null) {
        return months[mo];
    } else {
        throw "InvalidMonthNo";
    }
}

try{
    // statements to try
    monthName = getMonthName(myMonth); // function could throw exception
}
catch (e) {
    monthName = "unknown";
    logMyErrors(e);   // pass exceiption object to error handler
}


function doSomethingErrorProne() {
    if (ourCodeMakesAMistake()) {
        throw (new Error('The message'));
    }
    else {
        doSomethingToGetAJavaScriptError();
    }
}
//...
try{
    doSomethingErrorProne();
}
catch (e) {
    alert(e.name);  // alerts 'Error'
    alert(e.message);   // alerts 'The message' or a JavaScript error message
}