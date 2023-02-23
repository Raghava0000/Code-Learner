try{

    let names = new Set()

    //add
    names.add("NameOne")
    names.add("NameTwo")
    names.add("NameThree")
    names.add("NameFour")
    names.add("NameOne")
    console.log(names)
    console.log(names.size)

    //has 
    console.log(names.has("NameOne"))
    console.log(names.has("NameSix"))

    //delete 
    console.log(names.delete("NameOne"))
    console.log(names)

    //clear 
    names.clear() 
    console.log(names)
    console.log(names.size)

}catch(e){
    console.log(e)
}