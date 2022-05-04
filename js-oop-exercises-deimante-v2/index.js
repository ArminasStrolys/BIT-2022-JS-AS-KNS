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

// Point.po()
// console.log(Point.pnt)
// console.log(Points.pointsArray())
// console.log(Points.pointsArray())
// Points.pointsArry
// console.log(Points.pointsArray())
// console.log(Points.pointsArray())
// console.log(Points.pointsArry)
// console.log(Points.pointsArry)

const allPoints = []

for (let i = 0; i < Points.pointsArray().length; i++){
    allPoints.push(Points.pointsArray())
    // let bc = Points.pointsArray().reduce((a,b) => a + b)
    // console.log('total ',bc)
    // console.log(Points.pointsArray())
    // console.log(allPoints)
}



// allPoints.reduce((a,b)=>console.log(b+a))
// allPoints.sort((a,b)=>console.log('a: ',a, 'b: ', b))

// allPoints.map(e=>
//     {
//         for (let i=0; i < Points.pointsArray().length; i++)
//         console.log(e[i])
//     })

// allPoints.forEach((a,b)=>
// {
//     console.log(b)
// }
// )

let a = []

for (let i = 0; i < 10; i++){

    allPoints.sort((a,b)=>b-a)


    
    // console.log(allPoints[i].reduce((a,b) => a + b))

    // console.log(allPoints[i].reduce((a,b) => a + b))

}



// console.log(allPoints[0].reduce((a,b) => a + b))
// console.log(allPoints[0])
// console.log(allPoints[1])
// console.log(allPoints.sort((a,b)=>a + b))
console.log(allPoints)
// console.log(allPoints)