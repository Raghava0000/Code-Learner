// single level inheritance using parameter constructor
class parent{
    constructor(firstname,lastname){
        console.log(firstname)
        console.log(lastname)
    }
}
class child extends parent{
    constructor(email,address){
    super("raghava","shabbu")
    console.log(email)
    console.log(address)
    }
}
new child("xyz@gmail.com","hyd")