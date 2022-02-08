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
Keliamieji metai turi 366 dienas, o paprastieji 365. Visi metai, išskyrus
šimtmečius, yra keliamieji, jei dalūs iš 4. Pasakykite, ar metai m yra
keliamieji ar paprastieji? Pasitikrinkite: Kai m = 2004, turi būti
spausdinama: Metai keliamieji.
*/

// let m = 2004; // metai

// if (m % 100 != 0 && m % 4 == 0) {
//   console.log("Keliamieji metai");
// } else {
//   console.log("Paprasti metai");
// }

// ----------------------------- 7 -----------------------------
/*
Skaičius skaitomas skaitmenimis iš abiejų galų vienodai vadinamas polindromu.
Pvz.: 121. Žinomas 5-klis natūralus skaičius n. Nustatykite ar skaičius yra
polindromas. Pasitikrinkite: Kai n = 12321 , turėtume gauti: Skaičius
polindromas; kai n=12423 tada Skaičius nepolindromas
*/

// let n = 12321 // skaičius
// console.log('n = ' + n)

// let n1 = Math.floor(n / 10000)
// console.log('n1 = ' + n1)
// let n2 = Math.floor(n / 1000) % 10
// console.log('n2 = ' + n2)
// let n3 = Math.floor(n / 100) % 10 // Nebūtina eilutė
// console.log('n3 = ' + n3) // Nebūtina eilutė
// let n4 = Math.floor(n / 10) % 10
// console.log('n4 = ' + n4)
// let n5 = n % 10
// console.log('n5 = ' + n5)

// if (n1 == n5 && n2 == n4){
//   console.log('Skaičius yra polindromas')
// } else {
//   console.log('Skaičius nėra polindromas')
// }

// ----------------------------- 8 -----------------------------
/*
Du broliai nesutaria, kuriam tvarkyti kambarį. Jie meta kauliuką.
Jei iškrenta skaičius 1, 3 arba 5 – kambarį tvarko jaunėlis, jei 2, 4
arba 6 – vyresnėlis. Parašykite programą, kuri įvedus iškritusį
skaičių k, ekrane rodytų pranešimą „Kambarį tvarkys jaunėlis“, arba
„Kambarį tvarkys vyresnėlis“. Pasitikrinkite: kai k = 1, ekrane turi
būti: Kambarį tvarkys jaunėlis. Kai k = 4, ekrane turi būti: Kambarį
tvarkys vyresnėlis.
*/

// let k = rndNum(1, 6); // knygos
// console.log(k)

// if (k % 2 == 0) {
//   console.log("Kambarį tvarkys vyresnėlis, nes iškrito " + k);
// } else {
//   console.log("Kambarį tvarkys jaunėlis, nes iškrito " + k);
// }

// ----------------------------- 9 -----------------------------
/*
Žinomi trijų klasės draugų kontrolinio darbo pažymiai. Sudarykite programą,
kuri nustatytų, kuris mokinys gavo geriausią pažymį, kai žinome jų pažymius
p1, p2, p3 Pasitikrinkite: Jei p1=5, p2=8, p3=9 ekrane turi būti: Trečias
gavo geriausią pažymį.
*/

// let p1 = rndNum(2, 10)
// console.log('p1 = ' + p1)
// let p2 = rndNum(2, 10)
// console.log('p2 = ' + p2)
// let p3 = rndNum(2, 10)
// console.log('p3 = ' + p3)
// let x = Math.max(p1, p2, p3)

// if (x ==  p1){
// console.log('Didžiausią pažymį gavo pirmas mokinys')
// } else if (x == p2){
//   console.log('Didžiausią pažymį gavo antras mokinys')
// } else {
//   console.log('Didžiausią pažymį gavo trečias mokinys')
// }

// ----------------------------- 10 -----------------------------
/*
Parašykite programą, kuri įvedus mėnesio numerį n atspausdintų to mėnesio
dienų kiekį d. (tarkime, kad metai yra paprastieji)
(pvz. n=5, ats. d=31; n=2 ats. d=28)
*/

// let men = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
// let n = 3
// console.log(men[n])

// ----------------------------- 11 -----------------------------
/*
Petras išėjo iš namų, kai laikrodis rodė v1 valandų ir m1 minučių.
Į gimnaziją Petro kelionė trunka m2 minučių. Parašykite programą,
kuri ekrane parodytų pranešimą apie tai, ar Petras nepavėluos į pamoką,
prasidedančią v valandų ir m minučių. Pasitikrinkite:
jei v1 = 8, m1 = 29, m2 = 43, v = 9, m = 5, turi būti:
Petras į pamoką pavėluos; jei v1 = 8, m1 = 29, m2 = 23, v = 9, m = 5,
turi būti: Petras į pamoką nepavėluos.
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
