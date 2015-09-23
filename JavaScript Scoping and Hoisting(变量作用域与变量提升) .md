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
在这段代码中，Firebug显示1,2,2。这是因为javascript是函数作用域(function-level scope)。这和C系语言是完全不同的。块，就像if语句，并不会创建一个新的作用域。只有函数才会执行新的作用域。<br>
对于这个问题，我们有一个解决方案。如果你必须在函数中创建一个临时的作用域，请像下面这样：
```javascript
function foo(){
var x=1;
if(x){
(function(){
var x=2;
// do some other code
}());
}
// x is still 1.
}
```
##### javascript　函数提升
在JavaScript中，一个作用域(scope)中的名称(name)有以下四种:<br>
1、语言自身定义(Language-defined):所有的作用域默认都会包含this和arguments<br>
2、函数形参(Formal parameters):函数又名字的形参会进入到函数体的作用域内。<br>
3、函数声明(Function decalrations):通过function foo{}的形式。<br>
4、变量声明(Variable declarations):通过var foo;的形式.<br>
函数声明和变量声明总是被JavaScript解释器隐式的提升(hoist)到包含他们的作用域的最顶端。很明显的，语言自身定义和形参已经处于作用域顶端。就像下面这样：
```javascript
function foo(){
bar();
var x=1;
}
```
实际上被解释成像下面这样:
```javascript
function foo(){
var x;
bar();
x=1;
}
```
结果是不管声明是否被执行都没有影响。下面的两端代码是等价的：
```javascript
function foo(){
if(false){
var x=1;
}
return;
var y=1;
}

function foo(){
var x;
var y;
if(false){
x=1;
}
return;
y=1;
}



























