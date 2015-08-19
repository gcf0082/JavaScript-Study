function myFunction() {
    for (var k in document) {
        var v = document[k];
        alert(v + ":" + typeof (v));
    }
}

function myFunction2() {
    var el = document.getElementById("el");
}