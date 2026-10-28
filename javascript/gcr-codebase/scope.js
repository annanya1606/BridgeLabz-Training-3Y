//block 
// if(true){
//     let a=10;
//     const b=20;
//     var c=30;
//     console.log(a);
// }


//global
// let a=200;
// var c=300;
// if(true){
//     let a=10;
//     const b=20;
//     var c=30;
//     console.log("Inner",a);
// }console.log(a);


//function scope
// function showAge(){
//     let age=25;
//     console.log(age);
// }
// showAge();

//Lexical Scope:- the scope of variable is determined where it is written in the code.
//inner scope --> parent scope --> global socope
// let a=10;
// function outer(){
//     let b=20;
//     function inner(){
//         console.log(a);
//         console.log(b);
//     }
//     inner();
// }
// outer();
