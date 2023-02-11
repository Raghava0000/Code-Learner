class profile{
    constructor(){
        console.log("Default Constructor")
        document.write("Default Constructor")
        document.write("<br><br>")
    }
}
getUserDetails()
{
    console.log("prototype method")
    document.write("prototype method")
    document.write("<br><br>")
}
StaticgetProductDetails()
{
    console.log("getProductDetails")
    document.write("getProductDetails")
    document.write("<br><br>")
}
new profile.getUserDetails()
profile.getUserDetails()