class profile{
    constructor(){
        let firstname
        let lastname
    }
    getUserDetails(){
        console.log(this.firstname,this.lastname)
        document.write(this.firstname,this.lastname)
    }
}
let p=new profile()
p.firstname="raghava"
p.lastname="shabbu"
p.getUserDetails()