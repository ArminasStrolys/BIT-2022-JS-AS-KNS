class Vallet{
    constructor(coins = 0, bucks = 0){
        this.coins = coins
        this.bucks = bucks
    }

    add(money = 0){
        money > 2 ? this.bucks += money : this.coins += money
    }
    count(){
        console.log(`Coins: ${this.coins}, Bucks: ${this.bucks}, Total: ${this.coins + this.bucks}`)
    }
}

export default Vallet