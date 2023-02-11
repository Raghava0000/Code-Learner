// constructor with arguments  using this keyword and prototype method using this keyword:
class parent{
    constructor(firstname,lastname){
        this.firstname=firstname
        this.lastname=lastname
    }
    //prototype method
    getDetails(){
        console.log(this.firstname,this.lastname)
    }
}
let p=new parent("raghava","shabbu")
p.getDetails()