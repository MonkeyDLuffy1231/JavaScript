//JavaScript is one the implementation of standard specification called ECMA Script.
//ES 2015 is also known as ES6 
//ES 2015 => ES5 + new features like (constants, classes etc)
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a;
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
var firstName1 = ninja[0], lastName1 = ninja[1], _b = ninja[2], rank1 = _b === void 0 ? "genin" : _b; // here rank1 has default value genin 
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
//we can use '," directly using string template
console.log(greeting);
