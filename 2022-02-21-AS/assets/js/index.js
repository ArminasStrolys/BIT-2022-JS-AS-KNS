function rndNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// ------------------------- 1 -------------------------
/*
Parašyti funkciją hello kurią paleidus ji konsolėje atspausdintų 'Hello Africa'
*/

// const pirmadienis = () => {
//   console.log('Labas rytas, Afrika');
// }

// pirmadienis()

// ------------------------- 2 -------------------------
/*
Parašyti funkciją helloWhat, kuri turi vieną parametrą ir kurią
paleidus ji konsolėje atspausdintų 'Hello' + argumentas paduotas į parametrą
*/

// let a = 'World'

// const helloWhat = (a) => {
//   console.log(`Hello, ${a}`);
// }

// helloWhat(a)

// ------------------------- 3 -------------------------
/*
Parašyti funkciją su dviem parametrais kuri spausdintų jų sumą
*/

// let a = 5
// let b = 10

// const oneTwo = (a, b) => {
// return console.log(a + b);
// }

// oneTwo(a, b)

// ------------------------- 4 -------------------------
/*
Padaryti masyvą iš dviejų elementų. Pirmas masyvo elementas yra
sumos funkcija, antras daugybos funkcija (iš ankstesnio užd)
*/

const arrayFunc = []
  
arrayFunc[0] = (a, b) => {
return console.log(a + b);
}
arrayFunc[1] = (a, b) => {
return console.log(a * b);
}

arrayFunc[1](2, 5)