// call apply bind
let l1={
    firstname:"raghava",
    lastname:"shabbu",
    dispaly:function (age,contact){
        console.log(this)
        console.log(this.firstname +" "+this.lastname)
        console.log(age,contact)
    }
}
l1.dispaly()
l1.dispaly.call(l1,25,987654321)
l1.dispaly.apply(l1,[20,9874123365])

let l3=l1.dispaly.bind(l1,30,987412365)
l3()