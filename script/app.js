//JSON - JavaScript Object Notation

const person ={
    name: 'John',
    age: 30,
    city: 'New York',
    friends: ['Jane', 'Mark', 'Sara']
}

const newPerson = JSON.stringify(person);
// console.log(newPerson);
const newPerson2 = JSON.parse(newPerson);
console.log(newPerson2);