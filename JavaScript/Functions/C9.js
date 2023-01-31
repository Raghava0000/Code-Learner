// impure function:
// function f1(username,password){
//     username="system"
//     if(username=="Admin" && password=="Admin"){
//         console.log("login success")
//     }else{
//         console.log("login failed")
//     }
// }
// f1("Admin","Admin")


// push
let a=[10,20,30]
function f2(element){
    a.push(element)
    console.log(a)
}
f2(70)
f2(90)


