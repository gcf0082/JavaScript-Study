
function sum() {
    var add = 0;
    for (var i = 0; i < arguments.length; i++) {  // arguments 对象和 function 是分不开的 
        if (!isNaN(Number(arguments[i]))) {  // 获得被传递参数
            add += arguments[i];
        }
    }
    alert(add);
}

sum(1, 2, 3, 4, 5);
sum(5, "asd", -5);
sum(1, true, "a", "d", 1, "F", 1, "W");  // Number(true) == 1