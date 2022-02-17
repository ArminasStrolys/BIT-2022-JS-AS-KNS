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
Į 1 uždavinio masyvą pridėti tiek naujų reikšmių 
(pinigų, atsitiktinių skaičių nuo 0 iki 10),
kad masyvo ilgis būtų lygiai 30;
*/

// let pinigine = []
// let plotis = rndNum(10, 30)

// for (let i = 0; i < plotis; i++) {
// let x = rndNum(0, 10)
// pinigine.push(x)
// }

// let lenPlus = 30 - pinigine.length

// for (let i = 0; i < lenPlus; i++) {
//   let x = rndNum(0, 10)
//   pinigine.push(x)
//   }

// console.log(pinigine);

//---------------------- 8 ----------------------
/*
Naudojant 1 uždavinio masyvą iš jo reikšmių sukurti dar du
papildomus masyvus. Į vieną iš 1 uždavinio masyvo pridėti
reikšmes mažesnes arba lygias 2 (monetas), o į kitą didesnes
nei 2 (popierinius pinigus);
*/

// let pinigine = []
// let pinigineMin = []
// let pinigineMax = []
// let plotis = rndNum(10, 30)

// for (let i = 0; i < plotis; i++) {
// let x = rndNum(0, 10)
// if (x <= 2){
// pinigineMin.push(x)
// } else {
//   pinigineMax.push(x)
// }
// pinigine.push(x)
// }

// console.log(pinigine);
// console.log(pinigineMin);
// console.log(pinigineMax);

//---------------------- 9 ----------------------
/*
Sukurti masyvą (piniginę su dviem skyreliais) iš dviejų elementų,
kurio pirmas elementas būtų masyvas iš 8 uždavinio su monetom,
o antras elementas masyvas iš 8 uždavinio su popieriniais pinigais;
*/

let fullPinigine = [];
let pinigineMin = [];
let pinigineMax = [];
let plotis = rndNum(10, 30);
let popieriniai = 0

for (let i = 0; i < plotis; i++) {
  let x = rndNum(0, 10);
  if (x <= 2) {
    pinigineMin.push(x);
  } else {
    pinigineMax.push(x);
    popieriniai+=x
  }
}

fullPinigine.push(pinigineMin, pinigineMax);

console.log(pinigineMin);
console.log(pinigineMax);
console.log(fullPinigine);

//---------------------- 10 ----------------------
/*
Į 9 uždavinio masyvą, piniginę su dviem skyreliais, pridėti trečią
skyrelį- masyvą su kortelėm: ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū',
'Lietuvos Geležinkeliai', 'Mano RIMI'];
*/

let kartackos = [
  "KIKA",
  "Euro Vaistinė",
  "Drogas",
  "Ačiū",
  "Lietuvos Geležinkeliai",
  "Mano RIMI",
];

fullPinigine.push(kartackos);

console.log(fullPinigine);

//---------------------- 11 ----------------------
/*
Korteles skyrelyje sudėlioti (išrūšiuoti) pagal abėcėlę;
*/

kartackos.sort()

//---------------------- 12 ----------------------
/*
Į kortelių skyrelį pridėti mokėjimo kortelių 'MasterCard', 'Visa'
(su rand generuokite atsitiktines reikšmes 'MasterCard' arba 'Visa' ir rašykite į masyvą)
iš skirtingų bankų tiek, kad skyrelis (masyvo ilgis) pasidarytų lygus 20;
*/

let MasterCard = []
let Visa = []

for (let i = 0; i < 20; i++){
  let z = rndNum(1, 2)
  if (z == 1){
    MasterCard.push(z)
  } else {
    Visa.push(z)
  }
}

kartackos.push(MasterCard, Visa);

console.log(kartackos);

//---------------------- 13 ----------------------
/*
Paskaičiuokite, kokio tipo kortelių ('MasterCard' arba 'Visa') yra daugiau;
*/

if (MasterCard.length > Visa.length){
  console.log('MasteCard bapkių daugiau: ' +  MasterCard.length + ' Visa: ' + Visa.length);
}
else if (MasterCard.length < Visa.length) {
  console.log('Visa bapkių daugiau: ' +  Visa.length + ' MasterCard: ' + MasterCard.length);
} else {
  console.log('Tiek MasterCard, tiek Visa vienodai');
}

//---------------------- 14 ----------------------
/*
Sukurkite masyve (piniginėje) ketvirtą elementą (skyrelį) į kurį įdėkite
10 loterijos bilietų, kurių numerius sugeneruokite atsitiktinai su rand
funkcija nuo 1000000000 iki 9999999999;
*/

let bilietai = []

fullPinigine.push(bilietai)

for (let i = 0; i < 10; i++){
  let win = rndNum(1000000000, 9999999999)
  bilietai.push(win)
}

console.log(fullPinigine);

//---------------------- 15 ----------------------
/*
Loterijos bilietų masyvą išrūšiuoti nuo didžiausio numerio iki mažiausio;
*/

bilietai.sort((a, b) => {
  return a - b
})

//---------------------- 16 ----------------------
/*
Į piniginės popierinių pinigų skyrelį įdėti 500 pinigų mažom kupiūrom
(generuoti atsitiktinius skaičius nuo 3 iki 10 ir dėti kaip naujus elementus,
  kol įdėta suma bus lygi 500);
*/

let bapkes500 = 0

while (bapkes500 <= 500){
  let popX = rndNum(3, 10)
  bapkes500+= popX
  pinigineMax.push(popX)
}

console.log('Pop plius iki 500: ' + bapkes500);

//---------------------- 17 ----------------------
/*
Patikrinti ar ką nors laimėjote. Bilieto numerius dalinkite iš 777 ir jeigu
numeris išsidalins be liekanos - jūs laimėjote! Suskaičiuokite, kiek buvo laimingų bilietų.
*/

let luck = 0

for (let i = 0; i < bilietai.length; i++){
  if (bilietai[i] % 777 == 0){
console.log('Lucky win: ' + bilietai[i]);
luck++
  }
}

//---------------------- 18 ----------------------
/*
Sukurkite penktą skyrelį ir į jį sudėkite nuotraukas:
['šuo', 'katė', 'automobilis', 'namas', 'kiemas']
ir jas išrūšiuokite pagal žodžių ilgį taip, kad pirma eitų trumpiausi žodžiai;
*/

let foto = ['šuo', 'katė', 'automobilis', 'namas', 'kiemas']

fullPinigine.push(foto)

foto.sort((a, b) => {
  return a.length - b.length
})

console.log(fullPinigine);
