class Bucket1 {
  constructor(stones = 0) {
    this.stones = stones;
  }
  addStone() {
    this.stones += 1;
  }
  addMore(add = 2) {
    this.stones += add;
  }

  stoneCount() {
    console.log(`Stones: `, this.stones);
  }
}

export default Bucket1;
