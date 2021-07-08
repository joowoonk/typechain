interface Human{
    name:string;
    age:number;
    gender: string;
}

const person = {
    name:"John",
    age: 28,
    gender: "male"
}

const sayHi = (person: Human): string =>{
    return(`hello ${person.name}, you are ${person.age}, you are a ${person.gender}`)
}

// const sayHi = (name:string, age:number, gender:string): string =>{
//     return(`hello ${person.name}, you are ${person.age}, you are a ${person.gender}`)
// }

console.log(sayHi(person))

// console.log(sayHi("John",28,"male"))

export {};