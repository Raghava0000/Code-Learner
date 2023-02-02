// Rest operators and spread operators:
//1)Object:
let user={
    name:"raghava",
    age:22,
    contact:[314354321,352434414]
}
console.log(user)

//2)Rest operator using object:
let{name,age}=user
console.log(user.name)
console.log(user.age)
// console.log(...r)

// //Spread operator:
let newuser={
    user
}
console.log(newuser)