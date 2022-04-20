import Helper from "../../utils/Helper.js";

class Book {
  constructor() {
    this.id = Helper.rndNum(0, 999999);
    this.title = Helper.string(Helper.rndNum(30, 60));
    this.desc = Helper.string(Helper.rndNum(60, 120));
    this.pages = Helper.rndNum(10, 1500);
    this.read = false;
  }

  bookRead(){
      this.read = true
  }
}

export default Book