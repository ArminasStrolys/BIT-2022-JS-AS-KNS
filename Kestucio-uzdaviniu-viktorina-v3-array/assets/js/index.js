function rndNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// ----------------------------- 1 -----------------------------
/*
Sugeneruoti masyvą, kurio ilgis 100, o reikšmės – masyvai,kurių
ilgis 10, o reikšmės skaičiai nuo 1 iki 10 ([1,2,3,4,5,6,7,8,9,10]).
*/

// let arrayA = []
// let arrayB = []
// let arrayC = []

// for (let i = 0; i < 100; i++) {
//  arrayA.push(i)
// }

// for (let i = 1; i <= 10; i++) {
//  arrayB.push(i)-1
// }

// arrayA.forEach(element => {
//   arrayC.push(arrayB)
// });

// console.log(arrayC);

// ----------------------------- 2 -----------------------------
/*
Sugeneruoti masyvą, kurio ilgis 100, o reikšmės – masyvai, kurių
ilgis 10, o reikšmės atsitiktiniai skaičiai nuo 1 iki 17.
*/

// let arrayA = [];

// for (let i = 0; i < 100; i++) {
//   arrayA.push(i);
// }

// arrayA.forEach((element) => {
//   let arrayB = [];
//   for (let i = 0; i < 10; i++) {
//     let x = rndNum(1, 17);
//     arrayB.push(x);
//   }
//   // console.log(arrayB);
//   arrayA.push(arrayB);
// });

// arrayA.splice(0, 100);

// console.log(arrayA);

// ----------------------------- 3 -----------------------------
/*
Sugeneruoti masyvą, kurio ilgis 100, o reikšmės – masyvai, kurių
ilgis atsitiktinis nuo 5 iki 18, o reikšmės – skaičiai
nuo 1 iki masyvo ilgio.
*/

// let arrayA = [];

// for (let i = 0; i < 100; i++) {
//   arrayA.push(i);
// }

// arrayA.forEach((element) => {
//   let arrayB = [];
//   let y = rndNum(5, 18);
//   for (let i = 0; i < y; i++) {
//     arrayB.push(i);
//   }
//   // console.log(arrayB);
//   arrayA.push(arrayB);
// });

// arrayA.splice(0, 100);

// console.log(arrayA);

// ----------------------------- 4 -----------------------------
/*
Sugeneruoti masyvą, kurio ilgis 100, o reikšmės – masyvai, kurių
ilgis atsitiktinis nuo 5 iki 18, o reikšmės – atsitiktiniai
skaičiai nuo 5 iki 30.
*/

// let arrayA = [];

// for (let i = 0; i < 100; i++) {
//   arrayA.push(i);
// }

// arrayA.forEach((element) => {
//   let arrayB = [];
//   let y = rndNum(5, 18);
//   for (let i = 0; i < y; i++) {
//     let x = rndNum(5, 30);
//     arrayB.push(x);
//   }
//   // console.log(arrayB);
//   arrayA.push(arrayB);
// });

// arrayA.splice(0, 100);

// console.log(arrayA);

// ----------------------------- 5 -----------------------------
/*
Sugeneruoti masyvą, kurio ilgis 100, o reikšmės – masyvai, kurių
ilgis atsitiktinis nuo 5 iki 18, o reikšmės – atsitiktiniai skaičiai
nuo 5 iki 75. Surasti didžiausią skaičių visame didžiajame masyve.
*/

// let arrayA = [];
// let max = 0;

// for (let i = 0; i < 100; i++) {
//   arrayA.push(i);
// }

// arrayA.forEach((element) => {
//   let arrayB = [];

//   let y = rndNum(5, 18);
//   for (let i = 0; i < y; i++) {
//     let x = rndNum(5, 75);
//     arrayB.push(x);
//   }

// arrayB.forEach(element => {
//   if (element > max){
//     max = element
//   }
// })
//   arrayA.push(arrayB);
// });

// arrayA.splice(0, 100);

// console.log('Max: ' + max);
// console.log(arrayA);

// ----------------------------- 6 -----------------------------
/*
Sugeneruoti masyvą, kurio ilgis 100, o reikšmės – masyvai, kurių
ilgis atsitiktinis nuo 5 iki 18, o reikšmės – atsitiktiniai skaičiai
nuo 5 iki 75. Surasti mažiausią skaičių visame didžiajame masyve ir
kiek kartų jis pasikartojo.
*/

// let arrayA = [];
// let min = 999999;
// let count = 1;

// for (let i = 0; i < 100; i++) {
//   arrayA.push(i);
// }

// arrayA.forEach((element) => {
//   let arrayB = [];

//   let y = rndNum(5, 18);
//   for (let i = 0; i < y; i++) {
//     let x = rndNum(5, 75);
//     arrayB.push(x);
//   }

//   arrayB.forEach((element) => {
//     if (min == element) {
//       count++;
//     }
//     if (element < min) {
//       min = element;
//     }
//   });
//   arrayA.push(arrayB);
// });

// arrayA.splice(0, 100);

// console.log("Min: " + min);
// console.log("Times: " + count);
// console.log(arrayA);

// ----------------------------- 7 -----------------------------
/*
Sugeneruoti masyvą, kurio ilgis 100, o reikšmės – masyvai, kurių
ilgis 10, o reikšmės atsitiktiniai skaičiai nuo 1 iki 17.
Išrykiuoti vidinių masyvų reikšmes didėjančia tvarka.
*/

// let arrayA = [];

// for (let i = 0; i < 100; i++) {
//   arrayA.push(i);
// }

// arrayA.forEach((element) => {
//   let arrayB = [];

//   for (let i = 0; i < 10; i++) {
//     let x = rndNum(1, 17);
//     arrayB.push(x);
//   }
//   arrayB.sort(e = (a, b) =>{
//     return a - b;
//   })
//   arrayA.push(arrayB);
// });

// arrayA.splice(0, 100);

// console.log(arrayA);

// ----------------------------- 8 -----------------------------
/*
Sugeneruoti masyvą, kurio ilgis 100, o reikšmės – masyvai, kurių
ilgis 10, o reikšmės atsitiktiniai skaičiai nuo 1 iki 17. Perrikiuoti
vidinius masyvus pagal vidinių masyvų reikšmių sumas didėjančia tvarka.
*/

// NESIGAUNA

// ----------------------------- 9 -----------------------------
/*
Sugeneruoti masyvą, kurio ilgis 100, o reikšmės – masyvai, kurių
ilgis 10, o reikšmės atsitiktiniai skaičiai nuo 1 iki 17. Iš dvimačio
masyvo sukurti vieną vienmatį masyvą – visas dvimačio masyvo masyvų
reikšmes perkelti į naują masyvą.
*/

// let arrayA = [];
// let arrayC = [];

// for (let i = 0; i < 100; i++) {
//   arrayA.push(i);
// }

// arrayA.forEach((element) => {
//   let arrayB = [];
//   for (let i = 0; i < 10; i++) {
//     let x = rndNum(1, 17);
//     arrayB.push(x);
//   }
//   arrayA.push(arrayB);
//   arrayC.push(...arrayB)
// });

// arrayA.splice(0, 100);

// console.log(arrayA);
// console.log(arrayC);

// ----------------------------- 10 -----------------------------
/*
Papildyti 29 uždavinį taip, kad surastų skaičių vidurkį ir palygintų
jį su vidurinia reikšme, kuris didesnis. Jei elementų yra nelyginis
skaičius, pvz 9, tai vidurinė reikšmė bus 5-as elementas, jei elementų
yra lyginis skaičius, pvz 8, tai vidurinė reikšmė bus 4-os ir 5-os
reikšmės aritmetinis vidurkis
*/

let arrayA = [];
let arrayC = [];
let sum = 0;
let cycle = 0;
let avg = 0;
let mid = 0;
let zxc = 0;
let ats;

for (let i = 0; i < 100; i++) {
  arrayA.push(i);
}

arrayA.forEach((element) => {
  let arrayB = [];
  let y = rndNum(9, 11);
  for (let i = 0; i < y; i++) {
    let x = rndNum(1, 17);
    arrayB.push(x);
  }
  arrayC.push(...arrayB);
});

console.log(arrayC);

arrayC.forEach((element) => {
  sum += element;
  cycle++;
});

zxc = sum / cycle;

if (cycle % 2 != 0) {
  mid = arrayC[(cycle + 1) / 2];
} else {
  mid = (arrayC[cycle / 2] + arrayC[cycle / 2 + 1]) / 2;
}

if (zxc > mid) {
  ats = "Vidurkis yra didesnis, nei vidurinė reikšmė";
} else {
  ats = "Vidurinė reikšmė yra didesnė, nei vidurkis";
}

// console.log('Avg: ' + zxc.toFixed(2));
// console.log('Sum: ' + sum);
// console.log('Cycle: ' + cycle);
// console.log('Mid ' + arrayC[cycle/2]);
// console.log('Mid ' + arrayC[mid]);
// console.log('Mid only ' + mid);
console.log(`Bendras vidurkis: ${zxc.toFixed(2)}
Vidurinė reikšmė yra: ${mid}
${ats}`);
