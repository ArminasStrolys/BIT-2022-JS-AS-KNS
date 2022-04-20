function rndNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

class Cat {
  // constructor(tiredness = 5, hunger = 5, lonliness = 5, happiness = 5) {

  constructor(tiredness, hunger, lonliness, happiness) {
    (this.tiredness = tiredness),
      (this.hunger = hunger),
      (this.lonliness = lonliness),
      (this.happiness = happiness);
  }

  //  checkZero(check, decrease) {
  //   return check - decrease > 0 ? check - decrease : 0;
  // }

  status() {
    this.happiness > 10
      && console.log("Cat is happy!")
       this.hunger > 10
      && console.log("Cat is fat")
       this.lonliness > 10
      && console.log("Cat is sad")
       this.tiredness > 10
      && console.log("Cat is sleepy")
       console.log("Stats are at normal levels");
  }
  feed() {
    (this.tiredness += 2),
      (this.hunger -= 4),
      (this.lonliness += 0),
      (this.happiness += 3);
  }

  //   feed(decrease = 1) {
  //     (this.tiredness += 2),
  //       (this.hunger -= 4),
  //       (this.lonliness += 0),
  //       (this.happiness += 3);
  // if((this.hunger - decrease) >= 0)
  // this.hunger = 0
  // return this.hunger
  //   }

//     feed(decrease = 1) {
//  return this.hunger = this.checkZero(this.hunger, decrease)
//     }

  sleep(time = 0) {
    (this.tiredness -= 6),
      (this.hunger += 2),
      (this.lonliness += 0),
      (this.happiness += time);
  }
  pet() {
    (this.tiredness += 1),
      (this.hunger += 0),
      (this.lonliness -= 4),
      (this.happiness += 2);
  }
  randomPet() {
    let x = rndNum(1, 10);
    x >= 5
      ? ((this.tiredness += 1),
        (this.hunger += 0),
        (this.lonliness -= 4),
        (this.happiness += 2))
      : console.log("CAT DOES NOT WANT TO BE PETTED!");
  }
}
export default Cat;

// return {hunger: this.hunger, pet: this.pet}