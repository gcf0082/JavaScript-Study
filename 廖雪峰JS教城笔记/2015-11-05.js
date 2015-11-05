// 浏览器对象

window.innerWidth;   // 浏览器的净宽高 兼容性 IE<=8
window.innerHeight;

window.outerWidth; // 浏览器整个宽高 
window.outerHeight;

navigator.appName; // 浏览器名称
navigator.appVersion; // 浏览器版本
navigator.userLanguage; // 浏览器设置的语言
navigator.platform;  // 操作系统类型
navigator.userAgent; 浏览器设定的User - Agent字符串

var width;
if (getIEVersion(navigator.userAgent) < 9) {
    width = document.body.clientWidth;
}
else {
    width = window.innerWidth;
}

var width = window.innerWidth || document.body.clientWidth;

screen.width; // 屏幕宽度
screen.height; // 屏幕高度
screen.colorDepth; // 返回颜色位数，如 8、16、24

location.protocol; // http
location.host; // www.example.com
location.prort; // 端口号
location.search; // ?a=1&b=2
location.hash; // TOP

location.href = "http://www.example.com";
location.reload();
location.assign("http://www.example.com"); // 设置一个新的URL地址

document.title = "努力学习JavaScript!";

var js = document.getElementById("js"),
            list = document.getElementById("list");
// 把一个子节点添加到父节点的最后一个节点
list.appendChild(js);

// 先创建，再插入
var list = document.getElementById("list");
