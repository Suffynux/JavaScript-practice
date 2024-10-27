// Closures in javascript

function numberIncrement(){
    let value = 4;
    return function() {
        
        return value++;
    }
}
let Countervalue = numberIncrement()
console.log(Countervalue())
console.log(Countervalue())


