//JSO Data
let detailsJSON = JSON.stringify({
    "userName":"Sai Kiran",
    "contactNo":9876543210,
    "productAvailability":true,
    "productDetails":["IPhone 13", "128GB", "Blue Color"],
    "deliveryAddress" : {
        Address: "Hyd", pincode: 5000001
    }
})

console.log(detailsJSON)

console.log("-----Object Data----")

//Object Data //JSON to JavaScript
let detailsJsonParse = JSON.parse(detailsJSON)
console.log(detailsJsonParse)

console.log("-----Keys Data----")

//Object keys
let detailsKey = Object.keys(detailsJsonParse)
console.log(detailsKey)