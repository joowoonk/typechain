// interface Human{
//     name:string;
//     age:number;
//     gender: string;
// }

class Human {
    public name:string;
    public age: number;
    public gender: string;
    constructor(name: string, age:number, gender:string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const lynn = new Human("Lynn", 18, "female")

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

console.log(sayHi(lynn))

// console.log(sayHi("John",28,"male"))

export {};