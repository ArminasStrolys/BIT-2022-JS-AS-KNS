class Vallet {
  constructor(coins = 0, cash = 0) {
    this.coins = coins;
    this.cash = cash;
    this.coinCount = 0;
    this.cashCount = 0;
  }

  add(money = 0) {
    money > 2
      ? ((this.cash += money), (this.coinCount += 1))
      : ((this.coins += money), (this.cashCount += 1));
  }
  count() {
    console.log(
      `Money in coins: ${this.coins}$, Money in cash: ${
        this.cash
      }$, Total money: ${this.coins + this.cash}$`
    );
  }
  coinCounter() {
    console.log("Total coin pieces:", this.coinCount);
  }
  cashCounter() {
    console.log("Total cash pieces:", this.cashCount);
  }
}

export default Vallet;
