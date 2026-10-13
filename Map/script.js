const students = ["alex","keza","gatesi"];
const studentsUpper = students.map(UpperCase);


console.log(studentsUpper);
function UpperCase(element){
    return element.toUpperCase();
}