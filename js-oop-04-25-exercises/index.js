import readline from "readline";
import process from "process";
import chalk from "chalk";

// duomenu priemimo ir grazinimo konsoleje interface konfiguracija
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// for (let i = 0; i < 12; i++) {
//     i >= 6 ?
//     console.log(chalk.yellow('************************************************************')) :
//     console.log(chalk.blue('************************************************************'))
// }

let user = { user: "username", userPw: "pw" };

rl.question("Enter username: ", function (username) {
  rl.input.on("keypress", function (c, k) {
    var len = rl.line.length;
    readline.moveCursor(rl.output, -len, 0);
    readline.clearLine(rl.output, 1);
    for (var i = 0; i < len; i++) {
      rl.output.write("*");
    }
  });

  rl.question("Enter your password: ", function (pw1) {
    rl.question("Repeat your password: ", function (pw2) {
      pw1 !== pw2
        ? console.log(chalk.bgRed("Passwords didn't match"))
        : rl.question(`Username: ${chalk.green(username)}`, function (
            username    // cia problema, nes username vedant met zvaigzdes lyg tai butu pw
          ) {
            rl.question("Password: ", function (pw1) {
              pw1 === pw2
                ? console.log(chalk.bgGreen("Logged in succesfully"))
                : console.log(chalk.bgRed("Password incorrect"));

              rl.close();
            });
          });
    });
  });
});
