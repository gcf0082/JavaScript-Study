// Map Object
function mapFun() {
    var saying = new Map();
    saying.set("dog", "woof");
    saying.set("cat", "meow");
    saying.set("element", "toot");
    saying.size;  // 3
    say.get("fox"); // undefined
    saying.has("bird"); // false

    // for(var [key, value] of saying){
    // console.log(key + " goes " +value);
    // }
}

function mapFun2() {
    const privates = new WeakMap();
}