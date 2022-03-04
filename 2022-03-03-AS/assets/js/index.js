const $ = document.querySelectorAll.bind(document)
const $2 = document.querySelector.bind(document)



// function rndNum(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

/*



// ------------------------- 1 -------------------------
/*
1) Atskiri elementai:

a) Tamsiai žaliai nuspalvinti h1 tagą;
b) Tagui i pridėti klasę small;
https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
c) Iš tago h1 pašalinti klasę main;
d) Tik tam h2 tagui, kuris iškart eina po h1 tago, pridėti klasę first ir pašalinti klasę main;
https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/remove
e) Pirmam span tagui, kuris yra h2 viduje sumažinti fonto dydį iki 10px ir nudažyti pilkai
*/

$('h1')[0].style.color = 'darkgreen'

$('i')[0].classList.add('small')

$('h1')[0].classList.remove('main')

$2('h1 + h2').classList.add('first')
$2('h1 + h2').classList.remove('main')

$2('h2 > span').style.color = 'gray'
$2('h2 > span').style.fontSize = '10px'

// ------------------------- 2 -------------------------
/*
2) Elemetų grupės (nodeList) skaičiavimus išvest į consolę

a) Suskaičiuoti kiek yra h2 tagų;
b) Suskaičiuoti kiek yra h2 tagų, kurie neturi klasės first
c) Visus h2 tagus nuspalvinti šviesiai mėlynai
d) Tagų, kurie yra div su klase prices, viduje esantiems h2 tagams pridėti klasę price-tag;
e) Pabraukti visus tagus su klase new;
f) Suskaičiuoti kiek yra gyvūnų kategorijų ir žirafų (jos yra ul tagai);
g) Tagus ul apibraukite rėmeliais ir uždėkite 15px paddingą viršuje ir apačioje ir 50px paddingą kairėje ir dešinėje;
h) Suskaičiuoti kiek yra naujų gyvūnų (su klase new);
i) Suskaičiuoti atskirai kiek yra naujų gyvūnų kiekvienoje kategorijoje;
*/
console.log(x = $('h2').length);

console.log(x - $('h2.first').length);

$('h2').forEach(e => e.style.color = 'lightBlue');

$2('div.prices').classList.add('price-tag')

$('.new').forEach(e => e.style.textDecoration = 'underline')

console.log('gyvunu kategorijos: ' + $('ul').length);

$('ul').forEach( (e) => {
e.style.border = 'solid 1px'
e.style.padding = '15px 50px'
})

console.log('Nauju gyvunu: ' + $('ul > .new').length);



let gyv1 = 0
let gyv2 = 0
let uno = $('ul > li').forEach(e => {
    if (e.classList.contains('new')){
       gyv1 = e.parentElement.id
       gyv2 = e.textContent
    }
    console.log('Kategorija: ' + gyv1 + '| gyvunas: ' + gyv2);
})


// ------------------------- 3 -------------------------
/*
3) Elementų events

a) Padaryti tai ką liepia mygtukai Header1 sekcijoje;
b) Padaryti, kad paspaudus ant i tago jis pakeistų fonto svorį į bold;
c) Padaryti, kad paspaudus ant tago su klase prices, backgroundas pasikeistų į pilką, o paspaudus dar kartą vėl grįžtu į baltą spalvą;
d) Padaryti, kad paspaudus ant tago su id contacts, tam tagui būtų pridėta css savybė color = orange;
e) Padaryti taip, kad paspaudus ant padidinti, esančio tage su id contacts, tagui su id contacts būtų pridėta css savybė fontSize = 20px;
f) Padaryti taip, kad paspaudus ant X, esančio tage su id contacts, pridėtos tage su id contacts savybės būtų panaikintos https://stackoverflow.com/questions/18691655/remove-style-on-element
g) Padaryti tai ką liepia mygtukai Header2 sekcijoje;
*/

$2('#h1-color').addEventListener('click', () => {
    $2('h1').style.color = 'lightGreen'
})
$2('#h1-font').addEventListener('click', () => {
    $2('h1').style.fontSize = '10px'
})

$2('i').addEventListener('click', () => {
    $2('i').style.fontWeight = '700'
})

// $2('.prices').addEventListener('click', () => { //Neveikiantis
//     let col = $2('.prices').style.backgroundColor = 'gray'
//     // col = 'red'
// console.log(col);
    // $2('.prices').style.backgroundColor = 'blue'
    // if ($2('.prices').style.backgroundColor == 'blue'){
    //     $2('.prices').style.backgroundColor = 'gray'
    // } else {
    //     $2('.prices').style.backgroundColor = 'white'
    // }
// })

document.querySelectorAll('.prices')[0].addEventListener('click', () => {
    let elem =document.querySelectorAll('.prices')[0].style.backgroundColor;
    if(elem == 'white' || elem == undefined || elem == '' || elem == null){
        document.querySelectorAll('.prices')[0].style.backgroundColor = 'grey'
}else {
    document.querySelectorAll('.prices')[0].style.backgroundColor = 'white'
}
});


$2('#contacts').addEventListener('click', () => {
    $2('#contacts').style.color = 'orange'
})

$2('#contacts > u').addEventListener('click', () => {
    $2('#contacts').style.fontSize = '20px'
})

$2('#contacts > b').addEventListener('click', (ev) => {
    $2('#contacts').style.fontSize = null,
    $2('#contacts').style.removeProperty("color")
    ev.stopPropagation();
})

$2('#h1-color-back').addEventListener('click', () => {
    $2('h1').style.removeProperty("color")
})
$2('#h1-font-back').addEventListener('click', () => {
    $2('h1').style.removeProperty("font")
})

// remove = (ev) => {
//     $('#contacts')[0].style.fontSize = '22px'
//     $('#contacts')[0].style.color = 'black'
//     ev.stopPropagation();
// }

// $('#contacts > b')[0].addEventListener('click', remove)

// ------------------------- 4 -------------------------
/*
4) Elementų grupių events

a) Padaryti, kad dukartus paspaudus ant naujų gyvūnų jie nusispalvintu raudonai https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event
b) Padaryti, kad paspaudus ant gyvūno jis būtų atvaizduojamas 130% didesniu fonto dydžiu. “PATINKA” tas neturi galioti.
c) Padaryti, kad paspaudus ant “PATINKA”, atitinkamai (tėvinei) sekcijai būtų priskirta klasė like;
*/

$('.new').forEach(e => {
    e.addEventListener('dblclick', () => {
        $2('li.new:hover').style.color = 'red'
    })
})

// function paintRed() {    //Antras variantas
//     document.querySelectorAll('li.new').forEach(e=>e.style.color ='red')
// }
// document.querySelectorAll('li.new').forEach(e=>e.addEventListener('dblclick', paintRed))


$('ul').forEach(e => {
    e.addEventListener('click', () => {
        $2('li:hover:not(.like-button)').style.fontSize = '130%'
    })
})

// function changeFont() {  //Antras variantas
//     document.querySelectorAll('li:not(.like-button').forEach(e=>e.style.fontSize = '130%')
// }
// document.querySelectorAll('li:not(.like-button)').forEach(e=>e.addEventListener('click', changeFont))

$('.like-button').forEach(e => {
    e.addEventListener('click', () => $2('.like-button:hover').closest('ul').classList.add('like'))
})

// document.querySelectorAll('.animals > ul').forEach(e=>{      //Antras variantas
//     e.querySelector('.like-button').addEventListener('click', () =>{
//         e.classList.add('like')
//     })
// })

// ------------------------- 5 -------------------------
/*
5) Dinaminis elementų kūrimas (su createElement)

a) Dinamiškai su JS pridėti naują kainą “Senjorai tik: 1.99 eur”;
b) Dinamiškai su JS Pridėti naują kainą “Senjorų grupė iki 10: tik 5.99 eur” Padaryti, kad pridėtas elementas turėtų klasę new ir ant jo paklikinus jis pasidarytų žalias;
c) Dinamiškai su JS kiekvienoje gyvūnų kategorijoje po “PATINKA” pridėkite dar vieną li elementą “NEPATINKA”, kurį paspaudus atitinkamoje sekcijoje būtų nuimta klasė like
d) Dinamiškai su JS sukurkite naują mygtukų grupę HEADER 3 naudojant analogišką html tagų struktūrą kaip ir HEADER 1 ir HEADER 2. Pirmas mygtukas vadintųsi, “Pabraukti H1 tagą”, o antras “Nepabraukti H1 tagą”. Mygtukai turi daryti tai kas ant jų parašyta
*/

document.body.onload = m;
let m = document.createElement('h2')
let n = document.createTextNode('Senjorai tik: 1.99 eur');
m.appendChild(n)
document.body.insertBefore(n, prices)

$2('.prices::before').innerHTML = document.createElement('h2').textContent = 'Senjorai tik: 1.99 eur'
$2('.prices').innerHTML = m

//5 uzdavinys
//a Dinamiškai su JS pridėti naują kainą “Senjorai tik: 1.99 eur”;

let senjorai = document.createElement('h2');

senjorai.innerText = 'Senjorai tik 1.99eur';

document.querySelector('.prices').appendChild(senjorai);

//b Dinamiškai su JS Pridėti naują kainą “Senjorų grupė iki 10: tik 5.99 eur” Padaryti, kad pridėtas elementas turėtų klasę new ir ant jo paklikinus jis pasidarytų žalias;

let akcija =document.createElement('h2')
akcija.innerText = "Senjorų grupė iki 10:tik 5.99 eur"
akcija.classList.add('new');
akcija.addEventListener('click', () =>{
akcija.style.backgroundColor = 'green'})
document.querySelector('.prices').appendChild(akcija);

//c Dinamiškai su JS kiekvienoje gyvūnų kategorijoje po “PATINKA” pridėkite dar vieną li elementą “NEPATINKA”, kurį paspaudus atitinkamoje sekcijoje būtų nuimta klasė like

const allUlDom = document.querySelectorAll('.animals > ul');
    allUlDom.forEach(e => {
        const likeBtnDom = e.querySelector('.like-button');
        const li = document.createElement('li');
        const txt = document.createTextNode('NEPATINKA');
        li.appendChild(txt);
        li.addEventListener('click', () =>  e.classList.remove('like'));
        likeBtnDom.after(li);
    });

//d Dinamiškai su JS sukurkite naują mygtukų grupę HEADER 3 naudojant analogišką html tagų struktūrą kaip ir HEADER 1 ir HEADER 2.
//Pirmas mygtukas vadintųsi, “Pabraukti H1 tagą”, o antras “Nepabraukti H1 tagą”. Mygtukai turi daryti tai kas ant jų parašyta

const fieldset = document.createElement('fieldset');
const legend = document.createElement('legend');
const btn1 = document.createElement('button');
const btn2 = document.createElement('button');
const btnText1 = document.createTextNode('Pabraukti H1 tagą');
const btnText2 = document.createTextNode('Nepabraukti H1 tagą');
const legendText = document.createTextNode('HEADER 3');
legend.appendChild(legendText);
fieldset.appendChild(btn1);
fieldset.appendChild(btn2);
btn1.appendChild(btnText1);
btn2.appendChild(btnText2);
fieldset.appendChild(legend);
document.getElementById('contacts').before(fieldset);

btn1.addEventListener('click', () => document.querySelector('h1').style.textDecoration = 'underline');
btn2.addEventListener('click', () => document.querySelector('h1').style.textDecoration = 'none');