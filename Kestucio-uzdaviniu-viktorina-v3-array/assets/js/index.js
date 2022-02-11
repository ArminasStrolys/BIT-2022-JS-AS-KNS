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

let arrayA = [];

for (let i = 0; i < 100; i++) {
  arrayA.push(i);
}

arrayA.forEach((element) => {
  let arrayB = [];
  for (let i = 0; i < 10; i++) {
    let x = rndNum(1, 17);
    arrayB.push(x);
  }
  // console.log(arrayB);
  arrayA.push(arrayB);
});

arrayA.splice(0, 100);

console.log(arrayA);

// ----------------------------- 3 -----------------------------
/*
Sugeneruoti masyvą, kurio ilgis 100, o reikšmės – masyvai, kurių
ilgis atsitiktinis nuo 5 iki 18, o reikšmės – skaičiai
nuo 1 iki masyvo ilgio.
*/

// let arrayA = []
// let arrayB = []
// let arrayC = []
// let y = rndNum(5, 18)
// let z = 0
// let x = rndNum(5, 18)

// for (let i = 0; i < 100; i++) {
//  arrayA.push(i)
// }

// for (let i = 1; i <= x; i++) {

//  arrayB.push(arrayB.length)
// }

// arrayA.forEach(element => {
//   arrayC.push(arrayB)
// });

// console.log(arrayC);

// ----------------------------- 4 -----------------------------
/*
Sugeneruoti masyvą, kurio ilgis 100, o reikšmės – masyvai, kurių
ilgis atsitiktinis nuo 5 iki 18, o reikšmės – atsitiktiniai
skaičiai nuo 5 iki 30.
*/

// let arrayA = []
// let arrayB = []
// let arrayC = []
// let x = rndNum(5, 18)

// for (let i = 0; i < 100; i++){
//   arrayA.push(i)
// }
// for (let i = 1; i <= x; i++){
// let y = rndNum(5, 30)
//   arrayB.push(y)
// }

// arrayA.forEach(element => {
//   arrayC.push(arrayB)
// });

// console.log(arrayA);
// console.log(arrayB);
// console.log(arrayC);

// ----------------------------- 5 -----------------------------
/*
Sugeneruoti masyvą, kurio ilgis 100, o reikšmės – masyvai, kurių
ilgis atsitiktinis nuo 5 iki 18, o reikšmės – atsitiktiniai skaičiai
nuo 5 iki 75. Surasti didžiausią skaičių visame didžiajame masyve.
*/

// let arrayA = []
// let arrayB = []
// let arrayC = []
// let x = rndNum(5, 18)
// let max = 0;

// for (let i = 0; i < 100; i++){
//   arrayA.push(i)
// }
// for (let i = 1; i <= x; i++){
// let y = rndNum(5, 75)
//   arrayB.push(y)
// }

// arrayA.forEach(element => {
//   arrayC.push(arrayB)
// });

// arrayC.forEach(element => {
//     if (element > 0){
//     max = element
//   }
// });

// console.log(arrayA);
// console.log(arrayB);
// console.log(arrayC);
// console.log(max);

// ----------------------------- 6 -----------------------------
/*
Sugeneruoti masyvą, kurio ilgis 100, o reikšmės – masyvai, kurių
ilgis atsitiktinis nuo 5 iki 18, o reikšmės – atsitiktiniai skaičiai
nuo 5 iki 75. Surasti mažiausią skaičių visame didžiajame masyve ir
kiek kartų jis pasikartojo.
*/

// ----------------------------- 7 -----------------------------
/*
Sugeneruoti masyvą, kurio ilgis 100, o reikšmės – masyvai, kurių
ilgis 10, o reikšmės atsitiktiniai skaičiai nuo 1 iki 17.
Išrykiuoti vidinių masyvų reikšmes didėjančia tvarka.
*/

// ----------------------------- 8 -----------------------------
/*
Sugeneruoti masyvą, kurio ilgis 100, o reikšmės – masyvai, kurių
ilgis 10, o reikšmės atsitiktiniai skaičiai nuo 1 iki 17. Perrikiuoti
vidinius masyvus pagal vidinių masyvų reikšmių sumas didėjančia tvarka.
*/

// ----------------------------- 9 -----------------------------
/*
Sugeneruoti masyvą, kurio ilgis 100, o reikšmės – masyvai, kurių
ilgis 10, o reikšmės atsitiktiniai skaičiai nuo 1 iki 17. Iš dvimačio
masyvo sukurti vieną vienmatį masyvą – visas dvimačio masyvo masyvų
reikšmes perkelti į naują masyvą.
*/

// ----------------------------- 10 -----------------------------
/*
Papildyti 29 uždavinį taip, kad surastų skaičių vidurkį ir palygintų
jį su vidurinia reikšme, kuris didesnis. Jei elementų yra nelyginis
skaičius, pvz 9, tai vidurinė reikšmė bus 5-as elementas, jei elementų
yra lyginis skaičius, pvz 8, tai vidurinė reikšmė bus 4-os ir 5-os
reikšmės aritmetinis vidurkis
*/
