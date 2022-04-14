console.log('testing')

let user = {
    name:['Vardenis', 'Pavardenis'],
    age:82,
    gender:'transgender',
    interests:['baseball', 'running', 'classical music'],
    greeting:function(){
        console.log(`Hi, I'm ${this.name[0]}`)
    },
    setAge:function(age){ //good practice
        this.age=age
    }
}

console.log(user.name)
user.age = 55; //bad practice
user.setAge(44) //good practice
user.greeting()

// CONSTRUCTOR-------------------------------------------------------------------

function CreateUser(name, email, active){ //constructor starts with CAPITAL letter
        this.name = name
        this.email = email
        this.active = false
};



let userOne = new CreateUser('Mantelis', 'manTEL999@gmail.com')

printInfo();{
    console.log(`Hi, my name is ${this.name}. My e-mail is ${this.email}`)
}

console.log(userOne)