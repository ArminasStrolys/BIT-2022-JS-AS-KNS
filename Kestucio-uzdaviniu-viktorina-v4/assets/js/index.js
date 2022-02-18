const $ = document.querySelectorAll.bind(document);

function rndNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// ----------------------------- 1 -----------------------------
/*
Parašykite funkciją, kurios argumentas būtų tekstas,
kuris yra įterpiamas į h1 tagą.
*/

// const texting = (a) => {
//  return $('h2')[0].innerHTML = a
// }

// texting('Testing')

// ----------------------------- 2 -----------------------------
/*
Parašyti funkciją, kuri priima du kintamuosius.
Patikrina ar jie yra skaičiai. Grąžina tų skaičių sumą.
*/

// const numbers = (a, b) => {
//   let ans = 0;
//   if (typeof a != "number" || typeof b != "number") {
//     ans = console.log("Not numbers");
//   } else {
//     ans = a + b;
//   }
//   return ans;
// };

// console.log(numbers(4, 6));

// ----------------------------- 3 -----------------------------
/*
Parašyti funkciją, kuri priima du kintamuosius. Patikrina ar jie yra skaičiai.
Palygina tuos du skaičius ir grąžina rezultatą ar
pirmas skaičius yra didesnis, ar antras, ar jie yra lygūs.
*/

// const numbers = (a, b) => {
//   let ans = 0;
//   if (typeof a != "number" || typeof b != "number") {
//     ans = console.log("Not numbers");
//   } else if (a > b){
//     ans = a + ' yra didesnis (a)'
//   } else if (a < b){
//     ans = b + ' yra didesnis (b)'
//   } else {
//     ans = a + ' ir ' + b + ' yra lygus'
//   }
//   return ans;
// };

// console.log(numbers(7, 6));

// ----------------------------- 4 -----------------------------
/*
Parašyti funkciją, kuri priimtų vieną kintamajį. Turi patikrinti
ar tai yra skaičius ir ar tai yra keturženklis skaičius.
Turi būti grąžinamas rezultatas ar tie metai yra keliemieji.
*/

// const numbers = (a) => {
//   if (typeof a != "number" || a <= 1000) {
//     return "Not numbers"
//   } else if (a % 4 == 0 && a % 100 == 0){
//     return 'Metai yra keliamieji: ' + a
//   } else {
//     return 'Metai nera keliamieji'
//   }
// };

// console.log(numbers(2000));

// ----------------------------- 5 -----------------------------
/*
Parašyti funkciją, kuri priimtų vieną kintamajį. Turi būti patikrinimas
ar tas kintamasis yra skaičius. Funkcija turi grąžinti skaičių, kur
įvesto skaičiaus skaitmenys būtų išrikiuoti didėjimo tvarka.
*/

// const numbers = (a) => {
//   if (typeof a != "number") {
//   return 'Ne skaicius'
//   } else {
//     return Number(a.toString().split('').sort((a, b) => a - b).join(''));
//   }
// };

// console.log(numbers(189264));

// ----------------------------- 6 -----------------------------
/*
Parašykite funkciją, kuri skaičiuotų, iš kiek sveikų skaičių jos argumentas
dalijasi be liekanos (išskyrus vienetą ir patį save) Argumentą
užrašykite taip, kad būtų galima įvesti tik sveiką skaičių.
*/

// const numbers = (a) => {
//   let count = 0;
//   if (typeof a !== "number" || Number.isInteger(a) != true) {
//     return "Ne skaicius";
//   }
//   for (let i = 2; i < a; i++) {
//     if (a % i == 0) {
//       count++;
//     }
//   }
//   return `${a} dalinasi be liekanos is ${count} skaiciu`;
// };

// console.log(numbers(25.8));

// ----------------------------- 7 -----------------------------
/*
Parašyti funkciją telefonoNumeris, kuri priima vieną kintamąjį.
Turi būti patikrinimas, kad kintamasis yra masyvas, kad jo visi elementai
yra skaičiai ir, kad jo ilgis yra 10. Funkcija turi grąžinti telefono numerį
tokiu formatu - "(XXX) XXX-XXXX".
*/

// ----------------------------- 8 -----------------------------
/*
Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas,
kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.)
*/

// ----------------------------- 9 -----------------------------
/*
Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji.
Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyva
(negali būti vienas skaičius, kitas masyvas).
Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai -
grąžinti masyvų ilgių sumą. Jei suma nelyginė - grąžinti tekstą, kad suma nelyginė.
*/

// ----------------------------- 10 -----------------------------
/*
Funkcija turi priimti du kintamuosius. Vienas turi būti skaičius, kitas masyvas su
skaičiais ir minimum 7 elementais. Funkcija turi grąžinti true,
jei skaičius yra masyve, ir false, jei nėra tokio skaičiaus masyve.
*/

// const numbers = (a, b) => {
//   if (
//     (typeof a == "number" && Array.isArray(b) == true && b.length >= 7) ||
//     (typeof b == "number" && Array.isArray(a) == true && a.length >= 7)
//   ) {
//     for (let i = 0; i < a.length; i++) {
//       if (a.includes(b)) {
//         return "Skaicius yra " + b;
//       } else {
//         return "Nera " + b;
//       }
//     }
//     for (let i = 0; i < b.length; i++) {
//       if (b.includes(a)) {
//         return "Skaicius yra " + a;
//       } else {
//         return "Nera " + a;
//       }
//     }
//   } else {
//     return "BLOGAS SKAICIUS ARBA PER TRUMPAS MASYVAS";
//   }
// };

// console.log(numbers(2, [6, 1, 1, 0, 9, 8, 7]));
