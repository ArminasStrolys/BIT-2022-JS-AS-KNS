const $ = document.querySelectorAll.bind(document);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  
}
function rand1(){
  let x
  let y0 = 0
  let z1 = 0
  let c2 = 0
  

x = $('span')[0].innerHTML = getRandomInt(0, 3)
console.log(x)
if (x == 0) {
  y0 += 1
} else if (x == 1){
  z1 += 1
} else {
  c2 +=1
}

x = $('span')[1].innerHTML = getRandomInt(0, 3)
if (x == 0) {
  y0 += 1
} else if (x == 1){
  z1 += 1
} else {
  c2 +=1
}

x = $('span')[2].innerHTML = getRandomInt(0, 3)
if (x == 0) {
  y0 += 1
} else if (x == 1){
  z1 += 1
} else {
  c2 +=1
}

x = $('span')[3].innerHTML = getRandomInt(0, 3)
if (x == 0) {
  y0 += 1
} else if (x == 1){
  z1 += 1
} else {
  c2 +=1
}

  $('span')[4].innerHTML = y0
  $('span')[5].innerHTML = z1
  $('span')[6].innerHTML = c2
}


