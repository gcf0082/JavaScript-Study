// creating an array
// The following statement crete equivalent arrays
var arr = new Array("Bob", "Sabb", "element");
var arr = Array("Bob", "Sabb", "element");
var arr = ["Bob", "Saab", "element"];

// other example
function printColor() {
    var colors = ["red", "green", "blue"];
    for (var i = 0; i < colors.length; i++) {
        console.log(color[i]);
    }
}

// another example
function IndexedFun() {
    var divs = document.getElementsByTagName("div");
    for (var i = 0, div; div = divs[i]; i++) {
        //
    }
}

// anotehr example
function IndexedFun2() {
    var array = ['first', 'second', , 'fourth'];
    // returns ['first','second','fourth'];
    array.forEach(function (element) {
        console.log(element);
    });

    if (array[2] === undefined) {
        console.log("array[2] is undefined");   // true
    }
    var array = ["first", "second", undefined, "fourth"];
    array.forEach(function (element) {
        console.log(element);
    })
}

// Array methods
// concat() joins two arrays and returns a new array
function concatFun() {
    var myArray = new Array("1", "2", "3");
    myArray = myArray.concat("a", "b", "c");
}

// join() joins all elements of an array into a string
function joinFun() {
    var myArray = new Array("wind", "rain", "fire");
    var list = myArray.join(" - ");   // list is "wind - rain - fire"
}

// push() adds one or more elements to the end of an array and returns the resulting length of te array
function pushFun() {
    var myArray = new Array("1", "2");
    myArray.push("3");   // myArray is now ["1","2","3"];
}

// pop() delete one elements to the end of an array and returns the resulting length of the array
function popFun() {
    var myArray = new Array("1", "2", "3");
    myArray.pop();  // return ["1","2"];
}
// shift() removes the first element from an array and returns that element.
function shiftFun() {
    var myArray = new Array("1", "2", "3");
    myArray.shift();  // return ["2", "3"];
}

// unshift() adds one or more elements to the front of an array and returns element
function unshiftFun() {
    var myArray = new Array("2", "3");
    myArray.unshift("1");   // return ["1","2","3"];
}

// slice(start_index, upto_index) extracts a section of an array and returns a new array
function sliceFun() {
    var myArray = new Array("a", "b", "c", "d", "e");
    myArray.slice(1, 4);   // strats at index 1 and extracts all elements
                           // until index 3, returning ["b","c","d"];
}

// Splice(index, count_to_remove, addElement1, addElements2, ...) 
// removes elements all elements from an array and (optionally) replaces them.
function splice() {
    var myArray = ("1", "2", "3", "4", "5");
    myArray.splice(1, 3, "a", "b", "c", "d");
    // return ["1","a","b","c","d","5"];
    // This code started at index one (or where the "2" was),
    // elements in it's place
}

// reverse() transposes the elements of an array: the first array element becoments the last and 
// the last becomes the first
function reverseFun() {
    var myArray = new Array("1", "2", "3");
    myArray.reverse();   // return ["3","2","1"];
}

// sort() sorts the elements of an array
function sortFun() {
    var myArray = new Array("wind", "Bob", "Rain");
    myArray.sort();
}

// An example
function sortFun2(a, b) {
    if (a[a.length - 1] < b[b.length - 1]) return -1;
    if (a[a.length - 1] > b[b.length - 1]) return 1;
    if (a[a.length - 1] == b[b.length - 1]) return 0;
}


// indexOf 检索元素首次出现的位置
function indexOfFun() {
    var a = ["a", "b", "a", "b", "a", "b"];
    console.log(a.indexOf("b")); // logs 1
    // Now try again, starting from after the last match
    console.log(a.indexOf("b", 2)); // logs 3
    console.log(a.indexOf("z"));  // logs -1
}
 
// lastIndexOf(searchElement[, fromIndex]) works like indexOf, but starts at the end and searches backwards
function lastIndexOfFun() {
    var a = new Array("a", "b", "a", "b", "a", "b");
    consloe.log(a.lastIndexOf("b"));  // logs 5
    // Now try again, starting from before the last match
    console.log(a.lastIndexOf("b", 4)); // logs 1
}

// forEach(callback[, thisObject]) executes callback on every array item
var a = ["a", "b", "c"];
a.forEach(function (element) {
    console.log(element);
});
//logs each item in turn

// map returns a new array of the return value from executing callback on every array item
// 把数组中的元素一个个的拿出来
function mapFun() {
    var a1 = new Array("a", "b", "c");
    var a2 = a1.map(function (itm) { return item.toUppercase(); });
    console.log(a2);  // logs A,B,C;
}

// filter(callback[,thisObject]) returns a new array containing the items for which callback returned true
function filterFun() {
    var a1 = new Array("a", 19, "b", "20", "c", "49");
    var a2 = al.filter(function (item) { return typeof item == "number"; });
    console.log(a2); // logs 10,20,30
}

// every(callback[,thisObject]) returns true if callback returns true 
function everyFun() {
    function isNumber(value) {
        return typeof value == "number";
    }
    var a1 = [1, 2, 3];
    console.log(a1.every(isNumber));  // logs true 
    var a2 = [1, "2", 3];
    console.log(a2.every(isNumber));  // logs false
}

// some()
function someFun() {
    function isNumber(value) {
        return typeof value == "number";
    }
    var a1 = [1, 2, 3];
    console.log(a1.some(isNumber));  // logs true 
    var a2 = [1, "2", 3];
    console.log(a2.every(isNumber));  // logs true
    var a3 = ["1", "2", "3"];
    console.log(a2.some(isNumber));  // logs false
}

// reduce()
function reduceFun() {
    var a = [10, 20, 30];
    var total = a.reduce(function (first, second) {
        return first + second;
    }, 0)
    console.log(total);
}

// Multi-dimensional arrays
// The following code creates a two-dimensional array
function multiFun() {
    var a = new Array(4);
    for (i = 0; i < 4; i++) {
        a[i] = new Array(4);
        for (j = 0; j < 4; j++) {
            a[i][j] = "[" + i + "," + j + "]";
        }
    }
}

// Row 0: [0,0] [0,1] [0,2],[0,3]
// Row 1: [1,0] [1,1] [1,2],[1,3]
// Row 2: [2,0] [2,1] [2,2],[2,3]
// Row 3: [3,0] [3,1] [3,2],[3,3]

// test
function testFun() {
   // test code
}
