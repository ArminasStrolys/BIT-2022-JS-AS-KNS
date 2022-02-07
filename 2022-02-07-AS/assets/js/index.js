function rndNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// -----------------------MONETOS--------------------------------------------

// let x = 0;
// let y = 0;
// // 0 herbas (x), 1 skaicius (y)

// while (true) {
//   let a = rndNum(0, 1);

//   if (a == 0) {
//     x++;
//   } else y++;

//   console.log('y ' + y)
//   console.log('x ' + x)
//   console.log('a ' + a)
//   console.log('------')

//   if (y == 0 && x == 3) {
//     console.log(`Iškrito herbas 3 kartus iš eilės!!!!`);
//     break;
//   }
//   if (x == 3) {
//     console.log(`Iškrito herbas 3 kartus`);
//     break;
//   }
// //   else {
// //     console.log(`Iškrito herbas`);
// //     break;
// //   }
// }

// -----------------------MAZAIS VINIMIS--------------------------------------------

// let vinys = 85;
// let gylis = 0;
// let vinKiekis = 0;
// let ciklas = 0;
// let smugiai = 0;

// while (vinKiekis <= 5) {
//   let mazas = rndNum(5, 20);
//   gylis += mazas;
//     smugiai++
//   if (gylis >= vinys) {
//     ciklas++;
//     // console.log(vinKiekis);
//   }
//   if (ciklas == 1) {
//     gylis = 0;
//     ciklas = 0;
//     vinKiekis++;
//   }
//   if (vinKiekis >= 5) {
//     console.log("------------------------");
//     console.log("mazas smugis " + mazas + "mm");
//     console.log("Vinių jau sukalta = " + vinKiekis);
//     console.log("gylis " + gylis);
//     console.log("Smūgių reikėjo = " + smugiai);
//     break;
//   }
//   console.log("------------------------");
//   console.log("mazas smugis " + mazas + "mm");
//   console.log("Vinių jau sukalta = " + vinKiekis);
//   console.log("gylis " + gylis);
//   console.log("Smūgių reikėjo = " + smugiai);
// }


// -------------------------DIDELIAIS VINIMIS---------------------------------------

let vinys = 85;
let gylis = 0;
let vinKiekis = 0;
let ciklas = 0;
let smugiai = 0;


while (vinKiekis <= 5) {
  let didelis = rndNum(20, 30);
  let tikimybe = rndNum(0, 1)
  if (tikimybe == 1){
    smugiai++
    console.log("****************");
    console.log("Nepataikė į vinį");
    console.log("****************");
      continue
  }
  gylis += didelis;
    smugiai++
  if (gylis >= vinys) {
    ciklas++;

  }
  if (ciklas == 1) {
    gylis = 0;
    ciklas = 0;
    vinKiekis++;
  }
  if (vinKiekis >= 5) {
    console.log("------------------------");
    console.log("Didelis smūgis " + didelis + "mm");
    console.log("Vinių jau sukalta = " + vinKiekis);
    console.log("Gylis " + gylis);
    console.log("Smūgių reikėjo = " + smugiai);
    break;
  }
  console.log("------------------------");
  console.log("Didelis smūgis " + didelis + "mm");
  console.log("Vinių jau sukalta = " + vinKiekis);
  console.log("Gylis " + gylis);
  console.log("Smūgių reikėjo = " + smugiai);
}