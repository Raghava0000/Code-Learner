// abstraction
class parent{
    firstname
    lastname
    constructor(firstname,lastname){
        if(constructor==parent){
            throw new error("Abstract class cant be instatiated")
        }
        this.firstname=firstname
        this.lastname=lastname
    }
    getDetails(){
        console.log("parent class:" +this.firstname,this.lastname)
    }
}
class child extends parent{
    constructor(firstname,lastname){
        super(firstname,lastname)
    }
    getDetails(){
        console.log("child class:"+this.firstname,this.lastname)
    }
}
let p=new parent("raghava","shabbu")
console.log(p)
p.getDetails()

let c=new child("shannu","arshi")
console.log(c)
c.getDetails()