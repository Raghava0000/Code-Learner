// pure functon:
// function f1(n){
//     square = n*n
//     return square
// }
// console.log(f1(4))
// console.log(f1(9))


function f2(username,password){
    if(username=="Admin"&& password=="Admin"){
        console.log("login success")
    }else{
        console.log("login failed")
    }
}
f2("Admin","Admin")
