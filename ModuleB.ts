//Transpiler which takes ES2015 source code we write it generates ES5 code that runs in every browser
//Transpiler => Tracer , Bable, TypeScript  
//npm => Node Package Manager is manager that is going to help manage our dependencies
//Modules => In JavaScript modules are implemented as a libraries they are not built into the language
//but in ES2015 module syntax as been standardized

let name = "Asta";
let age = 20;
let obj = {
    name : "Luffy"
}



function greet(name){
    console.log("Hello ",name);   
}
console.log("ModuleB loaded");
export{ name, age , obj, greet, GreetMessage}

//default export
// let fName = "Itachi";
// export default fName;

//export classes
class GreetMessage{
    constructor(){
        console.log("In constructor");
    }
    greet(){
        console.log("greeting");
         
    }
}