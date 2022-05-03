import Mars from "./modules/Mars.js";
import Cup from "./modules/Cup.js";

// #1 -----------------------------------------------------------------

// Mars.addSat()
// Mars.addSat()
// Mars.addSat()
// Mars.addSat()
// Mars.addSat()
// Mars.addSat()
// Mars.addSat()
// Mars.addSat()

// #2 -----------------------------------------------------------------

let a1 = Cup.createCup('RED', true);
let a2 = Cup.createCup('YELLOW', false);
console.log('================================')
// Cup.fill(a1)
// Cup.fill(a2)
Cup.fill(a1, a2)
console.log('================================')
Cup.spillAll(a1, a2)
console.log('================================')
Cup.fillAll(a1, a2)
console.log('================================')
Cup.fill(a1, a2)