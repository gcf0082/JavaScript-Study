// 包装对象
var n = new Number(123); // 123,生成了新的包装对象
var b = new Boolean(true); // true,生成了新的包装对象
var s = new String("str"); // "str",生成了新的包装类型

typeof new Number(123); // "object"
new Number(123) === 123; // false

typeof new Boolean(true); // "object"
new Boolean(true) === true; // false

typeof new String("str"); // "object"
new String("str") === "str"; // false

// Date()
var now = new Date();
now; // Wed Jun 24 2015 19:49:22 GMT+0800 (CST)
now.getFullYear(); // 年份
now.getMonth(); // 月份
now.getDate(); // 日期
now.getDay(); // 星期数
now.getHours(); // 星期数
now.getMinutes(); // 分钟
now.getSeconds(); // 秒
now.getMilliseconds(); // 毫秒数
now.getTime();  // 以number形式表示的时间戳

// 注意：当前时间是浏览器从本机操作系统获取的时间，所以不一定准确
// 方法1：
var d = new Date(2015, 5, 19, 20, 15, 30, 123);
d; // Fri Jun 19 2015 20:15:30 GMT+0800 (CST);
// 注意:JavaScript的月份范围用整数表示是0-11

// 方法2：
var d = Data.parse("2015-06-24T19:49:22.875+08:00");


// 时区
var d = new Date(1435146562875);
d.toLocaleString();  // 当地时间
d.toUTCString(); // 标准时间

// 获取当前时间戳
if (Date.now) {
    alert(Date.now());  // 包版本IE没有now()方法
} else {
    alert(new Date().getTime());
}