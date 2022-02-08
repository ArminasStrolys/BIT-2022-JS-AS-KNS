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
console.log("Main array = " + array + ". Array`s length = " + array.length);

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

// ---------------------- 4 --------------------------

// let array1 = [];
// let array2 = [];

// for (let i = 0; i < 30; i++) {
//   array1.push(rndNum(5, 25));
// }
// console.log('Pirmasis masyvas = ' + array1);

// for (let i = 0; i < 30; i++) {
//   array2.push(array1[i] - i);
// }
// console.log('Antras masyvas = ' + array2);

// ---------------------- 5 --------------------------

// let arrayPlus = array

// for (let i = 0; i < 10; i++) {
//   arrayPlus.push(rndNum(5, 25));
// }
// console.log('Side array = ' + arrayPlus + '. Array`s length = ' + arrayPlus.length);

// ---------------------- 6 --------------------------

// let arrayOdd = [];
// let arrayEven = [];

// array.forEach((element) => {
//   if (element % 2 == 0) {
//     arrayEven.push(element);
//   } else {
//     arrayOdd.push(element);
//   }
// });
// console.log(
//   "Lyginis masyvas " + arrayEven + ". Elementų kiekis: " + arrayEven.length
// );
// console.log(
//   "Nelyginis masyvas " + arrayOdd + ". Elementų kiekis: " + arrayOdd.length
// );

// ---------------------- 7 --------------------------

array.forEach((element) => {
  if (element % 2 == 0 && element > 15) {
    array.push(0)
  } else {
    array.push(element)
  }
});
   array.splice(0, 30)
console.log("Modifikuotas masyvas = " + array + ". Array`s length = " + array.length);