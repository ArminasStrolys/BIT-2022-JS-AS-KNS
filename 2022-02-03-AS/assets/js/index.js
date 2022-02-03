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
