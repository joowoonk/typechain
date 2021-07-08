"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
console.log(sayHi(person));
//# sourceMappingURL=index.js.map