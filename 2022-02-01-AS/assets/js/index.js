document.getElementById("submit").addEventListener("click", function (e) {
  var reiksme = document.getElementById("skc").value;
  document.getElementById("rez").innerHTML = "<h1>" + reiksme + "</h1>";
});
const d = document.querySelector.bind(document);

// window.addEventListener('scroll', () => {
//   console.log(window.pageYOffset)
// })

function randomSkaicius(x, y) {
  return Math.round(Math.random() * (x - y + 1) + y);
}
function randomSkaiciusRound(x, y) {
  return (Math.round(Math.random() * (x - y + 1) + y) * 100) / 10000;
}
function cals(){
document.getElementById("test-id").innerHTML = randomSkaicius(100, 1);
}
// ------------------------------------------------------------------

let a1 = randomSkaiciusRound(10000, 1);
let a2 = randomSkaiciusRound(10000, 1);
let a3 = randomSkaiciusRound(10000, 1);

function color1() {
  if (a1 >= 70) {
    d(".test-c1").style.color = "green";
  } else if (a1 >= 30 && a1 < 70) {
    d(".test-c1").style.color = "orange";
  } else {
    d(".test-c1").style.color = "red";
  }
}

function color2() {
  if (a2 >= 70) {
    d(".test-c2").style.color = "green";
  } else if (a2 >= 30 && a2 < 70) {
    d(".test-c2").style.color = "orange";
  } else {
    d(".test-c2").style.color = "red";
  }
}

function color3() {
  if (a3 >= 70) {
    d(".test-c3").style.color = "green";
  } else if (a3 >= 30 && a3 < 70) {
    d(".test-c3").style.color = "orange";
  } else {
    d(".test-c3").style.color = "red";
  }
}

d(".test-c1").innerHTML = a1;
color1();
d(".test-c2").innerHTML = a2;
color2();
d(".test-c3").innerHTML = a3;
color3();

// ------------------------------------------------------------------

let eur = 1;
let zvakes = randomSkaicius(5, 3000);
let zvakiuSkaicius = (d(".zvakes").innerHTML = zvakes);

function zvakiuPardavimai(zvakes, eur) {
  if (zvakes * eur >= 1000 && zvakes * eur < 2000) {
    return (zvakes - (zvakes * eur * 0.03))
  } else if (zvakes * eur >= 2000) {
    return (zvakes - (zvakes * eur * 0.04))
  } else {
    return zvakes * eur
  }
}

let vntKaina = 1 - (zvakes / zvakiuPardavimai(zvakes, eur) - 1)
let rounded1 = vntKaina.toFixed(2)
let nuolaida = zvakes - zvakiuPardavimai(zvakes, eur)
let rounded2 = nuolaida.toFixed(2)
// console.log(zvakiuPardavimai);

d(".eur").innerHTML = rounded1;
d(".bendrai").innerHTML = zvakiuPardavimai(zvakes, eur);
d(".nuolaida").innerHTML = rounded2;

console.log(zvakes);
