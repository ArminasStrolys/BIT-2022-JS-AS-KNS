function rndNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// ----------------- SWITCH -----------------

// let siunta = "S";

// switch (siunta) {
//   case "S":
//     console.log("Siunta telpa: " + "S");
//   case "M":
//     console.log("Siunta telpa: " + "M");
//   case "L":
//     console.log("Siunta telpa: " + "L");
//   case "XL":
//     console.log("Siunta telpa: " + "XL");
//     break;
//   default:
//     console.log("Netelpa");
//     break;
// }

// ----------------- 1 -----------------
/*
Ridenam kauliuką (rand 1-6). Jeigu išsiridena 1 arba 5,
perku ledų, jeigu 2 arba 4 perku čipsų, jeigu 3 arba 6
perku pieno. Ką perkat
*/

// let dice = rndNum(1, 6)

// console.log('D: ', dice);

// switch (dice) {
//   case 1:
//   case 5:
//     console.log('Ledai');
//     break;
//   case 2:
//   case 4:
//     console.log('Alus');
//     break;
//   case 3:
//   case 6:
//     console.log('Duona');
//     break;
// }

// ----------------- 2 -----------------
/*
do while ciklas. Metom kauliuką tol kol
iškrenta 5. Suskaičiuojam kiek kartų mėtėm
*/

// let c = 0
// let dice

// do {
//   dice = rndNum(1, 6)
//   c++
// } while (dice != 5);

// console.log('D: ', dice);
// console.log('C: ' + c);

// ----------------- 3 -----------------
/*
do while ciklas. Metom kauliuką tol kol
iškrenta 5 arba 1. Suskaičiuojam kiek kartų mėtėm
*/

// let c = 0
// let dice

// do {
//   dice = rndNum(1, 6)
//   c++
// } while (dice != 5 && dice != 1);

// console.log('D: ', dice);
// console.log('C: ' + c);

// ----------------- 4 -----------------
/*
do while ciklas. Metom kauliuką. Sustojam kai išmestų
kauliukų suma tampa didesnė nei 33. Suskaičiuojam kiek kartų mėtėm
*/

// let c = 0
// let sum = 0
// let dice

// do {
//   dice = rndNum(1, 6)
//   sum += dice
//   console.log('D: ', sum, dice);
//   c++
// } while (sum <= 33);

// console.log('D: ', dice);
// console.log('C: ' + c);

// ----------------- 5 -----------------
/*
Yra 1000 litrų vandens. Karvių banda per parą išgeria atsitiktinį kiekį nuo
70 iki 200 litrų. Paskaičiuoti per kiek dienų karvės išgeria vandenį.
*/

// let litrai = 1000
// let banda = 0
// let dienos = 0
// let karviuBanda = 0

// while (litrai >= banda){
//   let karviuBanda = rndNum(70, 200)
//   banda += karviuBanda
//   dienos++
//   console.log('Isgere per: ' + dienos + ' dienas isgere ' + banda + ' litru.');
// }

// console.log('1000 L isgere per: ' + dienos);


// let h2o = 1000
// let days = 0
// while(h2o > 0){
//   days++
//   h2o -= rndNum(70, 200)
// }

// console.log(h2o + ' litrų liko. Diena: ' + days);

//----------------------- 1 --------------------------------TEST SELF

// let sum = 100

// for (let i = 0; i < 10; i++){

//   sum += 10
//   console.log('Sum: ' + sum);
// }

//------------------- 2 ----------------------

// let x = 0;
// let sum = 0;

// for (let i = 0; i <= 10; i++) {
//   x = rndNum(5, 15);
//   console.log("Nums: " + x);
//   if (x >= 10) {
//     sum += x;
//   }
// }
// console.log("Sum: " + sum);

//-------------------- 3 ---------------------

// let x = 0;
// let sum = 0;
// let avg = 0;
// let o = 10

// for (let i = 0; i <= o; i++) {
//   x = rndNum(5, 15);
//   console.log("Nums: " + x);
//     sum += x;
// }

// avg = sum / o

// console.log("Vid:     " + avg);

//--------------------- 4 --------------------

// let random
// let iter = 0

// do {
// random = rndNum(10, 50)
// iter++
// console.log('Ran num: ' + random);
// } while (random != 13 && random != 33 && random != 43)

// console.log('i: ' + iter);

//-------------------- 5 ---------------------

// let random
// let container = 0
// let iter = 0

// while (true){
//   iter++
//   random = rndNum(10, 20)
//   console.log('R: ' + random);
//   if (random == 17){
//     container++
//   } if (container == 3){
//     break
//   }
// }

// console.log('Sukosi: ' + iter);

// // Testas padarytas per 15 min