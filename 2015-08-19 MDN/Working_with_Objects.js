// object property
var myCar = new Object();
myCar.make = "Food";
myCar.model = "Mustang";
myCar.year = 1969;

// cound access the properties of the myCar as follows 
myCar["make"] = "Ford";
myCar["model"] = "Mustang";
myCar["year"] = 1969;

// with for...in
function showProps(obj, objName) {
    var reslut = "";
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            result += objName + "." + i + " = " + obj[i] + "\n";
        }
    }
    return result;
}

var myHonda = { color: "red", wheel: 4, engine: { cylindes: 4, size: 2.2 } };

// or write the following function
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
// now you can create an object called mycar as follows
var myCar = new Car("Eagle", "Talon TSi", 1993);
var kenscar = new Car("Nissan", "300ZX", 1992);
var vpgscar = new Car("Mazda", "Miata", 1990);

// Using the Object create method
// Animal properties and method encapsulation
var Animal = {
    type: "Invertebrates", // Default value of properties
    displayType: function () {  // Method which will display type of Animal
        console.log(this.type);
    }
}

// Create new animal type called animal
var animal1 = Object.create(Animal);
animal1.displayType();   // Output:Inverterbrates

// Create new animal type called Fishes
var fish = Object.create(Animal);
fish.type = "Fishes";
fish.displayType();    // Output:Fishes

// Defining getters and setters
function getFun() {
    var o = {
        a: 7,
        get b() {
            return this.a + 1;
        },
        set c(x) {
            this.a = x / 2;
        }
    };

    console.log(o.a);  // 7
    console.log(o.b);  // 8
    o.c = 50;
    console.log(o.a);  // 25
}

// These statements use the getter and setter for the year property
function getFun2() {
    var d = Date.prototype;
    Object.defineProperties(d, "year", {
        get: function () { return this.getFullYear() },
        set: function () { return this.setFullYear() }
    });
}

// These statements use the getter and setter in a Date object:
var now = new Date();
console.log(now.year);  // 2000
now.year = 2001;/