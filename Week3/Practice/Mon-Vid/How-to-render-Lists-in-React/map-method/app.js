const people = [
  { name: 'Alice', age: 28, position: 'Developer' },
  { name: 'Bob', age: 32, position: 'Designer' },
  { name: 'Charlie', age: 25, position: 'Project Manager' },
  { name: 'Diana', age: 29, position: 'Marketing Specialist' },
  { name: 'Ethan', age: 35, position: 'Engineer' }
];

console.log(people.map((person) => {
    return person.age
}));

const newPeople = people.map((item) => {
    return {
        firstName:item.name.toUpperCase(),
        oldAge: item.age + 20,
    }
})

console.log(newPeople)

const names = people.map((person) => `<h2>${person.name}</h2>` )
const result = document.querySelector('#result');

result.innerHTML = names.join('');