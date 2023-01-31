// find:-
let l1=[10,20,30,40,50]
console.log(l1)
console.log(l1.find(checkvalues))
function checkvalues(a){
    return a>=30
}

// find index:-
let l2=[10,20,30,40,50]
//       0  1  2  3  4
console.log(l2)
console.log(l2.findIndex(checkvalues))
function checkvalues(a){
    return a>=30
}

// indexOf:-
let l3=[10,20,30,40,50,60,10,20,30]
//       0  1  2  3  4  5  6  7  8
console.log(l2)
console.log(l3.indexOf(40))
console.log(l3.indexOf(20,6))

// last indexOf:-
console.log(l3.lastIndexOf(10))
console.log(l3.lastIndexOf(10,5))
