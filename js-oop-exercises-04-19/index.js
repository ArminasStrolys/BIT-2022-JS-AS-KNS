import Cat from "./src/modules/cat.js"

// let newCat = new Cat(`Tiredness: ${6}/10`, ` Hunger ${5}/10`, ` Loneliness ${5}/10`, `Happiness ${5}/10`)
let newCat = new Cat(5,5,5,5)

console.log('Cat starting levels ', newCat)

newCat.feed()

console.log('After feeding ', newCat)

newCat.pet()

console.log('After petting ', newCat)

newCat.sleep(2)

console.log('After sleeping ', newCat)

newCat.randomPet()

newCat.status()
