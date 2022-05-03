function rndNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

class Mars {
  static counter = 0;
  static setID = [];
  static addSat() {
    this.counter += 1;

if (Mars.counter <= 2){
  const mars = new Mars();
    mars.id = rndNum(1, 999);
    Mars.setID.push(mars.id);
    Mars.counter >= 2 ? (mars.name = "Phobes") : (mars.name = "Deimos");
    console.log(mars)

} else {
  const mars = new Mars();
  const x = rndNum(0,1)
  mars.id = Mars.setID[x]
  x === 1 ? (mars.name = "Phobes") : (mars.name = "Deimos");
  console.log(mars)
}
  }

  constructor() {}
}
export default Mars;