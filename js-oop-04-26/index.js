import fs from 'fs/promises'


console.log('Test test')

test()

function test(){
    console.log('teeessstttt')
}



const fileHandle = await fs.open('./test.txt', 'r')
const tester = await fileHandle.readFile({encoding: 'utf-8'})


console.log(tester)


// const names = ['John', 'Jane', 'Dick', 'Max', 'Tom', 'Ron', 'Sarah', 'Alex', 'Ann', 'Shawn']

// await fs.writeFile('./data.json', 'utf8')

// let fileNamesObject = JSON.parse(fileNames)
// let winner = random(0,9)

// if (fileNamesObject.hasOwnProperty('winners') && fileNamesObject.winners.hasOwnProperty(winner)){
//     console.log(fileNamesObject.winners[winner])
// }if (fileNamesObject.winners.)