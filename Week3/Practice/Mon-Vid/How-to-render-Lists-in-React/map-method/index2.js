const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const studentsUpper = students.map(upperCase);
const studentsLower = students.map(lowerCase);

console.log(studentsUpper)

function upperCase(element){
    return element.toUpperCase();
}

console.log(studentsLower)

function lowerCase(element){
    return element.toLowerCase();
}