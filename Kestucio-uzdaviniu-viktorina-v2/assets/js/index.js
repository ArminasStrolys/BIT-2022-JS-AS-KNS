function rndNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// ----------------------------- 1 -----------------------------
/*
naudojant ciklą atspausdinti penkias eilutes ‘Labas’;
*/

// let i = 0

// while (i < 5){
//   i++
//   console.log('Labas')
// }

// ----------------------------- 2 -----------------------------
/*
naudojant ciklą [[vienoje]] eilutėse atspausdinti skaičius 0 1 2 3 4
(vienas skaičius vienoje eilutėje);
*/

// let i = 0
// let a = ' '

// while (i < 5){
//   a += i + ' '
//   i++
// }
// console.log(a)

// ----------------------------- 3 -----------------------------
/*
naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 10 20 30 40
(vienas skaičius vienoje eilutėje);
*/

// let i = 0

// while (i < 50){
//   i+=10
//   console.log(i)
// }

// ----------------------------- 4 -----------------------------
/*
naudojant ciklą penkiose eilutėse atspausdinti skaičius 49 50 51 52 53
(vienas skaičius vienoje eilutėje);
*/

// let i = 49

// while (i < 54){
//   console.log(i)
//   i++
// }

// ----------------------------- 5 -----------------------------
/*
naudojant ciklą penkiose eilutėse atspausdinti skaičius 4 3 2 1 0
(vienas skaičius vienoje eilutėje);
*/

// let i = 4

// while (i >= 0){
//   console.log(i)
//   i--
// }

// ----------------------------- 6 -----------------------------
/*
naudojant ciklą penkiose eilutėse atspausdinti skirtingus atsitiktinius skaičius
nuo 0 iki 10 (vienas skaičius vienoje eilutėje);
*/

// let i = 0
// let random

// while (i < 5){
//   random = rndNum(0, 10)
//   console.log(random);
//   i++
// }

// ----------------------------- 7 -----------------------------
/*
naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10
(vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5;
*/

// let random

// while (true){
//   random = rndNum(0, 10)
//   console.log(random);
//   if (random == 5){
//     break
//   }
// }

// let u
// while (u!=5){
//   u = rndNum(0, 10)
//   console.log(u);
// }

// ----------------------------- 8 -----------------------------
/*
naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10
(vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių
skaičių suma viršija 100;
*/

// let random
// let sum = 0

// while (true){
//   random = rndNum(0, 10)
//   console.log('Suma ' + sum);
//   console.log('Pridedama ' + random);
//   sum += random
//   if (sum >= 100){
//     console.log(`Suma ${sum}. Suma viršijo 100. `);
//     break
//   }
// }

// ----------------------------- 9 -----------------------------
/*
naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10
(vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5 arba 7;
Suskaičiuoti kiek ciklų prasisuko;
*/

// let i = 0
// let random

// while (true){
//   random = rndNum(0, 10)
//   console.log(random);
//   i++
//   if (random == 5 || random == 7){
//     console.log('Prasisuko kartų = ' + i + ' .Rekordas 19 kartų');
//     break
//   }
// }

// // let i = 0
// // let k = 0

// // while (i != 5 && i != 7){
// // i = rndNum(0, 10)
// // console.log('i = ' + i);
// // k++
// // }
// // console.log('Kartų prasisuko = ' + k);

// ----------------------------- 10 -----------------------------
/*
Vienas colis yra 2,54 cm. Sudarykite programą kuri pateiktų ekrane lentelę nuo 1 iki n
centimetrus coliais ir atvirkščiai.
*/

// let inch = 2.54
// let cm = 1
// let n = 55

// console.log(`n skaičius yra = ${n}.
// Jei coliai, centimetrų būtų = ${n/inch}.
// Jei centimetrai, colių būtų = ${n*inch}`);

// ----------------------------- 11 -----------------------------
/*
Bankas moka 2% metinių palūkanų. Indėlininkas pasidėjo į banką 100e.
Sudarykite kasmetinę banko atskaitą klientui iki n metų.
Ataskaitoje pateikite: metus, palūkanas, indėlį.
*/

// let eu = 100
// let bank = eu
// let p = 2
// let m = 5
// let i = 1

// while(i <= m){
//   eu += m * (p)/10
//   i++
// }

// console.log(`Metų praėjo ${m}. Indėlio procentai ${p}%. Palukanos = ${eu-bank}.
// Įdėta bapkių = ${bank}. Iš viso bapkių = ${eu}`);

// ----------------------------- 12 -----------------------------
/*
Dviženklio skaičiaus dešimčių skaitmuo tris kartus didesnis už vienetų skaitmenį.
Jei tuos skaitmenis sukeistume vietomis, tai gautume skaičių, 36 vienetais
mažesnį už duotąjį, raskite tą skaičių.
*/



// ----------------------------- 13 -----------------------------
/*
Raskite keturženklius skaičius, kurių pirmasis skaitmuo yra lyginis,
o skaičius nesidalina iš 998 ?
*/

// let i = 1000;

// while (i < 9999) {
//   let x1 = Math.floor(i / 1000);
//   if (x1 % 2 == 0 && !(i / 998 == 0)){
//     console.log('Tiko ' + i);
//   }
//   i++;
// }

// ----------------------------- 14 -----------------------------
/*
Keliamieji metai turi 366 dienas, paprastieji – 365. Visi metai, išskyrus
šimtmečius, yra keliamieji, jie dalūs iš 4. Šimtmečių metai yra keliamieji,
jeigu dalūs 400. Pvz.: 1600 metai yra keliamieji, nes dalūs iš 400, o
1700 – paprastieji. Raskite visus mūsų eros keliamuosius metus.
*/

// let m = 0

// for (let i = 1000; i < 2022; i++){
//   if (i % 4  == 0 && i % 400 == 0){
//     m = i
// console.log('Metai keliamieji = ' + m);
//   }
// }

// ----------------------------- 15 -----------------------------
/*
Norėdami paskatinti žmones naudotis visuomeniniu miesto transportu, savivaldybės
tarnautojai sugalvojo, kad bilietai, kurie baigiasi lyginiu skaitmeniu, kainuos
perpus pigiau. Bilietai, kurie baigiasi nuliu, parduodami be nuolaidos.
Parenkite programą, spausdinančią visų bilietų, kurie kainuos pigiau, numerius.
Bilietai pradedami numeruoti nuo m-tojo, baigiami n-tuoju. Kai m = 997, o n = 1003,
tuomet turi būti rodomi tokie bilietų numeriai: 998 1002
*/

// for(let i = 949; i < 1003; i++){
//   if (!(i % 10 == 0) && (i % 2 == 0)){
//     console.log('Numeris ' + i);
//   }
// }

// ----------------------------- 16 -----------------------------
/*
Duotas natūralus skaičius n. Raskite pirmą skaitmenį
*/

// let n = 85116;
// let m = String(n)[0];

// console.log("n = " + m);

// let n = 65116;
// while (n >= 10){
// n /= 10;
// n = Math.floor(n);
// }

// console.log(n);

// ----------------------------- 17 -----------------------------
/*
Duotas natūralusis skaičius n. Raskite skaitmenų sumą.
*/

// let n = 60;
// let i = 0;
// let sum = 0

// while (n >= i){
//   sum += i
//   console.log(sum);
// i++
// }

// console.log('Galutinė suma: ' + sum);

// ----------------------------- 18 -----------------------------
/*
Duotas natūralusis skaičius n. Raskite atvirkščią skaičių duotajam. Pvz.: n=123, atv =321
*/

// let n = 67418
// let y1 = 0
// let y2 = 0

// console.log(`Skaičius: ${n}`);

// while(n){
//     y1 = n % 10
//     y2 = (y2 * 10) + y1
//     n = n / 10 | 0 
// }

// console.log(`Atbulinis: ${y2}`);

// ----------------------------- 19 -----------------------------
/*
Duotas natūralus skaičius n. Sudarykite programą, kuri rastų didžiausią ir mažiausią
skaitmenį.
*/

// let xl = 0;
// let xs = 9;
// let n = 5812;
// let skc;

// while(n) {
//     skc = n % 10;
//     xl = Math.max(skc, xl);
//     xs = Math.min(skc, xs);
//     n = parseInt(n / 10);
// }

// console.log('Max: ' + xl);
// console.log('Min: ' + xs);

// ----------------------------- 20 -----------------------------
/*
Bankas moka indėlininkui p (p>0) procentų palūkanų per metus. Parašykite programą,
kuri apskaičiuotų, po kiek metų šimto eurų indėlis taps didesnis už 100000.
*/

// let p = 30 // proc
// let m = 0
// let eu = 100
// let bank = eu
// let pa = 100000 // palukanos

// while (pa > bank){
// bank += bank * p / 100
//   m++
//   console.log('Metai ' + m + '. Suma banke = ' + bank);
// }

// console.log('Metų prireikė = ' + m + ', kad pasiektų ' + pa + ' eu. ribą= ' + m);
// console.log('Bank= ' + bank.toFixed(2));

// ----------------------------- 21 -----------------------------
/*
Ežere pražydo viena lelija. Kiekvieną dieną žiedų skaičius padvigubėdavo.
Parašykite programą, kuri apskaičiuotų: a. Kiek žiedų buvo po n dienų b.
Kelintą dieną žiedai užklojo pusę ežero, jeigu visame ežere gali tilpti m žiedų.
*/

// let a = 1; //lelija
// let n = 50; //dienos
// let i = 1; //index
// let m = 536142; //telpa ziedu

// while (i <= n) {
//   a = a * 2;
//   if (a >= m) {
//     break
//   } else if (a >= m / 2){
//     console.log("Pusę ežero po " + i + ' dienų.');
//   }
//   i++;
// }
// console.log(`Žiedų yra - ${a} po ${i} dienų`);

// ----------------------------- 22 -----------------------------
/*
Pavasarį pradėjęs dirbti sode sodininkas pirmąją dieną išgenėjo m1, antrąją – m medžių
daugiau negu pirmąją, trečiąją – m medžių daugiau negu antrąją ir t.t.
Parašykite programą, skaičiuojančią, kiek dienų d dirbs sodininkas,
kol išgenės n sode augančių medžių. Paskutinei dienai gali likti mažiau medžių.
Visi duomenys yra sveikojo tipo. Pasitikrinkite: kai m1 = 3, m = 1, n = 16, tuomet
kompiuterio ekrane turi būti rodoma: Sodininkas dirbs 4 dienas.
*/

// let m1 = 3;
// let m = 1; //medžiai per dieną
// let n = 16; //medžių liko
// let d = 1; //dienos

// while (m1 <= n) {
//   d++;
//   m1 += m1 + m;
// }
// console.log("Dirbo dienų: " + d);
