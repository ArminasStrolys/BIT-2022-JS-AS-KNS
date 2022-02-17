function rndNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// let _1A = ["Nausėda", "Antanas", "Petras"];
// let _2A = ["Linas", "Birutė", "Bebras"];
// let _3A = ["Tomas", "Sima", "Saulius"];

// let bigHouse = [];

// bigHouse.push(_1A);
// bigHouse.push(_2A);
// bigHouse.push(_3A);

// console.log(bigHouse);

//---------------------- 1 ----------------------
/*
Reikia padaryt masyvą iš 10 elementų, kurio elementai
yra rand skaičiai nuo 0 iki 7
*/

// let array_1 = []

// for (let i = 0; i < 10; i++){
//   let x = rndNum(0, 7)
//   array_1.push(x)
// }

// console.log(array_1);

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
atspausdinti bigHouse gyventojų sąrašą
*/

// for (let i = 0; i < bigHouse.length; i++) {
//   for (let k = 0; k < bigHouse.length; k++) {
//     console.log(bigHouse[i][k]);
//   }
// }

// bigHouse.forEach(element => {
//   for (let i = 0; i < bigHouse.length; i++)
//   console.log(element[i]);
// });

//---------------------- 7 ----------------------
/*
Kur gyvena tomas?
*/

// for (let i = 0; i < bigHouse.length; i++) {
//   for (let k = 0; k < bigHouse.length; k++) {
//     if (bigHouse[i][k] == "Tomas") {
//       console.log(
//         "Tomas gyvena " +
//           bigHouse.indexOf(bigHouse[i]) +
//           " aukšte ir " +
//           bigHouse.indexOf(bigHouse[k]) +
//           " bute."
//       );
//     }
//   }
// }

//---------------------- UŽDUOTYS ----------------------

//---------------------- 1 ----------------------
/*
Sukurti masyvą (piniginę), kurio ilgis yra atsitiktinis nuo 10 iki 30,
o reikšmės atsitiktiniai skaičiai nuo 0 iki 10 (pinigai);
*/

// let pinigine = []
// let plotis = rndNum(10, 30)

// for (let i = 0; i < plotis; i++) {
// let x = rndNum(0, 10)
// pinigine.push(x)
// }

// console.log(pinigine);

//---------------------- 2 ----------------------
/*
Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio reikšmių
(pinigų esančių piniginėje) sumą;
*/

// let pinigine = []
// let plotis = rndNum(10, 30)
// let y = 0

// for (let i = 0; i < plotis; i++) {
// let x = rndNum(0, 10)
// y += x
// pinigine.push(x)
// }

// console.log(pinigine);
// console.log('Suma: ' + y);

//---------------------- 3 ----------------------
/*
Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio popierinių
pinigų (skaičių didesnių už 2 ) reikšmių sumą;
*/

// let pinigine = []
// let plotis = rndNum(10, 30)
// let y = 0

// for (let i = 0; i < plotis; i++) {
// let x = rndNum(0, 10)
// if (x > 2) {
//   y += x
// }
// pinigine.push(x)
// }

// console.log(pinigine);
// console.log('Suma: ' + y);

//---------------------- 4 ----------------------
/*
Išleisti visus metalinius pinigus
(reikšmes, kurios yra mažesnės arba lygios 2 padaryti lygias 0) iš 1 uždavinio;
*/

// let pinigine = []
// let plotis = rndNum(10, 30)

// for (let i = 0; i < plotis; i++) {
// let x = rndNum(0, 10)
// if (x <= 2) {
//   x = 0
// }
// pinigine.push(x)
// }

// console.log(pinigine);

//---------------------- 5 ----------------------
/*
Surasti didžiausią reikšmę 1 uždavinio masyve ir
paskaičiuoti kiek tokių didžiausių reikšmių masyve yra;
*/

// let pinigine = [];
// let plotis = rndNum(10, 30);
// let count = 0;

// for (let i = 0; i < plotis; i++) {
//   let x = rndNum(0, 10);
//   pinigine.push(x);
// }

// // let max = Math.max(...pinigine)
// let max = pinigine[0];

// for (let i = 0; i < pinigine.length; i++) {
//   if (pinigine[i] > max) {
//     max = pinigine[i];
//   } else if (max == pinigine[i])
//   count++;
// }

// console.log(pinigine);
// console.log("Max " + max);
// console.log('Kartai ' + count);

//---------------------- 6 ----------------------
/*
Visus masyvo elementus, kurie yra lygūs 0, pakeisti į tų
elementų indeksų (vietų, numerių) reikšmes;
*/

// let pinigine = []
// let plotis = rndNum(10, 30)

// for (let i = 0; i < plotis; i++) {
// let x = rndNum(0, 10)
// if (x == 0) {
//   x = i
// }
// pinigine.push(x)
// }

// console.log(pinigine);

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

//---------------------- 11 ----------------------
/*

*/

//---------------------- 12 ----------------------
/*

*/

//---------------------- 13 ----------------------
/*

*/

//---------------------- 14 ----------------------
/*

*/

//---------------------- 15 ----------------------
/*

*/

//---------------------- 16 ----------------------
/*

*/

//---------------------- 17 ----------------------
/*

*/

//---------------------- 18 ----------------------
/*

*/
