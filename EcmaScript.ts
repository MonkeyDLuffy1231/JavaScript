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
//we can use '," directly using string template and also it allows multiple lines
/* ex : let str = `shs
aaa`;*/
console.log(greeting);

//for loop
let colorsArray = ["red","blue","yellow","green"];
for(let index in colorsArray){
    console.log(colorsArray[index]);
}

//below for loop is like foreach in java
for(let color of colorsArray){
    console.log(color);
}

//to print letters from string
let str1 = "abcd";
for(let letter of str1){
    console.log(letter);//Using a string in a 'for...of' statement is only supported in ECMAScript 5 and higher
}

//class => classes are introduced in ES2015, classes are not hoisted
//In ES2015 class body can contain only methods not properties
class SoulReaper{
    greet(){}
}
let s1 = new SoulReaper();
console.log(typeof SoulReaper);

//3 type of methods

class Person{
    //1st constructor method
    constructor(name){
        this.name = name;
        console.log(`${this.name} : in Person constructor`);
    }

    //static method
    static staticMethod(){
        console.log(`static method`);
    }

    //prototype method
    greeting(){
        console.log(`hello ${this.name}`);
    }
    
    getID(){
        let i = 0;
        return ++i;
    }
}

let p = new Person("Luffy");
Person.staticMethod();
p.greeting();

//inheritance => inheritance is possible with extends keyword in ES2015

class Employee extends Person{
    constructor(name){
        super(name);
        console.log(`${this.name} in employee constructor`);  
    }

    getID(){
        return super.getID();
        //return 10;
    }
}

let emp1 = new Employee("Chandler");
console.log(emp1.getID());

//Sets and Maps
//sets => set is a data structure which contains list of values which are unique

let mySet = new Set();

mySet.add(10);
console.log("size : ",mySet.size);
mySet.add(10);
mySet.add(20);
console.log("size : ",mySet.size);
console.log("mySet : ",mySet);
let obj1 = {};
let obj2 = {};
mySet.add(obj1);
mySet.add(obj1);
console.log("mySet : ",mySet);//mySet :  Set(3) { 10, 20, {} }
mySet.add(obj2);
console.log("mySet : ",mySet);//mySet :  Set(4) { 10, 20, {}, {} } ==> bcz obj1 and obj are pointing to two different objects

let chainSet = new Set().add("Hello").add("World");
console.log("chainSet : ",chainSet);
console.log("To check wheather Hello is present in set or not : ",chainSet.has("Hello"));//using has("value") returns true or false
console.log("delete Hello : ",chainSet.delete("Hello"));//returns true if ele deleted from set else false
console.log("chainSet : ",chainSet);

//above code sets is called strong set bcz it store obj references even if ref is pointing to null(all the reference pointing to obj/var are removed)
//ref still be in the set so it is called strong set

//To remove the ref which is not pointing to obj/values ES6 introduced weakSet, in weakSet this ref will be allowed for garbage collection
//we can add only objects in weak set
let set1 = new WeakSet();
let obj3 = {};
set1.add(obj3);
console.log("set1 : ",set1);
console.log("set1.has(obj3) : ",set1.has(obj3));
obj3 = null;
console.log("set1 : ",set1);
console.log("set1.has(obj3) : ",set1.has(obj3));

//diff b/w weakSet and Strong set is memory managed properly in weakSet

//MAPS => key value pair
let myMap = new Map();
myMap.set("name","luffy");
myMap.set("age",23);

console.log("myMap.get(\"name\") : ",myMap.get("name"));//returns value
myMap.set(obj1,10);//obj1 = {};
myMap.set(obj2,20);//obj2 = {};
console.log("size : ",myMap.size);//4

console.log("*********************************");

//Iterating over maps
let myMap1 = new Map();
myMap1.set("name","luffy");
myMap1.set("age","23");
//below iterator is not recommended for printing both values and keys, it is recommended only to print keys
for(let key of myMap1.keys()){
    console.log("key : ",key);
    console.log("value : ",myMap1.get(key));
}
/*output : 
key :  name
value :  luffy
key :  age
value :  23
*/

//to print only values
for(let values of myMap1.values()){
    console.log("values : ",values);   
}
/*
values :  luffy
values :  23)
*/

for(let entries of myMap1.entries()){
    console.log(entries);
}
/*output :
['name', 'luffy']
['age', 23]
*/
console.log("************************************");


//ES5 has foreach loop
var arrayOfNumbers = [10,20,30,40];
arrayOfNumbers.forEach(arrayFunction);
function arrayFunction(element,index,array){
    console.log("arr["+index+"] : "+element);
}
//in ES2015 we have foreach in maps and sets as well

let myMap2 = new Map([["name","Naruto"],["age",23]]);
myMap2.forEach(mapFunction);
function mapFunction(value,key,callingMap){
    console.log(key," : ",value);
    console.log("myMap2 === callingMap : ",myMap2 === callingMap);
}

let newSet = new Set([1,2,3,4]);
newSet.forEach(setFunction);
function setFunction(value,key,callingSet){
    console.log(key," : ",value);
    console.log("newSet === callingSet : ",newSet === callingSet);
}

//just like weak sets we also have weak maps in ES2015 keys must be objects and the object references are weak

//SYMBOLS => It is a primitiv type and introduced in ES2015, used to generate unique id
let s = Symbol("First Symbol");
console.log("typeof s : ",typeof s);
console.log("s.toString() : ",s.toString());

let s2 = Symbol();
let s3 = Symbol();
console.log("s2 === s3 : ",s2 === s3);//false

//symbols =>we need to get hold of symbols ,so that we can use that symbol with same file or diff file we have symbol registry

let s4 = Symbol.for('RegSymbol');//Symbol.for(<value>) checks in global registry  if the values is not present then value will be added to the global registry
let s5 = Symbol.for('RegSymbol');//cheks again in global registry match found it takes value from global registry
console.log("s4 === s5 : ",s4 === s5);

console.log("Symbol.keyFor(s4) : ",Symbol.keyFor(s4));//prints the key for s4\

let fName = Symbol("firstName");
let samuri = {
    [fName] : "Oden"
};

console.log(Object.getOwnPropertyNames(samuri));//static method in Object //prints []
console.log(Object.getOwnPropertySymbols(samuri));//static method in Object//prints [ Symbol(firstName) ]

//SYMBOL ITERATOR
//couple of built-in symbols are their other then Symbol.iterator go through document

//for..of --> iterator method --> symbol iterator
//symbol iterator => it is used to check wheather the for..of can be used or not
//for..of is used only for functions
let a1 = 10;
let a2 = "hello";
let a3 = [1,2,3,4];
let a4 = {};
console.log("typeof a1[Symbol.iterator] : ",typeof a1[Symbol.iterator]);//undefined
console.log("typeof a2[Symbol.iterator] : ",typeof a2[Symbol.iterator]);//function
console.log("typeof a3[Symbol.iterator] : ",typeof a3[Symbol.iterator]);//function
console.log("typeof a4[Symbol.iterator] : ",typeof a4[Symbol.iterator]);//undefined

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

let numArray = [1,2,3,4];

function creatIterator(array){
    let count = 0;
    return{
        next : function(){
            return count < array.length ?{value : array[count++],done : false}:
            {value: undefined, done : true}
        }
    }
}

let myIterator = creatIterator(numArray);
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());

//Generators => is a special type of function which can be paused in the middle 
//of execution and run some other code and then resume to the same function
//and this possible with the help of a keyword kanown as yield
console.log("****GENERATORS****");

function *createGenerator(){
    yield 1;
    console.log("After 1st yield");
    yield 2;
}

let myGen = createGenerator();

console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next());



 




