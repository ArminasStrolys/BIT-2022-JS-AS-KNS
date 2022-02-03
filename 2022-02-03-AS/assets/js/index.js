function rndNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const $ = document.querySelectorAll.bind(document)
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
let i = 1
let x = ''

while (i <= 300) {
  x += '*'
   if (i % 25 == 0){
   x += '<br>'
  }
  i++
  $('span')[0].innerHTML = x
console.log(i)
}
// -----------------------------------ANTRA UŽDUOTIS-----------------------------------

let kiekis = 1
let numeris
let container = ''
let virs150 = 0
let virs275 = 0
let color

while (kiekis < 300) {
  numeris = rndNum(0, 300)
  container += numeris  + ' '
if (kiekis % 25 == 0){
  container += numeris  + '<br>'
}
if (numeris >= 150){
  virs150+=1
}
if (numeris >= 275){
  container += `<span style="color:red;"> ${numeris} </span>`
}
  $('span')[1].innerHTML = container
  $('p')[0].innerHTML = virs150
  kiekis++
  // console.log(`Kiekis = ${kiekis} ir numeris būtų = ${numeris}`)
}
// -----------------------------------TREČIA UŽDUOTIS-----------------------------------

