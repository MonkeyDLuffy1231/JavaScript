//TypeScript is not an other language it is an extension to JS 
//It is a most popular static extension for Js 

const a = "1";
console.log("a : ",a);

let value : String = "Hello";
//value = 10;// value must be string type bcz above literal is we initialized is string
console.log("value : ",value);

//Function 
const fullname = (fName : String,lName : string) : String => {
    return `${fName} ${lName}`;
}

console.log("fullName : ",fullname("Shikamaru","Nara"));

//Interfaces

interface UserInterface {
    name : string, //mandatory
    age ? : number //not mandatory to add this in every object
    getMessage() : string;
}

const user : {name : string, age : number, getMessage : Function} = {
    "name" : "Luffy",
    "age" : 23,
    getMessage(){
        return ("name : "+this.name+" age : "+this.age);
    }
};

const user2 : UserInterface = {
    name : "Ichigo",
    age : 21,
    getMessage(){
        return ("name : "+this.name+" age : "+this.age);
    }
}

console.log("user2.name : ",user2.name);
console.log("user2.getMessage() : ",user2.getMessage());

//Union 

let bookName : string = "You don't know JS";
let pageNumber : string | number = "1";//this is unoin bcz here for pageNumber we can give either string or number as a literal

interface PersonInterface{
    firstName : string,
    lastName : string
}

let p1 : PersonInterface | null = null;

//Type alias in TypeScript 

type popularTag = string;
type unionTag = string | number;
let stringArray : popularTag[] = ["Hello","Hii"];
let age : unionTag = 10;

//any, never, void, unknown

const doSomething = ():void => {
    console.log("doing something");
};

doSomething();

let a1 : void = undefined;
let a2 : any = null;//not recommed to use any
//console.log(a2.foo());// it will not show error bcz type is set to any typescript doest not anyting about a2 but we get runtime exp

//never type => it is used in libraries

// const doSomething1 = ():never => {
//     throw "never"; //throws never like exception 
//     console.log("doing something");
// };
// doSomething1();

//unknown => same as any but we get error in unknow as shown in below code

let vAny : any = 10;
let vUnknown : unknown = 10;
let s1 : string = vAny;
//let s2 : string = vUnknown; //we get error : Type 'unknown' is not assignable to type 'string'
console.log(s1);//10
console.log(typeof s1);//number

//TypeAssertion => to store  values from one type defination to other
let s2 : string = vUnknown as string;//to store from unknown to string

let pageNum : string = "10";
let pageNum1 : number = (pageNum as unknown) as number;//to store string value into number type defined varibale
console.log("typeof pageNum1 : ",typeof pageNum1);//string
console.log("pageNum1 : ",pageNum1);
console.log(pageNum1 + 10);//1010

//TypeScript working with DOM
// const someElement = document.querySelector(".foo") as HTMLInputElement;
// console.log("someElement : ",someElement.value);

// someElement.addEventListener("blur",(event) = > {
//     const target = event.target as HTMLInputElement;
//     console.const target: HTMLInputElement
// });

//class

interface User1Interface{
    getFullName() : string;
}

class User1 implements User1Interface{
    firstName : string;//by default it is public 
    private lastName : string;
    //private readonly gender : string; // once assigned cannot be changed // to create constants in classes 
    static age = 15;
    constructor(firstName : string, lastName : string, gender : string){
        this.firstName = firstName;
        this.lastName = lastName;
        //this.gender = gender;
    }

    getFullName():string {
        return this.firstName+" "+this.lastName;
    }

    // getGender() :string{
    //     return this.gender;
    // }
}
 
const user3 = new User1("Echizen","Ryoma","Male");
console.log(user3.getFullName() );
// console.log("gender : ",user3.getGender());
console.log("age : ",User1.age);

 









