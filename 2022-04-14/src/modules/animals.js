class Animals {
    constructor(param1, param2){ // parameters
console.log('test', param1, param2)
this.param1 = param1 // property
this.param2 = param2
    }
setParam(first) { //metodas, ne funkcija
    this.param1 = first
}
returnLine(){
    return `Its ant animal = ${this.param1} ${this.param2}`
}
}

const ani = new Animals('Bald','Eagle') //instance

export default Animals

// function(){ // funkcija

// }