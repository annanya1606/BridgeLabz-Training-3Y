// for(let i=1; i<=10;i++){
//     console.log("GLA");
// }

// for(let i=5; i>=1;i--){
//     console.log(i);
// }

// let i=5;
// while(i>=1){
//     console.log("GLA");
//     i--;
// }

// let i=5;
// do{
//     console.log(i);
//     i--;
// }
// while(i>=1);

//for-in loop
// const students={
//     101:"Rahul",
//     102:"Rohit",
//     103:"anu",
//     104:"neha",
//     105:"Mohit"
// };

// //for-in:Object ki key access krne 
// console.log("Student Roll Number");

// for(let rollno in students){
//     console.log(rollno);
// }
// //object ki keys or values dono k liye
// for(let rollno in students){
//     console.log(rollno+ ":"+ students[rollno]);
// }

//for-of
// const students=["rah", "pri", "arru", "mhn"];
// for(let stud in students){
//     console.log(students);
// }
// myname("Rahul");
// function myname(finalname){
//     console.log(finalname);
// }\

const student1 = new student("alice",22);
class student{
    constructor(name,age){
        this name=name;
        this age=age;
    }
}