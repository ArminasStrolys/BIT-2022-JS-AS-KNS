function rndNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}



//-------------------- 1 --------------------
/*
Reikia su ciklo pagalba atspausdinti skaičius
nuo 10 iki 1 t.y. 10 9 .... 2 1 
*/

// for (let i = 0; i < 10; i++){
// console.log(10 - i);
// }
// console.log('========================');
// for (let o = 10; o > 0; o--){
//   console.log(o);
//   }
  
//-------------------- 2 --------------------
/*
Žodį animal atspausdinti stulpeliu
*/

// const animal = 'Begemotas'

// for (let i = 0; i < animal.length; i++){
// console.log(animal.charAt(i));
// }

//-------------------- 3 --------------------
/*
Padaryti vieną stringą, labai ilgą, kuriame
100 kartų kartotųsi žodis Begemotas
*/

// const animal = 'Begemotas'
// let abc = ''

// for (let i = 0; i < 100; i++){
// abc += animal + ' '
// }

// console.log(abc);

//-------------------- 4 --------------------
/*
10 kartų meskite kauliuką (rand 1 - 6).
Suskaičiuokite visų metimų sumą
*/

// sum = 0

// for (let i = 0; i < 10; i++){
//   let rnd = rndNum(1, 6)
//   sum += rnd
//   console.log('rnd ' + rnd);
//   console.log(sum);
// }

// console.log('Suma: ' + sum);

//-------------------- 5 --------------------
/*
10 kartų mesti kauliuką, skaičiuoti sumą, bet jeigu suma
viršina 35 - ciklą reikia nutraukti pirma laiko. Gale atspausdinti
sumą ir prasisukusių ciklų skaičių 
*/

// let sum = 0
// let cycle = 0

// for (let i = 0; i < 10; i++){
//   let rnd = rndNum(1, 6)
//   sum += rnd
//   console.log('rnd ' + rnd);
//   console.log(sum);
//   if (sum > 35){
//     break
//   }
//   cycle++
// }

// console.log('Ciklai: ' + cycle);
// console.log('Suma: ' + sum);

//-------------------- 6 --------------------
/*
10 kartų mesti kauliuką ir suskaičiuoti kiek kartų
iškrito skaičius didesnis nei 4
*/

// let count = 0

// for (let i = 0; i < 10; i++){
//   let rnd = rndNum(1, 6)
// if (rnd > 4){
//   count++
// }
// console.log('Dice: ' + rnd);
// }

// console.log('Kartai: ' + count);

//-------------------- 7 --------------------
/*
10 kartų mesti kauliuką ir suskaičiuoti kiek kartų
iškrito 3 ir kiek kartų iškrito 5
*/

// let count3 = 0
// let count5 = 0

// for (let i = 0; i < 10; i++){
//   let rnd = rndNum(1, 6)
// if (rnd == 3){
//   count3++
// } else if (rnd == 5){
//   count5++
// }
// console.log('Dice: ' + rnd);
// }

// console.log('Kartai (3): ' + count3);
// console.log('Kartai (5): ' + count5);














//--------------- NAMŲ DARBAI ---------------
//-------------------- 1 --------------------
/*
Sukurkite tris kintamuosius ir priskirkite jiems
skirtingus sveikus skaičius iš intervalo 5…25;

A) Paskaičiuokite jų sumą ir priskirkite ją kintamajam.
Pasinaudokite console.log atspausdinkite sumos kintamąjį;
*/

// let a = 16
// let b = 22
// let c = 7

// let sum = a + b + c

// console.log('Suma: ' + sum);

/*
B) Sudėkite skaičius į stringo tipo kintamąjį ir jį atspausdinkite
pasinaudodami console.log;
*/

// let d = '16'
// let e = '22'
// let f = '7'

// let sum = d + e + f

// console.log('Suma string: ' + sum);

/*
C) Sudėkite skaičius į stringo tipo kintamąją padarant
tarp skaičių tarpus ir jį atspauszdinkite pasinaudodami console.log;
*/

// let a = 16
// let b = 22
// let c = 7

// let string = ''

// string += a + ' '
// string += b + ' '
// string += c + ' '

// console.log('Suma string`e: ' + string);

/*
D) Sudėkite skaičius į stringo tipo kintamąją padarant tarp skaičių
tarpus ir gale pridedėkite trijų skaičių sumą, paskaičiuotą A dalyje.
Atspausdinkite gautą stringo tipo kintąmąjį pasinaudodami console.log;
*/

// let a = 16
// let b = 22
// let c = 7

// let string = ''

// string += a + ' '
// string += b + ' '
// string += c + ' '

// console.log('Suma string`e: ' + string +
// 'Tikra suma: ' + (a+b+c));

//-------------------- 2 --------------------
/*
Sukurkite vieną kintamąjį, jam priskirkite skaičių (iš intervalo 5…10),
kurį sugeneruoja funkcija rand(5, 10) ir jį atspausdinkite
pasinaudojus console.log;
*/

let U = rndNum(5,10)

console.log('Random number: ' + U);

//-------------------- 3 --------------------
/*
Sukurkite kintamąjį ir jam priskirkite stringą “Labas”. Pasinaudodami ciklu
ir console.log atspauzdinkite kintamąjį 5 kartus;
*/

// let labas = 'LabaS'

// for (let i = 0; i < 5; i++){
//   console.log(labas);
// }


//-------------------- 4 --------------------
/*
Pasinaudojus ciklu ir ir console.log atspauzdinkite
kintamąjį iš 2 uždavinio 7 kartus;
*/