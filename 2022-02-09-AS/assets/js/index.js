function rndNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/*
1) Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D,
o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.

2) Išrūšiuokite 1 uždavinio masyvą pagal abecėlę.

3) Sugeneruokite 3 masyvus pagal 1 uždavinio sąlygą. Sudėkite masyvus,
sudėdami atitinkamas reikšmes. Paskaičiuokite kiek unikalių
(po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote. 

4) Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai
nuo 100 iki 999. Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios
savo masyve (t.y. neturi kartotis).

5) Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra
pirmame 4 uždavinio masyve, bet nėra antrame 4 uždavinio masyve.

6) Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 4 uždavinio
masyvuose.
*/

// ---------------------- 1 --------------------------

//// const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// const alpha = "ABCD";
// let array = [];
// let A = 0;
// let B = 0;
// let C = 0;
// let D = 0;

// for (let i = 0; i < 200; i++) {
//   array.push(alpha.charAt(rndNum(0, 3)));
// }

// A = array.filter(i => i =='A').length
// B = array.filter(i => i =='B').length
// C = array.filter(i => i =='C').length
// D = array.filter(i => i =='D').length
// // .filter(function(x){return x==2}).length // LONG WAY TO WRITE

// console.log("A = " + A);
// console.log("B = " + B);
// console.log("C = " + C);
// console.log("D = " + D);

// console.log("Main array = " + array + ". Array`s length = " + array.length);

// ---------------------- 2 --------------------------

// array.sort()
// console.log("Main array = " + array + ". Array`s length = " + array.length);

// ---------------------- 3 --------------------------

// const alpha = "ABCD";
// let array1 = [];
// let array2 = [];
// let array3 = [];
// let arrayCombo = []

// for (let i = 0; i < 200; i++) {
//   array1.push(alpha.charAt(rndNum(0, 3)));
//   array2.push(alpha.charAt(rndNum(0, 3)));
//   array3.push(alpha.charAt(rndNum(0, 3)));
//   arrayCombo.push(array1[i] + array2[i] + array3[i]);
// }

// function unique(value, index, self) {
//   return self.indexOf(value) === index;
// }
// let u = arrayCombo.filter(unique);

// console.log('A1 ' + array1);
// console.log('A2 ' + array2);
// console.log('A3 ' + array3);
// console.log('AX ' + arrayCombo);
// console.log('Unikalios ' + u);
// console.log('Unikalios ' + u.length);

// ---------------------- 4 --------------------------

let arrayA = []
let arrayUniqueA = []
let arrayB = []
let arrayUniqueB = []

for (let i = 0; i < 100; i++) {
  arrayA.push(rndNum(100, 999));
  arrayB.push(rndNum(100, 999));
}

arrayUniqueA = [...new Set(arrayA)]
arrayUniqueB = [...new Set(arrayB)]


console.log('A = ' + arrayA + ' Ilgis: ' + arrayA.length);
console.log('B = ' + arrayB + ' Ilgis: ' + arrayB.length);
// console.log('----------------------------------------------');
// console.log('A-un = ' + arrayUniqueA + ' Ilgis: ' + arrayUniqueA.length);
// console.log('B-un = ' + arrayUniqueB + ' Ilgis: ' + arrayUniqueB.length);

// ---------------------- 5 --------------------------

//// Reikės atkomentuoti 4 uždavinį, kad šitas veiktų
// arrayA = arrayA.filter(val => !arrayB.includes(val));

// console.log('Array-A = ' + arrayA);
// console.log('Array-A = ' + arrayA.length);

// ---------------------- 6 --------------------------

// Reikės atkomentuoti 4 uždavinį, kad šitas veiktų
let duplicates = []

duplicates = arrayA.filter(element => arrayB.includes(element));

console.log('Dup = ' + duplicates);
console.log('Dup = ' + duplicates.length);
