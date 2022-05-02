function rndNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const food = [
  "bandelė",
  "bulkutė",
  "duona",
  "batonas",
  "pyragas",
  "baronka",
  "riestainis",
  "javainis",
  "paplotėlis",
];

const shop = new Map();

// 1 ------------------------------------------------------------

// food.map(e=>{
//     shop.set(e,rndNum(5,25))
// })

// console.log(shop)

// 2 ------------------------------------------------------------

const market = new Map();

// food.map(e=>{

//     market.set(e, rndNum(10,20))

// })

food.map(e=>{
    market.set(e,rndNum(5,25))
})

console.log(market)

// while(market.size !== food.length){

//     let x = rndNum(10,20)
//     market.set(x)
// for (let i = 0; i < food.length; i++){
//   console.log(food[i])
// }
// }

market.forEach((e,i) => {
// e = i
// i = 'asd'
  console.log(e,i)
})


console.log(market)

// console.log(market.entries())

// setObj.add(rndNum(5,35))

// for (let i = 0; i < 22; i++){
//     let x = rndNum(5,35)
//     // while(!setObj.has(x)){
//     //     setObj.add(x)
//     // }
//     // setObj.has(x) ? console.log('jelp') : setObj.add(x)

// if (setObj.has(x)){
//     while(x == setObj.has(x)){
//     //    let x = rndNum(5,35)
//     //     !setObj.has(x) && setObj.add(x)
//     console.log('asd')
//     }
// } else {
//     setObj.add(x)
// }

// }

// 4 ------------------------------------------------------------

// const setObj = new Set();

// food.map((e) => {
//   setObj.add(e, rndNum(10, 20));
// });

// setObj.forEach((e) => e.charAt(1) === "a" && setObj.delete(e));

// console.log(setObj);

// 5 ------------------------------------------------------------

// const setObj = new Set()

// while(setObj.size !== 22){
//     let x = rndNum(5,35)
//     setObj.add(x)
// }

// console.log(setObj)
