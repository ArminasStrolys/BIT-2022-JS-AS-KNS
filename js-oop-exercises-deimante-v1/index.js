import Bucket1 from "./src/modules/Bucket.js";
import Vallet from "./src/modules/Vallet.js"
import Tbus from "./src/modules/Tbus.js";

//------------------------------------------------------------

// const bucket = new Bucket1();

// bucket.stoneCount();

// bucket.addStone();
// bucket.stoneCount();
// bucket.addStone();
// bucket.stoneCount();
// bucket.addMore(5);
// bucket.stoneCount();

//------------------------------------------------------------

// const vallet = new Vallet()
// vallet.add(1)
// vallet.add(6)
// vallet.add(2)
// vallet.add(7)

// console.log(vallet)

// vallet.count()

//------------------------------------------------------------

const Trolley1 = new Tbus()
const Trolley2 = new Tbus()
const Trolley3 = new Tbus()

Trolley1.in(45)
Trolley1.out(5)

Trolley2.in(80)
Trolley2.out(25)

Trolley3.in(20)
Trolley2.out(10)

Trolley1.ride()
Trolley2.ride()
Trolley3.ride()

// Trolley3.passangersInAllTbusses()
// Tbus.totalMax()
console.log(Tbus.totalMax(1))
// Tbus.totalMax()
// console.log('Total people: ',Tbus.totalPassangers)

