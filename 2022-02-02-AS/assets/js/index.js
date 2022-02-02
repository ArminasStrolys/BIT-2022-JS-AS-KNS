const p0 = document.querySelectorAll.bind(document);

function randomizer(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  
}
function uzd1(){
  let x
  let y0 = 0
  let z1 = 0
  let c2 = 0
  
x = document.querySelectorAll('span')[0].innerHTML = randomizer(0, 3)
if (x == 0) {
  y0 += 1
} else if (x == 1){
  z1 += 1
} else {
  c2 +=1
}

x = p0('span')[1].innerHTML = randomizer(0, 3)
if (x == 0) {
  y0 += 1
} else if (x == 1){
  z1 += 1
} else {
  c2 +=1
}

x = p0('span')[2].innerHTML = randomizer(0, 3)
if (x == 0) {
  y0 += 1
} else if (x == 1){
  z1 += 1
} else {
  c2 +=1
}

x = p0('span')[3].innerHTML = randomizer(0, 3)
if (x == 0) {
  y0 += 1
} else if (x == 1){
  z1 += 1
} else {
  c2 +=1
}

  p0('span')[4].innerHTML = y0
  p0('span')[5].innerHTML = z1
  p0('span')[6].innerHTML = c2
}

// ----------------------------------------------------

function uzd2(){
let m
m = p0('span')[7].innerHTML = randomizer(1, 7)
p0('i')[m].innerHTML = `ELEMENTAS YRA ČIA - H${m}`
setTimeout(function() {
  location.reload();
}, 1000);
console.log(m)
console.log(p0(`.h${m}`).innerHTML = 'Hello')
}