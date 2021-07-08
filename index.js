"use strict";
// interface Human{
//     name:string;
//     age:number;
//     gender: string;
// }
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const lynn = new Human("Lynn", 18, "female");
const person = {
    name: "John",
    age: 28,
    gender: "male"
};
const sayHi = (person) => {
    return (`hello ${person.name}, you are ${person.age}, you are a ${person.gender}`);
};
// const sayHi = (name:string, age:number, gender:string): string =>{
//     return(`hello ${person.name}, you are ${person.age}, you are a ${person.gender}`)
// }
console.log(sayHi(lynn));
//# sourceMappingURL=index.js.map