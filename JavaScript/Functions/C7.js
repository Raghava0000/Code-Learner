// argument keyword:
function f1(){
    console.log(arguments)          //[Arguments] { '0': 10 }  
    console.log(arguments.length)   //length
    console.log(arguments[0])       //position
}
f1(10)              
f1(10,20,30,40,50)

