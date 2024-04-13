// const students = [
//     {
//         fName: "mehrad",
//         lName: "kahbazi",
//         age: 31,
//         scores: [10, 9, 19],
//     },

//     {
//         fName: "ali",
//         lName: "ahmadi",
//         age: 31,
//         scores: [10, 10, 19],
//     },

//     {
//         fName: "soheil",
//         lName: "koosha",
//         age: 31,
//         scores: [12, 8, 19],
//     },
// ];
// let totalSum = 0;
// for (let student of students) {
//     let sum = 0;
//     for (let score of student.scores) {
//         sum += score;
//     }
//     console.log(student.fName, student.lName, ":", sum / student.scores.length);
//     totalSum += sum / student.scores.length;
// }
// console.log(totalSum / students.length);

//changes here
// let a = 5;
// let b = 2;
// let c = 3;
// let d = 4;

// if (a > c + b) {
//     console.log(a * c);
// } else {
//     console.log(b * d);
// }

// const students = [
//     {
//         fName : "alireza",
//         lName : "ahmadi",
//         scores : [12, 15, 10],
//     }, 

//     {
//         fName : "negar",
//         lName : "taheri",
//         scores : [10, 13, 18],
//     },
// ];

// let total = 0;
// for (let student of students) {
//     let sum = 0;
//     for (let score of student.scores){
//         sum += score;
//     }
//     total += sum;
// }
// console.log(total);

// const fruits = ["apple", "orange", "banana", "cucumber"];
// let newFruits= fruits.join()
// console.log(newFruits);

// const myArray = [1, 2, 5, 8, 9];
// myArray [3] = 10;
// console.log(myArray);

// const fName = "yasi";
// const lName = "bagheri";
// const fullName = fName +" "+lName;
// console.log(fullName);

// const fruits = ["apple", "orange", "mango"];
// const newfruit = fruits.toSpliced(2, 1, "lemon");
// console.log(newfruit);


// const staff = [
//     {
//         fullName : "sample1",
//         salary : 100000,
//     },

//     {
//         fullName : "sample2",
//         salary : 40000,
//     },

//     {
//         fullName : "sample3",
//         salary : 60000,
//     },
    
//     {
//         fullName : "sample4",
//         salary : 100000,
//     },

//     {
//         fullName : "sample5",
//         salary : 70000,
//     },

//     {
//         fullName : "sample6",
//         salary : 20000,
//     },
// ];

// for (let person of staff){
//     if(person.salary < 50000){
//         console.log("moaf");
//     } else if(person.salary > 50000 && person.salary < 100000){
//         console.log(50000 + (person.salary * 10 / 100));
//     } else {
//         console.log(100000 + (person.salary * 15 / 100));
//     }
// }



// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     let result = 9 * i;
//     console.log(result);
//     sum += result;
// }
// console.log(sum);

for (let i = 10; i < 100; i++) {
    let reverse = parseInt(i.toString().split('').reverse().join(''));
    if (i === reverse) {
        console.log(i);
    }
}
