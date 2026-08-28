const people = [
    { name: "Samna", age: 20, position: "Developer" },
    { name: "John", age: 20, position: "Designer" },
    { name: "Jane", age: 30, position: "Manager" },
    { name: "Bob", age: 35, position: "CEO" },
];

// filter 

const youngPeople = people.filter((person)=>{
    return person.age <= 25;
});
// console.log(youngPeople);

// no match 

const noMatchPeople = people.filter((person)=>{
    return person.age === 26;
});
// console.log(noMatchPeople);

// find

const findPerson = people.find((person)=>{
    return person.name === "Samna";
});
// console.log(findPerson);

// FIRST match

const firstMatchPerson = people.find((person)=>{
    return person.age < 35;
});
console.log(firstMatchPerson);