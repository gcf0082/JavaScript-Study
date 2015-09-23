#### JavaScript  变量作用域与变量提升
[[参考地址]JavaScript Scoping and Hoisting](http://www.jb51.net/article/30718.htm)<br>
你知道下面的JavaScript代码执行后会alert出什么值吗？
```javascript
var foo = 1;
function bar(){
    if(!foo){
        var foo = 10;
    }
    alert(foo);
}
bar();
```
如果答案是"10"令你感到惊讶的话，那么下面的这个会让你更加困惑：
```javascript
var a = 1;
function b(){
    a = 10;
    return;
    function a(){}
}
b();
alert(a);
```
浏览器会alert"1"。那么，到底是怎么了？这篇文章试着去解释这种JavaScript机制，但是首先，让我们对JavaScript的scoping做一些了解
    
##### Scoping in JavaScript
JavaScript的scoping如此复杂的原因是因为它看上去非常像C系语言的成员。请看下面的C程序：
```C
#inclue<stdio.h>
int main(){
    int x = 1;
    printf("%d,",x);  // 1
    if(1){
    int x = 2;
    printf("%d,",x);  // 2
    }
    printf("%d\n",x); // 1
}
```
这段程序输出的是1,2,1。这是因为在C系语言有块级作用域(block-level scope),当进入到一个块时，就像if语句，在这个块级作用域中会声明新的变量，这些变量不会影响到外部作用域。但是JavaScript却不这样。在Firebug中试试下面的代码:
```javascript
var a = 1;
console.log(x); //1
if(true){
var x = 2;
console.log(x); // 2
}
cosole.log(x);  // 2
```


























