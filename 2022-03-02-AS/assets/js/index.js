const $ = document.querySelectorAll.bind(document)
const $c = document.querySelectorAll('h2')[0]
const classes = $c.classList
function rndNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// ------------------------- 1 -------------------------
/*
Atskiri elementai:

a) Tamsiai žaliai nuspalvinti h1 tagą;
b) Tagui i pridėti klasę small;
https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
c) Iš tago h1 pašalinti klasę main;
d) Tik tam h2 tagui, kuris iškart eina po h1 tago, pridėti klasę first ir pašalinti klasę main;
https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/remove
e) Pirmam span tagui, kuris yra h2 viduje sumažinti fonto dydį iki 10px ir nudažyti pilkai
*/

// $('h1')[0].style.color = 'green'

// $('i')[0].classList.add('iclass')

// $('h1')[0].classList.remove('main')

// document.querySelector('h1 + h2').classList.add('first') //teisingas variantas 1.d

// const addRemove = () =>{
//   if (classes.contains('main')){
// classes.add('first')
// classes.remove('main')
//   }
// }
// addRemove()

// const change = () =>{
//   let x = document.querySelector('h2 > span:first-of-type').style;
//   x.color = 'white';
//   x.fontSize = '10px';
//   }
// change()

// ------------------------- 2 -------------------------
/*

*/

// $('.h2counter')[0].innerHTML = document.getElementsByTagName('h2').length

// console.log(document.querySelectorAll('h2.first').length);                                             //Teisingas
// console.log(document.querySelectorAll('h2').length - document.querySelectorAll('h2.first').length);    //Teisingas

// let xb = document.getElementsByTagName('h2').length
// let first = 0
// console.log(xb);
// for (let i = 0; i < xb; i++){
//   if ($('h2')[i].classList.contains('first')){
//     first++
//   }
//   $('.h2counter2')[0].innerHTML = first
// }

// document.querySelectorAll('h2').forEach(e => e.style.color = 'blue');


// $('div.prices > h2').forEach(e => e.classList.add('price-tag'));

// document.querySelectorAll('.new').forEach(e => e.style.textDecoration = 'underline' );

// console.log(document.querySelectorAll('ul').length);

// console.log(document.querySelectorAll('ul#zirafos > li:not(.like-button)').length);

// document.querySelectorAll('ul').forEach(e=>{
//   e.style.border = 'solid 2px black'
//   e.style.padding = '15px 50px'
// })

// $('ul > li.new').length

// ------------------------- 3 -------------------------
/*

*/



// ------------------------- 4 -------------------------
/*

*/

