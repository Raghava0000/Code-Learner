//JSON
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
console.log(typeof(detailsJSON))

//Object
let detailsObject = {
    "userName":"Sai Kiran",
    "contactNo":9876543210,
    "productAvailability":true,
    "productDetails":["IPhone 13", "128GB", "Blue Color"],
    "deliveryAddress" : {
        Address: "Hyd", pincode: 5000001
    }
}
console.log(detailsObject)
console.log(typeof(detailsObject))