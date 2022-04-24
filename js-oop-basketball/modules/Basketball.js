function rndNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

class Basketball{

    static timer = 10
    static qTime = 0

    constructor(){
this.teamA = 'Noobs'
this.teamB = 'Pros'
this.attackingTeam = this.teamA || this.teamB
this.quarter = 1
this.match = 'win'
    }
init(){
    setTimeout( () => {
        this.init()
      }, 100)
      console.log(Basketball)
}
getTimer(){}
setClock(){}
setQuarter(){}
getQuarter(){}
getScore(){}
play(){}
}


export default Basketball