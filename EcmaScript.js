//JavaScript is one the implementation of standard specification called ECMA Script.
//ES 2015 is also known as ES6 
//ES 2015 => ES5 + new features like (constants, classes etc)
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a, _b;
//Transpiler which takes ES2015 source code we write it generates ES5 code that runs in every browser
//Transpiler => Tracer , Bable, TypeScript  
//npm => Node Package Manager is manager that is going to help manage our dependencies
console.log("hello ts");
//let keyword => it is not hoisted and our blocked scope
function greet(name) {
    var greetMsg = "Hello";
    console.log(greetMsg, " ", name);
}
greet("Luffy");
var a = 1;
var b = 2;
if (a === 1) {
    var a = 10;
    var b_1 = 20;
    console.log("a : ", a);
    console.log("b : ", b_1);
}
console.log("a : ", a);
console.log("b : ", b);
//solving async
// for(let i = 0; i < 5; i++){
//     setTimeout(function() {
//         console.log("i : ",i);     
//     }, 1000);
// }
//const keyword => const(constant) keyword is also a block scoped and not hoisted, value must be initialized at the declaration time
var NUM = 2;
//NUM = 3; //we cannot reassign value
var MYOBJECT = {
    "name": "Pranav"
};
console.log("myObject.name : ", MYOBJECT.name);
MYOBJECT.name = "Zoro";
console.log("myObject.name : ", MYOBJECT.name); //we can change the property values even if object is const
//myObject.age = 10;//error TS2339: Property 'age' does not exist on type '{ name: string; }' bcz myObject is constant so we cannot add any properties to that obj
//ARROW FUNCTION
/*An arrow function expression is a compact alternative to a traditional function expression,
with some semantic differences and deliberate limitations in usage:

Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.

Arrow functions cannot be used as constructors. Calling them with new throws a TypeError.
They also don't have access to the new.target keyword.

Arrow functions cannot use yield within their body and cannot be created as generator functions.*/
var printName = function (name) {
    console.log(name);
};
printName("Ussop");
var getName = function (name) { /*{return*/ return name; }; //}
console.log(getName("Pranav"));
console.log("typeof getName : ", typeof getName);
//lexical 'this'
// var employee = {
//     id : 1,
//     greet : function(){
//         var self = this;
//         setTimeout(function(){console.log("hello ",self.id);},1000);         
//     }
// };
// employee.greet();
// var employee1 = {
//     id : 1,
//     greet : function(){
//         setTimeout(() => {console.log("hello ",this.id);},1000);         
//     }
// };
// employee1.greet();
//DEFAULT FUNCTION PARAMETER
function getValue(num, bonus) {
    if (num === void 0) { num = 0; }
    if (bonus === void 0) { bonus = 5; }
    console.log("num : ", num + bonus);
    console.log("arguments.length : ", arguments.length);
}
getValue(); //5
getValue(1); //6
getValue(5, 10); //15
getValue(undefined, 11); //11
//REST OPERATOR => functionName(...variable)
//below code will not work in ESCM Script 
var displayColors = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    for (var i in arguments) {
        if (i == "1") {
            console.log(colors); //prints colors arg as a array
        }
        console.log(arguments[i]);
    }
};
var message = "List of Colors";
displayColors(message, "red");
displayColors(message, "red", "blue");
displayColors(message, "red", "blue", "green");
//SPREAD OPERATOR
var colorsOfArray = ["orange", "white", "black"];
displayColors.apply(void 0, __spreadArray([message], colorsOfArray, false)); //same as rest operator but rest operator is use for argument and spread operator which used as parameter
//OBJECT LITERAL
var firstName = "Madara";
var lastName = "Uchiha";
var person = {
    firstName: firstName,
    lastName: lastName
};
function createPerson(firstName, lastName, age) {
    if (firstName === void 0) { firstName = undefined; }
    if (lastName === void 0) { lastName = undefined; }
    var fullName = firstName + " " + lastName;
    return {
        firstName: firstName,
        lastName: lastName,
        fullName: fullName,
        isSenior: function () {
            return age >= 60;
        }
    }; //this returns as a object
}
var p = createPerson("Madara", "Uchiha", 100);
console.log(p);
console.log(typeof p);
console.log(p.isSenior());
var ln = "lastName";
var employee = (_a = {
        "firstName": "Nico"
    },
    _a[ln] = "rabin",
    _a);
console.log(employee);
//Destructuring Array => taking individally ele from array and assign it to individual variables
var ninja = ["Shikamaru", "Nara", "Chunin"];
var firstName1 = ninja[0], lastName1 = ninja[1], _c = ninja[2], rank1 = _c === void 0 ? "genin" : _c; // here rank1 has default value genin 
console.log("firstName1 : ", firstName1);
console.log("lastName1 : ", lastName1);
console.log("rank1 : ", rank1);
//if we need only 1 ele from array using destructring
var rank = ninja[2];
console.log("rank : ", rank);
// creating new array from 1 array using destructre
var firstName2 = ninja[0], elements = ninja.slice(1);
console.log(firstName2, " ", elements);
//Destructure Object
var ninja1 = {
    "firstName3": "Naruto",
    "lastName3": "Uzumaki",
    "rank3": "genin"
};
var f = ninja1.firstName3, l = ninja1.lastName3, r = ninja1.rank3; // if variable name is lengthy change the name  like this : firstName3 : f //you can use f whenever you want
console.log("firstName3 : ", f);
console.log("lastName3 : ", l);
console.log("rank3 : ", r);
//STRING TEMPLATE
var pirate = "Monkey.D.Luffy";
var greeting = "Hello  ".concat(pirate, " 'single quote' \"double quote\""); //we can use like this for string concate instead of + sign 
//we can use '," directly using string template and also it allows multiple lines
/* ex : let str = `shs
aaa`;*/
console.log(greeting);
//for loop
var colorsArray = ["red", "blue", "yellow", "green"];
for (var index in colorsArray) {
    console.log(colorsArray[index]);
}
//below for loop is like foreach in java
for (var _i = 0, colorsArray_1 = colorsArray; _i < colorsArray_1.length; _i++) {
    var color = colorsArray_1[_i];
    console.log(color);
}
//to print letters from string
var str1 = "abcd";
for (var _d = 0, str1_1 = str1; _d < str1_1.length; _d++) {
    var letter = str1_1[_d];
    console.log(letter); //Using a string in a 'for...of' statement is only supported in ECMAScript 5 and higher
}
//class => classes are introduced in ES2015, classes are not hoisted
//In ES2015 class body can contain only methods not properties
var SoulReaper = /** @class */ (function () {
    function SoulReaper() {
    }
    SoulReaper.prototype.greet = function () { };
    return SoulReaper;
}());
var s1 = new SoulReaper();
console.log(typeof SoulReaper);
//3 type of methods
var Person = /** @class */ (function () {
    //1st constructor method
    function Person(name) {
        this.name = name;
        console.log("".concat(this.name, " : in Person constructor"));
    }
    //static method
    Person.staticMethod = function () {
        console.log("static method");
    };
    //prototype method
    Person.prototype.greeting = function () {
        console.log("hello ".concat(this.name));
    };
    Person.prototype.getID = function () {
        var i = 0;
        return ++i;
    };
    return Person;
}());
var p = new Person("Luffy");
Person.staticMethod();
p.greeting();
//inheritance => inheritance is possible with extends keyword in ES2015
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name) {
        var _this = _super.call(this, name) || this;
        console.log("".concat(_this.name, " in employee constructor"));
        return _this;
    }
    Employee.prototype.getID = function () {
        return _super.prototype.getID.call(this);
        //return 10;
    };
    return Employee;
}(Person));
var emp1 = new Employee("Chandler");
console.log(emp1.getID());
//Sets and Maps
//sets => set is a data structure which contains list of values which are unique
var mySet = new Set();
mySet.add(10);
console.log("size : ", mySet.size);
mySet.add(10);
mySet.add(20);
console.log("size : ", mySet.size);
console.log("mySet : ", mySet);
var obj1 = {};
var obj2 = {};
mySet.add(obj1);
mySet.add(obj1);
console.log("mySet : ", mySet); //mySet :  Set(3) { 10, 20, {} }
mySet.add(obj2);
console.log("mySet : ", mySet); //mySet :  Set(4) { 10, 20, {}, {} } ==> bcz obj1 and obj are pointing to two different objects
var chainSet = new Set().add("Hello").add("World");
console.log("chainSet : ", chainSet);
console.log("To check wheather Hello is present in set or not : ", chainSet.has("Hello")); //using has("value") returns true or false
console.log("delete Hello : ", chainSet["delete"]("Hello")); //returns true if ele deleted from set else false
console.log("chainSet : ", chainSet);
//above code sets is called strong set bcz it store obj references even if ref is pointing to null(all the reference pointing to obj/var are removed)
//ref still be in the set so it is called strong set
//To remove the ref which is not pointing to obj/values ES6 introduced weakSet, in weakSet this ref will be allowed for garbage collection
//we can add only objects in weak set
var set1 = new WeakSet();
var obj3 = {};
set1.add(obj3);
console.log("set1 : ", set1);
console.log("set1.has(obj3) : ", set1.has(obj3));
obj3 = null;
console.log("set1 : ", set1);
console.log("set1.has(obj3) : ", set1.has(obj3));
//diff b/w weakSet and Strong set is memory managed properly in weakSet
//MAPS => key value pair
var myMap = new Map();
myMap.set("name", "luffy");
myMap.set("age", 23);
console.log("myMap.get(\"name\") : ", myMap.get("name")); //returns value
myMap.set(obj1, 10); //obj1 = {};
myMap.set(obj2, 20); //obj2 = {};
console.log("size : ", myMap.size); //4
console.log("*********************************");
//Iterating over maps
var myMap1 = new Map();
myMap1.set("name", "luffy");
myMap1.set("age", "23");
//below iterator is not recommended for printing both values and keys, it is recommended only to print keys
for (var _e = 0, _f = myMap1.keys(); _e < _f.length; _e++) {
    var key = _f[_e];
    console.log("key : ", key);
    console.log("value : ", myMap1.get(key));
}
/*output :
key :  name
value :  luffy
key :  age
value :  23
*/
//to print only values
for (var _g = 0, _h = myMap1.values(); _g < _h.length; _g++) {
    var values = _h[_g];
    console.log("values : ", values);
}
/*
values :  luffy
values :  23)
*/
for (var _j = 0, _k = myMap1.entries(); _j < _k.length; _j++) {
    var entries = _k[_j];
    console.log(entries);
}
/*output :
['name', 'luffy']
['age', 23]
*/
console.log("************************************");
//ES5 has foreach loop
var arrayOfNumbers = [10, 20, 30, 40];
arrayOfNumbers.forEach(arrayFunction);
function arrayFunction(element, index, array) {
    console.log("arr[" + index + "] : " + element);
}
//in ES2015 we have foreach in maps and sets as well
var myMap2 = new Map([["name", "Naruto"], ["age", 23]]);
myMap2.forEach(mapFunction);
function mapFunction(value, key, callingMap) {
    console.log(key, " : ", value);
    console.log("myMap2 === callingMap : ", myMap2 === callingMap);
}
var newSet = new Set([1, 2, 3, 4]);
newSet.forEach(setFunction);
function setFunction(value, key, callingSet) {
    console.log(key, " : ", value);
    console.log("newSet === callingSet : ", newSet === callingSet);
}
//just like weak sets we also have weak maps in ES2015 keys must be objects and the object references are weak
//SYMBOLS => It is a primitiv type and introduced in ES2015, used to generate unique id
var s = Symbol("First Symbol");
console.log("typeof s : ", typeof s);
console.log("s.toString() : ", s.toString());
var s2 = Symbol();
var s3 = Symbol();
console.log("s2 === s3 : ", s2 === s3); //false
//symbols =>we need to get hold of symbols ,so that we can use that symbol with same file or diff file we have symbol registry
var s4 = Symbol["for"]('RegSymbol'); //Symbol.for(<value>) checks in global registry  if the values is not present then value will be added to the global registry
var s5 = Symbol["for"]('RegSymbol'); //cheks again in global registry match found it takes value from global registry
console.log("s4 === s5 : ", s4 === s5);
console.log("Symbol.keyFor(s4) : ", Symbol.keyFor(s4)); //prints the key for s4\
var fName = Symbol("firstName");
var samuri = (_b = {},
    _b[fName] = "Oden",
    _b);
console.log(Object.getOwnPropertyNames(samuri)); //static method in Object //prints []
console.log(Object.getOwnPropertySymbols(samuri)); //static method in Object//prints [ Symbol(firstName) ]
//SYMBOL ITERATOR
//couple of built-in symbols are their other then Symbol.iterator go through document
//for..of --> iterator method --> symbol iterator
//symbol iterator => it is used to check wheather the for..of can be used or not
//for..of is used only for functions
var a1 = 10;
var a2 = "hello";
var a3 = [1, 2, 3, 4];
var a4 = {};
console.log("typeof a1[Symbol.iterator] : ", typeof a1[Symbol.iterator]); //undefined
console.log("typeof a2[Symbol.iterator] : ", typeof a2[Symbol.iterator]); //function
console.log("typeof a3[Symbol.iterator] : ", typeof a3[Symbol.iterator]); //function
console.log("typeof a4[Symbol.iterator] : ", typeof a4[Symbol.iterator]); //undefined
//Iterables and Iterators
//Iterables => It is an object which implements a method whose key is symbol.iterator
/*Iterable{
    [Symbol.iterator]() : Iterator
}*/
//Iterator =>It is an object which implements a next method
// Iterator{
//     next() : IResultObj
// }
// IResultObj{
//     value : any,
//     done : boolean
// }
//creating our own iterator
var numArray = [1, 2, 3, 4];
function creatIterator(array) {
    var count = 0;
    return {
        next: function () {
            return count < array.length ? { value: array[count++], done: false } :
                { value: undefined, done: true };
        }
    };
}
var myIterator = creatIterator(numArray);
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
//Generators => is a special type of function which can be paused in the middle 
//of execution and run some other code and then resume to the same function
//and this possible with the help of a keyword kanown as yield
console.log("****GENERATORS****");
function createGenerator() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, 1];
            case 1:
                _a.sent();
                console.log("After 1st yield");
                return [4 /*yield*/, 2];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
var myGen = createGenerator();
console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next());
