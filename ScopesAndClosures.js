//Scopes => var should not be global only accessble within the block
var name = "Shikamaru";
function job(){
    if(name === "Shikamaru"){
      var occupation = "Ninja"; 
    }
}
job();
//console.log(name," + ",occupation);//ReferenceError: occupation is not defined

function student(name) {
    console.log("Student name : ",name);
}
student("Asta");

//IIFE => Immediately Invo  ked Function Expression
(function(){
    var a = 10;
    var b = 20;
    console.log(a+b);
})();

//read and  write operation
var ele1 = 10; //ele1 writing
var ele2 = ele1;//ele1 is read and on ele2 writing

function student1(name) {//in name writing
    console.log("Student name : ",name);//reading name
}
student1("Asta");

//variables which are not declared

//console.log(variableNotDeclared);//variableNotDeclared is not defined => variableNotDeclared this varible here is reading so we get error

function greeet(){
    aa = "hee";//variable a is not declared here it is writing(write operation) and this will be check wheather c is already declared if not c  will be global scoped variable
    console.log(aa);
}
greeet();

//exercise
var a = 10; 
function outer(){
    var b = a;
    console.log("b : ",b);//10
    function inner(){
       
        var c = b;
        console.log("c : ",c);//undefined
        var b = 20;
    }
    inner();
}
outer();

 c++;//here  undefined +1 = NaN;
 console.log(c);//NaN
 var c;

//reccursion
//  function funA() {
//     var i = 1;
//     console.log(i++);
//     funB();
    
//  }
//  funA();
//  function funB(){
//     funA();
//  }

//funC();//funC is not a function
var funC = function() {
    console.log("Hello");
};
funC();

//strict mode 

// Strict mode => without declaring variables you cannot use varible even for write operation, 
//if we have not used strict mode then if we have not declared variable then in compilation step automatically declares var   
function usingStrictMode(){
    "use strict";// here strict mode is applied within function called usingStrictMode
    myName = "Shikamaru Nara";//myName is not defined 
    console.log(myName);
    var myName;
}
usingStrictMode();

//closure => A function which remembers its scopes
var a1 = 10;
function outerfn(){
    var b1 = 20;
    var innerfn = function () {
        a1++;
        b1++;
        console.log("a1 : ",a1);
        console.log("b1 : ",b1);
    }
    return innerfn;
}

var innerFun = outerfn();
innerFun(); //this executes innerfn and will be accessed bcz of closure
console.log(innerFun.b1);

var innerFun2 = outerfn();
innerFun2();

//closure in callbacks
//wait => browser to wait for 1 sec to execute function 
a1 = 10;
var fn = function(){
  console.log("inside fn() :",a1);  
}
//setTimeout(fn,5000);

console.log(a1++);

//Module pattern
// this is same as marking attributes private and providing getter in java
// to do above stmt in JavaScript, we need create object inside function and all attributes of object should be this functions scoped and return object 
function createSoulReaper(){ 
    var firstName = "Ichigo"; 
    var lastName  = "Kurasaki";
    var soulReaper = {
        "getFirstName" : function () {
            return firstName;
        },
        "getLastName" : function(){
         return lastName;
        }
    };
    return soulReaper;
}

var soulReaperObj = createSoulReaper();

console.log("using getFirstName : ",soulReaperObj.getFirstName());
console.log("using firstName : ",soulReaperObj.firstName);

//cloures in async callbacks
// var i = 0;
// var print = function(){
//     console.log(i);
// }
// for(i=0; i < 10; i++){
//     setTimeout(print,1000);
// }

//solving async with closure
var i = 0;
for(i=0; i < 10; i++){
    (function(copyOfI){
        setTimeout(function(){
            console.log(copyOfI);
        },1000);
    })(i);
}