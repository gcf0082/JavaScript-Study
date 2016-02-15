/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-02-15 13:47:15
 * @version $Id$
 */

 // let
 function sum() {
    var a=5;
    let b=6;
    if(true){
    	let b=10;
    	document.write(b);
    }
    document.write(b);
 }
 sum();

 var arr=[];
 for(let i=0;i<10;i++){
 	arr[i]=function(){
 		document.write(i);
 	}
 }
 arr[6]();

 // const 常量 不能改变
 const PI=3.1415926;
 PI=3
 document.write(PI);
 if(true){
 	const m= 555;
 	document.write(m);
 }
 document.write(m);

 // 是否为整数

 
document.write(Number.isInteger(10));
document.write(Number.isInteger(-10));

var person={
	0:"zhangsan",
	1:"lisi",
	2:"wangwu",
	length:3
}
document.write(Array.from(person));

document.write(Array.of(1,2,3,4,5));
