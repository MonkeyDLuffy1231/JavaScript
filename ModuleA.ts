import { name as n, age as a, obj , greet, GreetMessage} from "./ModuleB"; //module B imported
console.log("name : ",n," age : ",a );
//n = "qw"; // imports are readonly you cannot change values

obj.name = "Zoro";
console.log("obj.name : ",obj.name);
greet(n);

//Using default import
// import {default as firstName} from './ModuleB'
// console.log(firstName);

var gm = new GreetMessage();
gm.greet();
