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

 