// function calling :
function f1(){
    console.log("f1 function")  
    f2()
}
function f2(){
    console.log("f2 function")  
}
f1()        //f1 function 
            //f2 function



// assign a function to a variable:
let f=function f3(){
    return "f3 function"
}
f()
console.log(f())
console.log(f)  //[Function: f3]