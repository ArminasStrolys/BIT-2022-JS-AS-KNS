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

// let U = rndNum(5,10)

// console.log('Random number: ' + U);

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
Pasinaudojus ciklu ir console.log atspausdinkite
kintamąjį iš 2 uždavinio 7 kartus;
*/

// for (let i = 0; i < 7; i++){
//   console.log('Ats yra: ' + U);
// }

//-------------------- 5 --------------------
/*
Pasinaudojus ciklu ir console.log atspausdinkite kintamąjį
iš 2 uždavinio tiek kartų, koks skaičius yra sugeneruotas;
*/

// for (let i = 0; i < U; i++){
//   console.log('Ats yra (i kartų): ' + U);
// }

//-------------------- 6 --------------------
/*
Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį
iš 2 uždavinio tiek kartų, koks skaičius yra sugeneruotas,
bet tik tada jeigu jis didesnis už 7;
*/

// for (let i = 0; i < U; i++){
//   if (U > 7){
//     console.log('Ats yra (i kartų): ' + U);
//   }
// }

//-------------------- 7 --------------------
/*
Deklaruokite kintamąjį už ciklo ribų. Ciklo viduje generuokite
atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo
10…20. Ciklą kartokite 5 kartus;

A) Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam,
kurį sukūrėte už ciklo ribų ir jį atspausdinkite;
*/

// let out

// for (let i = 0; i < 5; i++){
//   out = rndNum(10, 20)
// console.log(out);
// }

/*
B) Skaičiuokite ciklo viduje generuojamų reikšmių sumą, ją priskirdami
kintamajam, kurį sukūrėte už ciklo ribų. Rezultatą atspausdinkite
pasinaudodami console.log už ciklo ribų;
*/

// let out = 0

// for (let i = 0; i < 5; i++){
//   out += rndNum(10, 20)
// }

// console.log('OUT: ' + out);

/*
C) Skaičius, generuojamus ciklo viduje dėkite į stringo tipo kintamąjį tarp
skaičių darydami tarpą. Stringo tipo kintamąjį atspasdinkite už
ciklo ribų jam pasibaigus;
*/

// let out = 0

// for (let i = 0; i < 5; i++){
//   out += ' ' + rndNum(10, 20) + ' '
// }

// console.log('OUT: ' + out);

/*
D) Skaičius, generuojamus ciklo viduje dėkite į stringo tipo kintamąjį
tarp skaičių darydami tarpą. Ciklui pasibaigus prie stringo tipo kintamojo
pridėkite ciklo viduje generuotų skaičių sumą, paskaičiuotą kaip B dalyje.
Stringo tipo kintamąjį atspausdinkite pasinaudodami console.log;
*/

// let out = 0
// let string = ''

// for (let i = 0; i < 5; i++){
//   string += rndNum(10, 20) + ' '
//   out += rndNum(10, 20)
// }

// console.log('OUT: ' + string + 'Sum: ' + out);

//-------------------- 8 --------------------
/*
Deklaruokite kintamąjį (jeigu reikia kelis kintamuosius) už ciklo ribų.
Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra
iš intervalo 10…25. Ciklą kartokite tol, kol ciklo viduje bus sugeneruotas
skaičius mažesnis nei 12;

A) Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam,
kurį sukūrėte už ciklo ribų ir jį atspausdinkite;
*/

// let a = 0
// let b = 0

// while (true){
//   a = rndNum(10, 25)
//   console.log('a: ' + a);
//   if (a < 12){
//     break
//   }
// }

// console.log('    A: ' + a);

/*
B) Suskaičiuokite kiek iteracijų padarėte ir jų kiekį atspauzdinkite pasinaudodami
console.log už ciklo ribų jam pasibaigus;
*/

// let a = 0
// let b = 0

// while (true){
//   b++
//   a = rndNum(10, 25)
//   console.log('a: ' + a);
//   if (a < 12){
//     break
//   }
// }

// console.log('    B: ' + b);

/*
C) Skaičiuokite ciklo viduje generuojamų reikšmių sumą, atmesdami (neskaičiuodami)
skaičius, kurie yra didesni nei 18, ją priskirdami kintamajam, kurį sukūrėte už ciklo ribų.
Rezultatą atspausdinkite pasinaudodami console.log už ciklo ribų;
*/

// let a = 0
// let sum = 0

// while (true){
//   a = rndNum(10, 25)
//   console.log('a: ' + a);
//   if (a < 18){
//     sum += a
//   }
//   if (a < 12){
//     break
//   }
// }

// console.log('    SUM: ' + sum);

/*
D) Sumą skaičiuokite kaip C dalyje, bet papildomai susikurkite kintamąjį,
kuriame suskaičiuokite kiek reikšmių atmetėte (nesumavote).
Rezultatą su suma ir atmestų reikšmių kiekiu atspauzdinkite pasinaudodami console.log už ciklo ribų;
*/

// let a = 0
// let sum = 0
// let nonSum = 0

// while (true){
//   a = rndNum(10, 25)
//   console.log('a: ' + a);
//   if (a < 18){
//     sum += a
//   } else {
//     nonSum++
//   }
//   if (a < 12){
//     break
//   }
// }

// console.log('    SUM: ' + sum);
// console.log('Atmesta: ' + nonSum);

/*
E) Suskaičiuokite kiek tarp cikle atsitiktinai generuojamų reikšmių
yra lyginių ir kiek nelyginių skaičių. Rezultatą atspausdinkite pasinaudodami
console.log už ciklo ribų jam pasibaigus.
*/

// let a = 0
// let odd = 0
// let even = 0

// while (true){
//   a = rndNum(10, 25)
//   console.log('a: ' + a);
//   if (a % 2 == 0){
//     even++
//   } else {
//     odd++
//   }
//   if (a < 12){
//     break
//   }
// }

// console.log('Lyginiai: ' + even);
// console.log('Nelyginiai: ' + odd);

/*
F) Ciklą iš dalies B kartokite tol,  kol to ciklo iteracijų kiekis bus didesnis
nei 20 (vieno ciklo). Paskaičiuokite kiek pakartojimų buvo atlikta ir
rezultatą atspausdinkite pabaigoje.
*/

// let a = 0
// let b = 0

// while (true){
//   b++
//   a = rndNum(10, 25)
//   console.log('a: ' + a);
//   if (a < 12 && b > 20){
//     break
//   }
// }

// console.log('    B: ' + b);

//-------------------- 9 --------------------
/*
Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(),
kurie yra iš intervalo 5-10. Ciklą kartokite tol, kol ciklo
viduje bus sugeneruotas skaičius 5;

A) Ciklo viduje paleiskite dar vieną ciklą kurį kartokite tiek kartų, koks
skaičius buvo sugeneruotas. Paskaičiuokite kiek iteracijų padarė išorinis
ciklas ir kiek bendrai iteracijų padarė vidinis ciklas. Rezultatus atspausdinkite
pasinaudodami console.log už ciklo ribų jam pasibaigus;
*/

// let a = 0
// let b = 0
// let c = 0

// while (true){
//   b++
//   a = rndNum(5, 10)
//   console.log('a: ' + a);
//   for (let i = 1; i <= a; i++){
//     c++
//     console.log('aaaaa: ' + i);
//   }
//   if (a == 5){
//     break
//   }
// }

// console.log('Išorinio ciklo iteracijos: ' + b);
// console.log('Vidinio ciklo iteracijos: ' + c);

/*
B) Padarykite taip, kad išorinis ciklas pasibaigtų kai 5 yra sugeneruojamas ne pirmą,
bet trečią kartą ir paskaičiuokite iteracijas analogiškai kaip A dalyje;
*/

// let a = 0
// let b = 0
// let c = 0
// let d = 0

// while (true){
//   b++
//   a = rndNum(5, 10)
//   console.log('a: ' + a);
//   for (let i = 1; i <= a; i++){
//     c++
//     console.log('aaaaa: ' + i);
//   }
//   if (a == 5){
// d++
//   } if (d == 3){
//     break
//   }
// }

// console.log('Išorinio ciklo iteracijos: ' + b);
// console.log('Vidinio ciklo iteracijos: ' + c);

/*
C) Padarykite analogiškai kaip B dalyje, bet tik kai
5 yra sugeneruojami 3 kartus iš eilės;
*/

// let a = 0
// let b = 0
// let c = 0
// let d = 0

// while (true){
//   b++
//   a = rndNum(5, 10)
//   console.log('a: ' + a);
//   for (let i = 1; i <= a; i++){
//     c++
//     console.log('aaaaa: ' + i);
//   }
//   if (a == 5){
// d++
//   } else {
//     d = 0
//   } if (d == 3){
//     console.log('3x is eiles');
//     break
//   }
// }

// console.log('Išorinio ciklo iteracijos: ' + b);
// console.log('Vidinio ciklo iteracijos: ' + c);