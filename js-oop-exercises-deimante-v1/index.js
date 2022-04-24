import Bucket1 from "./src/modules/Bucket.js";
import Vallet from "./src/modules/Vallet.js";
import Tbus from "./src/modules/Tbus.js";
import ShopBasket from "./src/modules/ShopBasket.js";
import Glass from "./src/modules/Glass.js";
import Shroom from "./src/modules/Shroom.js";
import Basket from "./src/modules/Basket.js";

// 1, 7 ------------------------------------------------------------

// const bucket1 = new Bucket1();
// const bucket2 = new Bucket1();
// const bucket3 = new Bucket1();

// bucket1.addStone();
// bucket1.addStone();
// bucket1.addMore(5);
// bucket1.stoneCount();

// bucket2.addMore(3);
// bucket2.addStone();
// bucket2.addStone();
// bucket2.stoneCount();

// bucket3.addMore(8);
// bucket3.addStone();
// bucket3.stoneCount();

// Bucket1.everySingleStone()

// 2, 6 ---------------------------------------------------------

// const vallet = new Vallet()
// vallet.add(1)
// vallet.add(2)
// vallet.add(2)
// vallet.add(6)
// vallet.add(8)
// vallet.add(2)
// vallet.add(7)
// vallet.count()

// vallet.coinCounter()
// vallet.cashCounter()

// 3, 4 ---------------------------------------------------------

// const Trolley1 = new Tbus();
// const Trolley2 = new Tbus();
// const Trolley3 = new Tbus();

// Trolley1.in(45);
// Trolley1.out(5);

// Trolley2.in(80);
// Trolley2.out(25);

// Trolley3.in(20);
// Trolley2.out(10);

// Trolley1.ride();
// Trolley2.ride();
// Trolley3.ride();

// Trolley1.passangersInAllTbusses();

// 5 ------------------------------------------------------------

// const cart = new ShopBasket()

// cart.addSausages(3)
// cart.addSausages(2)
// cart.addHam(4)
// cart.addBacon(1)
// cart.addBacon(2)
// cart.addSausages()

// console.log('-------------')

// cart.basketContent()

// 8 ------------------------------------------------------------

// const cupL = new Glass(200);
// const cupM = new Glass(150);
// const cupS = new Glass(100);

// cupL.fill(220);

// cupM.fill(cupL.amount);
// cupL.pourOut();
// cupL.glassIs();
// cupS.fill(cupM.amount);
// cupM.pourOut();

// console.log("L ", cupL);
// console.log("M ", cupM);
// console.log("S ", cupS);

// 9 ------------------------------------------------------------

const container = new Basket

let mushroom = new Shroom()
// console.log(mushroom.edible)
// container.add(mushroom.weight)
// console.log(mushroom.weight)
mushroom.edible && mushroom.rotten === true ? container.add(mushroom.weight) : mushroom = new Shroom()

console.log(mushroom)
console.log(container)

