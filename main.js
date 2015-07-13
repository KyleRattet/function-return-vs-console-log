//console.log("test");

//return only(should show nothing in the log when calling the function)

function firstName(first) {
  return ("Hi " + first);
}

firstName("bob");

//console.log only (should show "Hi Builder" when the function is called)
function lastName (last) {
  console.log("Hi " + last);
}

lastName("Builder");

//console.log and return (should show "the" when the function is called)

function middleName(mid) {
  return (mid);
}

var result = middleName ("the");
console.log(result);




//
// if (name === defined)  {
//   console.log("defined");
//   }
// else {
//   console.log("undefined");
// }

// call function within if statement, see if defined or undefined
//console.log experiment
//fucntions (can use either one)

//expression function  syntax
// var greet = function (){
//   console.log("hello class");
// };
//
// greet();
//
// //declariation function syntax
// function greetDeclarationSyntax(){
//   console.log("hello class 2");
// }
//
// greetDeclarationSyntax();
//
// var greetWithParameters = function(str) {
//   console.log("hello " + str);
// };
//
// greetWithParameters("everyone");
//
// /*why use functions?
// -speed
// -do not repeat yoursefl (DRY)
// -avoid writing the same code over and over
//
// */
//
// function classGreeting (studentName){
//   console.log("Hi, " + studentName);
// }
//
// classGreeting("Kyle");
//
// function classGreeting2 (student1, student2){
//   console.log("Hi, " + student1);
//   console.log("Hello " + student2);
// }
//
// classGreeting2("Kyle", "Bob");
//
// /*return with function, not console.log
// --once return is reached, it basically breaks the function
// nothing after return will be actionable
// */
//

//
//
// var result = classGreetingReturn("Steve");
// console.log(result);
//
//
//
//
//
