
// js 判断IE浏览器版本
var isIE = !!window.ActiveXObject;
var isIE6 = isIE && !window.XMLHttpRequest;
var isIE8 = isIE && !!document.documentMode;
var isIE7 = isIE && !isIE6 && !isIE8;
if (isIE) {
    if (isIE6) {
        alert("ie6");
    } else if (isIE8) {
        alert("ie8");
    } else if (isIE7) {
        alert("ie7");
    }
}

//window.onload = ie8Nav();
//function ie8Nav() {
//    var isIE = !!window.ActiveXObject;
//    var isIE6 = isIE && !window.XMLHttpRequest;
//    var isIE8 = isIE && !!document.documentMode;
//    var isIE7 = isIE && !isIE6 && !isIE8;
//    if (isIE) {
//        if (isIE6 || isIE7 || isIE8) {
//            window.onresize = function () {            // 刷新页面
//                window.location.href = window.location.href;
//            }
//            if (document.body.clientWidth < 1140) {    // 网页可见宽度
//                document.getElementById("nav_box").style.width = "970px";
//                document.getElementById("nav_left").style.display = "none";
//                document.getElementById("nav_right").style.display = "none";
//            }
//        } 
//    }
//}

// 方法2
if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/6./i) == "6.") {
    alert("IE 6");
}
else if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/7./i) == "7.") {
    alert("IE 7");
}
else if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/8./i) == "8.") {
    alert("IE 8");
}
else if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/9./i) == "9.") {
    alert("IE 9");
}

// 方法3
if (navigator.userAgent.indexOf("Opera") != -1) {
    alert('Opera');
}
else if (navigator.userAgent.indexOf("MSIE") != -1) {
    alert('Internet Explorer');
}
else if (navigator.userAgent.indexOf("Firefox") != -1) {
    alert('Firefox');
}
else if (navigator.userAgent.indexOf("Netscape") != -1) {
    alert('Netscape');
}
else if (navigator.userAgent.indexOf("Safari") != -1) {
    alert('Safari');
}
else {
    alert('无法识别的浏览器。');
}

// 方法4
if (!+'\v1' && !'1'[0]) {
    alert("ie6或ie7")
}

// js 获取浏览器宽高
//IE中： 
//document.body.clientWidth ==> BODY对象宽度 
//document.body.clientHeight ==> BODY对象高度 
//document.documentElement.clientWidth ==> 可见区域宽度 
//document.documentElement.clientHeight ==> 可见区域高度 
//FireFox中： 
//document.body.clientWidth ==> BODY对象宽度 
//document.body.clientHeight ==> BODY对象高度 
//document.documentElement.clientWidth ==> 可见区域宽度 
//document.documentElement.clientHeight ==> 可见区域高度 
//Opera中： 
//document.body.clientWidth ==> 可见区域宽度 
//document.body.clientHeight ==> 可见区域高度 
//document.documentElement.clientWidth ==> 页面对象宽度（即BODY对象宽度加上Margin宽） 
//document.documentElement.clientHeight ==> 页面对象高度（即BODY对象高度加上Margin高） 
//没有定义W3C的标准，则 
//IE为： 
//document.documentElement.clientWidth ==> 0 
//document.documentElement.clientHeight ==> 0 
//FireFox为： 
//document.documentElement.clientWidth ==> 页面对象宽度（即BODY对象宽度加上Margin宽) 
//document.documentElement.clientHeight ==> 页面对象高度（即BODY对象高度加上Margin高） 
//Opera为： 
//document.documentElement.clientWidth ==> 页面对象宽度（即BODY对象宽度加上Margin宽） 
//document.documentElement.clientHeight ==> 页面对象高度（即BODY对象高度加上Margin高） 


//网页可见区域宽： document.body.clientWidth 
//网页可见区域高： document.body.clientHeight 
//网页可见区域宽： document.body.offsetWidth (包括边线的宽) 
//网页可见区域高： document.body.offsetHeight (包括边线的高) 
//网页正文全文宽： document.body.scrollWidth 
//网页正文全文高： document.body.scrollHeight 
//网页被卷去的高： document.body.scrollTop 
//网页被卷去的左： document.body.scrollLeft 
//网页正文部分上： window.screenTop 
//网页正文部分左： window.screenLeft 
//屏幕分辨率的高： window.screen.height 
//屏幕分辨率的宽： window.screen.width 
//屏幕可用工作区高度： window.screen.availHeight 
//屏幕可用工作区宽度： window.screen.availWidth 

//HTML精确定位:scrollLeft,scrollWidth,clientWidth,offsetWidth 
//scrollHeight: 获取对象的滚动高度。 
//scrollLeft:设置或获取位于对象左边界和窗口中目前可见内容的最左端之间的距离 
//scrollTop:设置或获取位于对象最顶端和窗口中可见内容的最顶端之间的距离 
//scrollWidth:获取对象的滚动宽度 
//offsetHeight:获取对象相对于版面或由父坐标 offsetParent 属性指定的父坐标的高度 
//offsetLeft:获取对象相对于版面或由 offsetParent 属性指定的父坐标的计算左侧位置 
//offsetTop:获取对象相对于版面或由 offsetTop 属性指定的父坐标的计算顶端位置 
//event.clientX 相对文档的水平座标 
//event.clientY 相对文档的垂直座标 
//event.offsetX 相对容器的水平坐标 
//event.offsetY 相对容器的垂直坐标 
//document.documentElement.scrollTop 垂直方向滚动的值 
//event.clientX+document.documentElement.scrollTop 相对文档的水平座标+垂直方向滚动的量