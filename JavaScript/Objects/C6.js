// call
let l1={
    firstname:"raghava",
    lastname:"shabbu"
}
// writing the function outside
let f = function(){
    console.log(this.firstname + " " + this.lastname)
}
f.call(l1)

let l2={
    firstname:"shahib",
    lastname:"shahin"
}
f.call(l2)

