// let student1 = {
//     name : "Ale",
//     age : 28,
//     programmingLanguage = ["PHP", "C++", "C#", "Golang","Javascript", "Java"]
// }

// let student2 = {
//     name : "Yoga",
//     age : 55,
//     programmingLanguage = ["Love", "Javascript"]
// }

// let student3 = {
//     name : "fadhlan",
//     age : 8,
//     programmingLanguage = ["India", "Javascript"]
// }

// construction function
function studentFSW (name, age, programmingLanguage) {
    this.name = name;
    this.age = age;
    this.programmingLanguage = programmingLanguage
}

// inisialisasi Object
var student1 = new studentFSW('Hafizh', 20, ["Java"])
var student2 = new studentFSW('Adrian', 40, ["Javascript"])
var student3 = new studentFSW('Diki', 18, ["C++"])

console.log(student2)