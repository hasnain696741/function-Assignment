// Ans:1 of Qno:1

// function date(val){
//     document.write(val)
// }
// date(new Date())

// Ans:2 of Qno:2

// function greets(){
//    var firstName = prompt('Enter your first name')
//    var lastName = prompt('Enter your last name')
//    document.write('Assalam oo Alikumm '+firstName+' '+lastName)
// }
// greets()

// Ans:3 of Qno:3

// function addition(){
//     var firstNum = +prompt('Enter Number')
//     var lastNum = +prompt('Enter another Number')
//     var funct = firstNum + lastNum;
//     document.write(`The Sum of ${firstNum} and ${lastNum} is ${funct}`)
// }
// addition()

// Ans:4 of Qno:4

// function calculator(num1,num2,operator){
//    var result = 0;
//     if(operator === '+'){
//    result = num1+num2
//     }
//     else if(operator === '-'){
//         result = num1-num2
//             }
//             else if(operator === '*'){
//                 result =  num1*num2
//                     }
//                     else if(operator === '/'){
//                         result =   num1/num2
//                             }
//                             else if(operator === '%'){
//                                 result =   num1%num2
//                                     }
//                                     else{
//                                         document.write('Enter correct operator ')
//                                     };
//                                    return result;
// }

// num1 = +prompt('Enter first Number')
// num2 = +prompt('Enter last Number')
// operator = prompt('Enter operator')
// var result = calculator(num1,num2,operator)
// document.write(result)

// Ans:5 of Qno:5

// function operation(num,squareNum){
//         document.write(`The square of ${num} is ${squareNum} `)

// }
// num = +prompt('Enter a number')
// squareNum = num*num
// operation(num,squareNum)

// Ans:6 of Qno:6

// function factorial(n) {
//     if (n === 0) {
//       return 1;
//     } else {
//       return n * factorial(n - 1);
//     }
// }
// n = +prompt('Enter a Number')
// document.write(`The Factorial of ${n} is ${factorial(n)}`)

// Ans:7 of Qno:7

// function counting(){
//     var startNum = +prompt('Which Number Start Counting');
//     var endNum = +prompt('Which Number End Counting');
// for(var i = startNum; i<= endNum; i++ ){
// document.write(`${i} <br>`)
// }

// }
// counting();
                // Another way of ans 7

// function counting(startNum,endNum){
//     for(var i = startNum; i<= endNum; i++ ){
//         document.write(` ${i} <br> `)
//     }
    
// }
//  startNum = +prompt('Which Number Start Counting');
//  endNum = +prompt('Which Number End Counting');
// counting(startNum,endNum);

// Ans:8 of Qno:8
     
// function hypotenuse(baseVal,perpenVal){                                  
//     function hypoSquare(side){
//         return side **2;
//     }
//     var baseSquare = hypoSquare(baseVal); 
//     var perpendicularSquare = hypoSquare(perpenVal); 
//     var sumToSides = baseSquare + perpendicularSquare;
//     var squareRoot =  Math.sqrt(sumToSides);
//     document.write(squareRoot);
// }
// var baseVal = +prompt('Enter Value of Base') ;
// var perpenVal = +prompt('Enter Value of Perpendicular') ;
// hypotenuse(baseVal, perpenVal);

// Ans:9 of Qno:9

// function rectangle(width,height){
//     document.write(`The Area of Rectangle is ${width*height}`)
   
// }
// rectangle(10,20);

// Ans:10 of Qno:10

// function check_Palindrome(check){
//    var splt = check.split('').reverse();
//    var join = splt.join('');
// if(check === join){
//     document.write(`${check} is a Palindrome`)
// }
// else{
//     document.write(`${check} is not a Palindrome`)
// }
// }
// check_Palindrome(prompt("Check Palindrome"))

// Ans:11 of Qno:11

// function upperCase(string){
//     return string
//     .split(" ")
// .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
// .join(" ")
// }
// //    document.write(str)
// // return str.join(" ")
// document.write(upperCase("the quick brown fox"));

                // ANOTHER WAY OF Q:NO:11

// function upperCase(val){
//    var splt =  val.split(" ")
// for(var i = 0; i < splt.length; i++){
// splt[i] = splt[i].charAt(0).toUpperCase() +  splt[i].substring(1)
// splt.join(" ")
// document.write(splt[i]+" " )
//  }

// };
// upperCase(prompt('Enter some text'));

// Ans:12 of Qno:12

// function longestWord(val){

//     var arr = val.split(" ")
//     var lonestWord = 0;
//     var word = 0;
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i].length > lonestWord){
//             lonestWord = arr[i].length
//             word = arr[i].charAt(0).toUpperCase() + arr[i].substring(1)
//         }
//     }
//   document.write(word)

// }
// longestWord(prompt("Enter some text"))
// document.write(longestWord("some time is truemeans"))

// Another way of Q:no:12

// function longestWord(string) {
//     var str = string.split(" ");
//     var longest = 0;
//     var word = null;
//     for (var i = 0; i < str.length ; i++) {
//         if (longest < str[i].length) {
//             longest = str[i].length;
//             word = str[i];
//         }
//     }
//     document.write(word)
//     // return word;
// }
// longestWord(prompt("Enter some"))
// // document.write(longestWord())

// ans:13 of Q:no:13

// function countLetter() {
//   var message = prompt('Enter a message:');
//   var letterCounts = {};

//   // count the occurrence of each letter
//   for (var i = 0; i < message.length; i++) {
//     var letter = message[i].toLowerCase();
//     if (letter in letterCounts) {
//       letterCounts[letter]++;
//     } else {
//       letterCounts[letter] = 1;
//     }
//   }

//   // find the most frequently occurring letter
//   var maxCount = 0;
//   var maxLetter = '';
//   for (var letter in letterCounts) {
//     if (letterCounts[letter] > maxCount) {
//       maxCount = letterCounts[letter];
//       maxLetter = letter;
//     }
//   }

//   // output the results
//   var output = 'Letter count:\n\n';
//   for (var letter in letterCounts) {
//     output += `${letter}: ${letterCounts[letter]}\n`;
//   }
//   output += `\nMost frequent letter: ${maxLetter} (${maxCount} occurrences)`;

//   // display the results in the document
//   var resultsElement = document.createElement('pre');
//   resultsElement.textContent = output;
//   document.body.appendChild(resultsElement);
// }
// countLetter()


// Ans:14 of Qno:14


// function calCirumference(val){
// var calc = 2*3.142*val;
// if(val == ""){
//     alert("Sorry")
// }
// else{
// document.write(`The circumference of circle is ${calc}  <br>`)
// }
// }
// calCirumference(+prompt("Enter radius of circle"))
// function calcArea(val2){
//     var areacal = val2*val2;
//     var pi = areacal*3.142;
// if(val2 == ""){
//     alert("Sorry")
// }

// else{

//     document.write(`The area of circle is ${pi}`)
// }
// }
// calcArea(+prompt("Enter area of circle"))



// for(var i = 1; i<=10; i++){
//     document.write(`2 * ${i} = ${2*i} <br>`) 
    
// }









