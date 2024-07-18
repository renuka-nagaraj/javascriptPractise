//core syntax
var nameU='Renuka'
var hobbie='playing'

function summary(userName,hobbie){
   return('my name is '+userName+' and my hobbies are '+ hobbie)
}

// console.log(summary(nameU,hobbie))

//let and const
//arrow function
// main use of arrow function is to utilise the this key word
const addOne=(a)=>a+1
// console.log(addOne(1))

//Objects and properties

const person ={
    name:'tharun',
    age:90,
    greet(){    ///not able to use arrow function 
        console.log('hi i am '+ this.name)
    }
}
// person.greet()

//Array array methods
//spread , rest
const hobbies =['cooking','trekking']
const newVal = hobbies.slice() //copies the value

const otherWay = [...hobbies] //spread operator
// console.log(newVal , otherWay)

//rest operator
const toArray = (...args)=>{
    return args
}
// console.log(toArray(1,2,3,4))


//destructuring

const person1 ={
    name:'tharun',
    age:90,
    greet(){    ///not able to use arrow function 
        console.log('hi i am '+ this.name) 
    }
}

let obj=({name,greet})=>{
    console.log(name , greet) //need to check
}
obj(person1)


///async ,promise
//template literals
