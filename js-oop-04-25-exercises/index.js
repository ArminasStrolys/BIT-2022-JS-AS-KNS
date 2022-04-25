import chalk from "chalk";

for (let i = 0; i < 12; i++) {
    i >= 6 ? 
    console.log(chalk.yellow('************************************************************')) :
    console.log(chalk.blue('************************************************************'))
}