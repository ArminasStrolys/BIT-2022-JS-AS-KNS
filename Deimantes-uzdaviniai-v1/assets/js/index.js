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

const pardavimai = [
  { preke: "PS4 Pro", vnt: 3, originaliKaina: 399.99 },
  { preke: "Xbox One X", vnt: 1, originaliKaina: 499.99, nuolaida: 0.2 },
  { preke: "Nintendo Switch", vnt: 4, originaliKaina: 299.99 },
  { preke: "PS2 Console", vnt: 1, originaliKaina: 299.99, nuolaida: 0.8 },
  { preke: "Nintendo 64", vnt: 2, originaliKaina: 199.99, nuolaida: 0.65 },
];

const newSales = [];

const paskaiciuotiPardavimus = () => {
  for (i = 0; i < pardavimai.length; i++) {
    const { nuolaida = 0 } = pardavimai[i];
    let kainaSuNuolaida = pardavimai[i].originaliKaina - pardavimai[i].originaliKaina * nuolaida;
    let viso = kainaSuNuolaida * pardavimai[i].vnt;

    newSales.push({
      "preke: ": pardavimai[i].preke,
      "originali kaina: ": pardavimai[i].originaliKaina,
      "kaina su nuolaida: ": kainaSuNuolaida,
      "vnt: ": pardavimai[i].vnt,
      "viso: ": viso
    });
  }
};

paskaiciuotiPardavimus(pardavimai);

console.log(newSales);
