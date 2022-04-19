class Transport {
  constructor( model, manufacturer, price, weight, isMotor, isMotorKw, maxSpeed, desc, passangerCount
  ) {
    this.model = model, 
    this.manufacturer = manufacturer,
    this.price = price
    // this.weight = weight,
    // this.isMotor = isMotor,
    // this.isMotorKw = isMotorKw,
    // this.maxSpeed = maxSpeed,
    // this.desc = desc,
    // this.passangerCount = passangerCount
  }
  transportInfo() {
    return {
      model: this.model,
      manufacturer: this.manufacturer,
         price: this.price
      //    weight: this.weight,
      //    isMotor: this.isMotor,
      //    isMotorKw: this.isMotorKw,
      //    maxSpeed: this.maxSpeed,
      //    desc: this.desc,
      //    passangerCount: this.passangerCount,
    }
  }
  setPrice(price){
    this.price = price
}
}

export default Transport;
