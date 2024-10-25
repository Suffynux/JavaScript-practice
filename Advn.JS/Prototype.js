function Person(name) {
    this.name = name;
}

Person.prototype.greet = function(){
    console.log(`Hi How are you ${this.name}`)
}


let myName = new Person("Sufiyan")
myName.greet();