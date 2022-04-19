class User{
    constructor(name, email, work){
        this.name = name;
        this.email = email;
        this.work = work;
    }
    print(){
        console.log(`Me - ${this.name}. I work ${this.work}. Contacts - ${this.email}`)
    }
    nameChange(name){
        this.name = name
    }
}

export default User



//     setAge:function(age){ //good practice
//         this.age=age
//     }
// }

// console.log(user.name)
// user.age = 55; //bad practice
// user.setAge(44) //good practice
// user.greeting()