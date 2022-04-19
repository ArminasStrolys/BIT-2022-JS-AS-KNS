import User from './modules/User'
console.log('testing')

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


// CLASSES (NEW)------------------------------------------------------------------

// class User{
//     constructor(name, email, work){
//         this.name = name;
//         this.email = email;
//         this.work = work;
//     }
//     print(){
//         console.log(`Me - ${this.name}. I work ${this.work}. Contacts - ${this.work}`)
//     }
// }

let userTwo = new User('Ben','fakemail@email.com','Tesla')

userTwo.print()
console.log('asd')




//-----------------
import ani from './modules/animals'


const animals = new ani('Bald','Eagle') //instance

console.log(animals.returnLine())
