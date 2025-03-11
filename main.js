/*
03/11/25
practice-character-checker-jennifer-o
Assignment: Practice: Stringing Characters Together - 1: Character Checker

Instructions: 
Create a small program that prompts the user for a word or phrase and then allows
them to query specific positions within that string.

1. Use readlineSync.question() to prompt a user for input
2. Prompt a user for an index number to find the character at that index
3. Use bracket notation to access the character
4. Print out the character
*/

const readlineSync = require('readline-sync');

let userPhrase = readlineSync.question("Enter a word or phrase to check the index of: ") // prompt user for a word or phrase
console.log("Your word/phrase is: " + userPhrase) // repeat it to them to clarify
let numIndex = readlineSync.question("Enter a number to check the character index: "); // prompt user for index number to check within their word/phrase
console.log("The character at index " + numIndex + " is " + userPhrase[numIndex] + ". "); // print out character of chosen index number
