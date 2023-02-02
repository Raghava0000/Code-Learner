// spread operator and rest operator:
// Normal function:
function f1(x,y,z){
    return x+y+z
}
console.log(f1(10,20,30))  //60

//1)Rest operator using function:
function f2(x,y,z,...args){
    return x+y+z+ ","+args
}
console.log(f2(10,20,30))
console.log(f2(10,20,30,40,50))

//2)Spread Operator using arrays:
let a=["raghava"," ashok"," sai"," kabali"]
function getnames(n1,n2,n3,n4,...args){
    console.group(n1+n2+n3+n4)
}
getnames(a[0],a[1],a[2],a[3])

