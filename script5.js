const staff = [
    {
        fullName : "sample1",
        salary : 100000,
    },

    {
        fullName : "sample2",
        salary : 40000,
    },

    {
        fullName : "sample3",
        salary : 60000,
    },
    
    {
        fullName : "sample4",
        salary : 100000,
    },

    {
        fullName : "sample5",
        salary : 70000,
    },

    {
        fullName : "sample6",
        salary : 20000,
    },
];

for (let person of staff){
    if(person.salary < 50000){
        console.log("moaf");
    } else if(person.salary > 50000 && person.salary < 100000){
        console.log(50000 + (person.salary * 10 / 100));
    } else {
        console.log(100000 + (person.salary * 15 / 100));
    }
}