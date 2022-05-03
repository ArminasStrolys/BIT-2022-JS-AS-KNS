function rndNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

class Mars {
  static addSat() {
    const mars = new Mars()

    console.log(mars)
    
  }
//   static addSat() {
//     Mars.size > 0 ? console.log("E") : console.log("F");
//     const planets = new Object();
//     planets.pav = ["Deimos", "Phobes"];
//     planets.id = rndNum(10, 999);
//     console.log(planets);
//     return planets;
//   }
  // static addSat(){
  // const planet = Object.create(Mars)
  // planet.id = rndNum(5,999)
  // planet.name = ['Deimos', 'Phobes']
  // }

  constructor() {
    this.id = rndNum(1,999)
    this.name = ["Deimos", "Phobes"]
  }
}
export default Mars;
