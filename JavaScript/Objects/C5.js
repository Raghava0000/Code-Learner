// call
let l=
{
    firstname:"raghava",
    lastname:"shabbu",
    dispaly:function(){
        console.log(this)
        console.log(this.firstname+ " " + this.lastname)
        console.log(".......................")
    }
}
l.dispaly()

// function borrowing
let l2={
    firstname:"sai",
    lastname:"ram",
}
l.dispaly.call(l2)

let l3={
    firstname:"kiran",
    lastname:"vijay"
}
l.dispaly.call(l3)
console.log(l)