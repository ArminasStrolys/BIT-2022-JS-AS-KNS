const $ = document.querySelectorAll.bind(document);

function rndNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// ----------------------------- 1 -----------------------------
/*
Parašyti funkciją, kuri priimtų vieną kintamąjį. Atliktų testą
ar kintamasis yra tekstas. Išvestų tekstą į ekraną „<p>“ tag‘e.
*/

// let a = 'Test a string'

// const text = (a) => {
//   if (typeof a == 'string' == true){
//     return $('p')[0].innerHTML = a
//   } else {
//     return 'Not a string'
//   }
// }

// console.log(text(a));

// ----------------------------- 2 -----------------------------
/*
Parašyti funkciją, kuri priimtų vieną kintamąjį. Atliktų testą
ar kintamasis yra tekstas. Funkcija turi išvesti tekstą į
ekraną ir dar papildomai parodyti jo ilgį.
*/

// let a = 'Testing strings length'

// const text = (a) => {
//   if (typeof a == 'string' == true){
//     return a.length
//   } else {
//     return 'Not a string'
//   }
// }

// console.log(text(a));

// ----------------------------- 3 -----------------------------
/*
Parašyti funkciją, kuri priimtų vieną kintamąjį. Atliktų testą
ar kintamasis yra tekstas. Jei teksto ilgis lyginis – tekstą
išvestų žalios spalvos, jei nelyginis – mėlynos.
*/

// let a = "Testing strings length";

// const text = (a) => {
//   if ((typeof a == "string") != true) {
//     return "Not a string";
//   } else if (a.length % 2 == 0) {
//     ($("p")[0].style.color = 'green')
//     return $('p')[0].innerHTML = a
//   } else {
//     $('p')[0].innerHTML = a
//   }
// };

// console.log('Teksto ilgis ' + a.length);
// console.log(text(a));

// ----------------------------- 4 -----------------------------
/*
Parašyti funkciją, kuri priimtų vieną kintamąjį. Atliktų testą
ar kintamasis yra tekstas. Funkcija turi atspausdinti tekstą,
kur mažosios raidės pakeistos į didžiasias ir atvirkščiai.
*/

// let a = 'TesT a STRing'
// let c = ''

// const text = (a) => {
//   if ((typeof a == "string") != true) {
//     return "Not a string";
//   } else {
//     for (let i = 0; i < a.length; i++) {
//       if (a.charAt(i) == a.charAt(i).toUpperCase()){
//         c += a.charAt(i).toLowerCase()
//       } else {
//         c += a.charAt(i).toUpperCase()
//       }
//     };
//   }
//   return c
// }

// console.log(text(a));

// ----------------------------- 5 -----------------------------
/*
Parašyti funkciją, kuri priimtų vieną kintamąjį. Atliktų testą
ar kintamasis yra tekstas. Jei kintamasis yra tekstas, jo ilgis
turi būti daugiau, kaip 20 simbolių. Suskaičiuoti, kiek tekste
yra ‚a‘ raidžių.
*/

// let a = '123456789 123456789 20'
// let b = 159
// let countA = 0

// const testingas = (a) => {
//     if ((typeof a == 'string') == false){
//       return 'Tai nera string'
//     } if (a.length <= 20) {
//       return 'Maziau nei 20 raidziu'
//     } else {
//       for (let i = 0; i < a.length; i++){
//         if (a.charAt(i) == 'a' || 'A'){
//           countA++
//         } 
//       }
//       return countA
//     }
// } 

// console.log(testingas(a));

// ----------------------------- 6 -----------------------------
/*
Parašyti funkciją, kuri priimtų vieną kintamąjį. Atliktų testą
ar kintamasis yra tekstas. Suskaičiuoti kiek tekste yra mažųjų
ir kiek didžiųjų raidžių.
*/

let a = 'teST react ANGULAR'
let small = 0
let big = 0
let whiteSpace = 0

const texting = (a) => {
  if ((typeof a == 'string') == false){
    return 'Not A strinG'
  } else {
    for (let i = 0; i < a.length; i++){
        if (a.charAt(i) == a.charAt(i).toUpperCase()){
          big++
        } else if (a.charAt(i) == a.charAt(i).toLowerCase()) {
          small++
        } else if (a.charAt(i) == '') {
          whiteSpace++
        }
    }
  }
  return `Didziuju raidziu yra: ${big}, o mazuju yra: ${small}. Tarpu buvo: ${whiteSpace}`
}

console.log(texting(a));

// ----------------------------- 7 -----------------------------
/*
Parašyti funkciją, kuri priimtų du kintamuosius. Atliktų testą
ar kintamieji yra tekstai. Palyginti kuris tekstas yra ilgesnis.
*/

// ----------------------------- 8 -----------------------------
/*
Parašyti funkciją, kuri priimtų du kintamuosius. Atliktų testą
ar kintamieji yra tekstai. Palyginti kuris tekstas yra turi
daugiau didžiųjų raidžių.
*/

// ----------------------------- 9 -----------------------------
/*
Parašyti funkciją, kuri priimtų vieną kintamąjį. Atliktų testą
ar kintamasis yra tekstas. Funckija turi grąžinti tekstą, kur
žodžiai būtų sukeisti vietomis, tai yra pirmas žodis taptų paskutinis,
antras – priešpaskutinis ir t.t. Pačių žodžių keisti nereikia.
*/

// ----------------------------- 10 -----------------------------
/*
Parašyti funkciją, kuri priimtų vieną kintamąjį. Atliktų testą ar
kintamasis yra tekstas. Kiekvienam simboliui sugeneruoti atsitiktinę
spalvą ir atvaizduoti pagražintą spalvotą tekstą.
*/
