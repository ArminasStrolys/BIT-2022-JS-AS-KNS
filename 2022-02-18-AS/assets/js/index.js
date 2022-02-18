function rndNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//---------------------------------------------------------------------------------------------------------

// let a = [6, 4]
// let b = [8, 2, 5]

// const lygineSuma = (a, b) => {
// let sum = 0
//   if (typeof a == 'number' && typeof b == 'number')  {
//     sum = a + b
//   } if (sum % 2 != 0) {
//   sum = 'Suma nelyginė'
// } if (Array.isArray(a) == true && Array.isArray(b) == true){
//   sum = a.length + b.length
// }
// return sum
// }

// console.log(lygineSuma(a, b));

//---------------------------------------------------------------------------------------------------------

// const pirminisNumeris = (a) => {
//   let x = 0
//   for (let i = 2, s = Math.sqrt(a); i <= s; i++){
//     if (a % i === 0) {
//       x = `${a} nera pirminis`
//     } else  if (a % i !== 0){
//       x = 'Pirminis: ' + a
//     }
//   }
//   return x
// };

// console.log(pirminisNumeris(23));

//---------------------------------------------------------------------------------------------------------

let a = [3, 7, 0, 8, 6, 8, 2, 9, 1, 4]

const telefonoNumeris = (a) => {
  let x = 0
  if (Array.isArray(a) != true || a.length != 10){
    x = 'Ne masyvas'
  } else {
  x = '('+a[0]+a[1]+a[2]+')'+' '+a[3]+a[4]+a[5]+'-'+a[6]+a[7]+a[8]+a[9]
}
  return x
}

console.log(telefonoNumeris(a));