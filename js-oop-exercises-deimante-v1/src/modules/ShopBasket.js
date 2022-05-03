// class ShopBasket {
//   constructor() {
//     this.content = [];
//   }
//   addSausages(pcs = 1) {
//     this.content.push({ food: "sausages", pieces: pcs });
//     console.log(`Added ${pcs} sausage piece(-s)`);
//   }
//   addBacon(pcs = 1) {
//     this.content.push({ food: "bacon", pieces: pcs });
//     console.log(`Added ${pcs} bacon piece(-s)`);
//   }
//   addHam(pcs = 1) {
//     this.content.push({ food: "ham", pieces: pcs });
//     console.log(`Added ${pcs} ham piece(-s)`);
//   }
//   basketContent() {
//     let sausages = 0;
//     let bacon = 0;
//     let ham = 0;
//     this.content.map((obj) => {
//       obj.food === "sausages" && (sausages += obj.pieces),
//         obj.food === "bacon" && (bacon += obj.pieces),
//         obj.food === "ham" && (ham += obj.pieces);
//     });
//     console.log(`sausages: ${sausages}`, `bacon: ${bacon}`, `ham: ${ham}`);
//   }
// }

// export default ShopBasket;

class ShopBasket {
  static biscuits = 0;
  static doughnuts = 0;
  static candy = 0;
  constructor() {
    this.products = new Map();
  }
  contain() {
    let a = 20;
    console.log(a);
  }
  addBiscuit(pcs = 1) {
    ShopBasket.biscuits += pcs;
    this.products.set("Biscuits", ShopBasket.biscuits);
  }
  addDoughnut(pcs = 1) {
    ShopBasket.doughnuts += pcs;
    this.products.set("Doughnuts", ShopBasket.doughnuts);
  }
  addCandy(pcs = 1) {
    ShopBasket.candy += pcs;
    this.products.set("Candy", ShopBasket.candy);
  }
  basketContent() {
    console.log(this.products);
  }
}

export default ShopBasket;
