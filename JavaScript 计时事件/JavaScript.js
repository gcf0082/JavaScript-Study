// setInterval() - 间隔指定的毫秒数不停地执行指定的代码
// setTimeout() - 暂停指定的毫秒数后指定的代码
// clearInterval() - 用于停止setInterval() 方法执行的函数代码
// clearTimeout() - 用于停止 setTimeout() 方法执行的函数代码
// Notes: setInterval() 和 setTimeout() 是HTML DOM Widnow 对象的两个方法

//setInterval(function () {
//    alert("Hello")
//}, 3000);

function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("demo").innerHTML = t;
}

function startTimer() {
    var myVar = setInterval(function () { myTimer() }, 1000);
}

function stopTimer() {
    clearInterval(myVar);
}

