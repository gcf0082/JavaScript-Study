/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-02-14 14:55:44
 * @version $Id$
 */

var code = 9;
if (code >= 90) {
    document.write("优秀");
} else if (60 <= code < 90) {
    document.write("及格");
} else {
    document.write("不及格");
}

// switch
var day = new Date().getDay();
switch (day) {
    case 6:
        document.write("Today is Saturday!");
        break;
    case 0:
        document.write("Today is Sunday!");
        break;
    default:
        document.write("Look forwar Weekend!");
}

// for 循环
for(var i=1;i<6;i++){
	document.write("我是第"+i+"次循环！<br>");
}

// while 循环
var i=1;
while(i<6){
	document.write("我是第"+i+"次循环！<br>");
	i++;
}

// do .. while 循环
do{
document.write("我是第"+i+"次循环！<br>");
	i++;
}
wihle(i<6)

// break
for(var i=1;i<10;i++){
	if(i==3){
		break;
	}
	document.write("我是第"+i+"次循环！<br>");
}

// continue
for(var i=1;i<10;i++){
	if(i==3){
		continue;

	}
	document.write("我是第"+i+"次循环！<br>");
}

// try .. throw .. catch
try{
   alerrt("xxx");
}
catch(err){
   var txt="页面错误是\n";
   txt += "错误描述："+err.message+"\n";
   txt += "点击确定继续。"
   alert(txt);
}

function myFunc(){
    try{
    	var code=60;
    	if(code>60){
    		throw "值太大";
    	}else{
    		throw "值太小";
    	}
    }
    catch(){
    	alert(err);
    }
}
myFunc();
