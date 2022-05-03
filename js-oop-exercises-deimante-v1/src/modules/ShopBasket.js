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
  constructor() {
    this.products = new Map();
  }
  addBiscuit(pcs = 1) {
    this.products.get("Biscuits")
      ? this.products.set("Biscuits", this.products.get("Biscuits") + pcs)
      : this.products.set("Biscuits", pcs);
  }
  addDoughnut(pcs = 1) {
    this.products.get("Doughnuts")
      ? this.products.set("Doughnuts", this.products.get("Doughnuts") + pcs)
      : this.products.set("Doughnuts", pcs);
  }
  addCandy(pcs = 1) {
    this.products.get("Candy")
      ? this.products.set("Candy", this.products.get("Candy") + pcs)
      : this.products.set("Candy", pcs);
  }
  basketContent() {
    console.log(this.products);
  }
}

export default ShopBasket;
