// Types of variables:
// 1) Global  2)Local

// Global
var a=10
function f1(){
    console.log(a) 
}
console.log(a)   //10
f1()             //10
console.log(a)   //10

// Local
function f2(){
    var a=100
    var a=200
    console.log(100,200)  //100 200

}
f2()