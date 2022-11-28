//JavaScript is one the implementation of standard specification called ECMA Script.
//ES 2015 is also known as ES6 
//ES 2015 => ES5 + new features like (constants, classes etc)

//Transpiler which takes ES2015 source code we write it generates ES5 code that runs in every browser
//Transpiler => Tracer , Bable, TypeScript  
//npm => Node Package Manager is manager that is going to help manage our dependencies

console.log("hello ts");

//let keyword => it is not hoisted and our blocked scope

function greet(name){
    let greetMsg = "Hello";
    console.log(greetMsg," ",name);
}

greet("Luffy");

var a = 1;
let b = 2;
if(a === 1){
    var a = 10;
    let b = 20;
    console.log("a : ",a);
    console.log("b : ",b);
}
console.log("a : ",a);
console.log("b : ",b);

//solving async
// for(let i = 0; i < 5; i++){
//     setTimeout(function() {
//         console.log("i : ",i);     
//     }, 1000);
// }

//const keyword => const(constant) keyword is also a block scoped and not hoisted, value must be initialized at the declaration time
const NUM = 2;
//NUM = 3; //we cannot reassign value

const MYOBJECT = {
    "name" : "Pranav"
};

console.log("myObject.name : ",MYOBJECT.name);
MYOBJECT.name = "Zoro";
console.log("myObject.name : ",MYOBJECT.name);//we can change the property values even if object is const
//myObject.age = 10;//error TS2339: Property 'age' does not exist on type '{ name: string; }' bcz myObject is constant so we cannot add any properties to that obj

//ARROW FUNCTION
/*An arrow function expression is a compact alternative to a traditional function expression, 
with some semantic differences and deliberate limitations in usage:

Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.

Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. 
They also don't have access to the new.target keyword.

Arrow functions cannot use yield within their body and cannot be created as generator functions.*/

var printName = function(name){
    console.log(name);
}

printName("Ussop");

const getName = (name) =>/*{return*/ name;//}
console.log(getName("Pranav"));

console.log("typeof getName : ",typeof getName);

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
function getValue(num = 0 ,bonus = 5){
    console.log("num : ",num+bonus);
    console.log("arguments.length : ",arguments.length);
}
getValue();//5
getValue(1);//6
getValue(5,10);//15
getValue(undefined,11);//11

//REST OPERATOR => functionName(...variable)
//below code will not work in ESCM Script 
let displayColors = function (message, ...colors){
    for(let i in arguments){
        if(i == "1"){
            console.log(colors);//prints colors arg as a array
            
        }
        console.log(arguments[i]);
    }
}
var message = "List of Colors";
displayColors(message,"red");
displayColors(message,"red","blue");
displayColors(message,"red","blue","green");

//SPREAD OPERATOR
let colorsOfArray = ["orange", "white", "black"];
displayColors(message,...colorsOfArray); //same as rest operator but rest operator is use for argument and spread operator which used as parameter

//OBJECT LITERAL
let firstName = "Madara";
let lastName = "Uchiha";

let person = { //here  (after  =) which is LHS side is person Object literal
    firstName,
    lastName
};

function createPerson(firstName = undefined , lastName = undefined, age){
    let fullName = firstName +" "+ lastName;
    return {
        firstName, 
        lastName, 
        fullName,
        isSenior : function(){
            return age >= 60;
        }
    };//this returns as a object
}

let p = createPerson("Madara", "Uchiha",100);
console.log(p);
console.log(typeof p);
console.log(p.isSenior());

let ln = "lastName";
let employee = {
    "firstName" : "Nico",
    [ln] : "rabin"
};

console.log(employee);

//Destructuring Array => taking individally ele from array and assign it to individual variables

let ninja = ["Shikamaru", "Nara", "Chunin"];
let [firstName1, lastName1, rank1 = "genin"] = ninja; // here rank1 has default value genin 
console.log("firstName1 : ",firstName1);
console.log("lastName1 : ",lastName1);
console.log("rank1 : ",rank1);

//if we need only 1 ele from array using destructring
let [,,rank] = ninja;
console.log("rank : ",rank);

// creating new array from 1 array using destructre
let [firstName2, ...elements] = ninja;
console.log(firstName2," ",elements);

//Destructure Object
let ninja1 = {
    "firstName3" : "Naruto",
    "lastName3" : "Uzumaki",
    "rank3": "genin"
};
let {firstName3 : f , lastName3 : l, rank3 : r} = ninja1; // if variable name is lengthy change the name  like this : firstName3 : f //you can use f whenever you want
console.log("firstName3 : ",f);
console.log("lastName3 : ",l);
console.log("rank3 : ",r);

//STRING TEMPLATE

let pirate = "Monkey.D.Luffy";
let greeting = `Hello  ${pirate} 'single quote' "double quote"`;//we can use like this for string concate instead of + sign 
//we can use '," directly using string template
console.log(greeting);





















