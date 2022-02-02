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
    y0 += 1;
  } else if (x == 1) {
    z1 += 1;
  } else {
    c2 += 1;
  }

  x = p0("span")[1].innerHTML = randomizer(0, 3);
  if (x == 0) {
    y0 += 1;
  } else if (x == 1) {
    z1 += 1;
  } else {
    c2 += 1;
  }

  x = p0("span")[2].innerHTML = randomizer(0, 3);
  if (x == 0) {
    y0 += 1;
  } else if (x == 1) {
    z1 += 1;
  } else {
    c2 += 1;
  }

  x = p0("span")[3].innerHTML = randomizer(0, 3);
  if (x == 0) {
    y0 += 1;
  } else if (x == 1) {
    z1 += 1;
  } else {
    c2 += 1;
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

// -------------------------TRECIA UZDUOTIS---------------------------

function uzd3() {
  let l;
  let o;
  let p;
  let sum1;
  let sum2;
  let n = 0

  l = p0("span")[8].innerHTML = randomizer(1, 101);
  console.log(l);
  o = p0("span")[9].innerHTML = randomizer(1, 101);
  console.log(o);
  p = p0("span")[10].innerHTML = randomizer(1, 101);
  console.log(p);
  console.log("---------------------");

  sum1 = (l + o + p) / 3;
  p0("span")[11].innerHTML = Math.round(sum1);
  console.log(sum1);
  if (l <= 10 || l >= 90) {
    delete l
    n =+ 1
  } else if (o <= 10 || o >= 90) {
    delete o
    n =+ 1
  } else if (p <= 10 || p >= 90) {
    delete p
    n =+ 1
  }
  sum2 = (l + o + p) / (3 - n);
  if (sum1 == sum2) {
    p0("span")[12].innerHTML = 'Išmestų reikšmių nebuvo';
  } else {
  p0("span")[12].innerHTML = Math.round(sum2);
  console.log(sum2);
}
}
