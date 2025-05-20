// ---------------- Program 1 ----------------
// let number = Number(prompt("Enter Your Number"))
// console.log( 'Output : ' , number);


// ---------------- Program 2 ----------------

// let number = Number(prompt("Enter Your Number"))
// if(number % 3 == 0 && number % 4 == 0){
//     console.log('Output Yes');
// }else{
//     console.log('Output No');
// }


// ---------------- Program 3 ----------------

// let number1 = Number(prompt("Enter Your First Number"))
// let number2 = Number(prompt("Enter Your Second Number"))

// if(number1 > number2){
//     console.log('Output :' , number1);
// }else{
//     console.log('Output :' , number2);
// }


// ---------------- Program 4 ----------------

// let number = Number(prompt("Enter Your Number"))

// if(number < 0){
//     console.log('Output Negative');
// }else{
//     console.log('Output Positive');
// }

// ---------------- Program 5 ----------------

// let number1 = Number(prompt("Enter Your First Number"))
// let number2 = Number(prompt("Enter Your Second Number"))
// let number3 = Number(prompt("Enter Your Third Number"))

// let numbers = [number1, number2, number3];

// let max = numbers[0];
// let min = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > max) {
//         max = numbers[i];
//     }
//     if (numbers[i] < min) {
//         min = numbers[i];
//     }
// }
// console.log('Max element = ' , max);
// console.log('Min element = ' , min);



// ---------------- Program 6 ----------------

// let number = Number(prompt("Enter Your Number"))
// if(number % 2 == 0){
//     console.log('Even Number');
// }else if(number % 2 == 1){
//     console.log('Odd Number');
// }else{
//     console.log('Invalid Number');
// }



// ---------------- Program 7 ----------------

// let character = prompt("Enter Your Character")
// if(character == 'a' || character == 'e' || character == 'i' || character == 'o' || character == 'u'){
//     console.log('Vowel');
// }else{
//     console.log('Constant');
// }



// ---------------- Program 8 ----------------

// let number = Number(prompt("Enter Your Number"))

// for(let i = 0 ; i <=number ; i++){
//     console.log(i);
// }


// ---------------- Program 9 ----------------

// let number = Number(prompt("Enter Your Number"))

// for(let i = 1 ; i <=12 ; i++){
//     console.log(i * number);
// }


// ---------------- Program 10 ----------------

// let number = Number(prompt("Enter Your Number"))

// for(let i = 1 ; i <=number ; i++){
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }


// ---------------- Program 11 ----------------

// let number1 = Number(prompt("Enter Your First Number"))
// let number2 = Number(prompt("Enter Your Second Number"))
// let total = 1;
// // first solution
// // console.log(number1 ** number2);

// // second solution
// // for(let i = 1 ; i <=number2 ; i++){
// //     total *= number1
// // }
// // console.log(total);



// ---------------- Program 12 ----------------

// let number1 = Number(prompt("Enter Your Number1"))
// let number2 = Number(prompt("Enter Your Number2"))
// let number3 = Number(prompt("Enter Your Number3"))
// let number4 = Number(prompt("Enter Your Number4"))
// let number5 = Number(prompt("Enter Your Number5"))

// let numbers = [number1, number2, number3, number4, number5];
// let total = 0;
// let average = 0;
// let score = 500;

// for (let i = 0; i < numbers.length; i++) {
//    total +=numbers[i];
// }
// average = total / numbers.length ;

// let percentage = (total / score) * 100 ;

// console.log('Total Marks = ', total);
// console.log('Average Marks = ', average);
// console.log('Percentage = ', percentage);


// ---------------- Program 13 ----------------

// let month = Number(prompt('Enter month number'))

// if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
//     console.log('Days in Month : 31');
// }else if(month == 2){
//     console.log('Days in Month : 28');
// }
// else{
//     console.log('Days in Month : 30');
// }

// ---------------- Program 14 ----------------

// let grade1 = Number(prompt("Enter Your Physics Grade"))
// let grade2 = Number(prompt("Enter Your Chemistry Grade"))
// let grade3 = Number(prompt("Enter Your Biology Grade"))
// let grade4 = Number(prompt("Enter Your Mathematics Grade"))
// let grade5 = Number(prompt("Enter Your Computer Grade"))

// let grades = [grade1, grade2, grade3, grade4, grade5];
// let totalGrades = 0
// let score = 500;
// for (let i = 0; i < grades.length; i++) {
//     totalGrades += grades[i];
// }
// let percentage = (totalGrades / score) * 100;

// if (percentage >= 90) {
//     console.log('Grade A and Your Grade is :', percentage + '%');
// } else if (percentage >= 80) {
//     console.log('Grade B and Your Grade is :', percentage + '%');
// }else if (percentage >= 70) {
//     console.log('Grade C and Your Grade is :', percentage + '%');
// }else if (percentage >= 60) {
//     console.log('Grade D and Your Grade is :', percentage + '%');
// }else if (percentage >= 40) {
//     console.log('Grade E and Your Grade is :', percentage + '%');
// }else{
//     console.log('Grade F and Your Grade is :', percentage + '%');
// }



// ---------------- Program 15 ----------------

// let month = Number(prompt('Enter month number'))

// switch (month) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log('Days in Month : 31');
//         break;
//     case 2:
//         console.log('Days in Month : 28');
//         break;
//     default:
//         console.log('Days in Month : 30');
//         break;
// }


// ---------------- Program 16 ----------------

// let character = prompt('Enter month number')

// switch (character) {
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//         console.log('This Character is : Vowel');
//         break;
//     default:
//         console.log('This Character is : Consonant ');
//         break;
// }

// ---------------- Program 17 ----------------

// let number1 = Number(prompt("Enter Your First Number"))
// let number2 = Number(prompt("Enter Your Second Number"))

// switch (true) {
//     case number1 > number2:
//         console.log('Number 1 is greater than Number 2');
//         break;
//     case number2 > number1:
//         console.log('Number 2 is greater than Number 1');
//         break;
//     default:
//         console.log('Invalid Number');
//         break;
// }

// ---------------- Program 18 ----------------

// let number = Number(prompt("Enter Your Number"))

// switch (true) {
//     case number % 2 == 0:
//         console.log('Even Number');
//         break;
//     default:
//         console.log('Odd Number');
//         break;
// }

// ---------------- Program 19 ----------------

// let number = Number(prompt("Enter Your Number"))

// switch (true) {
//     case number > 0:
//         console.log('This Number is Positive');
//         break;
//     case number < 0:
//         console.log('This Number is Negative');
//         break;
//     case number == 0:
//         console.log('This Number is Zero');
//         break;
//     default:
//         console.log('Invalid Number');
//         break;
// }

// ---------------- Program 20 ----------------

// let number1 = Number(prompt("Enter Your First Number"))
// let operator = prompt('Enter the Operator + or - or / or * or % ')
// let number2 = Number(prompt("Enter Your Second Number"))

// switch (operator) {
//     case '+':
//         console.log('The Sum is :', number1 + number2);
//         break;
//     case '-':
//         console.log('The Sub is :', number1 - number2);
//         break;
//     case '*':
//         console.log('The Multiplication is :', number1 * number2);
//         break;
//     case '/':
//         console.log('The Division is :', number1 / number2);
//         break;
//     case '%':
//         console.log('The Mod is :', number1 % number2);
//         break;
//     default:
//         console.log('Invalid Operator');
//         break;
// }