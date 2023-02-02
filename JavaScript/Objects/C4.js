// Accessing properties from an object
let l={
    firstname:"raghava",
    lastname:"shabbu",
    email:"raghava@gmail.com",
    comapany:function(){console.log("wipro")}
}
console.log(l.firstname)
console.log(l.lastname)
console.log(l["lastname"])

l.contact="45678645"
console.log(l["contact"])

l["address"]="hyd"
console.log(l.address)

console.log(l)