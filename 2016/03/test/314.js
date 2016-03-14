/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-03-14 15:31:48
 * @version $Id$
 */

$(function() {
    // div animation
    $('.animation').click(function() {
        // $('.animation').animate({ left: '100px' }, 2000);
    })
})

var name = "The Window";
var object = {
    name: "My object",
    getNameFunc: function() {
        //alert('1.' + this.name); // My object
        return function() {
            return this.name;
        };
    }
}

var func = object.getNameFunc();
//alert('2.'+func()); // The Window
// alert('3.'+func.call(object)); // My object
alert('4.' + func.apply(object)); // My object

// 数组合并，要求去重
Array.prototype.contact1 = function() {
    var res = [this[0]];
    for (var i = 1; i < this.length; i++) {
        var repeat = fasle;
        for (var j = 0; j < res.length; j++) {
            if (this[i] == res[j]) {
                repeat = true;
                break;
            }
        }
        if (!repeat) {
            res.push(this[i]);
        }
    }
    return res;
}

Array.prototype.contact2 = function() {
    this.sort(); // 先排序
    var res = [this[0]];
    for (var i = 0; i < this.length; i++) {
        if (this[i] == res[res.length - 1]) {
            res.push(this[i]);
        }
    }
    return res;
}

Array.prototype.contact3 = function() {
    var res = [];
    var json = {};
    for (var i = 0; i < this.length; i++) {
        if (!json[this[i]]) {
            res.push(this[i]);
            json[this[i]] = 1;
        }
    }
    return res;
}
