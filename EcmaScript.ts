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

//REST OPERATOR
//below code will not work in ESCM Script 
// let displayColors = function (){
//     for(let i in arguments){
//         console.log(arguments[i]);
        
//     }
// }
// var message = "List of Colors";
// displayColors(message,"red");
// displayColors("red","blue");
// displayColors("red","blue","green");










