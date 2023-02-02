// this
let l={
    firstname:"raghava",
    lastname:"shabbu",
    company:function(){
        console.log(this.firstname)
        console.log(this.lastname)
        console.log(this)
        console.log("wipro")
    }
}
l.company()
console.log(this)
this.a=10
this.b=12
console.log(this)