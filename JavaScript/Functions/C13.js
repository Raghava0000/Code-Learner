// Rest Operator:
//1)Normal function with argument keyword:
// function f1(){
//     console.log(arguments)
// }
// f1(10,20)
// f1(10,20,30,40,50)

//2)Using for loop with argument keyword:
function f2(){
    // let i=0
    for(let i in arguments[1]);
}
// f2(10,20)
// f2(10,20,30,40,50)

// Rest Operators:
function f3(...args){
    console.log(...args)
}
f3(10,20)
f3(10,20,30,40,50)