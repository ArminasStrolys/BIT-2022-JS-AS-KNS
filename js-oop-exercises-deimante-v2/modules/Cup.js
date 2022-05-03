class Cup {
  static createCup(color, filled) {
    const cup = new Cup();
    cup.color = color;
    cup.filled = filled;
    console.log(cup);
    return cup;
  }
  static fill(cup1, cup2) {
    cup1.filled === true ? cup1.filled = false : cup1.filled = true
    cup2.filled === true ? cup2.filled = false : cup2.filled = true 
    // cup1.filled === true ? cup1.filled = false : cup2.filled === true ? cup2.filled = false :
    // cup1.filled = true

      console.log(cup1, cup2);
  }
  // static fill(cup) {
  //   cup.filled === true ? (cup.filled = false) : (cup.filled = true);
  //   console.log(cup);
  // }

  static spillAll(cup1, cup2) {
    cup1.filled === true
      ? ((cup1.filled = false), (cup2.filled = false))
      : (cup2.filled = false);
    console.log(cup1, cup2);
  }
  static fillAll(cup1, cup2) {
    cup1.filled === false
      ? ((cup1.filled = true), (cup2.filled = true))
      : (cup2.filled = true);
    console.log(cup1, cup2);
  }

  constructor() {}
}

export default Cup;
