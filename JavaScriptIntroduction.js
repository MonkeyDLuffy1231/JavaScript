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