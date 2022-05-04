import Point from "../modules/Point.js";

// function rndNum(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }

class Points{

    static pointsArry = []

    static pointsArray(){
        const arry = new Array
        for (let i = 0; i < 4; i++){
            arry.push(Point.po())

            // Points.pointsArry.push(Point.po())
        }

        return arry
    }

}

export default Points