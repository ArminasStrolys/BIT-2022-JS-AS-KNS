function rndNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

class Point{
    static po(){
        const point = rndNum(100,999)
        return point
    }
}

export default Point