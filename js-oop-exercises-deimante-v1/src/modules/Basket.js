class Basket {
  constructor() {
    this.size = 500;
    this.filled = 0;
  }
  add(shroomWeight) {
    this.filled += shroomWeight;
  }
}
export default Basket;
