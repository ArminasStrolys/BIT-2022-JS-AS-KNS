class Cup {
  static createCup() {
    // const cup1 = { color: 'red', filled: true }
    // const cup2 = { color: 'yellow', filled: false }
    const cups = [
      { color: "red", filled: true },
      { color: "yellow", filled: false },
    ];
    // const cups = Object.create(cup1)
    // console.log(cups)
    // console.log(cup1)
    // console.log(cup2)
    console.log(cups);
  }

  static refill() {
      console.log(this.createCup())
  }

  static spillAll() {}

  static fillBoth() {}

  constructor() {
    this.color = color;
    this.filled = filled;
  }
}

export default Cup;

// Cup.createCup();
// Cup.refill();
