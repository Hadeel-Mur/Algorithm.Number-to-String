// 8. Number to String

// Write a program that takes an array of numbers and turns the negative values to strings. For example, for array X = [1,-4,0,-1] the output should be [1,'Turing,0,'Turing'].

// // Pseudocode
// 1- will define an array of numbers 
// 2- will use loop for looping through the array and declare an if statment when it is
// a negative number turn it to a string,and display them in the same array
 

// coding


let x = [-5, 2, 5, -9, 1, -6, 3];


for (let i=0; i< x.length; i++) {
 if (x[i] < 0){
   x[i] = 'I am a string';
 }
};
console.log(x);
// Diagram
// 1- when x[i] < 0 => x[i] = 'I am a string'
// 2- when x[i] > 0 => x[i] = any number from the array as long as it is a positive number
