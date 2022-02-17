function rndNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//---------------------- 1 ----------------------
/*
Reikia padaryt masyvą iš 10 elementų, kurio elementai
yra rand skaičiai nuo 0 iki 7
*/

let array_1 = []

for (let i = 0; i < 10; i++){
  let x = rndNum(0, 7)
  array_1.push(x)
}

console.log(array_1);

//---------------------- 2 ----------------------
/*
Atspausdinti masyvo reikšmes stulpeliu,
bet tik tas kurios didesnės už 3
*/

// for (let i = 0; i < array_1.length; i++){
//   if (array_1[i] > 3){
//     console.log('Daugiau uz 3: ', array_1[i]);
//   }
// }

//---------------------- 3 ----------------------
/*
Paskaičiuoti masyvo elementų sumą
*/

// let xm = 0

// for (let i = 0; i < array_1.length; i++){
//   xm += array_1[i]
// }

// console.log(xm);

//---------------------- 4 ----------------------
/*
Reikia surasti mažiausią elementą masyve
*/

// // let xm = Math.max(...array_1)

// // for (let i = 0; i < array_1.length; i++){
// //   if (array_1[i] < xm){
// //     xm = array_1[i]
// //   }
// // }

// // console.log(xm);

// let xb = array_1[0]

// for (let i = 1; i < array_1.length; i++){
//   if (array_1[i] < xb){
//     xb = array_1[i]
//   }
// }

// console.log(xb);

//---------------------- 5 ----------------------
/*
Paskaičiuoti kiek porinių/lyginių reikšmių yra masyve
*/

// let even = 0

// for (let i = 0; i < array_1.length; i++){
//   if (array_1[i] % 2 == 0){
//     even++
//   }
// }

// console.log(even);

//---------------------- 6 ----------------------
/*

*/



//---------------------- 7 ----------------------
/*

*/



//---------------------- 8 ----------------------
/*

*/



//---------------------- 9 ----------------------
/*

*/



//---------------------- 10 ----------------------
/*

*/


