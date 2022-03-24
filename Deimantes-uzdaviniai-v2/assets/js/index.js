const $ = document.querySelectorAll.bind(document);

function rndNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Callback function - a function you give to another function, to be run when the other function is finished
//1 užduotis
const task1Text = document.querySelector(".task1");
const task1Btn = document.querySelector(".task1btn");
//Sukurti funkciją pasakykLabas, kuri 3 sekundės po task1btn paspaudimo įdės į task1Text "Labas"

const pasakykLabas = () => {
  task1Btn.addEventListener('click', () => {
    setTimeout(() => {
      task1Text.innerText = 'One hour later...'
    }, 2999)
   })
}

pasakykLabas()

//2 užduotis
const task2Text = document.querySelector(".task2");
const task2Btn = document.querySelector(".task2btn");
const arr = [1, 2, 3, 5, 8, 12];
//sukurti dvi funkcijas. Viena funkcija filterEven, kuri priima skaičių kaip argumentą ir grąžina jeigu jis lyginis.
//Kita funkcija filterArray, kuri priima du argumentus (arr ir fn) ir panaudodama fn išfiltruoja masyvą ir į task2Text įstato išfiltruotas reikšmes.
//nuspaudus task2Btn iškviečiama filterArray funkcija ir į argumentus paduodamas arr masyvas ir filterEven funkcija.

const filterEven = (x) => {
  if (x % 2 === 0){
    return x;
  } else 
    return 'NOT even'
}

const filterArray = (arr, fn) => {
    arr.forEach(e => {
      if (typeof (fn(e)) == 'number'){
        task2Text.innerText += e + ', '
        console.log(e);
      }

    });
}

task2Btn.addEventListener('click', () => {
  filterArray(arr, filterEven)
})

//3 užduotis
const task3Btn = document.querySelector(".task3btn");
//susikurti funkciją checkSubscription, kurios viduje grąžiname promise su state'ais resolve ir reject, kuriame patikrinima jei
// Math.random() > 0.4 tuomet suveikia resolve, jei ne suveikia reject ir sukuria error. Resolve ir error žinutes susikurkite pagal save.
// iškvieičiame fukciją nuspaudus taskBTN3 mygtuką. Console.log'inam žinutę iš resolve arba console.error'inam sucatchintą errror.

task3Btn.addEventListener('click', () => {
  const checkSubscription = new Promise((res, rej) => {
    const hell = rndNum(1, 100)
      if (hell >= 50){
        res(`Skaičius yra ${hell}, didesnis už vidurkį. RESOLVED`)
      } else {
        rej(`Skaičius yra ${hell}, mažesnis už vidurkį. REJECTED`)
      }
  })
  checkSubscription.then(hell => console.log('Ats: ' + hell))
  checkSubscription.catch(err => console.log('Ats: ' + err))
})

//4 užduotis
//Parsifetchinti duomenis iš https://in3.dev/knygos/ ir https://in3.dev/knygos/types/ atvaizduoti section html tag'e kiekvieną knygą, su jos pavadinimu, autoriu ir img.
//Prie kiekvienos knygos tipo turėtų būti atitinkamas kategorijos pavadinimas.
//Panaudoti map metodą.
//Padaryti filtrą kur galima būtų išrušiuoti knygas pagal kategoriją.

const sec = document.querySelector("section");
const max = document.querySelector("main ul");
const divsas = document.querySelectorAll("div")[1];

const zanr = (z) => {
  fetch('https://in3.dev/knygos/types/')
  .then(response => response.json())
  .then(data => console.log(data[z].title))
}
console.log(zanr(4));

  fetch('https://in3.dev/knygos/')
  .then(response => response.json())
  .then(data => data.map( (knyg) => {

    max.innerHTML += `<li>${knyg.title}</li>`
    max.innerHTML += `<span style="display: block;"><b>Autorius:</b> ${knyg.author}</span>`
    max.innerHTML += `<span style="display: block;"><b>Žanras:</b> ${knyg.id}</span>`
    max.innerHTML += `<img style="position: relative; left: 0;" src="${knyg.img}">`
  })
  )