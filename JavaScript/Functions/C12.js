// Arrow function args with templets strings:

// Normal function:
function f1(name){
    console.log(`username is: ${name}`)
}
f1("Admin")

// // Assign a function to a variable:
let f2=function f2(name){
    console.log(`username is: ${name}`)
}
f2("system")

//1)Arrow function:
let f3=(name)=>console.log(`username is:${name}`)
f3("Root")

// 2)better for string args:
let f4=(name)=>`username is ${name}`
console.log(f4("raghava"))

// 3)multiple arguments
let f5=(id,name)=>{
    console.log(`userid is: ${id} and username is: ${name}`)
}
f5("101","raghava")