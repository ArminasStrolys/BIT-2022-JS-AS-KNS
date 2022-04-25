import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Enter your name: ', name => {
    console.log('Your name is ' + name)
    rl.close()
})



// console.log('test')

// let digit = 3
// for (let i = 1; i <= 10; i++){
//     console.log(digit + ' x ' + i + ' = ' + (digit * i) )
// }