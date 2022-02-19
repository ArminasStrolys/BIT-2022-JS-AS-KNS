const $ = document.querySelectorAll.bind(document)

function rndNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// ----------------------------- 1 -----------------------------
/*
Parašyti funkciją, kuri priimtų vieną kintamąjį. Atliktų testą
ar kintamasis yra tekstas. Išvestų tekstą į ekraną „<p>“ tag‘e.
*/

let a = 'Test a string'

const text = (a) => {
  if (typeof a == 'string' == true){
    return $('p')[0].innerHTML = a
  } else {
    return 'Not a string'
  }
}

console.log(text(a));

// ----------------------------- 2 -----------------------------
/*
Parašyti funkciją, kuri priimtų vieną kintamąjį. Atliktų testą
ar kintamasis yra tekstas. Funkcija turi išvesti tekstą į
ekraną ir dar papildomai parodyti jo ilgį.
*/



// ----------------------------- 3 -----------------------------
/*
Parašyti funkciją, kuri priimtų vieną kintamąjį. Atliktų testą
ar kintamasis yra tekstas. Jei teksto ilgis lyginis – tekstą
išvestų žalios spalvos, jei nelyginis – mėlynos.
*/



// ----------------------------- 4 -----------------------------
/*
Parašyti funkciją, kuri priimtų vieną kintamąjį. Atliktų testą
ar kintamasis yra tekstas. Funkcija turi atspausdinti tekstą,
kur mažosios raidės pakeistos į didžiasias ir atvirkščiai.
*/



// ----------------------------- 5 -----------------------------
/*
Parašyti funkciją, kuri priimtų vieną kintamąjį. Atliktų testą
ar kintamasis yra tekstas. Jei kintamasis yra tekstas, jo ilgis
turi būti daugiau, kaip 20 simbolių. Suskaičiuoti, kiek tekste
yra ‚a‘ raidžių.
*/



// ----------------------------- 6 -----------------------------
/*
Parašyti funkciją, kuri priimtų vieną kintamąjį. Atliktų testą
ar kintamasis yra tekstas. Suskaičiuoti kiek tekste yra mažųjų
ir kiek didžiųjų raidžių.
*/



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


