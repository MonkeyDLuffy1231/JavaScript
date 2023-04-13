//hello world
console.log("hello world");

//variable declaration 
var value = 45;
console.log("value = "+value);
value = 23;
console.log("value = "+value);

var num;
console.log("num = "+num);//undefined
num = 11;
console.log("num = ",num);//11

console.log("adding num and value :"+num+value);

var decimalValue = 1.4;
console.log("adding decimalValue and num :",num+decimalValue);

//Strings
var i = 'vii';
console.log("i = "+i);

//boolean
var i = true;
console.log("i = "+i);
console.log("!i = "+(!i));

var a = 10;
var b = 20;
b = true;
a = true;
var c = a+b;//1+1 = 2
console.log("c = "+c);

var x = true;
var y = "hello"
var z = x + y; // truehello
console.log("z = "+z);

var m = 10;
var n = 11;
var o = "hello";
var p = false;
console.log(m+n+o+p);//21hellofalse

var a1 = undefined;
var a2;
console.log("a1 = "+a1);//undefined
console.log("a2 = "+a2);//undefined
if(a1 == a2){
    console.log("a1 == a2");// prints
}else{
    console.log("a1 != a2");
}

//typeof operator
var a3 ;
console.log(a3+" = "+typeof a3);//undefined
a3 = 10;
console.log(a3+" = "+typeof a3);// number
a3  = null;
console.log(a3+" = "+typeof a3);//object(it is bug) this should be null 
a3 = "aaaa";
console.log(a3+" = "+typeof a3);//string
a3 = 'a';
console.log(a3+" = "+typeof a3);//string
a3 = false;
console.log(a3+" = "+typeof a3);//boolean

//type coercion
var a4 = 123;
var a5 = "4";
var a6 = a4+a5;
console.log(a6+" = "+typeof a6);

a4 = 10;
a5 = "10";

// == if their are two diff type of values then implicity cast one value to another type and then compare 
if(a4 == a5){
    console.log(a4+" == "+a5);
}else{
    console.log(a4+" != "+a5);
}

//while comparing two diff type values use  === as a operator
if(a4 === a5){
    console.log(a4+" === "+a5);
}else{
    console.log(a4+" != "+a5);
}

var a6;
if(a6){
    console.log("non zero");
}else{
    console.log("zero");//prints
}

//creating an object
var object1 = {};
console.log("empty object = ",object1);
object1.prop1 = "Hello";
console.log("object = ",object1);
object1.prop2 = 23;
console.log("object = ",object1);
console.log("prop1 = ",object1.prop1);
console.log("prop2 = ",object1.prop2);

//creating object with literal
var person = {
    "name" : "Naruto",
    "age" : 25,
    "address" : "Hidden leaf village"
};
   console.log("person height = "+person.height);//height property is not there in person so o/p will be undefied
   console.log("person = ",person);
   console.log("using . notation  = ",person.name);
   console.log("using [] notation = ",person["address"]);


//property name is dynamic
var personAge = "age";
console.log(person[personAge]);

//nested object
var object1 = {
   "prop1" : "abc",
   "prop2" : 10,
   "innerObj" :{
        "innerObjProp1" : true
   }
};
object1.innerObj.innerObjProp2 = 111;//to add property dynamically to an object
console.log("object1 = ", object1);

var object2;
object2 = object1;

if(object1 === object2){
    console.log("equals");
}else{
    console.log("not equals");
}

//deleting property in obj
var person1 = {
    firstName : "Ichigo",
    lastName : "Kurosaki",
    age : 22
}
console.log("person1 before deleting property = ",person1);
delete person1.age;
console.log("person1 after deleting property = ",person1);

//Array
var myArray = [10,'Hello',true];
console.log(myArray);
console.log(myArray[2]);
console.log(myArray[3]);
myArray[1] = 11;// updates value from Hello to 11
console.log(myArray);
myArray[3] = "hi";
console.log(myArray);
console.log("myArray length = ",myArray.length);
console.log("typeof myArray = ",typeof myArray);//object =>array is an object in JS
console.log(myArray["3"]);
console.log("typeof myArray[2] = ",typeof myArray[2]);

var a7 = "111";
console.log("a7.length = ",a7.length);//3

//functions in JavaScript
function addTwoNumber(num1 , num2){
    console.log("adding ",num1," and ",num2," = ",(num1+num2));
}

addTwoNumber(10,20);//o/p : adding  10  and  20  =  30
addTwoNumber(10); //o/p : adding  10  and  undefined  =  NaN
addTwoNumber(10,11,10,01,22);//o/p adding  10  and  20  =  30 here 10,01,22 will be ignored first 2 ele will be considered
//function overloading is not possible in Javascript
//functions name must be unique

//function with return stmt4
function multiplyTwoNumbers(num1, num2){
    return (num1 * num2);
}

var multiplicationOfTwoNumber  = multiplyTwoNumbers(10,20);
console.log("multiplication of two numbers : ",multiplicationOfTwoNumber);

//function expression
var greeting = function hello(){
    console.log("Hello");
};

var greeting1 = greeting;
console.log(greeting1);//[Function: greeting]
greeting1();//invokes function greeting
//hello();//ReferenceError: hello is not defined
//anonyomus function
var greet = function (){
    console.log("hiii");
}

greet();
/*greet =1;
greet();//TypeError: greet is not a function*/

//function as argument
var greet1 = function(name){
    console.log("hello ",name);
}

var execute = function(aa,name){
    aa(name);
}
execute(greet1,"pranav");

//functions on object
var object3 = {
    "prop1" : "hee"
};
object3.myFunction = function () {
    console.log("in object3 function");
};

console.log("object3 = ",object3);
object3.myFunction();

//this keyword
var ninja = {
    "firstName" : "Naruto",
    "lastName" : "Uzumaki",
    "clan" : "Uzumaki",
    "village" : "Hidden leaf village",
    "bio" : function (){
        return this.firstName+" "+this.lastName+" from "+this.village
    }
};

var ninja1 = ninja;

var ninjaBio = ninja.bio();
console.log(ninjaBio);
ninja = {};
var ninjaBio1 = ninja1.bio();
console.log(ninjaBio);

var actor = {
    "firstName" : "Kichcha",
    "lastName" : "Sudeep",
    "fullName" : function(){
        return this.firstName+" "+this.lastName;
    },
    "address" : {
        "street" : "2nd main",
        "area" : "JP Nagar",
        "city":"Bengaluru",
        "state":"Karnataka"
    },
    "isFromCity" : function(city){
        /*if(this.address.city === city){
            console.log(true);
        }else{
            console.log(false);
        }*/
        console.log(this.address.city === city);
    }
};
console.log(actor);

actor.isFromCity("Bengaluru");

//default function argument
var sum  = function(){
    var sumOfNumbers = 0;
    for(var i = 0; i < arguments.length;i++){
        sumOfNumbers += arguments[i];
    }
    return sumOfNumbers;
}
console.log(sum(10,20,30,40,50,60,70));

//array methods

var myArray1 = [10,20.012,"str",false,{},function(){}];
console.log("myArray1 length = ",myArray1.length);
console.log("myArray1 = ",myArray1);
console.log("add 1 at last in array = "+myArray1.push(1));
console.log("myArray1 = ",myArray1);
console.log("myArray1 length = ",myArray1.length);
console.log("remove 1 ele from last = ",myArray1.pop());
console.log("myArray1 length = ",myArray1.length);
console.log("unshift => add els at 0th index =",myArray1.unshift(11));
console.log("array = ",myArray1," ,array length",myArray1.length);
console.log("shift => delete ele at 0th index = ",myArray1.shift());

//for each
var myFunction1 = function(value){
    console.log(value);
};
myArray1.forEach(myFunction1);

var myFunction2 = function(item, index, array){
    console.log(index," : ",item);
};
myArray1.forEach(myFunction2);

//random numbers from 0 to 100
console.log("random numbers from 0 to 100 : ");
for(var i = 0; i < 10; i++){
    console.log(Math.round(Math.random() * 100));
}
console.log("printig random number is completed");

//Date object
var currentDateAndTime = new Date();
console.log(currentDateAndTime); 
console.log("date = ",currentDateAndTime.getDate());
console.log("day = ",currentDateAndTime.getDay());
console.log("month = ",(currentDateAndTime.getMonth()+1));
console.log("year = ",currentDateAndTime.getFullYear());
console.log("time = ",currentDateAndTime.getTime());