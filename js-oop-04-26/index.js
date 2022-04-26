import fs from 'fs/promises'


console.log('Test test')

test()

function test(){
    console.log('teeessstttt')
}



const fileHandle = await fs.open('./test.txt', 'r')
const tester = await fileHandle.readFile({encoding: 'utf-8'})


console.log(tester)