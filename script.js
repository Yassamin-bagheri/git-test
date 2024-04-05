const students = [
    {
        fName: "mehrad",
        lName: "kahbazi",
        age: 31,
        scores: [10, 9, 19],
    },

    {
        fName: "ali",
        lName: "ahmadi",
        age: 31,
        scores: [10, 10, 19],
    },

    {
        fName: "soheil",
        lName: "koosha",
        age: 31,
        scores: [12, 8, 19],
    },
];
let totalSum = 0;
for (let student of students) {
    let sum = 0;
    for (let score of student.scores) {
        sum += score;
    }
    console.log(student.fName, student.lName, ":", sum / student.scores.length);
    totalSum += sum / student.scores.length;
}
console.log(totalSum / students.length);


// mehrad kahbazi