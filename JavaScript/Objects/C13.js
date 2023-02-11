//polymorphism: having manyforms
class parent{
    constructor(firstname,lastname){
        this.firstname=firstname
        this.lastname=lastname
    }
    getDetails(){
        console.log("parent:"+this.firstname,this.lastname)
    }
}
class child extends parent{
    // method overriding
        getDetails(){
        super.getDetails()
        console.log("child:"+this.firstname,this.lastname)
    }
}
new child("raghava","shabbu").getDetails()