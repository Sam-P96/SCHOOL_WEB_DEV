/* // The data model for pet is as follows
{
    "name": "Buddy",
    "species": "Dog",
    "age": 1,
    "color": "Brown",
    "weight": 2
}
*/

let petArray = [];
let nextID = 1;

function getAll() {
    // Returns all pets in the petArray (read the pet)
    return petArray;
}


function addOne(name, species, age, color, weight) {
    const newPet = {
        id: nextID++,
        name: name,
        species: species,
        age: age,
        color: color,
        weight: weight,
    };
    petArray.push(newPet);
    return newPet;
}

console.log("add one called: ", addOne("Buddy", "Dog", 1, "Brown", 2));
console.log("add one called: ", addOne("Buddwy", "Dog", 1, "Green", 2));
console.log()
console.log("get all called: ",getAll(petArray));