const $ = document.querySelectorAll.bind(document);

function rndNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//1
// Parašyti funkciją displayName() kuri priima objektą kaip argumentą ir atspausdina žmogaus vardą ir pavardę.
// Naudoti object destructuring funkcijos argumentą. Ir panaudoti template strings, kad atspausdinti vardą ir pavardę.

// const zmones = {
//   vardas: 'Jack',
//   pavarde: 'Greenfield'
// }

// // const {vardas: v, pavarde: p} = zmones
// // console.log(`My name is ${v} ${p}`);

// const displayName = () => {
//   let v = zmones.vardas
//   let p = zmones.pavarde

//   console.log(`My name is ${v} ${p}`);
// }

// displayName(zmones)

//2
// Parašyti funkciją pavadinimu paskaiciuotiPardavimus() kuri kaip argumentą priims pardavimai masyvą ir grąžins masyvą su naujais
// raktažodžiais (kainaSuNuolaida ir viso). Raktažodis 'kainaSuNuolaida' yra apskaičiuojamas originaliKaina - (originaliKaina * nuolaida).
// Raktažodis 'viso' yra paskaičiuojamas kainaSuNuolaida * vnt. Turite panaudoti object destructuring ir objekto default reikšmė nuolaidos
// raktažodžiui. Default reikšmė turi būti 0.0.

// const pardavimai = [
//   { preke: "PS4 Pro", vnt: 3, originaliKaina: 399.99 },
//   { preke: "Xbox One X", vnt: 1, originaliKaina: 499.99, nuolaida: 0.2 },
//   { preke: "Nintendo Switch", vnt: 4, originaliKaina: 299.99 },
//   { preke: "PS2 Console", vnt: 1, originaliKaina: 299.99, nuolaida: 0.8 },
//   { preke: "Nintendo 64", vnt: 2, originaliKaina: 199.99, nuolaida: 0.65 },
// ];

// const newSales = [];

// const paskaiciuotiPardavimus = () => {
//   for (i = 0; i < pardavimai.length; i++) {
//     const { nuolaida = 0 } = pardavimai[i];
//     let kainaSuNuolaida = pardavimai[i].originaliKaina - pardavimai[i].originaliKaina * nuolaida;
//     let viso = kainaSuNuolaida * pardavimai[i].vnt;

//     newSales.push({
//       "preke: ": pardavimai[i].preke,
//       "originali kaina: ": pardavimai[i].originaliKaina,
//       "kaina su nuolaida: ": kainaSuNuolaida,
//       "vnt: ": pardavimai[i].vnt,
//       "viso: ": viso
//     });
//   }
// };

// paskaiciuotiPardavimus(pardavimai);

// console.log(newSales);

document.getElementById("app").innerHTML = `
<h1>Spread, rest operators</h1>
<div>
Sužinoti daugiau spread operatorių galima 
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax" target="_blank" rel="noopener noreferrer">čia</a>.
<br/>
Sužinoti daugiau rest operatorių galima 
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters" target="_blank" rel="noopener noreferrer">čia</a>.
</div>
`;

//1 užduotis
const task1 = document.querySelector(".task1");
task1.innerText = myBio(
  "Jonas",
  "Jonaitis",
  "daktaras",
  "vedęs",
  "neturi vaikų"
);
// Pamodifikuoti tik myBio funckiją taip, kad būtų grąžinami visi paduoti argumentai po firstName ir lastName.
// Funckija jau yra iškviesta 4-toje eilutėje. Rezultatas vietoj undefined: daktaras,vedęs,neturi vaikų
function myBio(firstName, lastName, ...args) {
  return [...args]
}

// console.log(myBio);

//2 užduotis
const task2 = document.querySelector(".task2");
let array1 = ["b", "c", "d"];
let array2 = [...array1, "a", "e", "f"];
task2.innerText = array2.sort()
//sukurti array2, kuriame reikšmės bus 'a', 'b', 'c', 'd', 'e', 'f' (pernaudojant reišmes iš array1) ir įstatyti į task2.

//3 užduotis
const task3 = document.querySelector(".task3");
let stringas = "Abėcėlė";
//pakeiskite žemiau esančią eilutę, kad stringas būtų užrašytas paraidžiui. Rezultatas: A,b,ė,c,ė,l,ė
task3.innerText = [...stringas];

//4 užduotis
const task4 = document.querySelector(".task4");
const numbers = [1, 8, 10, 2];
function addNumbers(a, b, c, d) {
  return a + b + c + d;
}
//pakoreguoti žemiau esančią eilutę panaudojant funkciją addNumbers(), kad įstatytų sumą 21
task4.innerText = addNumbers(...numbers)

//5 užduotis
let skaiciai = [1, 2, 3];
let skaiciaiCopy = [...skaiciai, 4];
// console.log(skaiciai);
// console.log(skaiciaiCopy);
// susikurti skaiciai kopiją ir pridėti naują narį 4 į galą. Pasitikrinti ar nebuvo modifikuotas skaiciai masyvas

//6 užduotis
const myName = { firstName: "John", lastName: "Smith" };

//pakoreguoti taip, kad firstName taptų Sam ir pridėti website: "bit.lt", atspausdinti consolėj
const bio = { myName };

myName.firstName = 'Sam'

const cio = { ...myName, website: "bit.lt" };

console.log(cio);
