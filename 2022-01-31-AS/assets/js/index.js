// alert('HELLO');

var x = 10;
var result = x + 12;
// alert('10 + 12 = ' + result);
console.log(result);

// //Global objektas document
// document.getElementById('h1-m').classList.add('h1js');

//-----------------------------------------PIRMA UŽDUOTIS
var n1 = "Arminas";
var n2 = "Strolys";
var n3 = "1993-09-19";
console.log('"Aš esu ' + n1 + " " + n2 + " gimęs " + n3 + '".');
//-----------------------------------------PIRMA UŽDUOTIS - EXTRA MILE

function enterInfo() {
  var text;
  var name = prompt("Įveskite savo vardą:", "Vardas");
  var surname = prompt("Įveskite savo pavardę:", "Pavardė");
  var bDate = prompt("Įveskite savo gimimo metus:", "Gimimo metai YYYY-MM-DD");

  if (name || surname || bDate == null || name || surname || bDate == "") {
    text = "Įvyko klaida. Suveskite duomenis teisingai.";
  } else {
    return enterInfo;
  }
  document.getElementById("id-name").innerHTML = name;
  document.getElementById("id-surname").innerHTML = surname;
  document.getElementById("id-birth").innerHTML = bDate;

  console.log(name);
  console.log(surname);
  console.log(bDate);
}
//---------------------------------------------ANTRA/TREČIA UŽDUOTIS

function randomSkaicius(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
var a;
var b;
var c;
var d;
var e;
var z2;
var c2;
var x2 = randomSkaicius(1, 10);
var y2 = randomSkaicius(1, 10);

z2 = 10 + x2 - y2;
c2 = (20 / y2) * x2;

a = x2 * y2;
b = x2 / y2;
c = x2 + y2;
d = x2 - y2;
e = (x2 * y2) / (x2 + y2 + x2);

console.log(x2);
console.log(y2);
console.log(z2);
console.log(c2);
//---------------------------------------------------ANTRA/TREČIA UŽDUOTIS - EXTRA MILE
document.getElementById("x2").innerHTML = x2;
document.getElementById("y2").innerHTML = y2;
document.getElementById("a").innerHTML = a;
document.getElementById("b").innerHTML = b;
document.getElementById("c").innerHTML = c;
document.getElementById("d").innerHTML = d;
document.getElementById("e").innerHTML = e;
//---------------------------------------------------KETVIRTA UŽDUOTIS
var z1 = randomSkaicius(0, 25);
var z2 = randomSkaicius(0, 25);
var z3 = randomSkaicius(0, 25);
var zx;

zx = z1 + z2 + z3 /

console.log('z1 = ' + z1);
console.log('z2 = ' + z2);
console.log('z3 = ' + z3);
console.log('zx = ' + zx);
