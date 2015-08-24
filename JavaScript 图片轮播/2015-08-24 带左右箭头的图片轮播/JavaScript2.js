// 图片滚动列表
var Speed = 1;  // 速度(毫秒)
var Space = 5;  // 每次移动(px)
var PageWidth = 726;  // 翻页宽度
var fill = 0;  // 整体移位
var MoveLock = false;
var MoveTimeObj;
var Comp = 0;
var AutoPlayObj = null;

GetObj("List2").innerHTML = GetObj("List1").innerHTML;
GetObj("ISL_Cont").scrollLeft = fill;
// scrollLeft 滚动条滚动到右侧时，隐藏在滚动条左侧的距离
// scrollTop 滚动条滚动到下边时，隐藏在滚动条上侧的距离
GetObj("ISL_Cont").onmouseover = function () { clearInterval(AutoPlayObj); }
GetObj("ISL_Cont").onmouseout = function () { AutoPlay(); }

function GetObj(objName) {  
    if (document.getElementById) {  // 检查浏览器是否理解 document.getElementsByID 的DOM方法
        return eval('document.getElementById("' + objName + '")');   // eval() 可执行其中的字符串和 执行其中的JavaScript代码
    }
    else {
        return eval('document.all.'+objName)        // 通过document.all函数获得该对象
    }
}

function AutoPlay() {  // 自动滚动
    clearInterval(AutoPlayObj);
    AutoPlayObj = setInterval('ISL_GoDown();ISL_StopDown();', 3000);   // 间隔时间
}

function ISL_GoUp() {  // 上翻开始
    if (MoveLock) return;
    clearInterval(AutoPlayObj);
    MoveLock = true;
    MoveTimeObj = setInterval('ISL_ScrUp();', Speed);
}

function ISL_StopUp() {  // 上翻停止
    clearInterval(MoveTimeObj);
    if (GetObj('ISL_Cont').scrollLeft % PageWidth - fill != 0) {
        Comp = fill - (GetObj('ISL_Cont').scrollLeft % PageWidth);
        ComScr();
    }
    else {
        MoveLock = false;
    }
    AutoPlay();
}

function ISL_ScrUp() {  // 上翻动作
    if (GetObj('ISL_Cont').scrollLeft <= 0) {
        GetObj('ISL_Cont').scrollLeft = GetObj('ISL_Cont').scrollLeft + GetObj('List1').offsetWidth;  // offsetWidth 宽度+padding+border
    }
    GetObj('ISL_Cont').scrollLeft -= Space;
}

function ISL_GoDown() {  // 下翻开始
    clearInterval(MoveTimeObj);
    if (MoveLock) return;
    clearInterval(AutoPlayObj);
    MoveLock = true;
    ISL_ScrDown();
    MoveTimeObj = setInterval('ISL_ScrDown', Speed);
}

function ISL_StopDown() {  // 下翻停止
    clearInterval(MoveTimeObj);
    if (GetObj('ISL_Cont').scrollLeft % PageWidth - fill != 0) {
        Comp = PageWidth - GetObj('ISL_Cont').scrollLeft % PageWidth + fill;
        ComScr();
    }
    else {
        MoveLock = false;
    }
    AutoPlay();
}

function ISL_ScrDown() {  // 下翻动作
    if (GetObj('ISL_Cont').scrollLeft >= GetObj('List1').scrollWidth) {
        GetObj('ISL_Cont').scrollLeft = GetObj('ISL_Cont').scrollLeft - GetObj('List1').scrollWidth;
    }
    GetObj('ISL_Cont').scrollLeft += Space;
}

function ComScr() {
    var num;
    if (Comp == 0) { MoveLock = false; return; }
    if (Comp < 0) { //上翻
        if (Comp < -Space) {
            Comp += Space;
            num = Space;
        }
        else {
            num = -Comp;
            Comp = 0;
        }
        GetObj("ISL_Cont").scrollLeft -= num;
        setTimeout('ComScr()', Speed);
    }
}
