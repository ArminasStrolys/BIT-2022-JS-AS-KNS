import readline from "readline";
import process from "process";
import chalk from "chalk";

// duomenu priemimo ir grazinimo konsoleje interface konfiguracija
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// vardo perdavimas ir grazinimas
// rl.question('Enter your name: ', name => {
//     console.log('Your name is ' + name)
//     rl.close()
// })

// rl.question("Enter digit from 1 to 10: ", (digit) => {
//   if (digit > 0 && digit <= 10) {
//     for (let i = 1; i <= 10; i++) {
//       console.log(digit + " x " + i + " = " + digit * i);
//     }
//   } else {
//     console.log("Bad");
//   }
//   rl.close();
// });

// rl.question('Enter your name: ', name => {
//     rl.question('Enter your surname: ', surname =>{
//         console.log('Your full name is: \n' + name + ' ' + surname)
//         rl.close()
//     })

// })

rl.question("Enter num 1 (from): ", (a) => {
  rl.question("Enter num 2 (to): ", (b) => {
    console.log(chalk.bgRed.bold("kg. \t pound \t stone"));
    for (a; a <= b; a++) {
      console.log(
        `${chalk.red(a)} \t ${chalk.green((a * 2.20462).toFixed(2))} \t ${chalk.blue((a * 0.157473).toFixed(
          2
        ))}`
      );
    }
    rl.close();
  });
});

// for (let i = 1; i <= 10; i++){
//     console.log(digit + ' x ' + i + ' = ' + (digit * i) )
// }
