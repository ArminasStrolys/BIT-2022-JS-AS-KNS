class Car {
    constructor( model, manufacturer, price, weight, isMotor, isMotorKw, maxSpeed, desc, passangerCount ) {
        this.model = model, 
        this.manufacturer = manufacturer,
        this.price = price
        this.weight = weight,
        this.isMotor = isMotor,
        this.isMotorKw = isMotorKw,
        this.maxSpeed = maxSpeed,
        this.desc = desc,
        this.passangerCount = passangerCount
    }
// getter
get getCar() {
    return (`Model: ${this.model}. Car: ${this.manufacturer}`)
}
// setter
set changeModel(newModel){
    this.model = newModel
}

}


export default Car