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
