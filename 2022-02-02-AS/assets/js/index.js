const p0 = document.querySelectorAll.bind(document);

function randomizer(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
function uzd1() {
  let x;
  let y0 = 0;
  let z1 = 0;
  let c2 = 0;

  x = p0("span")[0].innerHTML = randomizer(0, 3);
  if (x == 0) {
    y0++;
  } else if (x == 1) {
    z1++;
  } else {
    c2++;
  }

  x = p0("span")[1].innerHTML = randomizer(0, 3);
  if (x == 0) {
    y0++;
  } else if (x == 1) {
    z1++;
  } else {
    c2++;
  }

  x = p0("span")[2].innerHTML = randomizer(0, 3);
  if (x == 0) {
    y0++;
  } else if (x == 1) {
    z1++;
  } else {
    c2++;
  }

  x = p0("span")[3].innerHTML = randomizer(0, 3);
  if (x == 0) {
    y0++;
  } else if (x == 1) {
    z1++;
  } else {
    c2++;
  }


  p0("span")[4].innerHTML = y0;
  p0("span")[5].innerHTML = z1;
  p0("span")[6].innerHTML = c2;
}

// ----------------------ANTRA UZDUOTIS------------------------------

function uzd2() {
  let m;
  m = p0("span")[7].innerHTML = randomizer(1, 7);
  p0("i")[m].innerHTML = `ELEMENTAS YRA ČIA - H${m}`;
  setTimeout(function () {
    location.reload();
  }, 1000);
  console.log(m);
  console.log((p0(`.h${m}`).innerHTML = "Hello"));
}

// let skaicius = randomSkaicius(1,6);
// document.getElementById('kazkoksID').innerHTML = `<h${skaicius}>${skaicius}</h${skaicius}>`;

// -------------------------TRECIA UZDUOTIS---------------------------

function uzd3() {
  let l;
  let o;
  let p;
  let sum; //3 skaičių suma
  let sum1; //aritmetinis vidurkis
  let sum2; //aritmetika++
  let j = 3;
  let suma = 0;

  l = p0("span")[8].innerHTML = randomizer(1, 101);
  console.log(l);
  o = p0("span")[9].innerHTML = randomizer(1, 101);
  console.log(o);
  p = p0("span")[10].innerHTML = randomizer(1, 101);
  console.log(p);
  console.log("---------------------");

  sum = l + o + p;
  sum1 = sum / 3;
  p0("span")[11].innerHTML = Math.round(sum1);
  console.log(sum1 + " vidurkis");

  function aritmetika(x) {
    if (x < 10 || x > 90){
        j--;
    } else {
        suma += x;
    }
}

  aritmetika(l)
  aritmetika(o)
  aritmetika(p)

  if (j == 3) {
    p0("span")[12].innerHTML = ('Visos reikšmės teisingos');
  } 
  else if (j == 0) {
    p0("span")[12].innerHTML = ('Absoliutus NULIS');
} else {
    let sum2 = suma/j;
    p0("span")[12].innerHTML = (sum2.toFixed(0));
}

  console.log(suma + " suma");
  console.log(j + " j");
  console.log(suma2 + " suma2+");
}

// -------------------------TRECIA UZDUOTIS---------------------------

const input = document.querySelector('input');
const log = document.getElementById('log');

input.addEventListener('keydown', (e) => {
  log.textContent += ` ${e.key}`;
})
