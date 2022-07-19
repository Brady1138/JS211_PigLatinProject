'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const pigLatin = (word) => {

  // Your code here
  const pigLatin = (input) => {

    input = "Thunder";
    const cleanedUp = input.trim().toLowerCase();
    let firstLetter = cleanedUp.slice(0,1);
    let firstTwoLetters = cleanedUp.slice(0,2);
    
    
    if (firstLetter === 'a' || firstLetter === 'e' || firstLetter === 'i' || firstLetter === 'o'|| firstLetter === 'u') {
      return cleanedUp + "ay";
    }  
     else if (firstTwoLetters === "th" || firstTwoLetters === "sh" || firstTwoLetters ==="ph" || firstTwoLetters === "ch" || firstTwoLetters === "wh") {
      return cleanedUp.slice(2)+cleanedUp.slice(0,2)+"ay"; 
    } 
      
    else {
      return cleanedUp.slice(1) + cleanedUp.slice(0,1)+"ay";
    }
    }
    console.log(pigLatin(""))

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

const textInput = document.getElementById('user-input');
const button = document.getElementById('button');
const reset = document.getElementById('reset');
const textOutput = document.getElementById('textOutput');

textInput.addEventListener('keyup', (event) => {
  console.log(event.target.value)
});

button.addEventListener('click', (event) => {
  let pigWord = convertToPigLatin(input)
  textOutput.innerText = PigWord
});

button.addEventListener('click', (event) => {
  let words = input.split('  ')
  let pigWord = words.map(word => convertToPigLatin(word)).join('  *oink*'   );
  textOutput.innerText = pigWord
})

reset.addEventListener('click', (e) => {
  textInput.value = '';
  textOutput.innerText = '';
  console.log('click');
})

// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
