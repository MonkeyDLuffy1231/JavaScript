//TypeScript is not an other language it is an extension to JS 
//It is a most popular static extension for Js 
var a = "1";
console.log("a : ", a);
var value = "Hello";
//value = 10;// value must be string type bcz above literal is we initialized is string
console.log("value : ", value);
//Function 
var fullname = function (fName, lName) {
    return "".concat(fName, " ").concat(lName);
};
console.log("fullName : ", fullname("Shikamaru", "Nara"));
var user = {
    "name": "Luffy",
    "age": 23,
    getMessage: function () {
        return ("name : " + this.name + " age : " + this.age);
    }
};
var user2 = {
    name: "Ichigo",
    age: 21,
    getMessage: function () {
        return ("name : " + this.name + " age : " + this.age);
    }
};
console.log("user2.name : ", user2.name);
console.log("user2.getMessage() : ", user2.getMessage());
//Union 
var bookName = "You don't know JS";
var pageNumber = "1"; //this is unoin bcz here for pageNumber we can give either string or number as a literal
var p1 = null;
var stringArray = ["Hello", "Hii"];
var age = 10;
//any, never, void, unknown
var doSomething = function () {
    console.log("doing something");
};
doSomething();
var a1 = undefined;
var a2 = null; //not recommed to use any
//console.log(a2.foo());// it will not show error bcz type is set to any typescript doest not anyting about a2 but we get runtime exp
//never type => it is used in libraries
// const doSomething1 = ():never => {
//     throw "never"; //throws never like exception 
//     console.log("doing something");
// };
// doSomething1();
//unknown => same as any but we get error in unknow as shown in below code
var vAny = 10;
var vUnknown = 10;
var s1 = vAny;
//let s2 : string = vUnknown; //we get error : Type 'unknown' is not assignable to type 'string'
console.log(s1); //10
console.log(typeof s1); //number
//TypeAssertion => to store  values from one type defination to other
var s2 = vUnknown; //to store from unknown to string
var pageNum = "10";
var pageNum1 = pageNum; //to store string value into number type defined varibale
console.log("typeof pageNum1 : ", typeof pageNum1); //string
console.log("pageNum1 : ", pageNum1);
console.log(pageNum1 + 10); //1010
var User1 = /** @class */ (function () {
    function User1(firstName, lastName, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        //this.gender = gender;
    }
    User1.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    //private readonly gender : string; // once assigned cannot be changed // to create constants in classes 
    User1.age = 15;
    return User1;
}());
var user3 = new User1("Echizen", "Ryoma", "Male");
console.log(user3.getFullName());
// console.log("gender : ",user3.getGender());
console.log("age : ", User1.age);
