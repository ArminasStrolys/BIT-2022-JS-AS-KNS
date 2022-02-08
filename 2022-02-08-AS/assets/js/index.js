function rndNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/*
Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29),
kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.

Naudodamiesi 1 uždavinio masyvu:

1) Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;

2) Raskite didžiausią masyvo reikšmę ir jos indeksą arba indeksus jeigu yra keli

3) Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;

4) Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes
minus tos reikšmės indeksas;

5) Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25,
kad bendras masyvas padidėtų iki indekso 39;

6) Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas
iš neporinių indeksų reikšmių, o kitas iš porinių;

7) Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu
jie didesni už 15;
*/

// ------------------------------------------------

let array = [];

for (let i = 0; i < 30; i++) {
  array.push(rndNum(5, 25));
}
console.log(array);

// ---------------------- 1 --------------------------

// array.forEach((element) => {
//   if (element > 10) {
//     console.log(element + " daugiau už 10");
//   }
// });

// ---------------------- 2 --------------------------

// let b = Math.max(...array);
// n = 0;
// console.log("Maximumas yra = " + b);
// c = ""; // sitas nebutinas

// array.forEach((element) => {
//   if (b == element) {
//     n++;
//   }
//   if (n == 1) { // sitas nebutinas
//     c = "kartą"; // sitas nebutinas
//   } else { // sitas nebutinas
//     c = "kartus"; // sitas nebutinas
//   }
// });
// console.log(`Maximumas pasikartoja ${n} ${c}`);

// ---------------------- 3 --------------------------

// let sum = 0
// array.forEach((element) => {
//   if (element % 2 == 0) {
//     sum += element
//     console.log("Lyginiai skaičiai " + element);
//     console.log("Sumos progresas " + sum);
//     console.log("------------------------");
//   }
// });
// console.log("Lyginių skaičių suma " + sum);

