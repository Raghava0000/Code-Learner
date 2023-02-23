let map = new Map([["NameOne","Sai Kiran"], ["NameTwo","Sai Kumar"], ["NameThree","Sai Ram"], ["NameFour","Sai Krishna"]])
console.log(map)

console.log(map.keys())
console.log(map.values())

for(let [keys, values] of map){
    console.log(keys + " and " + values)
}