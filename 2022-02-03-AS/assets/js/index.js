function rndNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const $ = document.querySelectorAll.bind(document);
// -----------------------------------PIRMA UŽDUOTIS (1 variantas)-----------------------------------
// let i = 0
// let x = 0

// while (i < 300) {
//   i++
//   document.write('<span>*</span>')
//    if (i % 25 == 0)
//   document.write('<br>')
// console.log(i)
// }
// -----------------------------------PIRMA UŽDUOTIS (2 variantas)-----------------------------------
let i = 1;
let x = "";

while (i <= 300) {
  x += "*";
  if (i % 25 == 0) {
    x += "<br>";
  }
  i++;
  $("span")[0].innerHTML = x;
  // console.log(i)
}
// -----------------------------------ANTRA UŽDUOTIS-----------------------------------

let kiekis = 0;
let numeris;
let container = "";
let virs150 = 0;
let virs275 = 0;
let color;

while (kiekis < 300) {
  numeris = rndNum(0, 300);
  container += numeris + " ";
  if (kiekis % 25 == 0) {
    container += numeris + "<br>";
  }
  if (numeris >= 150) {
    virs150 += 1;
  }
  if (numeris >= 275) {
    container += `<span style="color:red;"> ${numeris} </span>`;
  }
  $("span")[1].innerHTML = container;
  $("p")[0].innerHTML = "Skaičių, kurie viršija 150 yra = " + virs150;
  kiekis++;
  // console.log(`Kiekis = ${kiekis} ir numeris būtų = ${numeris}`)
}
// -----------------------------------TREČIA UŽDUOTIS-----------------------------------

let numero = 0;
let box = "";

while (numero < 3000) {
  numero++;
  if (numero % 77 == 0) {
    box += numero + ", ";
  }
  $("p")[2].innerHTML = box.substring(0, box.length - 2);

  // console.log(box)
  // console.log(box.length)
}

// -----------------------------------KETVIRTA UŽDUOTIS-----------------------------------

let rez1 = 0;
let rez2 = 0;
let matchNo = 0;
let negaliojanti = "";

game = () => {
  while (matchNo < 30) {
    matchNo++;
    let benas = rndNum(10, 20);
    let jovita = rndNum(5, 25);


    // if (benas || jovita == 12) {
    //   rez1 -= benas
    //   rez2 -= jovita
    // }


    if (rez1 > 221) {
      $("i")[2].innerHTML = "Benas su rezultatu " + rez1;
      break;
    }

    if (rez2 > 221) {
      $("i")[2].innerHTML = "Jovita su rezultatu " + rez2;
      break;
    } 

    rez1 += benas;
    rez2 += jovita;
    
    if (benas == 12 || jovita == 12) {
      rez1 -= benas;
      rez2 -= jovita;
      negaliojanti += `Partijos numeris ${matchNo} <br>`;
    }

    if (rez1 == 221 && rez2 == 221) {
      $("i")[3].innerHTML = "LYGU";
      break;
    }



    $("i")[0].innerHTML += `<br>${matchNo} partija. Surinktas taškų skaičius ${benas}. Bendras rezultatas = ${rez1} taškai `;
    $("i")[1].innerHTML += `<br>${matchNo} partija. Surinktas taškų skaičius ${jovita}. Bendras rezultatas = ${rez2} taškai `;
    $("i")[4].innerHTML = negaliojanti;

    console.log("================");
    console.log("ben = " + benas);
    console.log("jov = " + jovita);
    console.log("rez 1 (ben) = " + rez1);
    console.log("rez 2 (jov) = " + rez2);
    console.log("t = " + matchNo);
  }
};

// let t = 0
// while(t < 10) {
//   t++
//   console.log(`Kiekis yra ${t}`)
// }
