class Glass {
  constructor(volume = 0) {
    this.volume = volume;
    this.amount = 0;
  }
  fill(fillMe = 0) {
    this.amount + fillMe > this.volume
      ? ((console.log(`pilta: ${fillMe} ml`),
        (this.amount = fillMe - this.volume)),
        console.log("Nubego per stala: ", `-${this.amount} ml`),
        (this.amount = this.volume))
      : (this.amount += fillMe);
  }
  pourOut() {
    console.log("Nupilta: ", this.amount);
    this.amount = 0;
  }
  glassIs() {
    console.log("kiekis stiklineje: ", this.amount + ' ml');
  }
}

export default Glass;
