import Mars from "./modules/Mars.js";
import Cup from "./modules/Cup.js";
import Point from "./modules/Point.js";
import Points from "./modules/Points.js";

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

// let a1 = Cup.createCup('RED', true);
// let a2 = Cup.createCup('YELLOW', false);
// console.log('================================')
// Cup.fill(a1, a2)
// console.log('================================')
// Cup.spillAll(a1, a2)
// console.log('================================')
// Cup.fillAll(a1, a2)
// console.log('================================')
// Cup.fill(a1, a2)

// #3 -----------------------------------------------------------------

const allPoints = []

for (let i = 0; i < Points.pointsArray().length; i++){
    allPoints.push(Points.pointsArray())

}

let a = []

for (let i = 0; i < 10; i++){

    // allPoints.sort((a,b)=>b-a)
    a.push(allPoints[i].reduce((a,b) => a + b))
    a.sort((a,b)=>b-a)
    // console.log(allPoints[i].reduce((a,b) => a + b))

}


console.log(a)
// console.log(allPoints)


// #4 -----------------------------------------------------------------