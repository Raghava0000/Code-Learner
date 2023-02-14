// creat element
let l1=document.createElement("p")
console.log(l1)

// adding the text
let l2=document.createTextNode('New para from JS')
console.log(l2)

l1.appendChild(l2)
console.log(l1)

l3=document.getElementById('div1')
l3.appendChild(l1)
console.log(l3)