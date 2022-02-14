function rndNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// ---------------------- 1 --------------------------
/*
Sugeneruokite 10 skaičių masyvą pagal taisyklę: Du pirmi
skaičiai- atsitiktiniai nuo 5 iki 25. Trečias, pirmo ir antro suma.
Ketvirtas- antro ir trečio suma. Penktas trečio ir ketvirto suma ir t.t.
*/
// let array = []

// for (let i = 0; i < 2; i++){
//   array.push(rndNum(5, 25))
// }

// for (let i = 0; i < 8; i++){
//   array.push(array[i] + array[i+1])
// }

// console.log(array);

// ---------------------- 2 --------------------------
/*
Sugeneruokite 101 elemento masyvą su atsitiktiniais skaičiais nuo 0 iki 300.
Reikšmes kurios tame masyve yra ne unikalios pergeneruokite iš naujo taip,
kad visos reikšmės masyve būtų unikalios. Išrūšiuokite masyvą taip, kad jo
didžiausia reikšmė būtų masyvo viduryje, o einant nuo jos link masyvo pradžios
ir pabaigos reikšmės mažėtų. Paskaičiuokite pirmos ir antros masyvo dalies
sumas (neskaičiuojant vidurinės). Jeigu sumų skirtumas (modulis, absoliutus dydis)
yra didesnis nei | 30 | rūšiavimą kartokite. (Kad sumos nesiskirtų viena nuo
kitos daugiau nei per 30)

300, 298, 294, 293, 290
296 297 300 298 295
*/

let array2 = []

for (let i = 0; i < 101; i++){
  array2.push(rndNum(0, 105))
}

let unique = [...new Set(array2)];

if (unique.length <= array2.length){
  console.log('abc')
}

console.log(unique.sort());

// ---------------------- 3 --------------------------



// ---------------------- 4 --------------------------



// ---------------------- 5 --------------------------



// ---------------------- 6 --------------------------

