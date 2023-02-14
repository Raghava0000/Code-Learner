// creat element
let l1=document.createElement("p")
console.log(l1)

// adding the text
let l2=document.createTextNode('New para from JS')
console.log(l2)

l1.appendChild(l2)
console.log(l1)

// calling by id div1
let l3=document.getElementById("div1")

// calling by id p1
let l4=document.getElementById("p1")
l3.insertBefore(l1, l4)
console.group(l3)