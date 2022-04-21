class Bucket1 {

static allStones = 0

static everySingleStone(){
  console.log('Total stones: ', this.allStones)
}

static allStoneCounter(all){
this.allStones = this.allStones + all
}

  constructor(stones = 0) {
    this.stones = stones;
  }
  addStone() {
    this.stones += 1;
    Bucket1.allStoneCounter(1)
  }
  addMore(add = 2) {
    this.stones += add;
    Bucket1.allStoneCounter(add)
  }

  stoneCount() {
    console.log(`${this.stones} stones in bucket number 1`);
  }
}

export default Bucket1;
