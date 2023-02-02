// higher order function:
//a function that takes as a argument or returns a function..
// let f1=function(){
//     return function(){
//         console.log("raghava")
//     }
// }
// console.log(f1) //[Function: f1]

// let f2 = f1()
// console.log(f2)  //[Function (anonymous)]
// f2()             //raghava

//Callback function:
// the function that is passed as argument to another function and invoked in another function..
function f1(firstname,lastname){
    console.log(`my first name ${firstname} and my lastname ${lastname}`)
}
function f2(firstname,lastname){
    firstname="is:"+firstname
    lastname="is:"+lastname
    f1(firstname,lastname)
}
f2("raghava","shabbu")
f2("raghava","shannu")