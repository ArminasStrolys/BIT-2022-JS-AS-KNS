import User from './src/modules/user.js'
import Student from './src/modules/student.js'
import Transport from './src/modules/transport.js'
// console.log('testing')

// let user = {
//     name:['Vardenis', 'Pavardenis'],
//     age:82,
//     gender:'transgender',
//     interests:['baseball', 'running', 'classical music'],
//     greeting:function(){
//         console.log(`Hi, I'm ${this.name[0]}`)
//     },
//     setAge:function(age){ //good practice
//         this.age=age
//     }
// }

// console.log(user.name)
// user.age = 55; //bad practice
// user.setAge(44) //good practice
// user.greeting()

// CONSTRUCTOR-------------------------------------------------------------------

// function CreateUser(name, email, active){ //constructor starts with CAPITAL letter
//         this.name = name
//         this.email = email
//         this.active = false
// };

// CreateUser.prototype.showName = function(){
//     alert(`My name is ${this.name}`)
// }

// let userOne = new CreateUser('Mantelis', 'manTEL999@gmail.com')
// userOne.showName()

// printInfo();{
//     console.log(`Hi, my name is ${this.name}. My e-mail is ${this.email}`)
// }

// console.log(userOne)


// CLASSES (NEW) ------------------------------------------------------------------

// let userTwo = new User('Ben','fakemail@email.com','Tesla')
// let newStudent = new Student('John', 'FakeMAIL', 'Vydunas vid.', 'Mathematics')

// userTwo.nameChange('Henry')
// userTwo.print()

// // console.log(Transport)

// console.log(newStudent.getInfo())

// newStudent.print()

// Exercise ----------------------------------------------------------------------

let newCar = new Transport('A6', 'audi')

newCar.setPrice('2000$')

console.log(`Manufacturer: ${newCar.manufacturer}, model: ${newCar.model}. Price: ${newCar.price}`)



// console.log(newCar.transportInfo())