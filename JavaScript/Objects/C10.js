// single level inheritance
class parent{
    a=10
    b=20
    constructor(){
        console.log(this.a)
        console.log(this.b)
    }
}
class child extends parent{
    c=30
    d=40
    constructor(){
        super()
        console.log(this.c)
        console.log(this.d)
    }
}
new child()