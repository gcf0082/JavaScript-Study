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
