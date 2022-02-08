function rndNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// ----------------------------- 1 -----------------------------

/*
Žinomas skaičius n. Parašykite programą, kuri nustatytų ar skaičius
yra blogas ar geras? Neigiamas – „Blogas“, teigiamas „Geras“.
Pasitikrinkite: Kai n = 20, turėtume gauti: Skaičius geras.
*/

// let x = rndNum(-100, 100);
// console.log("Skaičius " + x);

// if (x >= 0) {
//   console.log("Geras skaičius");
// } else {
//   console.log("Blogas skaičius");
// }

// ----------------------------- 2 -----------------------------
/*
Mokinys eina gatve ir prieina sankryžą reguliuojamą šviesoforu.
Sudarykite programą, kuri nustatytu, kaip turi pasielgti mokinys?
Žinome šviesoforo spalvos kodą n, 1-žalia, 2-geltona, 3-raudona.
Pasitikrinkite: Kai n= 2, turėtume gauti: Palaukite.
*/

// let n = rndNum(1, 3);
//  console.log("Skaičius " + n);

//  if (n == 1){
//   console.log("Žalia - eiti " + n);
//  } else if (n == 2){
//   console.log("Geltona - palaukti " + n);
//  } else {
//   console.log("Raudona - sustoti " + n);
//  }

// ----------------------------- 3 -----------------------------
/*
Gintautas planuoja persikraustyti į naujus namus ir jam reikia sudėti
visas turimas knygas į dėžes. Gintautas turi d dėžių ir k knygų.
Parašykite programą, kuri apskaičiuotų, ar Gintauto turimos knygos
tilps į dėžes, jei į vieną dėžę telpa po n knygų. Pasitikrinkite:
Kai d=2, k=8, n=5 tuomet ekrane turi būti rodomas pranešimas: Knygos telpa
į dėžes; kai d=3, k=18, n=5 tuomet ekrane turi būti rodomas pranešimas:
Knygos netelpa į dėžes;
*/

// let k = rndNum(10, 30); // knygos
// console.log('k = ' + k)
// let d = rndNum(2, 6); // dėžės
// console.log('d = ' + d)
// let n = rndNum(4, 8); // telpa knygų dėžėje
// console.log('n = ' + n)

// if ((d * n) > k){
// console.log('Knygos telpa į dėžes')
// } else {
//   console.log('Knygos netelpa į dėžes')
// }

// ----------------------------- 4 -----------------------------
/*
Skaičius skaitomas skaitmenimis iš abiejų galų vienodai vadinamas polindromu.
Pvz.: 121. Žinomas 4-klis natūralus skaičius n. Nustatykite ar skaičius yra
polindromas. Pasitikrinkite: Kai n = 1221 , turėtume gauti: Skaičius
polindromas; kai n=1223 tada Skaičius nepolindromas
*/

// let n = 1221
// console.log('n = ' + n)
// let a = Math.floor(n / 1000)
// console.log('a = ' + a)
// let b = Math.floor(n / 100) % 10
// console.log('b = ' + b)
// let c = Math.floor(n / 10) % 10
// console.log('c = ' + c)
// let d = n % 10
// console.log('d = ' + d)

// if (a == d && b == c){
//   console.log('Skaičius yra polindromas')
// } else {
//   console.log('Skaičius nėra polindromas')
// }

// ----------------------------- 5 -----------------------------
/*
Loterijos bilietą sudaro šešiaženklis numeris. Loterijoje laimi tas
bilietas, kurio numerio skaitmenų suma dalosi iš 4. Nustatykite, ar
loterijos bilietas n yra laimingas?. Pasitikrinkite: Kai n = 222442,
turėtume gauti: Bilietas laimingas
*/

// let n = rndNum(100000, 999999); // skaičius
// // let n = 222442 // skaičius
// console.log('n = ' + n)

// let n1 = Math.floor(n / 100000)
// console.log('n1 = ' + n1)
// let n2 = Math.floor(n / 10000) % 10
// console.log('n2 = ' + n2)
// let n3 = Math.floor(n / 1000) % 10
// console.log('n3 = ' + n3)
// let n4 = Math.floor(n / 100) % 10
// console.log('n4 = ' + n4)
// let n5 = Math.floor(n / 10) % 10
// console.log('n5 = ' + n5)
// let n6 = n % 10
// console.log('n6 = ' + n6)

// let sum = n1 + n2 + n3 + n4 + n5 + n6

// if (sum % 4 == 0){
//   console.log('Bilietas laimingas')
// } else {
//   console.log('Bilietas nelaimingas')
// }

// ----------------------------- 6 -----------------------------
/*

*/

// ----------------------------- 7 -----------------------------
/*

*/

// ----------------------------- 8 -----------------------------
/*

*/

// ----------------------------- 9 -----------------------------
/*

*/

// ----------------------------- 10 -----------------------------
/*

*/

// ----------------------------- 11 -----------------------------
/*

*/

// ----------------------------- 12 -----------------------------
/*

*/

// ----------------------------- 13 -----------------------------
/*

*/

// ----------------------------- 14 -----------------------------
/*

*/

// ----------------------------- 15 -----------------------------
/*

*/

// ----------------------------- 16 -----------------------------
/*

*/

// ----------------------------- 17 -----------------------------
/*

*/

