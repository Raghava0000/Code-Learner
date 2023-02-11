const { color } = require("d3-color")

var v1=document.getElementsByTagName("li")
console.log(v1)
for(i=0;i<v1.length;i++){
    v1[i].style.backgroundcolor="lightgreen"
    v1[i].style.fontFamily="arial"
    v1[i].style.fontSize="25px"
    v1[i].style.fontWeight="bold"
    v1[i].style.padding="10px"
}