// passing default value in function:
function f1(a=10,b=20){
    console.log(a,b)
}
f1()         // 10 20
f1(100,200)  // 100 200

// passing key and value in function :
function f2(x,y){
    console.log(x,y)
}
f2(10,20)       // 10 20
f2(x=100,y=200) // 100 200