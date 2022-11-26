//object creations
var myObj = {}; //empty object
console.log("myObj : ",myObj);
myObj.num = 10;
console.log("myObj : ",myObj);
console.log("myObj.num : ",myObj.num);
console.log("myObj[\"num\"] : "+myObj["num"]);

//constructor functions
function createNinjaObject(firstName,lastName,clan,rank,village){
    var ninjaObject = {};
    ninjaObject.firstName = firstName;
    ninjaObject.lastName = lastName;
    ninjaObject.clan = clan;
    ninjaObject.rank = rank;
    ninjaObject.village = village;

    return ninjaObject;
}

var ninja1 = createNinjaObject("Shikamaru","Nara","Nara","Chunin","Hidden leaf village");
console.log("ninja1 : ",ninja1);

//CONSTRUCTOR FUNCTION to create object
//using this and new keyword to create object
function CreateEmployeeObject(firstName, lastName, empID, designation, address){
    //var this = {}; //when we try to create new object using new keyboard javascript does this line
    this.firstName = firstName;
    this.lastName = lastName;
    this.empID = empID;
    this.designation = designation;  
    this.address = address;
   // return this;//when we try to create new object using new keyboard javascript does this line
}

var emp1 = new CreateEmployeeObject("Pranav","K N",111,"Developer","Bengaluru");
console.log("emp1 = "+emp1);//emp1 = [object Object]
console.log("emp1 = ",emp1);//emp1 =  createEmployeeObject { firstName: 'Pranav',lastName: 'K N',empID: 111, designation: 'Developer'}

//Objects and Prototypes In-depth 06 - Switching function types and calls
function CreateBicycleObject(cadence, speed, gear){
    //var this = {};//JavaScrpit add this line //this line is added when you invoke using ths function using new keyboard 
    var bicycleObj = {};
    bicycleObj.cadence = cadence;
    bicycleObj.speed = speed;
    bicycleObj.gear = gear;
    //return bicycleObj;
    //return this;////JavaScrpit add this line //this line is added when you invoke using ths function using new keyboard 
}

var bicycle1 = new CreateBicycleObject(50, 20, 4);
console.log("bicycle1 : ",bicycle1); //prints CreateBicycleObject {} //(function/ name) bcz 47 line is commented

function CreateBicycle(cadence, speed, gear){ //constructor function
    this.cadence = cadence;
    this.speed = speed;
    this.gear = gear;
} 

var bicycle2 = new CreateBicycle(40, 40, 4);
console.log("bicycle2 : ",bicycle2);//CreateBicycle { cadence: 40, speed: 40, gear: 4 }
var bicycle3 = CreateBicycle(20, 20, 1);
console.log("bicycle3 : ",bicycle3);//undefined 

//4 ways calling a function
/* 1 => invoking using function name regularly -> functionName();
   2 => if function is inside the object and  ur calling using ->  objectName.functionName();
   3 => using constructor (new keyword)
   4 => using function objects property called call() which is function    */ 
//note : function object is created at the interpretation stage

//1st way
function foo(){
    //var this = {} //JS adds this line when you execute using new 
    console.log("hello");
    //console.log("object : ",this);
    //return this;//JS adds this line when you execute using new
}
foo();//console.log("object : ",this); => this prints global object

//2nd way
var myObject = {};
myObject.foo = function(){
    console.log("hello world");
};
myObject.foo();

//3rd way
new foo();

//4th way
foo.call();

//this  => represents current Onbject

//Objects and Prototypes In-depth 09 - Working on objects with this reference
function BicycleObject(cadence, speed, gear, tirePressure){
    this.cadence = cadence;
    this.speed = speed;
    this.gear = gear;
    this.tirePressure = tirePressure;
    this.inflateTire = function(){
        this.tirePressure += 3;
    }
}

var bicycle4 = new BicycleObject(40, 50, 4, 30);
bicycle4.inflateTire();
console.log("bicycle4 : ",bicycle4);

var bicycle5 = new BicycleObject(40, 30, 2, 22);
bicycle5.inflateTire();
console.log("bicycle5 : ",bicycle5);


// function Mechanic(name, Bicycle){
//     this.name = name;
//     this.Bicycle = Bicycle;
//     this.inflateTire = function(){
//         this.Bicycle.inflateTire();
//     }
// }

// var Mike = new Mechanic("Mike",bicycle5);
// Mike.inflateTire();
// console.log("**************");
// console.log("bicycle5 : ",bicycle5);
// console.log("**************");
// console.log(Mike.Bicycle.tirePressure);

//Objects and Prototypes In-depth 10 - Using the call function

//Every function object have out of the box property called -> call()

function greet(){
    this.num = 10;
    console.log("hellooo");
}

greet.call({});// when using call() is invoked this ref of greet function will this reference will binds to the object which is passed as arg ({})
//now whenever you access this in greet fun , this will bound to object which is passed as argument in call

function Mechanic(name){
    this.name = name;
}

var mike = new Mechanic("Mike");
mike.inflateTire = bicycle4.inflateTire;
console.log("bicycle5 : ",bicycle5);
mike.inflateTire.call(bicycle5);
console.log("bicycle5 : ",bicycle5);