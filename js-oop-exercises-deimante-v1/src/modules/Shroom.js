function rndNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

class Shroom {
  constructor() {
    this.edible = rndNum(1, 4) === 1 ? false : true;
    this.rotten = rndNum(1, 4) === 1 ? true : false;
    this.weight = rndNum(5, 45);
  }
}
export default Shroom;
