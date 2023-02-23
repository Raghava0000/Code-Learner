try{

    let userDetails = '{"firstName" :"Sai", "lastName" :"Kiran"}'
    let userDetailsObject = JSON.parse(userDetails)

    if(userDetails.firstName == "Sai"){
        throw new Error("Error Name Not Found")
    }else{
        console.log(userDetailsObject.firstName, userDetailsObject.lastName)
    }
}catch(e){
    console.log("Errors are encountered here")
}finally{
    console.log("Finally Block")
}