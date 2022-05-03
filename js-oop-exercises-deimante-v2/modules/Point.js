function rndNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

class Point{
    constructor(){
        const point = rndNum(100,999)
        // this.point = rndNum(100,999)
        console.log(point)
    }
}

export default Point