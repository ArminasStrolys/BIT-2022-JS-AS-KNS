class Tbus {
  static totalPassangers = 0;

  static totalMax(ppl) {
    this.totalPassangers = this.totalPassangers + ppl;
  }
  constructor(passangers = 0) {
    this.passangers = passangers;
  }

  in(ppl = 1) {
    ppl + this.passangers > 100
      ? (console.log(
          `Trolleybus is full: ${100}. ${
            ppl + (this.passangers - 100)
          } passangers could not get in.`
        ),
        (this.passangers = 100))
      : ((this.passangers += ppl), Tbus.totalMax(ppl));
  }

  out(ppl = 1) {
    this.passangers - ppl < 0
      ? (console.log(`Trolleybus is empty.`), (this.passangers = 0))
      : ((this.passangers -= ppl), Tbus.totalMax(-ppl));
  }

  ride() {
    console.log(`Passangers in the transport: `, this.passangers);
  }

  passangersInAllTbusses() {
    console.log("Total passangers: ", Tbus.totalPassangers);
  }
}

export default Tbus;
